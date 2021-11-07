import pandas as pd
import json

# sheets = ['construction', 'driver', 'fatalityDriver', 'fatalityNonmotorist',
#             'info', 'injured', 'lvhm', 'lvhmDriver', 'nonmotorist', 'passenger',
#             'road', 'setup', 'vehicle', 'answerOptions']

sheets = ['driver', 'nonmotorist', 'passenger',
            'road', 'vehicle', 'setup', 'answerOptions']

def get_inverse_dependencies(uid, option, df_answer):
    df_sub_answer = df_answer[df_answer['question_uid']==uid]
    dependencies = []
    for index, row in df_sub_answer.iterrows():
        if str(row['option_number']) != option:
            dependencies.append({'dependencyUid':uid, 'dependencyOptionCode':str(row['option_number'])})
    return dependencies

def generate_questions_json(filename):
    # create empty questions json file
    questions_json = {'data':[]}
    # make sure there are not duplicate question_uuids
    question_uids = []
    # read relevant sheets from excel file
    dfs = pd.read_excel(filename, sheet_name=sheets)
    # extract the answerOptions sheet
    df_answer = dfs[sheets[-1]]
    # iterate through the question sheets
    for section in sheets[:-1]:
        df_question = dfs[section]
        # go through each question in the question sheets
        for index, row in df_question.iterrows():
            if pd.isna(row['id']):
                continue
            if row['question_uid'] in question_uids:
                print('Duplicate uid at', row['display_section'], row['question_uid'])
            else:
                question_uids.append(row['question_uid'])
            question_dict = {'numOptionsAllowed':str(row['num_selected_option']),
                                 'question':row['question_text'], 'id':row['question_uid'],
                                 'answerType':row['question_type'], 'display':[row['display_section']],
                                 'humanReadableId':row['id']}
            # add helper text, dependency, and auto method values if applicable
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
                        opposite_ds = get_inverse_dependencies(uid, option[1:], df_answer)
                        questionDependency.extend(opposite_ds)
                    else:
                        questionDependency.append({'dependencyUid':uid, 'dependencyOptionCode':str(option)})
                question_dict['questionDependency'] = questionDependency
            # match question with relevant section in df_answer
            question_id = row['question_uid']
            df_sub_answer = df_answer[df_answer['question_uid']==question_id]
            if len(df_sub_answer) > 0:
                # generate list of dicts from answer options
                answer_options = []
                for index2, row2 in df_sub_answer.iterrows():
                    answer_option_dict = {'name':row2['option_text'], 'id':str(row2['option_number'])}
                    answer_options.append(answer_option_dict)
                question_dict['answerOptions'] = answer_options
            questions_json['data'].append(question_dict)
    return questions_json

if __name__ == '__main__':
    filename = '~/Downloads/20211103_questions_and_answers.xlsx'
    new_filename = '20211103_questions.js'

    json_data = generate_questions_json(filename)

    # save json as file
    with open(new_filename, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=4)
    # TODO: don't forget to add 'export const questions = ' to the beginning
    # of questions.js
