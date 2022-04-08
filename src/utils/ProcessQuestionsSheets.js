/*
    This file reads and formats the data saved to the questions folder in the app's document
    directory. The data is saved to the question folder as an HTML table, so the data has to be
    converter to JSON and updated to match the existing object keys that exist in the app. The
    updated object is further parsed and saved into an array that will be used by app to generate
    the sections and questions in the different forms.
*/

import RNFS from 'react-native-fs';
import HtmlTableToJson from 'html-table-to-json';
import uuid from 'uuid-random';

/*
    This function fetches the file that holds the downloaded Google sheet and transforms the
    data from an HTML table to JSON. Returns the JSON version of data.
*/
const fetchData = async () => {
    const data = await RNFS.readFile(RNFS.DocumentDirectoryPath + '/questions');
    const sheets = HtmlTableToJson.parse(data);
    sheets['_results'].shift();
    return sheets['_results']
}

/*
    This function takes the raw data of an answer sheet and formats it into a usable object.
    Returns an array of answer objects.
*/
const processAnswerSheet = (sheet) => {
    let answerSheet = []
    sheet.forEach(row => {
        const  columnValues = Object.values(row)
        currRow = {
            "question_name": columnValues[0],
            "question_text": columnValues[1],
            "mmucc_id": columnValues[2],
            "option_text": columnValues[3],
            "option_number": columnValues[4],
            "mmucc_option_number": columnValues[5],
        }
        answerSheet.push(currRow)
    })
    return answerSheet
}

/*
    This function takes the raw data of a question sheet and formats it into a usable object.
    Returns an array of question objects and name of the sheet.
*/
const processQuestionSheet = (sheet) => {
    let questionSheet = []

    for (const [index, val] of sheet.entries()) {
        const columnValues = Object.values(val)
        // Check if a row is empty, if empty continue looping through entries
        if (columnValues[0] === '') {
            continue
        }
        currRow = {
            "question_name": columnValues[0],
            "question_dependency": columnValues[1],
            "question_text": columnValues[2],
            "required": columnValues[3],
            "helper_img": columnValues[4],
            "tooltip": columnValues[5],
            "helper_text": columnValues[6],
            "question_type": columnValues[7],
            "num_option": columnValues[8],
            "num_selected_option": columnValues[9],
            "automation_method": columnValues[10],
            "mmucc_id": columnValues[11],
        }
        questionSheet.push(currRow)
    }

    // Determine the name of the sheet and save the name
    const questionName = questionSheet[0]['question_name'].split('-')
    const sheetName = questionName[0]

    return [questionSheet, sheetName]
}

/*
    This function gets all the dependencies for a question when specific dependencies are
    excluded. The function returns all the valid dependencies.
*/
const getInverseDependencies = (name, option, answers) => {
    // Find all the answers that have the dependency's name
    const subAnswers = answers.filter(answer => answer['question_name'] === name)
    let dependencies = []
    subAnswers.forEach(subAnswer => {
        // Check that the answer does not equal the invalid option
        if (subAnswer['option_number'] !== option) {
            // Make the optionCode a string of a float
            const optionCode = subAnswer['option_number'] + ".0"
            // Add dependency object to array of dependencies
            dependencies.push({
                'dependencyName': name,
                'dependencyOptionCode': optionCode,
            })
        }
    })
    return dependencies
}

