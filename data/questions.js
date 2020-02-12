export const questions = {
    "data": [
        {
            "id":"1",
            "question": "Crash Classification",
            "helper_text": "",
            "subquestions": [
                {
                    "id":"S1",
                    "question":"Ownership",
                    "helper_text":"",
                    "subquestions": null,
                    "answer_type":"dropdown",
                    "answer_options":[
                        {
                            "id_code":01,
                            "text":"Public Property"
                        },
                        {
                            "id_code":02,
                            "text":"Private Property"
                        }
                    ]
                },
                {
                    "id":"S2",
                    "question":"Characteristics",
                    "helper_text":"",
                    "subquestions": null,
                    "answer_type":"dropdown",
                    "answer_options":[
                        {
                            "id_code":01,
                            "text":"Trafficway, On Road"
                        },
                        {
                            "id_code":02,
                            "text":"Trafficway, Not on Road"
                        },
                        {
                            "id_code":03,
                            "text":"Non-Trafficway"
                        }
                    ]
                },
                {
                    "id":"S3",
                    "question":"Secondary Crash",
                    "helper_text":"",
                    "subquestions": null,
                    "answer_type":"dropdown",
                    "answer_options":[
                        {
                            "id_code":01,
                            "text":"No"
                        },
                        {
                            "id_code":02,
                            "text":"Yes"
                        }
                    ]
                }
            ],
            "answer_type": null,
            "answer_options":null
        },
        {
            "id":"C5",
            "question":"Crash City/Place",
            "helper_text":"Political Jurisdiction",
            "subquestions": null,
            "answer_type":"open_textbox",
            "answer_options": null
        }
    ]
}