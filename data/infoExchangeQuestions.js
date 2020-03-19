export const infoExchangeQuestions = {
    "data": [
        {
            id:"P1",
            question:"Name of Person Involved",
            helperText:"",
            subquestions: null,
            answerType:"openTextbox",
            answerOptions: null,
            maxLength: 30,
        },
        {
            id:"P2",
            question:"Date of Birth",
            helperText:"Format: YYYYMMDD",
            subquestions: null,
            answerType:"openTextbox",
            answerOptions: null,
            maxLength: 8,
        },
        {
            id:"P3",
            question:"Sex",
            helperText:"",
            subquestions: null,
            answerType:"multiButton",
            answerOptions:[
                {
                    idCode:"01",
                    text:"Female"
                },
                {
                    idCode:"02",
                    text:"Male"
                },
                {
                    idCode:"99",
                    text:"Unknown"
                }
            ],
        }
    ]
}