/*
    This function takes the question objects for a sheet and organizes it into the hierarchy
    expected to assign the question to the proper accordion section. The function returns an
    updated questions object and updated map of question IDs.
    Param Descriptions:
    * questions(obj) - an object that maps data to all the formatted questions
    * sheetName(str) - the name of the current sheet
    * sheetQuestions(arr) - an array of all the question objects for the current sheet
    * questionNameIdMap(obj) - an object that maps a question's name to its uuid
    * answers(arr) - an array of all the form answer options
*/
const formatQuestions = (questions, sheetName, sheetQuestions, questionNameIdMap, answers) => {
    let section;
    sheetQuestions.forEach(currQuestion => {
        // Generating a unique id for each question
        const questionUid = uuid();
        questionNameIdMap[currQuestion['question_name']] = questionUid

        // Check if the next question is a new section
        if (currQuestion['question_type'] === 'sectionHeader') {
            // If a section already exists add it to the questions object
            if (section) {
                if (!questions['data'].includes(section)) {
                    questions['data'].push(section)
                }
            }
            // Create new section object
            section = {
                'sectionTitle': currQuestion['question_text'],
                'questions': [],
                'display': [sheetName]
            }
        } else {
            // Create new object for current question
            let questionObj = {
                'numOptionsAllowed': currQuestion['num_selected_option'],
                'question': currQuestion['question_text'],
                'id': questionUid,
                'answerType': currQuestion['question_type'],
                'display': [sheetName],
                'humanReadableId': currQuestion['question_name']
            }
            if (currQuestion['helper_text'].length > 0) {questionObj['helperText'] = currQuestion['helper_text']}
            if (currQuestion['tooltip'].length > 0) {questionObj['tooltip'] = currQuestion['tooltip']}
            if (currQuestion['helper_img'].length > 0) {questionObj['helperImg'] = currQuestion['helper_img']}
            if (currQuestion['automation_method'].length > 0) {questionObj['autoMethod'] = currQuestion['automation_method']}
            if (currQuestion['required'].length > 0) {questionObj['required'] = currQuestion['required']}1
            if (currQuestion['question_dependency'].length > 0) {
                let questDependency = []
                // Create list of the questions dependencies
                const dependencies = currQuestion['question_dependency'].split(';');
                // Loop through each of the dependencies
                dependencies.forEach(dep => {
                    const[name, option] = dep.split(',');
                    const intOption = Number(option)
                    // Check if the option is a reverse dependency, meaning all but the current
                    // dependency is a dependency
                    if (option.includes('!')) {
                        const oppositeDeps = getInverseDependencies(name, option.substring(1), answers)
                        questDependency.push(...oppositeDeps)
                    } else {
                        if (intOption >= 0) {
                            questDependency.push({
                                'dependencyName': name,
                                'dependencyOptionCode': intOption.toFixed(1).toString(),
                            })
                        } else {
                           questDependency.push({
                               'dependencyName': name,
                               'dependencyOptionCode': '',
                           })
                        }
                    }
                })
                questionObj['questionDependency'] = questDependency
            }
            // Find all the answers that belong to the current question
            const subAnswers = answers.filter(answer => answer['question_name'] === currQuestion['question_name'])
            // Check if the question has answer options
            if (subAnswers.length > 0) {
                let answerOptions = []
                subAnswers.forEach(row => {
                   // Create answer object
                   const answerOptionsObj = {
                       'name': row['option_text'],
                       'id': row['option_number'],
                   }
                   answerOptions.push(answerOptionsObj)
                })
                questionObj['answerOptions'] = answerOptions
            }
            // Check if the question object belongs to a section
            if (section) {
                section.questions.push(questionObj)
            } else {
                questions.data.push(questionObj);
            }
        }
        // Check if a section exitsts
        if (section) {
            // Check if the section is in the data array
            if (!questions.data.includes(section)) {
                questions.data.push(section);
            }
        }
    })
    return [questions, questionNameIdMap]
}

/*
    This function handles all the function calls that fetch the data and transform it the
    expected format and structure in order to be parsed by the app. This function returns a
    questions object that contains all the data from the downloaded spreadsheet.
*/
const ProcessedQuestions = async () => {
    let sheets = {};
    let answers = []
    let questions = {'data': []}
    let questionNameIdMap = {}

    // Get the data from the downloaded spreadsheet
    const data = await fetchData();

    // Loop through the data and format it based on it being an answer sheet or a question sheet
    data.forEach(row => {
        row.shift()
        if (Object.keys(row[0]).includes('1020') || Object.keys(row[0]).includes('1050')) {
            row.shift();
            const [sheetData, sheetName] = processQuestionSheet(row);
            if (Object.keys(sheets).includes('road') && sheetData.length === 3) {
                sheets = {...sheets, 'setup':sheetData}
            } else {
                sheets = {...sheets, [sheetName]:sheetData}
            }
        } else {
            currAnswers = processAnswerSheet(row);
            const updatedAnswers = answers.concat(currAnswers)
            answers = updatedAnswers
        }
    });

    // Loop through all the processed question sheets and add them to the questions object
    for (const [name, data] of Object.entries(sheets)) {
        const [questionData, currQuestionNameIdMap] = formatQuestions(questions, name, data, questionNameIdMap, answers);
        questions = questionData
        questionNameIdMap = currQuestionNameIdMap
    };

    // Loop through each of the questions
    questions.data.forEach(section => {
        const sectionKeys = Object.keys(section);
        // Check if current object is a section
        if (sectionKeys.includes('sectionTitle')) {
            const sectionQuestions = section['questions'];
            sectionQuestions.forEach(question => {
                const questionKeys = Object.keys(question);
                // Check if the question has dependencies
                if (questionKeys.includes('questionDependency')) {
                    const questionDependencies = question['questionDependency']
                    // For each dependency add the unique id that the dependency is referencing
                    questionDependencies.forEach(dependency => {
                        const dependencyName = dependency['dependencyName']
                        const dependencyUuid = questionNameIdMap[dependencyName]
                        dependency['dependencyUuid'] = dependencyUuid
                    })
                }
            })
        } else {
            // Check if the question has dependencies
            if (sectionKeys.includes('questionDependency')) {
                const questionDependencies = section['questionDependency']
                // For each dependency add the unique id that the dependency is referencing
                questionDependencies.forEach(dependency => {
                    const dependencyName = dependency['dependencyName']
                    const dependencyUuid = questionNameIdMap[dependencyName]
                    dependency['dependencyUuid'] = dependencyUuid
                })
            }
        }
    })
    return questions
}

export default(ProcessedQuestions)
