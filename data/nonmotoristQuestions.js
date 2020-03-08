export const nonmotoristQuestions = {
    "data": [
        {
            id:"C1",
            question: "Crash Classification",
            helperText: "",
            subquestions: [
                {
                    id:"C1-S1",
                    question:"Ownership",
                    helperText:"",
                    subquestions: null,
                    answerType:"dropdown",
                    answerOptions:[
                        {
                            idCode:"01",
                            text:"Public Property"
                        },
                        {
                            idCode:"02",
                            text:"Private Property"
                        }
                    ],
                    reducer: "genericReducer"
                },
                {
                    id:"C1-S2",
                    question:"Characteristics",
                    helperText:"",
                    subquestions: null,
                    answerType:"dropdown",
                    answerOptions:[
                        {
                            idCode:"01",
                            text:"Trafficway, On Road"
                        },
                        {
                            idCode:"02",
                            text:"Trafficway, Not on Road"
                        },
                        {
                            idCode:"03",
                            text:"Non-Trafficway"
                        }
                    ],
                    reducer: "genericReducer"
                },
                {
                    id:"C1-S3",
                    question:"Secondary Crash",
                    helperText:"",
                    subquestions: null,
                    answerType:"dropdown",
                    answerOptions:[
                        {
                            idCode:"01",
                            text:"No"
                        },
                        {
                            idCode:"02",
                            text:"Yes"
                        }
                    ],
                    reducer: "genericReducer"
                }
            ],
            answerType: null,
            answerOptions:null
        },
    ]
}