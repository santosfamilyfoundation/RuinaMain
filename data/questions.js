export const questions = {
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
                    ]
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
                    ]
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
                    ]
                }
            ],
            answerType: null,
            answerOptions:null
        },
        {
            id:"C5",
            question:"Crash City/Place",
            helperText:"Political Jurisdiction",
            subquestions: null,
            answerType:"openTextbox",
            answerOptions: null
        },
        {
            id:"C15",
            question:"Relation to Junction",
            helperText:"",
            subquestions: [
                {
                    id:"C15-S1",
                    question:"Within Interchange Area?",
                    helperText:"",
                    subquestions:null,
                    answerType:"yes-no-unknown",
                    answerOptions:[
                        {
                            idCode:"01",
                            text:"No"
                        },
                        {
                            idCode:"02",
                            text:"Yes"
                        },
                        {
                            idCode:"99",
                            text:"Unknown"
                        }
                    ]
                }
            ],
            answerType: null,
            answerOptions:null
        },
        {
            id:"P11",
            question:"Driver License Jurisdiction",
            helperText:"",
            subquestions:[
                {
                    id:"P11-S1",
                    question:"Type",
                    helperText:"",
                    subquestions:null,
                    answerType:"dropdown",
                    answerOptions:[
                        {
                            idCode:"00",
                            text:"Not Licensed"
                        },
                        {
                            idCode:"01",
                            text:"Canada"
                        },
                        {
                            idCode:"02",
                            text:"Indian Nation"
                        },
                        {
                            idCode:"03",
                            text:"International License (other than Mexico or Canada)"
                        },
                        {
                            idCode:"04",
                            text:"Mexico"
                        },
                        {
                            idCode:"05",
                            text:"State"
                        },
                        {
                            idCode:"06",
                            text:"U.S. Government"
                        },
                        {
                            idCode:"97",
                            text:"Not Applicable"
                        },
                        {
                            idCode:"99",
                            text:"Unknown"
                        },
                    ]
                },
                {
                    id:"P11-S2",
                    question:"Name of Jurisdiction (ANSI Code)",
                    helperText:"Provide the specific State, Province, or Nation indicated on the Driver's License.",
                    subquestions:null,
                    answerType:"autoCompleteDropdown",
                    answerOptions:[
                        {
                            idCode:"1234",
                            title:"1234 Needham, MA"
                        },
                        {
                            idCode:"5678",
                            title:"5678, Portland OR"
                        }
                    ],
                }
            ]
        },
        {
            id:"P19",
            question:"Condition at Time of the Crash",
            helperText:"Choose up to 2",
            subquestions:null,
            answerType:"dropdownMultiSelect",
            numOptionsAllowed: 2,
            answerOptions:[
                {
                    idCode:"00",
                    text:"Apparently Normal"
                },
                {
                    idCode:"01",
                    text:"Asleep or Fatigued"
                },
                {
                    idCode:"02",
                    text:"Emotional (depressed, angry, disturbed, etc.)"
                },
                {
                    idCode:"03",
                    text:"Ill (sick), Fainted"
                },
                {
                    idCode:"04",
                    text:"Physically Impaired"
                },
                {
                    idCode:"05",
                    text:"Under the Influence of Medications/Drugs/Alcohol"
                },
                {
                    idCode:"97",
                    text:"Not Applicable"
                },
                {
                    idCode:"98",
                    text:"Other"
                },
                {
                    idCode:"99",
                    text:"Unknown"
                },
            ]
        },
    ]
}