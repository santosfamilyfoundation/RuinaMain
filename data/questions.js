export const questions = {
    "data": [
        {
            "id":"C1",
            "question": "Crash Classification",
            "helperText": "",
            "subquestions": [
                {
                    "id":"S1",
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
                    "id":"S2",
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
                    "id":"S3",
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
        }
    ]
}