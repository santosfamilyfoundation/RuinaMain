export const questions = {
    "data": [
        {
            "numOptionsAllowed": "0.0",
            "question": "First Name of Person Involved",
            "id": "reJw3rUT",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-0"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Middle Initial of Person Involved",
            "id": "ElI9UkWD",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-1"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Last Name of Person Involved",
            "id": "Iv7jSfKw",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-2"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Date of Birth Section",
            "id": "4vLEtbtL",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-3"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Date of Birth",
            "id": "oMObMoQs",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-4",
            "helperText": "(YYYY/MM/DD)"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Street Address",
            "id": "bqPmjHhl",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-5",
            "helperText": "Street Address 1; Street Address 2",
            "tooltip": "E.g. 1000 Olin Way, MA"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "City/Town",
            "id": "mfUnfGGG",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-6"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "State",
            "id": "I5sdJ3MP",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-7"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "ZIP Code",
            "id": "g9aneW3g",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-8"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Phone Number",
            "id": "hLG4AOsN",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-9",
            "helperText": "example: +1-555-555-1212 should be formatted as 15555551212"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Sex",
            "id": "cGeoDWm1",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-10",
            "answerOptions": [
                {
                    "text": "Female",
                    "idCode": "0"
                },
                {
                    "text": "Male",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Person Type Section",
            "id": "hf6Q269P",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-11"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Incident Responder?",
            "id": "xwtnXE2c",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-12",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "EMS",
                    "idCode": "1"
                },
                {
                    "text": "Fire",
                    "idCode": "2"
                },
                {
                    "text": "Police",
                    "idCode": "3"
                },
                {
                    "text": "Tow Operator",
                    "idCode": "4"
                },
                {
                    "text": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                    "idCode": "5"
                },
                {
                    "text": "Other",
                    "idCode": "6"
                },
                {
                    "text": "Unknown",
                    "idCode": "7"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Injury Status",
            "id": "TNNilZo2",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-13",
            "answerOptions": [
                {
                    "text": "Fatal Injury",
                    "idCode": "0"
                },
                {
                    "text": "Suspected Serious Injury",
                    "idCode": "1"
                },
                {
                    "text": "Suspected Minor Injury",
                    "idCode": "2"
                },
                {
                    "text": "Possible Injury",
                    "idCode": "3"
                },
                {
                    "text": "No Apparent Injury",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Transported to First Medical Facility By",
            "id": "N4korfDu",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-14",
            "questionDependency": [
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Source of Transport to First Medical Facility",
            "id": "vCowZjea",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-15",
            "questionDependency": [
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "3"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Transported",
                    "idCode": "0"
                },
                {
                    "text": "EMS Air",
                    "idCode": "1"
                },
                {
                    "text": "EMS Ground",
                    "idCode": "2"
                },
                {
                    "text": "Law Enforcement",
                    "idCode": "3"
                },
                {
                    "text": "Other",
                    "idCode": "4"
                },
                {
                    "text": "Unknown",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "EMS Response Agency Identifier",
            "id": "jqLkcNdf",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-16",
            "questionDependency": [
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "EMS Response Run Number",
            "id": "RjEUrhoq",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-17",
            "questionDependency": [
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Medical Facility Receiving Patient",
            "id": "IjFlnCUa",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-18",
            "questionDependency": [
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "TNNilZo2",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "2.0",
            "question": "Seating Position",
            "id": "qAJO1kQq",
            "answerType": "dropdownMultiSelect",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-19",
            "helperText": "(choose up to 2)",
            "answerOptions": [
                {
                    "text": "Front",
                    "idCode": "0"
                },
                {
                    "text": "Second",
                    "idCode": "1"
                },
                {
                    "text": "Third",
                    "idCode": "2"
                },
                {
                    "text": "Fourth",
                    "idCode": "3"
                },
                {
                    "text": "Other Row (bus, 15 passenger van, etc.)",
                    "idCode": "4"
                },
                {
                    "text": "Unknown Row",
                    "idCode": "5"
                },
                {
                    "text": "Left (usually the motor vehicle or motorcycle driver except for postal vehicles)",
                    "idCode": "6"
                },
                {
                    "text": "Middle",
                    "idCode": "7"
                },
                {
                    "text": "Right",
                    "idCode": "8"
                },
                {
                    "text": "Unknown Seat",
                    "idCode": "9"
                },
                {
                    "text": "Other Enclosed Cargo Area",
                    "idCode": "10"
                },
                {
                    "text": "Riding on Motor Vehicle Exterior (non-trailing unit)",
                    "idCode": "11"
                },
                {
                    "text": "Sleeper Section of Cab (truck)",
                    "idCode": "12"
                },
                {
                    "text": "Trailing Unit",
                    "idCode": "13"
                },
                {
                    "text": "Unenclosed Cargo Area",
                    "idCode": "14"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "15"
                },
                {
                    "text": "Unknown",
                    "idCode": "16"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Restraint Systems / Motorcycle Helmet Use",
            "id": "Pr9o5SM6",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-20",
            "answerOptions": [
                {
                    "text": "Booster Seat",
                    "idCode": "0"
                },
                {
                    "text": "Child Restraint System - Forward Facing",
                    "idCode": "1"
                },
                {
                    "text": "Child Restraint System - Rear Facing",
                    "idCode": "2"
                },
                {
                    "text": "Child Restraint - Type Unknown",
                    "idCode": "3"
                },
                {
                    "text": "Lap Belt Only Used",
                    "idCode": "4"
                },
                {
                    "text": "None Used - Motor Vehicle Occupant",
                    "idCode": "5"
                },
                {
                    "text": "Restraint Used - Type Unknown",
                    "idCode": "6"
                },
                {
                    "text": "Shoulder and Lap Belt Used",
                    "idCode": "7"
                },
                {
                    "text": "Shoulder Belt Only Used",
                    "idCode": "8"
                },
                {
                    "text": "Stretcher",
                    "idCode": "9"
                },
                {
                    "text": "Wheelchair",
                    "idCode": "10"
                },
                {
                    "text": "DOT-Compliant Motorcycle Helmet",
                    "idCode": "11"
                },
                {
                    "text": "Not DOT-Compliant Motorcycle Helmet",
                    "idCode": "12"
                },
                {
                    "text": "Unknown If DOT-Compliant Motorcycle Helmet",
                    "idCode": "13"
                },
                {
                    "text": "No Helmet",
                    "idCode": "14"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "15"
                },
                {
                    "text": "Other",
                    "idCode": "16"
                },
                {
                    "text": "Unknown",
                    "idCode": "17"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Any Indication of Improper Use?",
            "id": "Vln5VkAh",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-21",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "4.0",
            "question": "Air Bag Deployed?",
            "id": "1h6r5JFf",
            "answerType": "dropdownMultiSelect",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-22",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "text": "Not Deployed",
                    "idCode": "0"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "1"
                },
                {
                    "text": "Curtain",
                    "idCode": "2"
                },
                {
                    "text": "Front",
                    "idCode": "3"
                },
                {
                    "text": "Side",
                    "idCode": "4"
                },
                {
                    "text": "Other (knee, air belt, etc.)",
                    "idCode": "5"
                },
                {
                    "text": "Deployment Unknown",
                    "idCode": "6"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Ejection?",
            "id": "4VkVRWWY",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-23",
            "answerOptions": [
                {
                    "text": "Not Ejected",
                    "idCode": "0"
                },
                {
                    "text": "Ejected, Partially",
                    "idCode": "1"
                },
                {
                    "text": "Ejected, Totally",
                    "idCode": "2"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "3"
                },
                {
                    "text": "Unknown",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Driver License Jurisdiction",
            "id": "RTMZU1us",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-24"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Type",
            "id": "swdK3ctL",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-25",
            "answerOptions": [
                {
                    "text": "Not Licensed",
                    "idCode": "0"
                },
                {
                    "text": "Canada",
                    "idCode": "1"
                },
                {
                    "text": "Indian Nation",
                    "idCode": "2"
                },
                {
                    "text": "International License (other than Mexico or Canada)",
                    "idCode": "3"
                },
                {
                    "text": "Mexico",
                    "idCode": "4"
                },
                {
                    "text": "State",
                    "idCode": "5"
                },
                {
                    "text": "U.S. Government",
                    "idCode": "6"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "7"
                },
                {
                    "text": "Unknown",
                    "idCode": "8"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Name of Jurisdiction (ANSI Code)",
            "id": "XaITnP8d",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-26",
            "helperText": "Provide the specific State, Province or Nation indicated on the Driver's License",
            "tooltip": "See Appendix E: ANSI State FIPS and USPS Codes or Appendix F: ISO 3166-2 Codes for Canada and Mexico"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Driver License Number, Class, CDL and Endorsements",
            "id": "J1bO0jNj",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-27"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "License Number",
            "id": "xL5WOZpG",
            "answerType": "advancedOpenTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-28",
            "autoMethod": "driverIDCamera"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Class",
            "id": "fUE3Zk9I",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-29",
            "answerOptions": [
                {
                    "text": "None",
                    "idCode": "0"
                },
                {
                    "text": "Class A",
                    "idCode": "1"
                },
                {
                    "text": "Class B",
                    "idCode": "2"
                },
                {
                    "text": "Class C",
                    "idCode": "3"
                },
                {
                    "text": "Class M",
                    "idCode": "4"
                },
                {
                    "text": "Regular Driver License Class",
                    "idCode": "5"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "6"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Commercial Driver License (CDL)?",
            "id": "16LCTlmo",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-30",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Endorsements",
            "id": "qVaWWaWs",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-31",
            "answerOptions": [
                {
                    "text": "None/Not Applicable",
                    "idCode": "0"
                },
                {
                    "text": "H - Hazardous Materials",
                    "idCode": "1"
                },
                {
                    "text": "N - Tank Vehicle",
                    "idCode": "2"
                },
                {
                    "text": "P - Passenger",
                    "idCode": "3"
                },
                {
                    "text": "S - School",
                    "idCode": "4"
                },
                {
                    "text": "T - Double/Triple Trailers",
                    "idCode": "5"
                },
                {
                    "text": "X - Combination of Tank Vehicle and Hazardous Materials",
                    "idCode": "6"
                },
                {
                    "text": "Other non-commercial license endorsements (e.g., motorcycle, etc.)",
                    "idCode": "7"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Speeding-Related?",
            "id": "EVbRTEnb",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-32",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Exceeded Speed Limit",
                    "idCode": "1"
                },
                {
                    "text": "Racing",
                    "idCode": "2"
                },
                {
                    "text": "Too Fast for Conditions",
                    "idCode": "3"
                },
                {
                    "text": "Unknown",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "4.0",
            "question": "Driver Actions at Time of Crash",
            "id": "qWDsDeEY",
            "answerType": "dropdownMultiSelect",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-33",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "text": "No Contributing Action",
                    "idCode": "0"
                },
                {
                    "text": "Disregarded Other Road Markings",
                    "idCode": "1"
                },
                {
                    "text": "Disregarded Other Traffic Sign",
                    "idCode": "2"
                },
                {
                    "text": "Failed to Keep in Proper Lane",
                    "idCode": "3"
                },
                {
                    "text": "Failed to Yield Right-of-Way",
                    "idCode": "4"
                },
                {
                    "text": "Followed Too Closely",
                    "idCode": "5"
                },
                {
                    "text": "Improper Backing",
                    "idCode": "6"
                },
                {
                    "text": "Improper Passing",
                    "idCode": "7"
                },
                {
                    "text": "Improper Turn",
                    "idCode": "8"
                },
                {
                    "text": "Operated Motor Vehicle in Inattentive, Careless, Negligent, or Erratic Manner",
                    "idCode": "9"
                },
                {
                    "text": "Operated Motor Vehicle in Reckless or Aggressive Manner",
                    "idCode": "10"
                },
                {
                    "text": "Over-Correcting/Over-Steering",
                    "idCode": "11"
                },
                {
                    "text": "Ran Off Roadway",
                    "idCode": "12"
                },
                {
                    "text": "Ran Red Light",
                    "idCode": "13"
                },
                {
                    "text": "Ran Stop Sign",
                    "idCode": "14"
                },
                {
                    "text": "Swerved or Avoided Due to Wind, Slippery Surface, Motor Vehicle, Object, Non-Mo",
                    "idCode": "15"
                },
                {
                    "text": "Wrong Side or Wrong Way",
                    "idCode": "16"
                },
                {
                    "text": "Other Contributing Action",
                    "idCode": "17"
                },
                {
                    "text": "Unknown",
                    "idCode": "18"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Violation Codes",
            "id": "SJP0mZrJ",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-34"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Attempted Avoidance Maneuver",
            "id": "AREUHJ9b",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-35",
            "questionDependency": [
                {
                    "dependencyUid": "8dY73Yzs",
                    "dependencyOptionCode": "0"
                }
            ],
            "answerOptions": [
                {
                    "text": "No Driver Present/Unknown if Driver Present",
                    "idCode": "0"
                },
                {
                    "text": "Accelerating",
                    "idCode": "1"
                },
                {
                    "text": "Accelerating and Steering Left",
                    "idCode": "2"
                },
                {
                    "text": "Accelerating and Steering Right",
                    "idCode": "3"
                },
                {
                    "text": "Braking and Steering Left",
                    "idCode": "4"
                },
                {
                    "text": "Braking and Steering Right",
                    "idCode": "5"
                },
                {
                    "text": "Braking (Lockup)",
                    "idCode": "6"
                },
                {
                    "text": "Braking (Lockup Unknown)",
                    "idCode": "7"
                },
                {
                    "text": "Braking (No Lockup)",
                    "idCode": "8"
                },
                {
                    "text": "No Avoidance Maneuver",
                    "idCode": "9"
                },
                {
                    "text": "Releasing Brakes",
                    "idCode": "10"
                },
                {
                    "text": "Steering Left",
                    "idCode": "11"
                },
                {
                    "text": "Steering Right",
                    "idCode": "12"
                },
                {
                    "text": "Other Actions",
                    "idCode": "13"
                },
                {
                    "text": "Unknown",
                    "idCode": "14"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "CMV License Status and Compliance with CDL Endorsements",
            "id": "fWq06Row",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-36",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "CMV License Status",
            "id": "UiP7Gr7i",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-37",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "No CDL",
                    "idCode": "0"
                },
                {
                    "text": "Canceled or Denied",
                    "idCode": "1"
                },
                {
                    "text": "Disqualified",
                    "idCode": "2"
                },
                {
                    "text": "Expired",
                    "idCode": "3"
                },
                {
                    "text": "Revoked",
                    "idCode": "4"
                },
                {
                    "text": "Suspended",
                    "idCode": "5"
                },
                {
                    "text": "Learner's Permit",
                    "idCode": "6"
                },
                {
                    "text": "Valid",
                    "idCode": "7"
                },
                {
                    "text": "Other - Not Valid",
                    "idCode": "8"
                },
                {
                    "text": "Unknown License Status",
                    "idCode": "9"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Compliance with CDL Endorsement(s)",
            "id": "juLmQZEB",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-38",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "No Endorsement(s) Required for the Vehicle",
                    "idCode": "0"
                },
                {
                    "text": "Endorsement(s) Required, Complied With",
                    "idCode": "1"
                },
                {
                    "text": "Endorsement(s) Required, Not Complied With",
                    "idCode": "2"
                },
                {
                    "text": "Endorsement(s) Required, Compliance Unknown",
                    "idCode": "3"
                },
                {
                    "text": "Unknown if Required",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Distracted By",
            "id": "lUTQ3LEq",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-39"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Action",
            "id": "0Mat8q8u",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-40",
            "answerOptions": [
                {
                    "text": "Not Distracted",
                    "idCode": "0"
                },
                {
                    "text": "Talking/listening",
                    "idCode": "1"
                },
                {
                    "text": "Manually Operating (texting, dialing, playing game, etc.)",
                    "idCode": "2"
                },
                {
                    "text": "Other Action (looking away from task, etc.)",
                    "idCode": "3"
                },
                {
                    "text": "Unknown",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Source",
            "id": "d3ZHeqkH",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-41",
            "questionDependency": [
                {
                    "dependencyUid": "0Mat8q8u",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "0Mat8q8u",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "0Mat8q8u",
                    "dependencyOptionCode": "3"
                },
                {
                    "dependencyUid": "0Mat8q8u",
                    "dependencyOptionCode": "4"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Applicable (Not Distracted)",
                    "idCode": "0"
                },
                {
                    "text": "Hands-Free Mobile Phone",
                    "idCode": "1"
                },
                {
                    "text": "Hand-Held Mobile Phone",
                    "idCode": "2"
                },
                {
                    "text": "Other Electronic Device",
                    "idCode": "3"
                },
                {
                    "text": "Vehicle-Integrated Device",
                    "idCode": "4"
                },
                {
                    "text": "Passenger/Other Non-Motorist",
                    "idCode": "5"
                },
                {
                    "text": "External (to vehicle/non-motorist area)",
                    "idCode": "6"
                },
                {
                    "text": "Other Distraction (animal, food, grooming)",
                    "idCode": "7"
                },
                {
                    "text": "Unknown",
                    "idCode": "8"
                }
            ]
        },
        {
            "numOptionsAllowed": "2.0",
            "question": "Condition at Time of the Crash",
            "id": "e0ILJxlx",
            "answerType": "dropdownMultiSelect",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-42",
            "helperText": "(choose up to 2)",
            "answerOptions": [
                {
                    "text": "Not Applicable",
                    "idCode": "0"
                },
                {
                    "text": "Asleep or Fatigued",
                    "idCode": "1"
                },
                {
                    "text": "Emotional (depressed, angry, disturbed, etc.)",
                    "idCode": "2"
                },
                {
                    "text": "Ill (sick), Fainted",
                    "idCode": "3"
                },
                {
                    "text": "Physically Impaired",
                    "idCode": "4"
                },
                {
                    "text": "Under the Influence of Medications/Drugs/Alcohol",
                    "idCode": "5"
                },
                {
                    "text": "Other",
                    "idCode": "6"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Law Enforcement Suspects Alcohol Use",
            "id": "9cFGpRmQ",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-43",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Alcohol Test",
            "id": "bSmmCoMw",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-44",
            "questionDependency": [
                {
                    "dependencyUid": "9cFGpRmQ",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Test Status",
            "id": "uTZ8u8an",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-45",
            "questionDependency": [
                {
                    "dependencyUid": "9cFGpRmQ",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Test Not Given",
                    "idCode": "0"
                },
                {
                    "text": "Test Given",
                    "idCode": "1"
                },
                {
                    "text": "Test Refused",
                    "idCode": "2"
                },
                {
                    "text": "Unknown if Tested",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Type of Test",
            "id": "Um6CdyUJ",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-46",
            "questionDependency": [
                {
                    "dependencyUid": "9cFGpRmQ",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Applicable (Test Not Given)",
                    "idCode": "0"
                },
                {
                    "text": "Blood",
                    "idCode": "1"
                },
                {
                    "text": "Breath",
                    "idCode": "2"
                },
                {
                    "text": "Urine",
                    "idCode": "3"
                },
                {
                    "text": "Other",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Law Enforcement Suspects Drug Use",
            "id": "qlTVIWWS",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-47",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Drug Test",
            "id": "pn39hf9z",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-48",
            "questionDependency": [
                {
                    "dependencyUid": "qlTVIWWS",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Test Status",
            "id": "nCXTPsU5",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-49",
            "questionDependency": [
                {
                    "dependencyUid": "qlTVIWWS",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Test Not Given",
                    "idCode": "0"
                },
                {
                    "text": "Test Given",
                    "idCode": "1"
                },
                {
                    "text": "Test Refused",
                    "idCode": "2"
                },
                {
                    "text": "Unknown if Tested",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Type of Test",
            "id": "QUYxXsUT",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-50",
            "questionDependency": [
                {
                    "dependencyUid": "qlTVIWWS",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Applicable (Test Not Given)",
                    "idCode": "0"
                },
                {
                    "text": "Blood",
                    "idCode": "1"
                },
                {
                    "text": "Saliva",
                    "idCode": "2"
                },
                {
                    "text": "Urine",
                    "idCode": "3"
                },
                {
                    "text": "Other",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "First Name of Person Involved",
            "id": "wgjUrZEh",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-0"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Middle Initial of Person Involved",
            "id": "sv3smQdV",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-1"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Last Name of Person Involved",
            "id": "OEKyiMLG",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-2"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Date of Birth Section",
            "id": "fn5vFXLY",
            "answerType": "header",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-3"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Date of Birth",
            "id": "FxZPgGC6",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-4",
            "helperText": "(YYYY/MM/DD)"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Street Address",
            "id": "dQxO7MP5",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-5",
            "helperText": "Street Address 1; Street Address 2"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "City/Town",
            "id": "QmWZUbzm",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-6"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "State",
            "id": "AIurIT7V",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-7"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "ZIP Code",
            "id": "CwUaGdXZ",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-8"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Phone Number",
            "id": "WHYkEvFv",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-9",
            "helperText": "example: +1-555-555-1212 should be formatted as 15555551212"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Sex",
            "id": "z0RAR9nQ",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-10",
            "answerOptions": [
                {
                    "text": "Female",
                    "idCode": "0"
                },
                {
                    "text": "Male",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Person Type Section",
            "id": "nLuF6bPr",
            "answerType": "header",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-11"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Person Type",
            "id": "6TkriXzZ",
            "answerType": "dropdown",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-12",
            "answerOptions": [
                {
                    "text": "Bicyclist",
                    "idCode": "0"
                },
                {
                    "text": "Other Cyclist",
                    "idCode": "1"
                },
                {
                    "text": "Pedestrian",
                    "idCode": "2"
                },
                {
                    "text": "Other Pedestrian (wheelchair, person in a building, skater, personal convey)",
                    "idCode": "3"
                },
                {
                    "text": "Occupant of a Non-Motor Vehicle Transportation Device",
                    "idCode": "4"
                },
                {
                    "text": "Unknown Type of Non-Motorist",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Incident Responder?",
            "id": "MNdMxtx5",
            "answerType": "dropdown",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-13",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "EMS",
                    "idCode": "1"
                },
                {
                    "text": "Fire",
                    "idCode": "2"
                },
                {
                    "text": "Police",
                    "idCode": "3"
                },
                {
                    "text": "Tow Operator",
                    "idCode": "4"
                },
                {
                    "text": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                    "idCode": "5"
                },
                {
                    "text": "Other",
                    "idCode": "6"
                },
                {
                    "text": "Unknown",
                    "idCode": "7"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Injury Status",
            "id": "WRishqwU",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-14",
            "answerOptions": [
                {
                    "text": "Fatal Injury",
                    "idCode": "0"
                },
                {
                    "text": "Suspected Serious Injury",
                    "idCode": "1"
                },
                {
                    "text": "Suspected Minor Injury",
                    "idCode": "2"
                },
                {
                    "text": "Possible Injury",
                    "idCode": "3"
                },
                {
                    "text": "No Apparent Injury",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Transported to First Medical Facility By",
            "id": "0yuO9rxr",
            "answerType": "header",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-15",
            "questionDependency": [
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Source of Transport to First Medical Facility",
            "id": "Kb53Ie1J",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-16",
            "questionDependency": [
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "3"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Transported",
                    "idCode": "0"
                },
                {
                    "text": "EMS Air",
                    "idCode": "1"
                },
                {
                    "text": "EMS Ground",
                    "idCode": "2"
                },
                {
                    "text": "Law Enforcement",
                    "idCode": "3"
                },
                {
                    "text": "Other",
                    "idCode": "4"
                },
                {
                    "text": "Unknown",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "EMS Response Agency Identifier",
            "id": "ooSKnRtS",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-17",
            "questionDependency": [
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "EMS Response Run Number",
            "id": "kWoq6gRR",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-18",
            "questionDependency": [
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Medical Facility Receiving Patient",
            "id": "GmOcudA0",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-19",
            "questionDependency": [
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "WRishqwU",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Distracted By",
            "id": "qNaBDuaT",
            "answerType": "header",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-20"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Action",
            "id": "0ZnIFZ0X",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-21",
            "answerOptions": [
                {
                    "text": "Not Distracted",
                    "idCode": "0"
                },
                {
                    "text": "Talking/listening",
                    "idCode": "1"
                },
                {
                    "text": "Manually Operating (texting, dialing, playing game, etc.)",
                    "idCode": "2"
                },
                {
                    "text": "Other Action (looking away from task, etc.)",
                    "idCode": "3"
                },
                {
                    "text": "Unknown",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Source",
            "id": "v1Hvf6d7",
            "answerType": "dropdown",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-22",
            "questionDependency": [
                {
                    "dependencyUid": "0ZnIFZ0X",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "0ZnIFZ0X",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "0ZnIFZ0X",
                    "dependencyOptionCode": "3"
                },
                {
                    "dependencyUid": "0ZnIFZ0X",
                    "dependencyOptionCode": "4"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Applicable (Not Distracted)",
                    "idCode": "0"
                },
                {
                    "text": "Hands-Free Mobile Phone",
                    "idCode": "1"
                },
                {
                    "text": "Hand-Held Mobile Phone",
                    "idCode": "2"
                },
                {
                    "text": "Other Electronic Device",
                    "idCode": "3"
                },
                {
                    "text": "Vehicle-Integrated Device",
                    "idCode": "4"
                },
                {
                    "text": "Passenger/Other Non-Motorist",
                    "idCode": "5"
                },
                {
                    "text": "External (to vehicle/non-motorist area)",
                    "idCode": "6"
                },
                {
                    "text": "Other Distraction (animal, food, grooming)",
                    "idCode": "7"
                },
                {
                    "text": "Unknown",
                    "idCode": "8"
                }
            ]
        },
        {
            "numOptionsAllowed": "2.0",
            "question": "Condition at Time of the Crash",
            "id": "u3pLOnML",
            "answerType": "dropdownMultiSelect",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-23",
            "helperText": "(choose up to 2)",
            "answerOptions": [
                {
                    "text": "Not Applicable",
                    "idCode": "0"
                },
                {
                    "text": "Asleep or Fatigued",
                    "idCode": "1"
                },
                {
                    "text": "Emotional (depressed, angry, disturbed, etc.)",
                    "idCode": "2"
                },
                {
                    "text": "Ill (sick), Fainted",
                    "idCode": "3"
                },
                {
                    "text": "Physically Impaired",
                    "idCode": "4"
                },
                {
                    "text": "Under the Influence of Medications/Drugs/Alcohol",
                    "idCode": "5"
                },
                {
                    "text": "Other",
                    "idCode": "6"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Law Enforcement Suspects Alcohol Use",
            "id": "ski3jtpd",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-24",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Alcohol Test",
            "id": "H34mpdQW",
            "answerType": "header",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-25",
            "questionDependency": [
                {
                    "dependencyUid": "ski3jtpd",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Test Status",
            "id": "eweonIMI",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-26",
            "questionDependency": [
                {
                    "dependencyUid": "ski3jtpd",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Test Not Given",
                    "idCode": "0"
                },
                {
                    "text": "Test Given",
                    "idCode": "1"
                },
                {
                    "text": "Test Refused",
                    "idCode": "2"
                },
                {
                    "text": "Unknown if Tested",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Type of Test",
            "id": "mZGcJRTW",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-27",
            "questionDependency": [
                {
                    "dependencyUid": "ski3jtpd",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Applicable (Test Not Given)",
                    "idCode": "0"
                },
                {
                    "text": "Blood",
                    "idCode": "1"
                },
                {
                    "text": "Breath",
                    "idCode": "2"
                },
                {
                    "text": "Urine",
                    "idCode": "3"
                },
                {
                    "text": "Other",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Law Enforcement Suspects Drug Use",
            "id": "Qenr80I4",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-28",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Drug Test",
            "id": "uI7WvA23",
            "answerType": "header",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-29",
            "questionDependency": [
                {
                    "dependencyUid": "Qenr80I4",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Test Status",
            "id": "uqQGx3Rc",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-30",
            "questionDependency": [
                {
                    "dependencyUid": "Qenr80I4",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Test Not Given",
                    "idCode": "0"
                },
                {
                    "text": "Test Given",
                    "idCode": "1"
                },
                {
                    "text": "Test Refused",
                    "idCode": "2"
                },
                {
                    "text": "Unknown if Tested",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Type of Test",
            "id": "cYXv5Qkz",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-31",
            "questionDependency": [
                {
                    "dependencyUid": "Qenr80I4",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Applicable (Test Not Given)",
                    "idCode": "0"
                },
                {
                    "text": "Blood",
                    "idCode": "1"
                },
                {
                    "text": "Saliva",
                    "idCode": "2"
                },
                {
                    "text": "Urine",
                    "idCode": "3"
                },
                {
                    "text": "Other",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Unit Number of Motor Vehicle Striking Non-Motorist",
            "id": "0P7ETSzE",
            "answerType": "openTextBox",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-32",
            "helperText": "(e.g. '2' for Vehicle 2)"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Non-Motorist Action/Circumstance Prior to Crash",
            "id": "SM5BGqvn",
            "answerType": "header",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-33"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Action/Circumstance",
            "id": "m1CAZSdr",
            "answerType": "dropdown",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-34",
            "answerOptions": [
                {
                    "text": "None",
                    "idCode": "0"
                },
                {
                    "text": "Adjacent to Roadway (e.g., Shoulder, Median)",
                    "idCode": "1"
                },
                {
                    "text": "Crossing Roadway",
                    "idCode": "2"
                },
                {
                    "text": "In Roadway - Other",
                    "idCode": "3"
                },
                {
                    "text": "Waiting to Cross Roadway",
                    "idCode": "4"
                },
                {
                    "text": "Walking/Cycling Along Roadway Against Traffic (In or Adjacent to Travel Lane)",
                    "idCode": "5"
                },
                {
                    "text": "Walking/Cycling Along Roadway with Traffic (In or Adjacent to Travel Lane)",
                    "idCode": "6"
                },
                {
                    "text": "Walking/Cycling on Sidewalk",
                    "idCode": "7"
                },
                {
                    "text": "Working in Trafficway (Incident Response)",
                    "idCode": "8"
                },
                {
                    "text": "Other",
                    "idCode": "9"
                },
                {
                    "text": "Unknown",
                    "idCode": "10"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Origin/Destination",
            "id": "G2zq94Fz",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-35",
            "answerOptions": [
                {
                    "text": "Going to or from School (K-12)",
                    "idCode": "0"
                },
                {
                    "text": "Going to or from Transit",
                    "idCode": "1"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "2"
                },
                {
                    "text": "Unknown",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "2.0",
            "question": "Non-Motorist Contributing Action(s)/Circumstance(s)",
            "id": "4D3Re10A",
            "answerType": "dropdownMultiSelect",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-36",
            "helperText": "(choose up to 2)",
            "answerOptions": [
                {
                    "text": "Dart/Dash",
                    "idCode": "0"
                },
                {
                    "text": "Disabled Vehicle-Related (Working on, Pushing, Leaving/Approaching)",
                    "idCode": "1"
                },
                {
                    "text": "Entering/Exiting Parked/Standing Vehicle",
                    "idCode": "2"
                },
                {
                    "text": "Failure to Obey Traffic Signs, Signals, or Officer",
                    "idCode": "3"
                },
                {
                    "text": "Failure to Yield Right-Of-Way",
                    "idCode": "4"
                },
                {
                    "text": "Improper Passing",
                    "idCode": "5"
                },
                {
                    "text": "Improper Turn/Merge",
                    "idCode": "6"
                },
                {
                    "text": "Inattentive (Talking, Eating, etc.)",
                    "idCode": "7"
                },
                {
                    "text": "In Roadway Improperly (Standing, Lying, Working, Playing)",
                    "idCode": "8"
                },
                {
                    "text": "Not Visible (Dark Clothing, No Lighting, etc.)",
                    "idCode": "9"
                },
                {
                    "text": "Wrong-Way Riding or Walking",
                    "idCode": "10"
                },
                {
                    "text": "Other",
                    "idCode": "11"
                },
                {
                    "text": "Unknown",
                    "idCode": "12"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Non-Motorist Location at Time of Crash",
            "id": "6O3xLeXP",
            "answerType": "dropdown",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-37",
            "answerOptions": [
                {
                    "text": "Intersection - Marked Crosswalk",
                    "idCode": "0"
                },
                {
                    "text": "Intersection - Unmarked Crosswalk",
                    "idCode": "1"
                },
                {
                    "text": "Intersection - Other",
                    "idCode": "2"
                },
                {
                    "text": "Median/Crossing Island",
                    "idCode": "3"
                },
                {
                    "text": "Midblock - Marked Crosswalk",
                    "idCode": "4"
                },
                {
                    "text": "Shoulder/Roadside",
                    "idCode": "5"
                },
                {
                    "text": "Travel Lane - Other Location",
                    "idCode": "6"
                },
                {
                    "text": "Signed Route (no pavement marking)",
                    "idCode": "7"
                },
                {
                    "text": "Shared Lane Markings",
                    "idCode": "8"
                },
                {
                    "text": "On-Street Bike Lanes",
                    "idCode": "9"
                },
                {
                    "text": "On-Street Buffered Bike Lanes",
                    "idCode": "10"
                },
                {
                    "text": "Separated Bike Lanes",
                    "idCode": "11"
                },
                {
                    "text": "Off-Street Trails/Sidepaths",
                    "idCode": "12"
                },
                {
                    "text": "Driveway Access",
                    "idCode": "13"
                },
                {
                    "text": "Non-Trafficway Area",
                    "idCode": "14"
                },
                {
                    "text": "Shared-Use Path or Trail",
                    "idCode": "15"
                },
                {
                    "text": "Sidewalk",
                    "idCode": "16"
                },
                {
                    "text": "Other",
                    "idCode": "17"
                },
                {
                    "text": "Unknown",
                    "idCode": "18"
                }
            ]
        },
        {
            "numOptionsAllowed": "5.0",
            "question": "Non-Motorist Safety Equipment",
            "id": "3Na7yzFj",
            "answerType": "dropdownMultiSelect",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-38",
            "helperText": "(choose up to 5)",
            "answerOptions": [
                {
                    "text": "None",
                    "idCode": "0"
                },
                {
                    "text": "Helmet",
                    "idCode": "1"
                },
                {
                    "text": "Protective Pads Used (elbows, knees, shins, etc.)",
                    "idCode": "2"
                },
                {
                    "text": "Reflective Wear (backpack, triangles, etc.)",
                    "idCode": "3"
                },
                {
                    "text": "Lighting",
                    "idCode": "4"
                },
                {
                    "text": "Reflectors",
                    "idCode": "5"
                },
                {
                    "text": "Other",
                    "idCode": "6"
                },
                {
                    "text": "Unknown",
                    "idCode": "7"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Initial Contact Point on Non-Motorist",
            "id": "ntZC5cPW",
            "answerType": "multiButton",
            "display": [
                "nonmotorist"
            ],
            "humanReadableId": "nonmotorist-39",
            "answerOptions": [
                {
                    "text": "Right",
                    "idCode": "0"
                },
                {
                    "text": "Rear",
                    "idCode": "1"
                },
                {
                    "text": "Left",
                    "idCode": "2"
                },
                {
                    "text": "Front",
                    "idCode": "3"
                },
                {
                    "text": "Unknown",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "First Name of Person Involved",
            "id": "xkXuEz84",
            "answerType": "openTextBox",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-0"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Middle Initial of Person Involved",
            "id": "5IRgIan5",
            "answerType": "openTextBox",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-1"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Last Name of Person Involved",
            "id": "KB0Wiblw",
            "answerType": "openTextBox",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-2"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Date of Birth Section",
            "id": "jtLFDnoM",
            "answerType": "header",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-3"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Date of Birth",
            "id": "n6Cp78JZ",
            "answerType": "openTextBox",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-4",
            "helperText": "(YYYY/MM/DD)"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Sex",
            "id": "eiQbv2XM",
            "answerType": "multiButton",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-5",
            "answerOptions": [
                {
                    "text": "Female",
                    "idCode": "0"
                },
                {
                    "text": "Male",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Person Type Section",
            "id": "2GN0nq3k",
            "answerType": "header",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-6"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Incident Responder?",
            "id": "Egrsk6Sq",
            "answerType": "dropdown",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-7",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "EMS",
                    "idCode": "1"
                },
                {
                    "text": "Fire",
                    "idCode": "2"
                },
                {
                    "text": "Police",
                    "idCode": "3"
                },
                {
                    "text": "Tow Operator",
                    "idCode": "4"
                },
                {
                    "text": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                    "idCode": "5"
                },
                {
                    "text": "Other",
                    "idCode": "6"
                },
                {
                    "text": "Unknown",
                    "idCode": "7"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Injury Status",
            "id": "NJqVP8AH",
            "answerType": "multiButton",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-8",
            "answerOptions": [
                {
                    "text": "Fatal Injury",
                    "idCode": "0"
                },
                {
                    "text": "Suspected Serious Injury",
                    "idCode": "1"
                },
                {
                    "text": "Suspected Minor Injury",
                    "idCode": "2"
                },
                {
                    "text": "Possible Injury",
                    "idCode": "3"
                },
                {
                    "text": "No Apparent Injury",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Transported to First Medical Facility By",
            "id": "9jb9tSFj",
            "answerType": "header",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-9",
            "questionDependency": [
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Source of Transport to First Medical Facility",
            "id": "rUHV0P0f",
            "answerType": "multiButton",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-10",
            "questionDependency": [
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "3"
                }
            ],
            "answerOptions": [
                {
                    "text": "Not Transported",
                    "idCode": "0"
                },
                {
                    "text": "EMS Air",
                    "idCode": "1"
                },
                {
                    "text": "EMS Ground",
                    "idCode": "2"
                },
                {
                    "text": "Law Enforcement",
                    "idCode": "3"
                },
                {
                    "text": "Other",
                    "idCode": "4"
                },
                {
                    "text": "Unknown",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "EMS Response Agency Identifier",
            "id": "APIIAFBl",
            "answerType": "openTextBox",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-11",
            "questionDependency": [
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "EMS Response Run Number",
            "id": "JG0Hd2zf",
            "answerType": "openTextBox",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-12",
            "questionDependency": [
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Medical Facility Receiving Patient",
            "id": "PDEPIwFO",
            "answerType": "openTextBox",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-13",
            "questionDependency": [
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "NJqVP8AH",
                    "dependencyOptionCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "2.0",
            "question": "Seating Position",
            "id": "wecg2msi",
            "answerType": "dropdownMultiSelect",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-14",
            "helperText": "(choose up to 2)",
            "answerOptions": [
                {
                    "text": "Front",
                    "idCode": "0"
                },
                {
                    "text": "Second",
                    "idCode": "1"
                },
                {
                    "text": "Third",
                    "idCode": "2"
                },
                {
                    "text": "Fourth",
                    "idCode": "3"
                },
                {
                    "text": "Other Row (bus, 15 passenger van, etc.)",
                    "idCode": "4"
                },
                {
                    "text": "Unknown Row",
                    "idCode": "5"
                },
                {
                    "text": "Left (usually the motor vehicle or motorcycle driver except for postal vehicles)",
                    "idCode": "6"
                },
                {
                    "text": "Middle",
                    "idCode": "7"
                },
                {
                    "text": "Right",
                    "idCode": "8"
                },
                {
                    "text": "Unknown Seat",
                    "idCode": "9"
                },
                {
                    "text": "Other Enclosed Cargo Area",
                    "idCode": "10"
                },
                {
                    "text": "Riding on Motor Vehicle Exterior (non-trailing unit)",
                    "idCode": "11"
                },
                {
                    "text": "Sleeper Section of Cab (truck)",
                    "idCode": "12"
                },
                {
                    "text": "Trailing Unit",
                    "idCode": "13"
                },
                {
                    "text": "Unenclosed Cargo Area",
                    "idCode": "14"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "15"
                },
                {
                    "text": "Unknown",
                    "idCode": "16"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Restraint Systems / Motorcycle Helmet Use",
            "id": "aeZ4RkUF",
            "answerType": "dropdown",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-15",
            "answerOptions": [
                {
                    "text": "Booster Seat",
                    "idCode": "0"
                },
                {
                    "text": "Child Restraint System - Forward Facing",
                    "idCode": "1"
                },
                {
                    "text": "Child Restraint System - Rear Facing",
                    "idCode": "2"
                },
                {
                    "text": "Child Restraint - Type Unknown",
                    "idCode": "3"
                },
                {
                    "text": "Lap Belt Only Used",
                    "idCode": "4"
                },
                {
                    "text": "None Used - Motor Vehicle Occupant",
                    "idCode": "5"
                },
                {
                    "text": "Restraint Used - Type Unknown",
                    "idCode": "6"
                },
                {
                    "text": "Shoulder and Lap Belt Used",
                    "idCode": "7"
                },
                {
                    "text": "Shoulder Belt Only Used",
                    "idCode": "8"
                },
                {
                    "text": "Stretcher",
                    "idCode": "9"
                },
                {
                    "text": "Wheelchair",
                    "idCode": "10"
                },
                {
                    "text": "DOT-Compliant Motorcycle Helmet",
                    "idCode": "11"
                },
                {
                    "text": "Not DOT-Compliant Motorcycle Helmet",
                    "idCode": "12"
                },
                {
                    "text": "Unknown If DOT-Compliant Motorcycle Helmet",
                    "idCode": "13"
                },
                {
                    "text": "No Helmet",
                    "idCode": "14"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "15"
                },
                {
                    "text": "Other",
                    "idCode": "16"
                },
                {
                    "text": "Unknown",
                    "idCode": "17"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Any Indication of Improper Use?",
            "id": "mFbnuTNP",
            "answerType": "multiButton",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-16",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "4.0",
            "question": "Air Bag Deployed?",
            "id": "ExMu8mbw",
            "answerType": "dropdownMultiSelect",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-17",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "text": "Not Deployed",
                    "idCode": "0"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "1"
                },
                {
                    "text": "Curtain",
                    "idCode": "2"
                },
                {
                    "text": "Front",
                    "idCode": "3"
                },
                {
                    "text": "Side",
                    "idCode": "4"
                },
                {
                    "text": "Other (knee, air belt, etc.)",
                    "idCode": "5"
                },
                {
                    "text": "Deployment Unknown",
                    "idCode": "6"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Ejection?",
            "id": "5sp9e45O",
            "answerType": "multiButton",
            "display": [
                "passenger"
            ],
            "humanReadableId": "passenger-18",
            "answerOptions": [
                {
                    "text": "Not Ejected",
                    "idCode": "0"
                },
                {
                    "text": "Ejected, Partially",
                    "idCode": "1"
                },
                {
                    "text": "Ejected, Totally",
                    "idCode": "2"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "3"
                },
                {
                    "text": "Unknown",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Crash Identifier",
            "id": "gNkzJih5",
            "answerType": "openTextBox",
            "display": [
                "road"
            ],
            "humanReadableId": "road-0"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Agency Crash Identifier",
            "id": "qfge7d3g",
            "answerType": "openTextBox",
            "display": [
                "road"
            ],
            "humanReadableId": "road-1"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Crash Severity",
            "id": "8dY73Yzs",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-2",
            "answerOptions": [
                {
                    "text": "Fatal Injury",
                    "idCode": "0"
                },
                {
                    "text": "Suspected Serious Injury",
                    "idCode": "1"
                },
                {
                    "text": "Suspected Minor Injury",
                    "idCode": "2"
                },
                {
                    "text": "Possible Injury",
                    "idCode": "3"
                },
                {
                    "text": "Property Damage-Only",
                    "idCode": "4"
                },
                {
                    "text": "Unknown",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Crash Classification",
            "id": "E79ZNLXO",
            "answerType": "header",
            "display": [
                "road"
            ],
            "humanReadableId": "road-3"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Ownership",
            "id": "pT0Wq1RO",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-4",
            "helperText": "Provide type for ownership of the land where the crash occurred",
            "answerOptions": [
                {
                    "text": "Public Property",
                    "idCode": "0"
                },
                {
                    "text": "Private Property",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Characteristics",
            "id": "zUUpOYVy",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-5",
            "answerOptions": [
                {
                    "text": "Trafficway, On Road",
                    "idCode": "0"
                },
                {
                    "text": "Trafficway, Not on Road",
                    "idCode": "1"
                },
                {
                    "text": "Non-Trafficway",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Secondary Crash",
            "id": "A6uoXDGb",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-6",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Crash Date and Time Section",
            "id": "iJ8lLM6P",
            "answerType": "header",
            "display": [
                "road"
            ],
            "humanReadableId": "road-7"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Crash Date and Time",
            "id": "FQ2cYAHj",
            "answerType": "advancedOpenTextBox",
            "display": [
                "road"
            ],
            "humanReadableId": "road-8",
            "helperText": "(YYYYMMDDHHMM)",
            "tooltip": "Ex: 202110031027 is 10:27 on October 3, 2021",
            "autoMethod": "time"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Time of Roadway Clearance",
            "id": "zyHP4WbS",
            "answerType": "openTextBox",
            "display": [
                "road"
            ],
            "humanReadableId": "road-9",
            "helperText": "(HHMM)"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Crash State",
            "id": "Sl6ypLYA",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-10",
            "answerOptions": [
                {
                    "text": "Alabama",
                    "idCode": "0"
                },
                {
                    "text": "Alaska",
                    "idCode": "1"
                },
                {
                    "text": "American Samoa",
                    "idCode": "2"
                },
                {
                    "text": "Arizona",
                    "idCode": "3"
                },
                {
                    "text": "Arkansas",
                    "idCode": "4"
                },
                {
                    "text": "California",
                    "idCode": "5"
                },
                {
                    "text": "Colorado",
                    "idCode": "6"
                },
                {
                    "text": "Commonwealth of the Northern Mariana Islands",
                    "idCode": "7"
                },
                {
                    "text": "Connecticut",
                    "idCode": "8"
                },
                {
                    "text": "Delaware",
                    "idCode": "9"
                },
                {
                    "text": "District of Columbia",
                    "idCode": "10"
                },
                {
                    "text": "Florida",
                    "idCode": "11"
                },
                {
                    "text": "Georgia",
                    "idCode": "12"
                },
                {
                    "text": "Guam",
                    "idCode": "13"
                },
                {
                    "text": "Hawaii",
                    "idCode": "14"
                },
                {
                    "text": "Idaho",
                    "idCode": "15"
                },
                {
                    "text": "Illinois",
                    "idCode": "16"
                },
                {
                    "text": "Indiana",
                    "idCode": "17"
                },
                {
                    "text": "Iowa",
                    "idCode": "18"
                },
                {
                    "text": "Kansas",
                    "idCode": "19"
                },
                {
                    "text": "Kentucky",
                    "idCode": "20"
                },
                {
                    "text": "Louisiana",
                    "idCode": "21"
                },
                {
                    "text": "Maine",
                    "idCode": "22"
                },
                {
                    "text": "Maryland",
                    "idCode": "23"
                },
                {
                    "text": "Massachusetts",
                    "idCode": "24"
                },
                {
                    "text": "Michigan",
                    "idCode": "25"
                },
                {
                    "text": "Minnesota",
                    "idCode": "26"
                },
                {
                    "text": "Mississippi",
                    "idCode": "27"
                },
                {
                    "text": "Missouri",
                    "idCode": "28"
                },
                {
                    "text": "Montana",
                    "idCode": "29"
                },
                {
                    "text": "Nebraska",
                    "idCode": "30"
                },
                {
                    "text": "Nevada",
                    "idCode": "31"
                },
                {
                    "text": "New Hampshire",
                    "idCode": "32"
                },
                {
                    "text": "New Jersey",
                    "idCode": "33"
                },
                {
                    "text": "New Mexico",
                    "idCode": "34"
                },
                {
                    "text": "New York",
                    "idCode": "35"
                },
                {
                    "text": "North Carolina",
                    "idCode": "36"
                },
                {
                    "text": "North Dakota",
                    "idCode": "37"
                },
                {
                    "text": "Ohio",
                    "idCode": "38"
                },
                {
                    "text": "Oklahoma",
                    "idCode": "39"
                },
                {
                    "text": "Oregon",
                    "idCode": "40"
                },
                {
                    "text": "Pennsylvania",
                    "idCode": "41"
                },
                {
                    "text": "Puerto Rico",
                    "idCode": "42"
                },
                {
                    "text": "Rhode Island",
                    "idCode": "43"
                },
                {
                    "text": "South Carolina",
                    "idCode": "44"
                },
                {
                    "text": "South Dakota",
                    "idCode": "45"
                },
                {
                    "text": "Tennessee",
                    "idCode": "46"
                },
                {
                    "text": "Texas",
                    "idCode": "47"
                },
                {
                    "text": "United States Virgin Islands",
                    "idCode": "48"
                },
                {
                    "text": "Utah",
                    "idCode": "49"
                },
                {
                    "text": "Vermont",
                    "idCode": "50"
                },
                {
                    "text": "Virginia",
                    "idCode": "51"
                },
                {
                    "text": "Washington",
                    "idCode": "52"
                },
                {
                    "text": "West Virginia",
                    "idCode": "53"
                },
                {
                    "text": "Wisconsin",
                    "idCode": "54"
                },
                {
                    "text": "Wyoming",
                    "idCode": "55"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Crash County",
            "id": "8V2H4hT4",
            "answerType": "countyDropDown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-11",
            "autoMethod": "county",
            "questionDependency": [
                {
                    "dependencyUid": "Sl6ypLYA",
                    "dependencyOptionCode": " "
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Crash City/Place",
            "id": "JDBENf0A",
            "answerType": "openTextBox",
            "display": [
                "road"
            ],
            "humanReadableId": "road-12",
            "helperText": "(Political Jurisdiction)"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Crash Location",
            "id": "GlitCeKG",
            "answerType": "header",
            "display": [
                "road"
            ],
            "humanReadableId": "road-13"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Latitude",
            "id": "Y0UeyBYf",
            "answerType": "advancedOpenTextBox",
            "display": [
                "road"
            ],
            "humanReadableId": "road-14",
            "helperText": "(degrees.minutes.seconds + compass direction)",
            "autoMethod": "map"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Longitude",
            "id": "eFXNchTA",
            "answerType": "advancedOpenTextBox",
            "display": [
                "road"
            ],
            "humanReadableId": "road-15",
            "helperText": "(degrees.minutes.seconds + compass direction)",
            "autoMethod": "map"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "First Harmful Event",
            "id": "Anwspdcw",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-16",
            "helperText": "Non-Collision Harmful Events; Collision With Person, Motor Vehicle, or Non-Fixed Object; Collision with Fixed Object",
            "answerOptions": [
                {
                    "text": "Cargo/Equipment Loss or Shift",
                    "idCode": "0"
                },
                {
                    "text": "Fell/Jumped From Motor Vehicle",
                    "idCode": "1"
                },
                {
                    "text": "Fire/Explosion",
                    "idCode": "2"
                },
                {
                    "text": "Immersion, Full or Partial",
                    "idCode": "3"
                },
                {
                    "text": "Jackknife",
                    "idCode": "4"
                },
                {
                    "text": "Other Non-Collision",
                    "idCode": "5"
                },
                {
                    "text": "Overturn/Rollover",
                    "idCode": "6"
                },
                {
                    "text": "Thrown or Falling Object",
                    "idCode": "7"
                },
                {
                    "text": "Animal (live)",
                    "idCode": "8"
                },
                {
                    "text": "Construction Equipment (backhoe, bulldozer, etc.)",
                    "idCode": "9"
                },
                {
                    "text": "Farm Equipment (tractor, combine harvester, etc.)",
                    "idCode": "10"
                },
                {
                    "text": "Motor Vehicle in Transport",
                    "idCode": "11"
                },
                {
                    "text": "Other Non-Fixed Object",
                    "idCode": "12"
                },
                {
                    "text": "Other Non-motorist",
                    "idCode": "13"
                },
                {
                    "text": "Parked Motor Vehicle",
                    "idCode": "14"
                },
                {
                    "text": "Pedalcycle",
                    "idCode": "15"
                },
                {
                    "text": "Pedestrian",
                    "idCode": "16"
                },
                {
                    "text": "Railway Vehicle (train, engine)",
                    "idCode": "17"
                },
                {
                    "text": "Strikes Object at Rest from MV in Transport",
                    "idCode": "18"
                },
                {
                    "text": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                    "idCode": "19"
                },
                {
                    "text": "Bridge Overhead Structure",
                    "idCode": "20"
                },
                {
                    "text": "Bridge Pier or Support",
                    "idCode": "21"
                },
                {
                    "text": "Bridge Rail",
                    "idCode": "22"
                },
                {
                    "text": "Cable Barrier",
                    "idCode": "23"
                },
                {
                    "text": "Concrete Traffic Barrier",
                    "idCode": "24"
                },
                {
                    "text": "Culvert",
                    "idCode": "25"
                },
                {
                    "text": "Curb",
                    "idCode": "26"
                },
                {
                    "text": "Ditch",
                    "idCode": "27"
                },
                {
                    "text": "Embankment",
                    "idCode": "28"
                },
                {
                    "text": "Fence",
                    "idCode": "29"
                },
                {
                    "text": "Guardrail End Terminal",
                    "idCode": "30"
                },
                {
                    "text": "Guardrail Face",
                    "idCode": "31"
                },
                {
                    "text": "Impact Attenuator/Crash Cushion",
                    "idCode": "32"
                },
                {
                    "text": "Mailbox",
                    "idCode": "33"
                },
                {
                    "text": "Other Fixed Object (wall, building, tunnel, etc.)",
                    "idCode": "34"
                },
                {
                    "text": "Other Post, Pole, or Support",
                    "idCode": "35"
                },
                {
                    "text": "Other Traffic Barrier",
                    "idCode": "36"
                },
                {
                    "text": "Traffic Sign Support",
                    "idCode": "37"
                },
                {
                    "text": "Traffic Signal Support",
                    "idCode": "38"
                },
                {
                    "text": "Tree (standing)",
                    "idCode": "39"
                },
                {
                    "text": "Utility Pole/Light Support",
                    "idCode": "40"
                },
                {
                    "text": "Unknown",
                    "idCode": "41"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Location of First Harmful Event Relative to the Trafficway",
            "id": "oRhCbvy6",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-17",
            "answerOptions": [
                {
                    "text": "Gore",
                    "idCode": "0"
                },
                {
                    "text": "In Parking Lane or Zone",
                    "idCode": "1"
                },
                {
                    "text": "Median",
                    "idCode": "2"
                },
                {
                    "text": "Off-Roadway, Location Unknown",
                    "idCode": "3"
                },
                {
                    "text": "On Roadway",
                    "idCode": "4"
                },
                {
                    "text": "On Shoulder, Left Side",
                    "idCode": "5"
                },
                {
                    "text": "On Shoulder, Right Side",
                    "idCode": "6"
                },
                {
                    "text": "Outside Road/Right-of-Way",
                    "idCode": "7"
                },
                {
                    "text": "Roadside",
                    "idCode": "8"
                },
                {
                    "text": "Separator/Traffic Island",
                    "idCode": "9"
                },
                {
                    "text": "Unknown",
                    "idCode": "10"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Manner of Crash/ Collision Impact",
            "id": "KXoL8mdI",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-18",
            "helperText": "This question refers only to crashes where the first harmful event involves a collision between two motor vehicles.",
            "tooltip": "The figure below displays a diagram of the manner of collision.",
            "helperImg": "../image/manner_example.png",
            "answerOptions": [
                {
                    "text": "Not a Collision between Two Motor Vehicles In-transport",
                    "idCode": "0"
                },
                {
                    "text": "Angle",
                    "idCode": "1"
                },
                {
                    "text": "Front to Front",
                    "idCode": "2"
                },
                {
                    "text": "Front to Rear",
                    "idCode": "3"
                },
                {
                    "text": "Rear to Rear",
                    "idCode": "4"
                },
                {
                    "text": "Rear to Side",
                    "idCode": "5"
                },
                {
                    "text": "Sideswipe, Opposite Direction",
                    "idCode": "6"
                },
                {
                    "text": "Sideswipe, Same Direction",
                    "idCode": "7"
                },
                {
                    "text": "Single Vehicle Collision",
                    "idCode": "8"
                },
                {
                    "text": "Collision with a Parked Motor Vehicle",
                    "idCode": "9"
                },
                {
                    "text": "Other",
                    "idCode": "10"
                },
                {
                    "text": "Unknown",
                    "idCode": "11"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Source of Information Section",
            "id": "S3xImn49",
            "answerType": "header",
            "display": [
                "road"
            ],
            "humanReadableId": "road-19"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Source of Information",
            "id": "IGD5NNyh",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-20",
            "answerOptions": [
                {
                    "text": "Law Enforcement Agency",
                    "idCode": "0"
                },
                {
                    "text": "Civilian",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Law Enforcement Agency Identifier",
            "id": "VwPfe11r",
            "answerType": "openTextBox",
            "display": [
                "road"
            ],
            "humanReadableId": "road-21",
            "helperText": "9 character NCIC Originating Agency Identifier"
        },
        {
            "numOptionsAllowed": "2.0",
            "question": "Weather Conditions",
            "id": "u07WbEUL",
            "answerType": "advancedDropDown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-22",
            "helperText": "(choose up to 2)",
            "autoMethod": "weather",
            "answerOptions": [
                {
                    "text": "Clear",
                    "idCode": "0"
                },
                {
                    "text": "Cloudy",
                    "idCode": "1"
                },
                {
                    "text": "Blowing Sand, Soil, Dirt",
                    "idCode": "2"
                },
                {
                    "text": "Blowing Snow",
                    "idCode": "3"
                },
                {
                    "text": "Fog, Smog, Smoke",
                    "idCode": "4"
                },
                {
                    "text": "Freezing Rain or Freezing Drizzle",
                    "idCode": "5"
                },
                {
                    "text": "Rain",
                    "idCode": "6"
                },
                {
                    "text": "Severe Crosswinds",
                    "idCode": "7"
                },
                {
                    "text": "Sleet or Hail",
                    "idCode": "8"
                },
                {
                    "text": "Snow",
                    "idCode": "9"
                },
                {
                    "text": "Other",
                    "idCode": "10"
                },
                {
                    "text": "Unknown",
                    "idCode": "11"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Light Condition",
            "id": "DMwKNwQA",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-23",
            "answerOptions": [
                {
                    "text": "Daylight",
                    "idCode": "0"
                },
                {
                    "text": "Dawn/Dusk",
                    "idCode": "1"
                },
                {
                    "text": "Dark - Lighted",
                    "idCode": "2"
                },
                {
                    "text": "Dark - Not Lighted",
                    "idCode": "3"
                },
                {
                    "text": "Dark - Unknown Lighting",
                    "idCode": "4"
                },
                {
                    "text": "Other",
                    "idCode": "5"
                },
                {
                    "text": "Unknown",
                    "idCode": "6"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Roadway Surface Condition",
            "id": "psx5cEXm",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-24",
            "answerOptions": [
                {
                    "text": "Dry",
                    "idCode": "0"
                },
                {
                    "text": "Ice/Frost",
                    "idCode": "1"
                },
                {
                    "text": "Mud, Dirt, Gravel",
                    "idCode": "2"
                },
                {
                    "text": "Oil",
                    "idCode": "3"
                },
                {
                    "text": "Sand",
                    "idCode": "4"
                },
                {
                    "text": "Slush",
                    "idCode": "5"
                },
                {
                    "text": "Snow",
                    "idCode": "6"
                },
                {
                    "text": "Water (standing, moving)",
                    "idCode": "7"
                },
                {
                    "text": "Wet",
                    "idCode": "8"
                },
                {
                    "text": "Other",
                    "idCode": "9"
                },
                {
                    "text": "Unknown",
                    "idCode": "10"
                }
            ]
        },
        {
            "numOptionsAllowed": "2.0",
            "question": "Contributing Circumstances - Roadway Environment",
            "id": "ms4OGVRF",
            "answerType": "dropdownMultiSelect",
            "display": [
                "road"
            ],
            "humanReadableId": "road-25",
            "helperText": "(choose up to 2)",
            "answerOptions": [
                {
                    "text": "None",
                    "idCode": "0"
                },
                {
                    "text": "Animal(s)",
                    "idCode": "1"
                },
                {
                    "text": "Debris",
                    "idCode": "2"
                },
                {
                    "text": "Glare",
                    "idCode": "3"
                },
                {
                    "text": "Non-Highway Work",
                    "idCode": "4"
                },
                {
                    "text": "Obstructed Crosswalks",
                    "idCode": "5"
                },
                {
                    "text": "Obstruction in Roadway",
                    "idCode": "6"
                },
                {
                    "text": "Prior Crash",
                    "idCode": "7"
                },
                {
                    "text": "Prior Non-Recurring Incident",
                    "idCode": "8"
                },
                {
                    "text": "Regular Congestion",
                    "idCode": "9"
                },
                {
                    "text": "Related to a Bus Stop",
                    "idCode": "10"
                },
                {
                    "text": "Road Surface Condition (wet, icy, snow, slush, etc.)",
                    "idCode": "11"
                },
                {
                    "text": "Ruts, Holes, Bumps",
                    "idCode": "12"
                },
                {
                    "text": "Shoulders (none, low, soft, high)",
                    "idCode": "13"
                },
                {
                    "text": "Toll Booth/Plaza Related",
                    "idCode": "14"
                },
                {
                    "text": "Traffic Control Device",
                    "idCode": "15"
                },
                {
                    "text": "Traffic Incident",
                    "idCode": "16"
                },
                {
                    "text": "Visual Obstruction(s)",
                    "idCode": "17"
                },
                {
                    "text": "Weather Conditions",
                    "idCode": "18"
                },
                {
                    "text": "Work Zone (construction/maintenance/utility)",
                    "idCode": "19"
                },
                {
                    "text": "Worn, Travel-Polished Surface",
                    "idCode": "20"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Relation to Junction Section",
            "id": "XgWpu2Tk",
            "answerType": "header",
            "display": [
                "road"
            ],
            "humanReadableId": "road-26"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Within Interchange Area?",
            "id": "2cnmGpDV",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-27",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Specific Location",
            "id": "OeRyvF4v",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-28",
            "answerOptions": [
                {
                    "text": "Not an Interchange Area",
                    "idCode": "0"
                },
                {
                    "text": "Acceleration/Deceleration Lane",
                    "idCode": "1"
                },
                {
                    "text": "Crossover-Related",
                    "idCode": "2"
                },
                {
                    "text": "Driveway Access or Related",
                    "idCode": "3"
                },
                {
                    "text": "Entrance/Exit Ramp or Related",
                    "idCode": "4"
                },
                {
                    "text": "Intersection or Related",
                    "idCode": "5"
                },
                {
                    "text": "Non-Junction",
                    "idCode": "6"
                },
                {
                    "text": "Railway Grade Crossing",
                    "idCode": "7"
                },
                {
                    "text": "Shared-Use Path or Trail",
                    "idCode": "8"
                },
                {
                    "text": "Through Roadway",
                    "idCode": "9"
                },
                {
                    "text": "Other Location Not Listed Above Within an Interchange Area (median, shoulder an",
                    "idCode": "10"
                },
                {
                    "text": "Unknown",
                    "idCode": "11"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Type of Intersection",
            "id": "fwfC3bVi",
            "answerType": "header",
            "display": [
                "road"
            ],
            "humanReadableId": "road-29"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Number of Approaches",
            "id": "fvIxja95",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-30",
            "answerOptions": [
                {
                    "text": "Not an Intersection",
                    "idCode": "0"
                },
                {
                    "text": "Two",
                    "idCode": "1"
                },
                {
                    "text": "Three",
                    "idCode": "2"
                },
                {
                    "text": "Four",
                    "idCode": "3"
                },
                {
                    "text": "Five or more",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Overall Intersection Geometry",
            "id": "UwUUqXFT",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-31",
            "answerOptions": [
                {
                    "text": "Angled/Skewed",
                    "idCode": "0"
                },
                {
                    "text": "Roundabout/Traffic Circle",
                    "idCode": "1"
                },
                {
                    "text": "Perpendicular",
                    "idCode": "2"
                },
                {
                    "text": "Not Applicable/Not an Intersection",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Overall Traffic Control Device",
            "id": "Rq1LXZwZ",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-32",
            "answerOptions": [
                {
                    "text": "Signalized",
                    "idCode": "0"
                },
                {
                    "text": "Stop - All Way",
                    "idCode": "1"
                },
                {
                    "text": "Stop - Partial",
                    "idCode": "2"
                },
                {
                    "text": "Yield",
                    "idCode": "3"
                },
                {
                    "text": "No Controls",
                    "idCode": "4"
                },
                {
                    "text": "Not Applicable/Not an Intersection",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "School Bus-Related?",
            "id": "gDFQkFn9",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-33",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes, School Bus Directly Involved",
                    "idCode": "1"
                },
                {
                    "text": "Yes, School Bus Indirectly Involved",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Was the crash in a construction, maintenance, or utility work zone or was it related to activity within a work zone?",
            "id": "34oHCyQs",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-34",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Work Zone-Related",
            "id": "DtJB6lqd",
            "answerType": "header",
            "display": [
                "road"
            ],
            "humanReadableId": "road-35",
            "helperText": "(Constrution/Maintenance/Utility)",
            "questionDependency": [
                {
                    "dependencyUid": "34oHCyQs",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Location of the Crash",
            "id": "H8Nc9OMd",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-36",
            "questionDependency": [
                {
                    "dependencyUid": "34oHCyQs",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Before the First Work Zone Warning Sign",
                    "idCode": "0"
                },
                {
                    "text": "Advance Warning Area",
                    "idCode": "1"
                },
                {
                    "text": "Transition Area",
                    "idCode": "2"
                },
                {
                    "text": "Activity Area",
                    "idCode": "3"
                },
                {
                    "text": "Termination Area",
                    "idCode": "4"
                },
                {
                    "text": "Not Applicable/Not Within or Related to a Work Zone",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Type of Work Zone",
            "id": "h6LUiplf",
            "answerType": "dropdown",
            "display": [
                "road"
            ],
            "humanReadableId": "road-37",
            "questionDependency": [
                {
                    "dependencyUid": "34oHCyQs",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Lane Closure",
                    "idCode": "0"
                },
                {
                    "text": "Lane Shift/Crossover",
                    "idCode": "1"
                },
                {
                    "text": "Work on Shoulder or Median",
                    "idCode": "2"
                },
                {
                    "text": "Intermittent or Moving Work",
                    "idCode": "3"
                },
                {
                    "text": "Other Type of Work Zone",
                    "idCode": "4"
                },
                {
                    "text": "Not Applicable/Not Within or Related to a Work Zone",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Workers Present?",
            "id": "3pIa77uR",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-38",
            "questionDependency": [
                {
                    "dependencyUid": "34oHCyQs",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Not Applicable/Not Within or Related to a Work Zone",
                    "idCode": "2"
                },
                {
                    "text": "Unknown",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Law Enforcement Present?",
            "id": "NvS2JTFP",
            "answerType": "multiButton",
            "display": [
                "road"
            ],
            "humanReadableId": "road-39",
            "questionDependency": [
                {
                    "dependencyUid": "34oHCyQs",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Not Applicable/Not Within or Related to a Work Zone",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Crash Description",
            "id": "KxicONP1",
            "answerType": "largeTextField",
            "display": [
                "road"
            ],
            "humanReadableId": "road-40"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's First Name",
            "id": "YyQ6jMwd",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-0"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's Middle Initial",
            "id": "SulL32si",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-1"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's Last Name",
            "id": "zOGjRlMJ",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-2"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's Street Address",
            "id": "ywUJNXkj",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-3",
            "helperText": "Street Address 1; Street Address 2"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's City/Town",
            "id": "4G5ht6pl",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-4"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's State",
            "id": "3g8Oxu93",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-5"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's ZIP Code",
            "id": "crxPGHSm",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-6"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Insurance Information",
            "id": "yuQ3Zjt2",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-7"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Insurance Company Name",
            "id": "TDkAb1u9",
            "answerType": "openTextBoxWithSelection",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-8",
            "answerOptions": [
                {
                    "text": "Uninsured",
                    "idCode": "0"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "NAIC #",
            "id": "iWGTReJ5",
            "answerType": "openTextBoxWithSelection",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-9",
            "answerOptions": [
                {
                    "text": "Unknown",
                    "idCode": "0"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Policy #",
            "id": "RGPLYKWA",
            "answerType": "openTextBoxWithSelection",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-10",
            "answerOptions": [
                {
                    "text": "Unknown",
                    "idCode": "0"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Identification Number",
            "id": "Bw7d2KTr",
            "answerType": "advancedOpenTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-11",
            "helperText": "(VIN)",
            "autoMethod": "VINCamera"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Motor Vehicle Unit Type ",
            "id": "Dpk0wqnI",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-12",
            "answerOptions": [
                {
                    "text": "Motor Vehicle in Transport",
                    "idCode": "0"
                },
                {
                    "text": "Parked Motor Vehicle",
                    "idCode": "1"
                },
                {
                    "text": "Working Vehicle/Equipment",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Registration State and Year",
            "id": "sXvB0sJf",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-13"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Identifier",
            "id": "d7zJ5NIq",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-14",
            "helperText": "Might be zip code"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Registration",
            "id": "QoX1IOdG",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-15",
            "helperText": "Year of Motor Vehicle Registration (YYYY)"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle License Plate Number",
            "id": "vDnyDl5t",
            "answerType": "advancedOpenTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-16",
            "autoMethod": "plateCamera"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Make",
            "id": "eZglw8FV",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-17"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Model",
            "id": "29h5OiPC",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-18"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Model Year",
            "id": "C0rbnXHC",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-19",
            "helperText": "(YYYY)"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Body Type Category",
            "id": "IOCCjh0h",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-20"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Body Type Category",
            "id": "MMkwgaog",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-21"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Vehicle Size",
            "id": "CynWHwxP",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-22",
            "answerOptions": [
                {
                    "text": "Light (10,000 lbs. or less GVWR/GCWR)",
                    "idCode": "0"
                },
                {
                    "text": "Medium (10,001 - 26,000 lbs. GVWR/GCWR)",
                    "idCode": "1"
                },
                {
                    "text": "Heavy (Greater than 26,000 lbs. GVWR/GCWR)",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Number of Trailing Units",
            "id": "ovVntlnU",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-23",
            "helperText": "Note: GVWR is used for single-unit trucks and other body types. GCWR is used for combination trucks or any vehicle with a trailing unit",
            "answerOptions": [
                {
                    "text": "1",
                    "idCode": "0"
                },
                {
                    "text": "2",
                    "idCode": "1"
                },
                {
                    "text": "3",
                    "idCode": "2"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Did this motor vehicle display a hazardous materials (HM) placard?",
            "id": "sM5HGjcV",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-24",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Total Occupants in Motor Vehicle",
            "id": "CTfb8pdV",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-25"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Special Function of Motor Vehicle in Transport",
            "id": "4vrmnvfC",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-26",
            "answerOptions": [
                {
                    "text": "No Special Function",
                    "idCode": "0"
                },
                {
                    "text": "Bus - School (Public or Private)",
                    "idCode": "1"
                },
                {
                    "text": "Bus - Childcare/Daycare",
                    "idCode": "2"
                },
                {
                    "text": "Bus - Transit/Commuter",
                    "idCode": "3"
                },
                {
                    "text": "Bus - Charter/Tour",
                    "idCode": "4"
                },
                {
                    "text": "Bus - Intercity",
                    "idCode": "5"
                },
                {
                    "text": "Bus - Shuttle",
                    "idCode": "6"
                },
                {
                    "text": "Bus - Other",
                    "idCode": "7"
                },
                {
                    "text": "Farm Vehicle",
                    "idCode": "8"
                },
                {
                    "text": "Fire Truck",
                    "idCode": "9"
                },
                {
                    "text": "Highway/Maintenance",
                    "idCode": "10"
                },
                {
                    "text": "Mail Carrier",
                    "idCode": "11"
                },
                {
                    "text": "Military",
                    "idCode": "12"
                },
                {
                    "text": "Ambulance",
                    "idCode": "13"
                },
                {
                    "text": "Police",
                    "idCode": "14"
                },
                {
                    "text": "Public Utility",
                    "idCode": "15"
                },
                {
                    "text": "Non-Transport Emergency Services Vehicle",
                    "idCode": "16"
                },
                {
                    "text": "Safety Service Patrols - Incident Response",
                    "idCode": "17"
                },
                {
                    "text": "Other Incident Response",
                    "idCode": "18"
                },
                {
                    "text": "Rental Truck (Over 10,000 lbs.)",
                    "idCode": "19"
                },
                {
                    "text": "Towing - Incident Response",
                    "idCode": "20"
                },
                {
                    "text": "Truck Acting as Crash Attenuator",
                    "idCode": "21"
                },
                {
                    "text": "Taxi",
                    "idCode": "22"
                },
                {
                    "text": "Vehicle Used for Electronic Ride-hailing (transportation network company)",
                    "idCode": "23"
                },
                {
                    "text": "Other",
                    "idCode": "24"
                },
                {
                    "text": "Unknown",
                    "idCode": "25"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Emergency Motor Vehicle Use",
            "id": "CFa8RCtt",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-27",
            "answerOptions": [
                {
                    "text": "Not Applicable",
                    "idCode": "0"
                },
                {
                    "text": "Non-Emergency, Non-Transport",
                    "idCode": "1"
                },
                {
                    "text": "Non-Emergency Transport",
                    "idCode": "2"
                },
                {
                    "text": "Emergency Operation, Emergency Warning Equipment Not in Use",
                    "idCode": "3"
                },
                {
                    "text": "Emergency Operation, Emergency Warning Equipment in Use",
                    "idCode": "4"
                },
                {
                    "text": "Unknown",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Posted/ Statutory Speed Limit",
            "id": "wAqrAfiG",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-28"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Direction of Travel Before Crash",
            "id": "CP4soemD",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-29",
            "answerOptions": [
                {
                    "text": "Not on Roadway",
                    "idCode": "0"
                },
                {
                    "text": "Northbound",
                    "idCode": "1"
                },
                {
                    "text": "Eastbound",
                    "idCode": "2"
                },
                {
                    "text": "Southbound",
                    "idCode": "3"
                },
                {
                    "text": "Westbound",
                    "idCode": "4"
                },
                {
                    "text": "Unknown",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Trafficway Description",
            "id": "Ahz6r67I",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-30"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Travel Directions",
            "id": "udnyu4F5",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-31",
            "answerOptions": [
                {
                    "text": "One-Way",
                    "idCode": "0"
                },
                {
                    "text": "Two-Way",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Divided?",
            "id": "u5KrpsMu",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-32",
            "answerOptions": [
                {
                    "text": "Not Divided",
                    "idCode": "0"
                },
                {
                    "text": "Not Divided, With a Continuous Left-Turn Lane",
                    "idCode": "1"
                },
                {
                    "text": "Divided, Flush Median (greater than 4ft wide)",
                    "idCode": "2"
                },
                {
                    "text": "Divided, Raised Median (curbed)",
                    "idCode": "3"
                },
                {
                    "text": "Divided, Depressed Median",
                    "idCode": "4"
                },
                {
                    "text": "Unknown",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Barrier Type",
            "id": "4P4o8TWH",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-33",
            "answerOptions": [
                {
                    "text": "No Barrier",
                    "idCode": "0"
                },
                {
                    "text": "Cable Barrier",
                    "idCode": "1"
                },
                {
                    "text": "Concrete Barrier (e.g. Jersey Barrier)",
                    "idCode": "2"
                },
                {
                    "text": "Earth Embankment",
                    "idCode": "3"
                },
                {
                    "text": "Guardrail",
                    "idCode": "4"
                },
                {
                    "text": "Other",
                    "idCode": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "HOV/HOT Lanes",
            "id": "Gk088QR4",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-34",
            "answerOptions": [
                {
                    "text": "None present",
                    "idCode": "0"
                },
                {
                    "text": "Separated, Barrier, Flush (greater than 4ft wide), Raised or Depressed Median",
                    "idCode": "1"
                },
                {
                    "text": "Not Separated, Painted Pavement Markings, Post-Mounted Delineators",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Crash Related to HOV/HOT Lane?",
            "id": "Uzw63nI0",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-35",
            "questionDependency": [
                {
                    "dependencyUid": "Gk088QR4",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "Gk088QR4",
                    "dependencyOptionCode": "2"
                }
            ],
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Total Lanes in Roadway",
            "id": "iTScm08u",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-36"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Enter the total through lanes, excluding auxiliary lanes.",
            "id": "FdF7XvAQ",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-37",
            "helperText": "If trafficway is divided, total only lanes in vehicle's direction"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Enter the total auxiliary lanes",
            "id": "JwQN2ENk",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-38",
            "helperText": "If trafficway is divided, total only lanes in vehicle's direction"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Roadway Alignment and Grade",
            "id": "nuD8IERF",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-39"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Horizontal Alignment",
            "id": "UigT0ygk",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-40",
            "answerOptions": [
                {
                    "text": "Straight",
                    "idCode": "0"
                },
                {
                    "text": "Curve Left",
                    "idCode": "1"
                },
                {
                    "text": "Curve Right",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Grade",
            "id": "tFYqNzmA",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-41",
            "answerOptions": [
                {
                    "text": "Level",
                    "idCode": "0"
                },
                {
                    "text": "Uphill",
                    "idCode": "1"
                },
                {
                    "text": "Hillcrest",
                    "idCode": "2"
                },
                {
                    "text": "Downhill",
                    "idCode": "3"
                },
                {
                    "text": "Sag (bottom)",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Traffic Control Device Type",
            "id": "LEx2ZDxu",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-42"
        },
        {
            "numOptionsAllowed": "4.0",
            "question": "TCD Type(s)",
            "id": "xBm1Bisf",
            "answerType": "dropdownMultiSelect",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-43",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "text": "No Controls",
                    "idCode": "0"
                },
                {
                    "text": "Person (including flagger, law enforcement, crossing guard, etc.)",
                    "idCode": "1"
                },
                {
                    "text": "Bicycle Crossing Sign",
                    "idCode": "2"
                },
                {
                    "text": "\"Curve Ahead\" Warning Sign",
                    "idCode": "3"
                },
                {
                    "text": "\"Intersection Ahead\" Warning Sign",
                    "idCode": "4"
                },
                {
                    "text": "Other Warning Sign",
                    "idCode": "5"
                },
                {
                    "text": "Pedestrian Crossing Sign",
                    "idCode": "6"
                },
                {
                    "text": "Railroad Crossing Sign",
                    "idCode": "7"
                },
                {
                    "text": "\"Reduce Speed Ahead\" Warning Sign",
                    "idCode": "8"
                },
                {
                    "text": "School Zone Sign",
                    "idCode": "9"
                },
                {
                    "text": "Stop Sign",
                    "idCode": "10"
                },
                {
                    "text": "Yield Sign",
                    "idCode": "11"
                },
                {
                    "text": "Flashing Railroad Crossing Signal (may include gates)",
                    "idCode": "12"
                },
                {
                    "text": "Flashing School Zone Signal",
                    "idCode": "13"
                },
                {
                    "text": "Flashing Traffic Control Signal",
                    "idCode": "14"
                },
                {
                    "text": "Lane Use Control Signal",
                    "idCode": "15"
                },
                {
                    "text": "Other Signal",
                    "idCode": "16"
                },
                {
                    "text": "Ramp Meter Signal",
                    "idCode": "17"
                },
                {
                    "text": "Traffic Control Signal",
                    "idCode": "18"
                },
                {
                    "text": "Bicycle Crossing",
                    "idCode": "19"
                },
                {
                    "text": "Other Pavement Marking (excluding edgelines, centerlines, or lane lines)",
                    "idCode": "20"
                },
                {
                    "text": "Pedestrian Crossing",
                    "idCode": "21"
                },
                {
                    "text": "Railroad Crossing",
                    "idCode": "22"
                },
                {
                    "text": "School Zone",
                    "idCode": "23"
                },
                {
                    "text": "No Controls",
                    "idCode": "24"
                },
                {
                    "text": "Person (including flagger, law enforcement, crossing guard, etc.)",
                    "idCode": "25"
                },
                {
                    "text": "Other",
                    "idCode": "26"
                },
                {
                    "text": "Unknown",
                    "idCode": "27"
                }
            ]
        },
        {
            "numOptionsAllowed": "4.0",
            "question": "Are any Inoperative or Missing?",
            "id": "YLcktHvs",
            "answerType": "dropdownMultiSelect",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-44",
            "helperText": "(choose up to 4)",
            "questionDependency": [
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "3"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "4"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "5"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "6"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "7"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "8"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "9"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "10"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "11"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "12"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "13"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "14"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "15"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "16"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "17"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "18"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "19"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "20"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "21"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "22"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "23"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "24"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "25"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "26"
                },
                {
                    "dependencyUid": "xBm1Bisf",
                    "dependencyOptionCode": "27"
                }
            ],
            "answerOptions": [
                {
                    "text": "None inoperative or missing",
                    "idCode": "0"
                },
                {
                    "text": "Person (including flagger, law enforcement, crossing guard, etc.)",
                    "idCode": "1"
                },
                {
                    "text": "Bicycle Crossing Sign",
                    "idCode": "2"
                },
                {
                    "text": "\"Curve Ahead\" Warning Sign",
                    "idCode": "3"
                },
                {
                    "text": "\"Intersection Ahead\" Warning Sign",
                    "idCode": "4"
                },
                {
                    "text": "Other Warning Sign",
                    "idCode": "5"
                },
                {
                    "text": "Pedestrian Crossing Sign",
                    "idCode": "6"
                },
                {
                    "text": "Railroad Crossing Sign",
                    "idCode": "7"
                },
                {
                    "text": "\"Reduce Speed Ahead\" Warning Sign",
                    "idCode": "8"
                },
                {
                    "text": "School Zone Sign",
                    "idCode": "9"
                },
                {
                    "text": "Stop Sign",
                    "idCode": "10"
                },
                {
                    "text": "Yield Sign",
                    "idCode": "11"
                },
                {
                    "text": "Flashing Railroad Crossing Signal (may include gates)",
                    "idCode": "12"
                },
                {
                    "text": "Flashing School Zone Signal",
                    "idCode": "13"
                },
                {
                    "text": "Flashing Traffic Control Signal",
                    "idCode": "14"
                },
                {
                    "text": "Lane Use Control Signal",
                    "idCode": "15"
                },
                {
                    "text": "Other Signal",
                    "idCode": "16"
                },
                {
                    "text": "Ramp Meter Signal",
                    "idCode": "17"
                },
                {
                    "text": "Traffic Control Signal",
                    "idCode": "18"
                },
                {
                    "text": "Bicycle Crossing",
                    "idCode": "19"
                },
                {
                    "text": "Other Pavement Marking (excluding edgelines, centerlines, or lane lines)",
                    "idCode": "20"
                },
                {
                    "text": "Pedestrian Crossing",
                    "idCode": "21"
                },
                {
                    "text": "Railroad Crossing",
                    "idCode": "22"
                },
                {
                    "text": "School Zone",
                    "idCode": "23"
                },
                {
                    "text": "No Controls",
                    "idCode": "24"
                },
                {
                    "text": "Person (including flagger, law enforcement, crossing guard, etc.)",
                    "idCode": "25"
                },
                {
                    "text": "Other",
                    "idCode": "26"
                },
                {
                    "text": "Unknown",
                    "idCode": "27"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Motor Vehicle Maneuver/Action",
            "id": "DJ4YPDuQ",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-45",
            "answerOptions": [
                {
                    "text": "Movements Essentially Straight Ahead",
                    "idCode": "0"
                },
                {
                    "text": "Backing",
                    "idCode": "1"
                },
                {
                    "text": "Changing Lanes",
                    "idCode": "2"
                },
                {
                    "text": "Entering Traffic Lane",
                    "idCode": "3"
                },
                {
                    "text": "Leaving Traffic Lane",
                    "idCode": "4"
                },
                {
                    "text": "Making U-Turn",
                    "idCode": "5"
                },
                {
                    "text": "Negotiating a Curve",
                    "idCode": "6"
                },
                {
                    "text": "Overtaking/Passing",
                    "idCode": "7"
                },
                {
                    "text": "Parked",
                    "idCode": "8"
                },
                {
                    "text": "Slowing",
                    "idCode": "9"
                },
                {
                    "text": "Stopped in Traffic",
                    "idCode": "10"
                },
                {
                    "text": "Turning Left",
                    "idCode": "11"
                },
                {
                    "text": "Turning Right",
                    "idCode": "12"
                },
                {
                    "text": "Other",
                    "idCode": "13"
                },
                {
                    "text": "Unknown",
                    "idCode": "14"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Damage",
            "id": "i7hJdGR6",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-46"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Initial Point of Contact",
            "id": "4KpRmZXB",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-47",
            "helperText": "Provide the approximate contact point on this vehicle associated with this vehicle’s initial harmful event.",
            "helperImg": "../image/initial_contact.png",
            "answerOptions": [
                {
                    "text": "Non-Collision",
                    "idCode": "0"
                },
                {
                    "text": "(Clock Position) 1",
                    "idCode": "1"
                },
                {
                    "text": "(Clock Position) 2",
                    "idCode": "2"
                },
                {
                    "text": "(Clock Position) 3",
                    "idCode": "3"
                },
                {
                    "text": "(Clock Position) 4",
                    "idCode": "4"
                },
                {
                    "text": "(Clock Position) 5",
                    "idCode": "5"
                },
                {
                    "text": "(Clock Position) 6",
                    "idCode": "6"
                },
                {
                    "text": "(Clock Position) 7",
                    "idCode": "7"
                },
                {
                    "text": "(Clock Position) 8",
                    "idCode": "8"
                },
                {
                    "text": "(Clock Position) 9",
                    "idCode": "9"
                },
                {
                    "text": "(Clock Position) 10",
                    "idCode": "10"
                },
                {
                    "text": "(Clock Position) 11",
                    "idCode": "11"
                },
                {
                    "text": "(Clock Position) 12",
                    "idCode": "12"
                },
                {
                    "text": "Top",
                    "idCode": "13"
                },
                {
                    "text": "Undercarriage",
                    "idCode": "14"
                },
                {
                    "text": "Cargo Loss",
                    "idCode": "15"
                },
                {
                    "text": "Vehicle Not at Scene",
                    "idCode": "16"
                },
                {
                    "text": "Unknown",
                    "idCode": "17"
                }
            ]
        },
        {
            "numOptionsAllowed": "13.0",
            "question": "Location of Damage Area(s)",
            "id": "lZDkbTdw",
            "answerType": "dropdownMultiSelect",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-48",
            "helperText": "(choose up to 13)",
            "questionDependency": [
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "3"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "4"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "5"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "6"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "7"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "8"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "9"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "10"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "11"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "12"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "13"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "14"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "15"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "16"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "17"
                }
            ],
            "answerOptions": [
                {
                    "text": "(Clock Position) 1",
                    "idCode": "0"
                },
                {
                    "text": "(Clock Position) 2",
                    "idCode": "1"
                },
                {
                    "text": "(Clock Position) 3",
                    "idCode": "2"
                },
                {
                    "text": "(Clock Position) 4",
                    "idCode": "3"
                },
                {
                    "text": "(Clock Position) 5",
                    "idCode": "4"
                },
                {
                    "text": "(Clock Position) 6",
                    "idCode": "5"
                },
                {
                    "text": "(Clock Position) 7",
                    "idCode": "6"
                },
                {
                    "text": "(Clock Position) 8",
                    "idCode": "7"
                },
                {
                    "text": "(Clock Position) 9",
                    "idCode": "8"
                },
                {
                    "text": "(Clock Position) 10",
                    "idCode": "9"
                },
                {
                    "text": "(Clock Position) 11",
                    "idCode": "10"
                },
                {
                    "text": "(Clock Position) 12",
                    "idCode": "11"
                },
                {
                    "text": "Top",
                    "idCode": "12"
                },
                {
                    "text": "Undercarriage",
                    "idCode": "13"
                },
                {
                    "text": "All Areas",
                    "idCode": "14"
                },
                {
                    "text": "No Damage",
                    "idCode": "15"
                },
                {
                    "text": "Vehicle Not at Scene",
                    "idCode": "16"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Resulting Extent of Damage",
            "id": "a1fPOVyS",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-49",
            "questionDependency": [
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "3"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "4"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "5"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "6"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "7"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "8"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "9"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "10"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "11"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "12"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "13"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "14"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "15"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "16"
                },
                {
                    "dependencyUid": "4KpRmZXB",
                    "dependencyOptionCode": "17"
                }
            ],
            "answerOptions": [
                {
                    "text": "No Damage",
                    "idCode": "0"
                },
                {
                    "text": "Minor Damage",
                    "idCode": "1"
                },
                {
                    "text": "Functional Damage",
                    "idCode": "2"
                },
                {
                    "text": "Disabling Damage",
                    "idCode": "3"
                },
                {
                    "text": "Vehicle Not at Scene",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "4.0",
            "question": "Sequence of Events",
            "id": "N1NDCJhB",
            "answerType": "dropdownMultiSelect",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-50",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "text": "Cross Centerline",
                    "idCode": "0"
                },
                {
                    "text": "Cross Median",
                    "idCode": "1"
                },
                {
                    "text": "End Departure (T-intersection, dead-end, etc.)",
                    "idCode": "2"
                },
                {
                    "text": "Downhill Runaway",
                    "idCode": "3"
                },
                {
                    "text": "Equipment Failure (blown tire, brake failure, etc.)",
                    "idCode": "4"
                },
                {
                    "text": "Ran Off Roadway Left",
                    "idCode": "5"
                },
                {
                    "text": "Ran Off Roadway Right",
                    "idCode": "6"
                },
                {
                    "text": "Reentering Roadway",
                    "idCode": "7"
                },
                {
                    "text": "Separation of Units",
                    "idCode": "8"
                },
                {
                    "text": "Other Non-Harmful Event",
                    "idCode": "9"
                },
                {
                    "text": "Cargo/Equipment Loss or Shift",
                    "idCode": "10"
                },
                {
                    "text": "Fell/Jumped From Motor Vehicle",
                    "idCode": "11"
                },
                {
                    "text": "Fire/Explosion",
                    "idCode": "12"
                },
                {
                    "text": "Immersion, Full or Partial",
                    "idCode": "13"
                },
                {
                    "text": "Jackknife",
                    "idCode": "14"
                },
                {
                    "text": "Other Non-Collision Harmful Event",
                    "idCode": "15"
                },
                {
                    "text": "Overturn/Rollover",
                    "idCode": "16"
                },
                {
                    "text": "Thrown or Falling Object",
                    "idCode": "17"
                },
                {
                    "text": "Animal (live)",
                    "idCode": "18"
                },
                {
                    "text": "Motor Vehicle in Transport",
                    "idCode": "19"
                },
                {
                    "text": "Other Non-Fixed Object",
                    "idCode": "20"
                },
                {
                    "text": "Other Non-Motorist",
                    "idCode": "21"
                },
                {
                    "text": "Parked Motor Vehicle",
                    "idCode": "22"
                },
                {
                    "text": "Pedalcycle",
                    "idCode": "23"
                },
                {
                    "text": "Pedestrian",
                    "idCode": "24"
                },
                {
                    "text": "Railway Vehicle (train, engine)",
                    "idCode": "25"
                },
                {
                    "text": "Strikes Object at Rest from MV in Transport",
                    "idCode": "26"
                },
                {
                    "text": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                    "idCode": "27"
                },
                {
                    "text": "Work Zone/Maintenance Equipment",
                    "idCode": "28"
                },
                {
                    "text": "Bridge Overhead Structure",
                    "idCode": "29"
                },
                {
                    "text": "Bridge Pier or Support",
                    "idCode": "30"
                },
                {
                    "text": "Bridge Rail",
                    "idCode": "31"
                },
                {
                    "text": "Cable Barrier",
                    "idCode": "32"
                },
                {
                    "text": "Concrete Traffic Barrier",
                    "idCode": "33"
                },
                {
                    "text": "Culvert",
                    "idCode": "34"
                },
                {
                    "text": "Curb",
                    "idCode": "35"
                },
                {
                    "text": "Ditch",
                    "idCode": "36"
                },
                {
                    "text": "Embankment",
                    "idCode": "37"
                },
                {
                    "text": "Fence",
                    "idCode": "38"
                },
                {
                    "text": "Guardrail End Terminal",
                    "idCode": "39"
                },
                {
                    "text": "Guardrail Face",
                    "idCode": "40"
                },
                {
                    "text": "Impact Attenuator/Crash Cushion",
                    "idCode": "41"
                },
                {
                    "text": "Mailbox",
                    "idCode": "42"
                },
                {
                    "text": "Other Fixed Object (wall, building, tunnel, etc.)",
                    "idCode": "43"
                },
                {
                    "text": "Other Post, Pole or Support",
                    "idCode": "44"
                },
                {
                    "text": "Other Traffic Barrier",
                    "idCode": "45"
                },
                {
                    "text": "Traffic Sign Support",
                    "idCode": "46"
                },
                {
                    "text": "Traffic Signal Support",
                    "idCode": "47"
                },
                {
                    "text": "Tree (standing)",
                    "idCode": "48"
                },
                {
                    "text": "Utility Pole/Light Support",
                    "idCode": "49"
                },
                {
                    "text": "Unknown Fixed Object",
                    "idCode": "50"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Most Harmful Event for this Motor Vehicle",
            "id": "9WuImDSX",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-51",
            "answerOptions": [
                {
                    "text": "Cargo/Equipment Loss or Shift",
                    "idCode": "0"
                },
                {
                    "text": "Fell/Jumped From Motor Vehicle",
                    "idCode": "1"
                },
                {
                    "text": "Fire/Explosion",
                    "idCode": "2"
                },
                {
                    "text": "Immersion, Full or Partial",
                    "idCode": "3"
                },
                {
                    "text": "Jackknife",
                    "idCode": "4"
                },
                {
                    "text": "Other Non-Collision Harmful Event",
                    "idCode": "5"
                },
                {
                    "text": "Overturn/Rollover",
                    "idCode": "6"
                },
                {
                    "text": "Thrown or Falling Object",
                    "idCode": "7"
                },
                {
                    "text": "Animal (live)",
                    "idCode": "8"
                },
                {
                    "text": "Motor Vehicle in Transport",
                    "idCode": "9"
                },
                {
                    "text": "Other Non-Fixed Object",
                    "idCode": "10"
                },
                {
                    "text": "Other Non-Motorist",
                    "idCode": "11"
                },
                {
                    "text": "Parked Motor Vehicle",
                    "idCode": "12"
                },
                {
                    "text": "Pedalcycle",
                    "idCode": "13"
                },
                {
                    "text": "Pedestrian",
                    "idCode": "14"
                },
                {
                    "text": "Railway Vehicle (train, engine)",
                    "idCode": "15"
                },
                {
                    "text": "Strikes Object at Rest from MV in Transport",
                    "idCode": "16"
                },
                {
                    "text": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                    "idCode": "17"
                },
                {
                    "text": "Work Zone / Maintenance Equipment",
                    "idCode": "18"
                },
                {
                    "text": "Bridge Overhead Structure",
                    "idCode": "19"
                },
                {
                    "text": "Bridge Pier or Support",
                    "idCode": "20"
                },
                {
                    "text": "Bridge Rail",
                    "idCode": "21"
                },
                {
                    "text": "Cable Barrier",
                    "idCode": "22"
                },
                {
                    "text": "Concrete Traffic Barrier",
                    "idCode": "23"
                },
                {
                    "text": "Culvert",
                    "idCode": "24"
                },
                {
                    "text": "Curb",
                    "idCode": "25"
                },
                {
                    "text": "Ditch",
                    "idCode": "26"
                },
                {
                    "text": "Embankment",
                    "idCode": "27"
                },
                {
                    "text": "Fence",
                    "idCode": "28"
                },
                {
                    "text": "Guardrail End Terminal",
                    "idCode": "29"
                },
                {
                    "text": "Guardrail Face",
                    "idCode": "30"
                },
                {
                    "text": "Impact Attenuator/Crash Cushion",
                    "idCode": "31"
                },
                {
                    "text": "Mailbox",
                    "idCode": "32"
                },
                {
                    "text": "Other Fixed Object (wall, building, tunnel, etc.)",
                    "idCode": "33"
                },
                {
                    "text": "Other Post, Pole or Support",
                    "idCode": "34"
                },
                {
                    "text": "Other Traffic Barrier",
                    "idCode": "35"
                },
                {
                    "text": "Traffic Sign Support",
                    "idCode": "36"
                },
                {
                    "text": "Traffic Signal Support",
                    "idCode": "37"
                },
                {
                    "text": "Tree (standing)",
                    "idCode": "38"
                },
                {
                    "text": "Utility Pole/Light Support",
                    "idCode": "39"
                },
                {
                    "text": "Unknown Collision With Fixed Object",
                    "idCode": "40"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Hit and Run",
            "id": "4EHCUQHM",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-52",
            "answerOptions": [
                {
                    "text": "No, Did Not Leave Scene",
                    "idCode": "0"
                },
                {
                    "text": "Yes, Driver or Car and Driver Left Scene",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Towed Due to Disabling Damage",
            "id": "pTV8x6So",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-53",
            "answerOptions": [
                {
                    "text": "Not towed",
                    "idCode": "0"
                },
                {
                    "text": "Towed, But Not Due to Disabling Damage",
                    "idCode": "1"
                },
                {
                    "text": "Towed Due to Disabling Damage",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Contributing Circumstances, Motor Vehicle",
            "id": "PzKUFMw0",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-54",
            "answerOptions": [
                {
                    "text": "None",
                    "idCode": "0"
                },
                {
                    "text": "Brakes",
                    "idCode": "1"
                },
                {
                    "text": "Exhaust System",
                    "idCode": "2"
                },
                {
                    "text": "Body, Doors",
                    "idCode": "3"
                },
                {
                    "text": "Steering",
                    "idCode": "4"
                },
                {
                    "text": "Power Train",
                    "idCode": "5"
                },
                {
                    "text": "Suspension",
                    "idCode": "6"
                },
                {
                    "text": "Tires",
                    "idCode": "7"
                },
                {
                    "text": "Wheels",
                    "idCode": "8"
                },
                {
                    "text": "Lights (head, signal, tail)",
                    "idCode": "9"
                },
                {
                    "text": "Windows/Windshield",
                    "idCode": "10"
                },
                {
                    "text": "Mirrors",
                    "idCode": "11"
                },
                {
                    "text": "Wipers",
                    "idCode": "12"
                },
                {
                    "text": "Truck Coupling/Trailer Hitch/Safety Chains",
                    "idCode": "13"
                },
                {
                    "text": "Other",
                    "idCode": "14"
                },
                {
                    "text": "Unknown",
                    "idCode": "15"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Trailer License Plate Number",
            "id": "JYbuzQwR",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-55",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "First Trailer Behind Tractor",
            "id": "egQodqJa",
            "answerType": "advancedOpenTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-56",
            "helperText": "License Plate 1",
            "autoMethod": "plateCamera",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Second Trailer Behind Tractor",
            "id": "a2qf2XjZ",
            "answerType": "advancedOpenTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-57",
            "helperText": "License Plate 2",
            "autoMethod": "plateCamera",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Third Trailer Behind Tractor",
            "id": "KFEcQkVQ",
            "answerType": "advancedOpenTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-58",
            "helperText": "License Plate 3",
            "autoMethod": "plateCamera",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Trailer VIN(s)",
            "id": "r8SG1obE",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-59",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "First Trailer Behind Tractor",
            "id": "D0BrqlpW",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-60",
            "helperText": "VIN 1",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Second Trailer Behind Tractor",
            "id": "yiDtkFBK",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-61",
            "helperText": "VIN 2",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Third Trailer Behind Tractor",
            "id": "ATwAwn30",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-62",
            "helperText": "VIN 3",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Trailer Make(s)",
            "id": "M67RP5ZC",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-63",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "First Trailer Behind Tractor",
            "id": "qe3GTs9V",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-64",
            "helperText": "Make 1",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Second Trailer Behind Tractor",
            "id": "PFuQNT9x",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-65",
            "helperText": "Make 2",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Third Trailer Behind Tractor",
            "id": "C138iqWx",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-66",
            "helperText": "Make 3",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Trailer Model(s)",
            "id": "kyWnHF0v",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-67",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "First Trailer Behind Tractor",
            "id": "OyEs9Xy3",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-68",
            "helperText": "Model 1",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Second Trailer Behind Tractor",
            "id": "kmAT27e1",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-69",
            "helperText": "Model 2",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Third Trailer Behind Tractor",
            "id": "WW5omAi8",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-70",
            "helperText": "Model 3",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Trailer Model Year(s)",
            "id": "IfLkv5RE",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-71",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "First Trailer Behind Tractor",
            "id": "OhdgRwQU",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-72",
            "helperText": "Year 1",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Second Trailer Behind Tractor",
            "id": "wZKqv9NK",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-73",
            "helperText": "Year 2",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Third Trailer Behind Tractor",
            "id": "dbGlqpWA",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-74",
            "helperText": "Year 3",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Total Number of Axles",
            "id": "pXkp77Gw",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-75",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Truck Tractor",
            "id": "SsyJwusb",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-76",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "First Trailer Behind Tractor",
            "id": "yI9VbYC2",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-77",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Second Trailer Behind Tractor",
            "id": "eXtaPPIL",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-78",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Third Trailer Behind Tractor",
            "id": "mHrVtCEz",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-79",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Carrier Identification",
            "id": "rzg1l9RU",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-80",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Identification Type",
            "id": "Ny3vKusE",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-81",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "US DOT Number",
                    "idCode": "0"
                },
                {
                    "text": "State Number",
                    "idCode": "1"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "2"
                },
                {
                    "text": "Unknown/Unable to Determine",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Country/State Code",
            "id": "cTcW0ajp",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-82",
            "helperText": "Non-US Country Code (e.g. Mexico or Canada) US State Code",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Identification Number",
            "id": "U08PiZyq",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-83",
            "helperText": "US DOT Number - up to 7 digits If not a US DOT Number, include State issued Identification Number and State",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Carrier Name",
            "id": "t9IOgQh1",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-84",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Carrier Street Address",
            "id": "L2bjG9Ih",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-85",
            "helperText": "Street Address 1; Street Address 2",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Carrier City/Town",
            "id": "5TFzoeJL",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-86",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Carrier State",
            "id": "vQBsuEeU",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-87",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Carrier ZIP Code",
            "id": "1WeAldXJ",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-88",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Type of Carrier",
            "id": "wqRCni8y",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-89",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Interstate Carrier",
                    "idCode": "0"
                },
                {
                    "text": "Intrastate Carrier",
                    "idCode": "1"
                },
                {
                    "text": "Not in Commerce/Government",
                    "idCode": "2"
                },
                {
                    "text": "Not in Commerce/Other Truck or Bus",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Configuration Section",
            "id": "J4nocKLZ",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-90",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Vehicle Configuration",
            "id": "QpFA5lgB",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-91",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Vehicle 10,000 lbs. or less placarded for hazardous materials",
                    "idCode": "0"
                },
                {
                    "text": "Bus/Large Van (seats for 9-15 occupants, including driver)",
                    "idCode": "1"
                },
                {
                    "text": "Bus (seats more than 15 occupants, including driver)",
                    "idCode": "2"
                },
                {
                    "text": "Single-Unit Truck (2-axle and GVWR > 10,000 lbs.)",
                    "idCode": "3"
                },
                {
                    "text": "Single-Unit Truck (3 or more axles)",
                    "idCode": "4"
                },
                {
                    "text": "Truck Pulling Trailer(s)",
                    "idCode": "5"
                },
                {
                    "text": "Truck Tractor (Bobtail)",
                    "idCode": "6"
                },
                {
                    "text": "Truck Tractor/Semi-Trailer",
                    "idCode": "7"
                },
                {
                    "text": "Truck Tractor/Double",
                    "idCode": "8"
                },
                {
                    "text": "Truck Tractor/Triple",
                    "idCode": "9"
                },
                {
                    "text": "Truck More Than 10,000 lbs., cannot classify",
                    "idCode": "10"
                },
                {
                    "text": "Unknown",
                    "idCode": "11"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Special Sizing",
            "id": "IA0pYcQh",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-92",
            "helperText": "(choose up to 4)",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "No special sizing",
                    "idCode": "0"
                },
                {
                    "text": "Over-height",
                    "idCode": "1"
                },
                {
                    "text": "Over-length",
                    "idCode": "2"
                },
                {
                    "text": "Over-weight",
                    "idCode": "3"
                },
                {
                    "text": "Over-width",
                    "idCode": "4"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Permitted?",
            "id": "dijmQNWx",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-93",
            "questionDependency": [
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "0"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "ovVntlnU",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                },
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "Non-Permitted Load",
                    "idCode": "0"
                },
                {
                    "text": "Permitted Load",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Cargo Body Type",
            "id": "02UkfUBV",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-94",
            "questionDependency": [
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "1"
                },
                {
                    "dependencyUid": "CynWHwxP",
                    "dependencyOptionCode": "2"
                }
            ],
            "answerOptions": [
                {
                    "text": "No Cargo Body (bobtail, light MV with hazardous materials [HM] placard, etc.)",
                    "idCode": "0"
                },
                {
                    "text": "Bus",
                    "idCode": "1"
                },
                {
                    "text": "Auto Transporter",
                    "idCode": "2"
                },
                {
                    "text": "Cargo Tank",
                    "idCode": "3"
                },
                {
                    "text": "Concrete Mixer",
                    "idCode": "4"
                },
                {
                    "text": "Dump",
                    "idCode": "5"
                },
                {
                    "text": "Flatbed",
                    "idCode": "6"
                },
                {
                    "text": "Garbage/Refuse",
                    "idCode": "7"
                },
                {
                    "text": "Grain/Chips/Gravel",
                    "idCode": "8"
                },
                {
                    "text": "Intermodal Container Chassis",
                    "idCode": "9"
                },
                {
                    "text": "Log",
                    "idCode": "10"
                },
                {
                    "text": "Pole-Trailer",
                    "idCode": "11"
                },
                {
                    "text": "Van/Enclosed Box",
                    "idCode": "12"
                },
                {
                    "text": "Vehicle Towing Another Vehicle",
                    "idCode": "13"
                },
                {
                    "text": "Not Applicable (MV 10,000 lbs. or less, not displaying HM placard)",
                    "idCode": "14"
                },
                {
                    "text": "Other",
                    "idCode": "15"
                },
                {
                    "text": "Unknown",
                    "idCode": "16"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Hazardous Materials (Cargo Only)",
            "id": "nMSSxpSP",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-95",
            "questionDependency": [
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Hazardous Materials ID",
            "id": "N2Ehyq4C",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-96",
            "questionDependency": [
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Hazardous Materials Class",
            "id": "0rOcRDq2",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-97",
            "questionDependency": [
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Release of hazardous materials from a cargo compartment (e.g. trailer), cargo container (e.g. tank) or from a package?",
            "id": "A9mGeeGM",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-98",
            "questionDependency": [
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Not Applicable",
                    "idCode": "2"
                },
                {
                    "text": "Unknown if Released",
                    "idCode": "3"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Automated Driving System(s)",
            "id": "QA0BSYIz",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-99"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Automated System or Systems in Vehicle",
            "id": "krQbh0po",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-100",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                },
                {
                    "text": "Unknown",
                    "idCode": "2"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Automated System Levels in Vehicle",
            "id": "d4OE8GnI",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-101",
            "questionDependency": [
                {
                    "dependencyUid": "krQbh0po",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "No Automation",
                    "idCode": "0"
                },
                {
                    "text": "Driver Assistance",
                    "idCode": "1"
                },
                {
                    "text": "Partial Automation",
                    "idCode": "2"
                },
                {
                    "text": "Conditional Automation",
                    "idCode": "3"
                },
                {
                    "text": "High Automation",
                    "idCode": "4"
                },
                {
                    "text": "Full Automation",
                    "idCode": "5"
                },
                {
                    "text": "Automation Level Unknown",
                    "idCode": "6"
                },
                {
                    "text": "Unknown",
                    "idCode": "7"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Automated System Levels Engaged at Time of Crash",
            "id": "zk6QtmkD",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-102",
            "questionDependency": [
                {
                    "dependencyUid": "krQbh0po",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "text": "No Automation",
                    "idCode": "0"
                },
                {
                    "text": "Driver Assistance",
                    "idCode": "1"
                },
                {
                    "text": "Partial Automation",
                    "idCode": "2"
                },
                {
                    "text": "Conditional Automation",
                    "idCode": "3"
                },
                {
                    "text": "High Automation",
                    "idCode": "4"
                },
                {
                    "text": "Full Automation",
                    "idCode": "5"
                },
                {
                    "text": "Automation Level Unknown",
                    "idCode": "6"
                },
                {
                    "text": "Unknown",
                    "idCode": "7"
                }
            ]
        },
        {
            "numOptionsAllowed": "1",
            "question": "Ownership",
            "id": "pT0Wq1RO",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-3",
            "answerOptions": [
                {
                    "text": "Public Property",
                    "idCode": "0"
                },
                {
                    "text": "Private Property",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1",
            "question": "Secondary Crash",
            "id": "A6uoXDGb",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-5",
            "answerOptions": [
                {
                    "text": "No",
                    "idCode": "0"
                },
                {
                    "text": "Yes",
                    "idCode": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "1",
            "question": "Crash Severity",
            "id": "8dY73Yzs",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-31",
            "answerOptions": [
                {
                    "text": "Fatal Injury",
                    "idCode": "0"
                },
                {
                    "text": "Suspected Serious Injury",
                    "idCode": "1"
                },
                {
                    "text": "Suspected Minor Injury",
                    "idCode": "2"
                },
                {
                    "text": "Possible Injury",
                    "idCode": "3"
                },
                {
                    "text": "Property Damage-Only",
                    "idCode": "4"
                },
                {
                    "text": "Unknown",
                    "idCode": "5"
                }
            ]
        }
    ]
}
