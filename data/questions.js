export const questions = {
    "data": [
        {
            "id":"C1",
            "question": "Crash Classification",
            "helperText": "",
            "subquestions": [
                {
                    "id":"C1-S1",
                    "question":"Ownership",
                    "helperText":"",
                    "subquestions": null,
                    "answerType":"dropdown",
                    "answerOptions":[
                        {
                            "idCode":"01",
                            "text":"Public Property"
                        },
                        {
                            "idCode":"02",
                            "text":"Private Property"
                        }
                    ]
                },
                {
                    "id":"C1-S2",
                    "question":"Characteristics",
                    "helperText":"",
                    "subquestions": null,
                    "answerType":"dropdown",
                    "answerOptions":[
                        {
                            "idCode":"01",
                            "text":"Trafficway, On Road"
                        },
                        {
                            "idCode":"02",
                            "text":"Trafficway, Not on Road"
                        },
                        {
                            "idCode":"03",
                            "text":"Non-Trafficway"
                        }
                    ]
                },
                {
                    "id":"C1-S3",
                    "question":"Secondary Crash",
                    "helperText":"",
                    "subquestions": null,
                    "answerType":"dropdown",
                    "answerOptions":[
                        {
                            "idCode":"01",
                            "text":"No"
                        },
                        {
                            "idCode":"02",
                            "text":"Yes"
                        }
                    ]
                }
            ],
            "answerType": null,
            "answerOptions":null
        },
        {
            "id":"C5",
            "question":"Crash City/Place",
            "helperText":"Political Jurisdiction",
            "subquestions": null,
            "answerType":"open_textbox",
            "answerOptions": null
        },
        {
            "id":"C15",
            "question":"Relation to Junction",
            "helperText":"",
            "subquestions": [
                {
                    "id":"C15-S1",
                    "question":"Within Interchange Area?",
                    "helperText":"",
                    "subquestions":null,
                    "answerType":"yes-no-unknown",
                    "answerOptions":[
                        {
                            "idCode":"01",
                            "text":"No"
                        },
                        {
                            "idCode":"02",
                            "text":"Yes"
                        },
                        {
                            "idCode":"99",
                            "text":"Unknown"
                        }
                    ]
                }
            ],
            "answerType": null,
            "answerOptions":null
        }
    ]
}