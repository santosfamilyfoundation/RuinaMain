import pandas as pd
import json

# sheets = ['construction', 'driver', 'fatalityDriver', 'fatalityNonmotorist',
#             'info', 'injured', 'lvhm', 'lvhmDriver', 'nonmotorist', 'passenger',
#             'road', 'setup', 'vehicle', 'answerOptions']

question_sheets = ['driver', 'vehicle', 'nonmotorist', 'passenger', 'setup', 'road']
answer_sheets = ['driverAnswers', 'vehicleAnswers', 'nonmotoristAnswers', 'passengerAnswers', 'roadAnswers']

def get_inverse_dependencies(uid, option, df_answer):
    df_sub_answer = df_answer[df_answer['question_uid']==uid]
    dependencies = []
    for index, row in df_sub_answer.iterrows():
        if str(row['option_number']) != option:
            dependencies.append({'dependencyUid':uid, 'dependencyOptionCode':str(row['option_number'])})
    return dependencies

def generate_questions_json(filename):
    questions_json = {'data': []}
    question_uids = []
    sections_df = pd.read_excel(filename, sheet_name=question_sheets)
    answers_df = pd.concat(pd.read_excel(filename, sheet_name=answer_sheets))

    print(answers_df)

    for section in sections_df:
        questions_df = sections_df[section]
        print('in form section', section);

        section_json = {}
        for index, row in questions_df.iterrows():

            if pd.isna(row['id']):
                continue

            if row['question_uid'] in question_uids:
                print('Duplicate uid at', row['display_section'], row['question_uid'])
            else:
                question_uids.append(row['question_uid'])

            question_type = row['question_type']

            if question_type == 'sectionHeader':
                if section_json != {}:
                    if section_json not in questions_json['data']:
                        questions_json['data'].append(section_json)
                        print('added section to data', section_json['sectionTitle'])

                section_json = {'sectionTitle': row['question_text'],
                                'questions': [],
                                'display': row['display_section']}
                print('created new section', section_json['sectionTitle'])

            else:
                question_dict = {'numOptionsAllowed': str(row['num_selected_option']),
                                'question': row['question_text'],
                                'id': row['question_uid'],
                                'answerType': row['question_type'],
                                'display': [row['display_section']],
                                'humanReadableId': row['id']}
                
                if pd.notna(row['helper_text']):
                    question_dict['helperText'] = row['helper_text']
                if pd.notna(row['tooltip']):
                    question_dict['tooltip'] = row['tooltip']
                if pd.notna(row['helper_img']):
                    question_dict['helperImg'] = row['helper_img']
                if pd.notna(row['automation_method']):
                    question_dict['autoMethod'] = row['automation_method']


                if pd.notna(row['question_dependency']):
                    dependencies = row['question_dependency'].split(";")
                    questionDependency = []
                    for d in dependencies:
                        uid, option = d.split(",")
                        # deal with not dependencies
                        if "!" in option:
                            opposite_ds = get_inverse_dependencies(uid, option[1:], answers_df)
                            questionDependency.extend(opposite_ds)
                        else:
                            questionDependency.append({'dependencyUid':uid, 'dependencyOptionCode':str(option)})
                    question_dict['questionDependency'] = questionDependency
                
                question_uid = row['question_uid']
                df_sub_answer = answers_df[answers_df['question_uid'] == question_uid]
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
            
                print('added question', row['question_text'])

    return questions_json
                    

# def generate_questions_json(filename):
#     # create empty questions json file
#     questions_json = {'data':[]}
#     # make sure there are not duplicate question_uuids
#     question_uids = []
#     # read relevant sheets from excel file
#     dfs = pd.read_excel(filename, sheet_name=sheets)
#     # extract the answerOptions sheet
#     df_answer = dfs[sheets[-1]]
#     # iterate through the question sheets
#     for section in sheets[:-1]:
#         df_question = dfs[section]
#         # go through each question in the question sheets
#         for index, row in df_question.iterrows():
#             if pd.isna(row['id']):
#                 continue
#             if row['question_uid'] in question_uids:
#                 print('Duplicate uid at', row['display_section'], row['question_uid'])
#             else:
#                 question_uids.append(row['question_uid'])
#             question_dict = {'numOptionsAllowed':str(row['num_selected_option']),
#                                  'question':row['question_text'], 'id':row['question_uid'],
#                                  'answerType':row['question_type'], 'display':[row['display_section']],
#                                  'humanReadableId':row['id']}
#             # add helper text, dependency, and auto method values if applicable
#             if pd.notna(row['helper_text']):
#                 question_dict['helperText'] = row['helper_text']
#             if pd.notna(row['tooltip']):
#                 question_dict['tooltip'] = row['tooltip']
#             if pd.notna(row['helper_img']):
#                 question_dict['helperImg'] = row['helper_img']
#             if pd.notna(row['automation_method']):
#                 question_dict['autoMethod'] = row['automation_method']
#             if pd.notna(row['question_dependency']):
#                 dependencies = row['question_dependency'].split(";")
#                 questionDependency = []
#                 for d in dependencies:
#                     uid, option = d.split(",")
#                     # deal with not dependencies
#                     if "!" in option:
#                         opposite_ds = get_inverse_dependencies(uid, option[1:], df_answer)
#                         questionDependency.extend(opposite_ds)
#                     else:
#                         questionDependency.append({'dependencyUid':uid, 'dependencyOptionCode':str(option)})
#                 question_dict['questionDependency'] = questionDependency
#             # match question with relevant section in df_answer
#             question_id = row['question_uid']
#             df_sub_answer = df_answer[df_answer['question_uid']==question_id]
#             if len(df_sub_answer) > 0:
#                 # generate list of dicts from answer options
#                 answer_options = []
#                 for index2, row2 in df_sub_answer.iterrows():
#                     answer_option_dict = {'name':row2['option_text'], 'id':str(row2['option_number'])}
#                     answer_options.append(answer_option_dict)
#                 question_dict['answerOptions'] = answer_options
#             questions_json['data'].append(question_dict)
#     return questions_json

if __name__ == '__main__':
    filename = '~/2021_11_10_questions.xlsx'
    new_filename = 'data/questions.js'

    json_data = generate_questions_json(filename)

    # save json as file
    with open(new_filename, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=4)
    # TODO: don't forget to add 'export const questions = ' to the beginning
    # of questions.js
