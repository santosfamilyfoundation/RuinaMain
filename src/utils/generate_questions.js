import XLSX from 'xlsx';
import * as RNFS from 'react-native-fs';

export const questions = () => {
//    const file = RNFS.DocumentDirectoryPath + '/questions.xlsx'
    const file =  '~/2022_02_21_questions.xlsx'
    const question_sheets = ['driver', 'vehicle', 'nonmotorist', 'passenger', 'setup', 'road']
    const answer_sheets = ['driverAnswers', 'vehicleAnswers', 'nonmotoristAnswers', 'passengerAnswers', 'roadAnswers']
    const questions = []
    const answers = []

    RNFS.readFile(file, 'ascii').then(res => {
        console.log('loaded results', res)
//        const workbook = XLSX.read(res, {type: 'binary'})
//        workbook.SheetNames.forEach((sheetName) => {
//            if (sheetName in question_sheets) {
//                questions.push(processedQuestions(sheetName))
//            } else if (sheetName in answer_sheets) {
//                answers.concat()
//            }
//
//        })
    })
    .catch(err => {
        console.log('Read File Error: ', err.message)
    })

}