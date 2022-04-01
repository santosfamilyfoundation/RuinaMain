import RNFS from 'react-native-fs';
import HtmlTableToJson from 'html-table-to-json';
import uuid from 'uuid-random';

const fetchData = async () => {
    /*
        This function fetches the file that holds the downloaded Google sheet and transforms the
        data from an HTML table to JSON. Returns the JSON version of data.
    */
    const data = await RNFS.readFile(RNFS.DocumentDirectoryPath + '/questions');
    const sheets = HtmlTableToJson.parse(data);
    sheets['_results'].shift();
    return sheets['_results']
}

const processAnswerSheet = (sheet) => {
    /*
        This function takes the raw data of an answer sheet and formats it into a usable object.
        Returns an array of answer objects.
    */
    let answerSheet = []
    sheet.forEach(row => {
        columnValues = Object.values(row)
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

const processQuestionSheet = (sheet) => {
    /*
        This function takes the raw data of a question sheet and formats it into a usable object.
        Returns an array of question objects and name of the sheet.
    */
    let questionSheet = []
    let sheetName;

    for (const [index, val] of sheet.entries()) {
        columnValues = Object.values(val)
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
    if (questionSheet[0]['question_name'].includes('driver')) {sheetName = 'driver'}
    else if (questionSheet[0]['question_name'].includes('vehicle')) {sheetName = 'vehicle'}
    else if (questionSheet[0]['question_name'].includes('nonmotorist')) {sheetName = 'nonmotorist'}
    else if (questionSheet[0]['question_name'].includes('passenger')) {sheetName = 'passenger'}
    else if (questionSheet[0]['question_name'].includes('setup')) {sheetName = 'setup'}
    else if (questionSheet[0]['question_name'].includes('road')) {sheetName = 'road'}

    return [questionSheet, sheetName]
}

const getInverseDependencies = (name, option, answers) => {
    /*
        This function gets all the dependencies for a question when specific dependencies are
        excluded. The function returns all the valid dependencies.
    */
    const subAnswers = answers.filter(answer => answer['question_name'] === name)
    let dependencies = []
    subAnswers.forEach(subAnswer => {
        if (subAnswer['option_number'] !== option) {
            const optionCode = subAnswer['option_number'] + ".0"
            dependencies.push({
                'dependencyName': name,
                'dependencyOptionCode': optionCode,
            })
        }
    })
    return dependencies
}

const formatQuestions = (questions, sheetName, currQuestions, questionNameIdMap, answers) => {
    /*
        This function takes the question objects for a sheet and organizes it into the hierarchy
        expected to assign the question to the proper accordion section. The function returns an
        updated questions object and updated map of question IDs.
    */
    let section;
    currQuestions.forEach(currQuestion => {
        const questionUid = uuid();
        questionNameIdMap[currQuestion['question_name']] = questionUid
        if (currQuestion['question_type'] === 'sectionHeader') {
            if (section) {
                if (!questions['data'].includes(section)) {
                    questions['data'].push(section)
                }
            }
            section = {
                'sectionTitle': currQuestion['question_text'],
                'questions': [],
                'display': [sheetName]
            }
        } else {
            let questDict = {
                'numOptionsAllowed': currQuestion['num_selected_option'],
                'question': currQuestion['question_text'],
                'id': questionUid,
                'answerType': currQuestion['question_type'],
                'display': [sheetName],
                'humanReadableId': currQuestion['question_name']
            }
            if (currQuestion['helper_text'].length > 0) {questDict['helperText'] = currQuestion['helper_text']}
            if (currQuestion['tooltip'].length > 0) {questDict['tooltip'] = currQuestion['tooltip']}
            if (currQuestion['helper_img'].length > 0) {questDict['helperImg'] = currQuestion['helper_img']}
            if (currQuestion['automation_method'].length > 0) {questDict['autoMethod'] = currQuestion['automation_method']}
            if (currQuestion['required'].length > 0) {questDict['required'] = currQuestion['required']}
            if (currQuestion['question_dependency'].length > 0) {
                let questDependency = []
                const dependencies = currQuestion['question_dependency'].split(';');
                dependencies.forEach(dep => {
                    const[name, option] = dep.split(',');
                    const intOption = Number(option)
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
                questDict['questionDependency'] = questDependency
            }
            const subAnswers = answers.filter(answer => answer['question_name'] === currQuestion['question_name'])
            if (subAnswers.length > 0) {
                let answerOptions = []
                subAnswers.forEach(row => {
                   const answerOptionsObj = {
                       'name': row['option_text'],
                       'id': row['option_number'],
                   }
                   answerOptions.push(answerOptionsObj)
                })
                questDict['answerOptions'] = answerOptions
            }
            if (section) {
                section.questions.push(questDict)
            } else {
                questions.data.push(questDict);
            }
        }
        if (section) {
            if (!questions.data.includes(section)) {
                questions.data.push(section);
            }
        }
    })
    return [questions, questionNameIdMap]
}

const ProcessedQuestions = async () => {
    /*
        This function handles all the function calls that fetch the data and transform it the
        expected format and structure in order to be parsed by the app. This function returns a
        questions object that contains all the data from the downloaded spreadsheet.
    */
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

    questions.data.forEach(section => {
        const sectionKeys = Object.keys(section);
        if (sectionKeys.includes('sectionTitle')) {
            const sectionQuestions = section['questions'];
            sectionQuestions.forEach(question => {
                const questionKeys = Object.keys(question);
                if (questionKeys.includes('questionDependency')) {
                    const questionDependencies = question['questionDependency']
                    questionDependencies.forEach(dependency => {
                        const dependencyName = dependency['dependencyName']
                        const dependencyUuid = questionNameIdMap[dependencyName]
                        dependency['dependencyUuid'] = dependencyUuid
                    })
                }
            })
        } else {
            if (sectionKeys.includes('questionDependency')) {
                const questionDependencies = section['questionDependency']
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
