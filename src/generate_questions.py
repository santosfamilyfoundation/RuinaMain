import pandas as pd
import json
import uuid

question_sheets = ['driver', 'vehicle', 'nonmotorist', 'passenger', 'setup', 'road']
answer_sheets = ['driverAnswers', 'vehicleAnswers', 'nonmotoristAnswers', 'passengerAnswers', 'roadAnswers']

def get_inverse_dependencies(name, option, df_answer):
    df_sub_answer = df_answer[df_answer['question_name']==name]
    dependencies = []
    for index, row in df_sub_answer.iterrows():
        if str(row['option_number']) != option:
            dependencies.append({
                'dependencyName': name,
                'dependencyOptionCode': str(float(row['option_number']))
                })
    return dependencies

def generate_questions_json(filename):
    questions_json = {'data': []}
    sections_df = pd.read_excel(filename, sheet_name=question_sheets)
    answers_df = pd.concat(pd.read_excel(filename, sheet_name=answer_sheets))

    question_name_id_map = {}

    for section in sections_df:
        questions_df = sections_df[section]
        print('in form section', section)

        section_json = {}
        for index, row in questions_df.iterrows():

            if pd.isna(row['question_name']):
                continue

            question_uid = str(uuid.uuid1())

            question_name_id_map[row['question_name']] = question_uid

            question_type = row['question_type']

            if question_type == 'sectionHeader':
                if section_json != {}:
                    if section_json not in questions_json['data']:
                        questions_json['data'].append(section_json)
                        # print('added section to data', section_json['sectionTitle'])

                section_json = {'sectionTitle': row['question_text'],
                                'questions': [],
                                'display': [row['display_section']]}
                # print('created new section', section_json['sectionTitle'])

            else:
                question_dict = {'numOptionsAllowed': str(row['num_selected_option']),
                                'question': row['question_text'],
                                'id': question_uid,
                                'answerType': row['question_type'],
                                'display': [section],
                                'humanReadableId': row['question_name']
                                }
                # print(question_dict['question'])
                if pd.notna(row['helper_text']):
                    question_dict['helperText'] = row['helper_text']
                if pd.notna(row['tooltip']):
                    question_dict['tooltip'] = row['tooltip']
                if pd.notna(row['helper_img']):
                    question_dict['helperImg'] = row['helper_img']
                if pd.notna(row['automation_method']):
                    question_dict['autoMethod'] = row['automation_method']
                if pd.notna(row['required']):
                    question_dict['required'] = 'true'



                if pd.notna(row['question_dependency']):
                    dependencies = row['question_dependency'].split(";")
                    questionDependency = []
                    for d in dependencies:
                        name, option = d.split(",")
                        # deal with not dependencies
                        if "!" in option:
                            opposite_ds = get_inverse_dependencies(name, option[1:], answers_df)
                            questionDependency.extend(opposite_ds)
                        else:
                            if int(option) >= 0:
                                questionDependency.append({
                                    'dependencyName': name,
                                    'dependencyOptionCode': str(float(option))
                                })
                            else:
                                questionDependency.append({
                                    'dependencyName': name,
                                    'dependencyOptionCode': ''
                                })
                    question_dict['questionDependency'] = questionDependency
                    # print('added dependencies', questionDependency)

                question_name = row['question_name']
                df_sub_answer = answers_df[answers_df['question_name'] == question_name]
                if len(df_sub_answer) > 0:
                    answer_options = []
                    for index2, row2 in df_sub_answer.iterrows():
                        answer_option_dict = {'name':row2['option_text'], 'id':str(row2['option_number'])}
                        answer_options.append(answer_option_dict)
                    question_dict['answerOptions'] = answer_options

                if (section_json != {}):
                    section_json['questions'].append(question_dict)
                else:
                    questions_json['data'].append(question_dict)

                # print('added question', row['question_text'])

            if section_json != {}:
                if section_json not in questions_json['data']:
                    questions_json['data'].append(section_json)
                    print('added section to data', section_json['sectionTitle'])

    questions_data = questions_json['data']
    for section in questions_data:
        section_keys = section.keys()
        if 'sectionTitle' in section_keys:
            section_questions = section['questions']
            for question in section_questions:
                question_keys = question.keys()
                if 'questionDependency' in question_keys:
                    question_dependencies = question['questionDependency']
                    for dependency in question_dependencies:
                        dependency_name = dependency['dependencyName']
                        dependency_uuid = question_name_id_map[dependency_name]
                        dependency['dependencyUuid'] = dependency_uuid
        else:
            if 'questionDependency' in section_keys:
                dependency = section['questionDependency']
                dependency_name = dependency['dependencyName']
                dependency_uuid = question_name_id_map[dependency_name]
                dependency['dependencyUuid'] = dependency_uuid

    questions_json['data'] = questions_data

    return questions_json

if __name__ == '__main__':
    filename = '~/2022_02_15_questions.xlsx'
    new_filename = 'data/questions.js'

    json_data = generate_questions_json(filename)

    # save json as file
    with open(new_filename, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=4)
    # TODO: don't forget to add 'export const questions = ' to the beginning
    # of questions.js
