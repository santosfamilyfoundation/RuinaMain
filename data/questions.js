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
            "helperText": "Format: (YYYY/MM/DD)"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Street Address 1",
            "id": "bqPmjHhl",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-5",
            "tooltip": "E.g. 1000 Olin Way"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Street Address 2",
            "id": "OXp9IQ1m",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-6"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "City/Town",
            "id": "mfUnfGGG",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-7"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "State",
            "id": "I5sdJ3MP",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-8"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "ZIP Code",
            "id": "g9aneW3g",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-9"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Phone Number",
            "id": "hLG4AOsN",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-10",
            "helperText": 15555551212
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Sex",
            "id": "cGeoDWm1",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-11",
            "answerOptions": [
                {
                    "name": "Female",
                    "id": "0"
                },
                {
                    "name": "Male",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
            "humanReadableId": "driver-12"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Incident Responder?",
            "id": "xwtnXE2c",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-13",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "EMS",
                    "id": "1"
                },
                {
                    "name": "Fire",
                    "id": "2"
                },
                {
                    "name": "Police",
                    "id": "3"
                },
                {
                    "name": "Tow Operator",
                    "id": "4"
                },
                {
                    "name": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                    "id": "5"
                },
                {
                    "name": "Other",
                    "id": "6"
                },
                {
                    "name": "Unknown",
                    "id": "7"
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
            "humanReadableId": "driver-14",
            "answerOptions": [
                {
                    "name": "Fatal Injury",
                    "id": "0"
                },
                {
                    "name": "Suspected Serious Injury",
                    "id": "1"
                },
                {
                    "name": "Suspected Minor Injury",
                    "id": "2"
                },
                {
                    "name": "Possible Injury",
                    "id": "3"
                },
                {
                    "name": "No Apparent Injury",
                    "id": "4"
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
            ],
            "answerOptions": [
                {
                    "name": "Not Transported",
                    "id": "0"
                },
                {
                    "name": "EMS Air",
                    "id": "1"
                },
                {
                    "name": "EMS Ground",
                    "id": "2"
                },
                {
                    "name": "Law Enforcement",
                    "id": "3"
                },
                {
                    "name": "Other",
                    "id": "4"
                },
                {
                    "name": "Unknown",
                    "id": "5"
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
            "question": "EMS Response Run Number",
            "id": "RjEUrhoq",
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
            "numOptionsAllowed": "0.0",
            "question": "Medical Facility Receiving Patient",
            "id": "IjFlnCUa",
            "answerType": "openTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-19",
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
            "humanReadableId": "driver-20",
            "helperText": "(choose up to 2)",
            "answerOptions": [
                {
                    "name": "Front",
                    "id": "0"
                },
                {
                    "name": "Second",
                    "id": "1"
                },
                {
                    "name": "Third",
                    "id": "2"
                },
                {
                    "name": "Fourth",
                    "id": "3"
                },
                {
                    "name": "Other Row (bus, 15 passenger van, etc.)",
                    "id": "4"
                },
                {
                    "name": "Unknown Row",
                    "id": "5"
                },
                {
                    "name": "Left (usually the motor vehicle or motorcycle driver except for postal vehicles)",
                    "id": "6"
                },
                {
                    "name": "Middle",
                    "id": "7"
                },
                {
                    "name": "Right",
                    "id": "8"
                },
                {
                    "name": "Unknown Seat",
                    "id": "9"
                },
                {
                    "name": "Other Enclosed Cargo Area",
                    "id": "10"
                },
                {
                    "name": "Riding on Motor Vehicle Exterior (non-trailing unit)",
                    "id": "11"
                },
                {
                    "name": "Sleeper Section of Cab (truck)",
                    "id": "12"
                },
                {
                    "name": "Trailing Unit",
                    "id": "13"
                },
                {
                    "name": "Unenclosed Cargo Area",
                    "id": "14"
                },
                {
                    "name": "Not Applicable",
                    "id": "15"
                },
                {
                    "name": "Unknown",
                    "id": "16"
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
            "humanReadableId": "driver-21",
            "answerOptions": [
                {
                    "name": "Booster Seat",
                    "id": "0"
                },
                {
                    "name": "Child Restraint System - Forward Facing",
                    "id": "1"
                },
                {
                    "name": "Child Restraint System - Rear Facing",
                    "id": "2"
                },
                {
                    "name": "Child Restraint - Type Unknown",
                    "id": "3"
                },
                {
                    "name": "Lap Belt Only Used",
                    "id": "4"
                },
                {
                    "name": "None Used - Motor Vehicle Occupant",
                    "id": "5"
                },
                {
                    "name": "Restraint Used - Type Unknown",
                    "id": "6"
                },
                {
                    "name": "Shoulder and Lap Belt Used",
                    "id": "7"
                },
                {
                    "name": "Shoulder Belt Only Used",
                    "id": "8"
                },
                {
                    "name": "Stretcher",
                    "id": "9"
                },
                {
                    "name": "Wheelchair",
                    "id": "10"
                },
                {
                    "name": "DOT-Compliant Motorcycle Helmet",
                    "id": "11"
                },
                {
                    "name": "Not DOT-Compliant Motorcycle Helmet",
                    "id": "12"
                },
                {
                    "name": "Unknown If DOT-Compliant Motorcycle Helmet",
                    "id": "13"
                },
                {
                    "name": "No Helmet",
                    "id": "14"
                },
                {
                    "name": "Not Applicable",
                    "id": "15"
                },
                {
                    "name": "Other",
                    "id": "16"
                },
                {
                    "name": "Unknown",
                    "id": "17"
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
            "humanReadableId": "driver-22",
            "tooltip": "E.g. distracted driving",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
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
            "humanReadableId": "driver-23",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "name": "Not Deployed",
                    "id": "0"
                },
                {
                    "name": "Not Applicable",
                    "id": "1"
                },
                {
                    "name": "Curtain",
                    "id": "2"
                },
                {
                    "name": "Front",
                    "id": "3"
                },
                {
                    "name": "Side",
                    "id": "4"
                },
                {
                    "name": "Other (knee, air belt, etc.)",
                    "id": "5"
                },
                {
                    "name": "Deployment Unknown",
                    "id": "6"
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
            "humanReadableId": "driver-24",
            "answerOptions": [
                {
                    "name": "Not Ejected",
                    "id": "0"
                },
                {
                    "name": "Ejected, Partially",
                    "id": "1"
                },
                {
                    "name": "Ejected, Totally",
                    "id": "2"
                },
                {
                    "name": "Not Applicable",
                    "id": "3"
                },
                {
                    "name": "Unknown",
                    "id": "4"
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
            "humanReadableId": "driver-25"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Type",
            "id": "swdK3ctL",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-26",
            "answerOptions": [
                {
                    "name": "Not Licensed",
                    "id": "0"
                },
                {
                    "name": "Canada",
                    "id": "1"
                },
                {
                    "name": "Indian Nation",
                    "id": "2"
                },
                {
                    "name": "International License (other than Mexico or Canada)",
                    "id": "3"
                },
                {
                    "name": "Mexico",
                    "id": "4"
                },
                {
                    "name": "State",
                    "id": "5"
                },
                {
                    "name": "U.S. Government",
                    "id": "6"
                },
                {
                    "name": "Not Applicable",
                    "id": "7"
                },
                {
                    "name": "Unknown",
                    "id": "8"
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
            "humanReadableId": "driver-27",
            "helperText": "Provide the specific State, Province or Nation indicated on the Driver's License (see Appendix E: ANSI State FIPS and USPS Codes or Appendix F: ISO 3166-2 Codes for Canada and Mexico)"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Driver License Number, Class, CDL and Endorsements",
            "id": "J1bO0jNj",
            "answerType": "header",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-28"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "License Number",
            "id": "xL5WOZpG",
            "answerType": "advancedOpenTextBox",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-29",
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
            "humanReadableId": "driver-30",
            "answerOptions": [
                {
                    "name": "None",
                    "id": "0"
                },
                {
                    "name": "Class A",
                    "id": "1"
                },
                {
                    "name": "Class B",
                    "id": "2"
                },
                {
                    "name": "Class C",
                    "id": "3"
                },
                {
                    "name": "Class M",
                    "id": "4"
                },
                {
                    "name": "Regular Driver License Class",
                    "id": "5"
                },
                {
                    "name": "Not Applicable",
                    "id": "6"
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
            "humanReadableId": "driver-31",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
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
            "humanReadableId": "driver-32",
            "answerOptions": [
                {
                    "name": "None/Not Applicable",
                    "id": "0"
                },
                {
                    "name": "H - Hazardous Materials",
                    "id": "1"
                },
                {
                    "name": "N - Tank Vehicle",
                    "id": "2"
                },
                {
                    "name": "P - Passenger",
                    "id": "3"
                },
                {
                    "name": "S - School",
                    "id": "4"
                },
                {
                    "name": "T - Double/Triple Trailers",
                    "id": "5"
                },
                {
                    "name": "X - Combination of Tank Vehicle and Hazardous Materials",
                    "id": "6"
                },
                {
                    "name": "Other non-commercial license endorsements (e.g., motorcycle, etc.)",
                    "id": "7"
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
            "humanReadableId": "driver-33",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Exceeded Speed Limit",
                    "id": "1"
                },
                {
                    "name": "Racing",
                    "id": "2"
                },
                {
                    "name": "Too Fast for Conditions",
                    "id": "3"
                },
                {
                    "name": "Unknown",
                    "id": "4"
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
            "humanReadableId": "driver-34",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "name": "No Contributing Action",
                    "id": "0"
                },
                {
                    "name": "Disregarded Other Road Markings",
                    "id": "1"
                },
                {
                    "name": "Disregarded Other Traffic Sign",
                    "id": "2"
                },
                {
                    "name": "Failed to Keep in Proper Lane",
                    "id": "3"
                },
                {
                    "name": "Failed to Yield Right-of-Way",
                    "id": "4"
                },
                {
                    "name": "Followed Too Closely",
                    "id": "5"
                },
                {
                    "name": "Improper Backing",
                    "id": "6"
                },
                {
                    "name": "Improper Passing",
                    "id": "7"
                },
                {
                    "name": "Improper Turn",
                    "id": "8"
                },
                {
                    "name": "Operated Motor Vehicle in Inattentive, Careless, Negligent, or Erratic Manner",
                    "id": "9"
                },
                {
                    "name": "Operated Motor Vehicle in Reckless or Aggressive Manner",
                    "id": "10"
                },
                {
                    "name": "Over-Correcting/Over-Steering",
                    "id": "11"
                },
                {
                    "name": "Ran Off Roadway",
                    "id": "12"
                },
                {
                    "name": "Ran Red Light",
                    "id": "13"
                },
                {
                    "name": "Ran Stop Sign",
                    "id": "14"
                },
                {
                    "name": "Swerved or Avoided Due to Wind, Slippery Surface, Motor Vehicle, Object, Non-Mo",
                    "id": "15"
                },
                {
                    "name": "Wrong Side or Wrong Way",
                    "id": "16"
                },
                {
                    "name": "Other Contributing Action",
                    "id": "17"
                },
                {
                    "name": "Unknown",
                    "id": "18"
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
            "humanReadableId": "driver-35",
            "tooltip": "All motor vehicle-related violations codes, if any, which apply to this driver."
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Attempted Avoidance Maneuver",
            "id": "AREUHJ9b",
            "answerType": "dropdown",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-36",
            "questionDependency": [
                {
                    "dependencyUid": "8dY73Yzs",
                    "dependencyOptionCode": "0"
                }
            ],
            "answerOptions": [
                {
                    "name": "No Driver Present/Unknown if Driver Present",
                    "id": "0"
                },
                {
                    "name": "Accelerating",
                    "id": "1"
                },
                {
                    "name": "Accelerating and Steering Left",
                    "id": "2"
                },
                {
                    "name": "Accelerating and Steering Right",
                    "id": "3"
                },
                {
                    "name": "Braking and Steering Left",
                    "id": "4"
                },
                {
                    "name": "Braking and Steering Right",
                    "id": "5"
                },
                {
                    "name": "Braking (Lockup)",
                    "id": "6"
                },
                {
                    "name": "Braking (Lockup Unknown)",
                    "id": "7"
                },
                {
                    "name": "Braking (No Lockup)",
                    "id": "8"
                },
                {
                    "name": "No Avoidance Maneuver",
                    "id": "9"
                },
                {
                    "name": "Releasing Brakes",
                    "id": "10"
                },
                {
                    "name": "Steering Left",
                    "id": "11"
                },
                {
                    "name": "Steering Right",
                    "id": "12"
                },
                {
                    "name": "Other Actions",
                    "id": "13"
                },
                {
                    "name": "Unknown",
                    "id": "14"
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
                    "name": "No CDL",
                    "id": "0"
                },
                {
                    "name": "Canceled or Denied",
                    "id": "1"
                },
                {
                    "name": "Disqualified",
                    "id": "2"
                },
                {
                    "name": "Expired",
                    "id": "3"
                },
                {
                    "name": "Revoked",
                    "id": "4"
                },
                {
                    "name": "Suspended",
                    "id": "5"
                },
                {
                    "name": "Learner's Permit",
                    "id": "6"
                },
                {
                    "name": "Valid",
                    "id": "7"
                },
                {
                    "name": "Other - Not Valid",
                    "id": "8"
                },
                {
                    "name": "Unknown License Status",
                    "id": "9"
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
            "humanReadableId": "driver-39",
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
                    "name": "No Endorsement(s) Required for the Vehicle",
                    "id": "0"
                },
                {
                    "name": "Endorsement(s) Required, Complied With",
                    "id": "1"
                },
                {
                    "name": "Endorsement(s) Required, Not Complied With",
                    "id": "2"
                },
                {
                    "name": "Endorsement(s) Required, Compliance Unknown",
                    "id": "3"
                },
                {
                    "name": "Unknown if Required",
                    "id": "4"
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
            "humanReadableId": "driver-40"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Action",
            "id": "0Mat8q8u",
            "answerType": "multiButton",
            "display": [
                "driver"
            ],
            "humanReadableId": "driver-41",
            "answerOptions": [
                {
                    "name": "Not Distracted",
                    "id": "0"
                },
                {
                    "name": "Talking/listening",
                    "id": "1"
                },
                {
                    "name": "Manually Operating (texting, dialing, playing game, etc.)",
                    "id": "2"
                },
                {
                    "name": "Other Action (looking away from task, etc.)",
                    "id": "3"
                },
                {
                    "name": "Unknown",
                    "id": "4"
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
            "humanReadableId": "driver-42",
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
                    "name": "Not Applicable (Not Distracted)",
                    "id": "0"
                },
                {
                    "name": "Hands-Free Mobile Phone",
                    "id": "1"
                },
                {
                    "name": "Hand-Held Mobile Phone",
                    "id": "2"
                },
                {
                    "name": "Other Electronic Device",
                    "id": "3"
                },
                {
                    "name": "Vehicle-Integrated Device",
                    "id": "4"
                },
                {
                    "name": "Passenger/Other Non-Motorist",
                    "id": "5"
                },
                {
                    "name": "External (to vehicle/non-motorist area)",
                    "id": "6"
                },
                {
                    "name": "Other Distraction (animal, food, grooming)",
                    "id": "7"
                },
                {
                    "name": "Unknown",
                    "id": "8"
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
            "humanReadableId": "driver-43",
            "helperText": "(choose up to 2)",
            "answerOptions": [
                {
                    "name": "Not Applicable",
                    "id": "0"
                },
                {
                    "name": "Asleep or Fatigued",
                    "id": "1"
                },
                {
                    "name": "Emotional (depressed, angry, disturbed, etc.)",
                    "id": "2"
                },
                {
                    "name": "Ill (sick), Fainted",
                    "id": "3"
                },
                {
                    "name": "Physically Impaired",
                    "id": "4"
                },
                {
                    "name": "Under the Influence of Medications/Drugs/Alcohol",
                    "id": "5"
                },
                {
                    "name": "Other",
                    "id": "6"
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
            "humanReadableId": "driver-44",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
            "humanReadableId": "driver-45",
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
            "humanReadableId": "driver-46",
            "questionDependency": [
                {
                    "dependencyUid": "9cFGpRmQ",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "name": "Test Not Given",
                    "id": "0"
                },
                {
                    "name": "Test Given",
                    "id": "1"
                },
                {
                    "name": "Test Refused",
                    "id": "2"
                },
                {
                    "name": "Unknown if Tested",
                    "id": "3"
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
            "humanReadableId": "driver-47",
            "questionDependency": [
                {
                    "dependencyUid": "9cFGpRmQ",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "name": "Not Applicable (Test Not Given)",
                    "id": "0"
                },
                {
                    "name": "Blood",
                    "id": "1"
                },
                {
                    "name": "Breath",
                    "id": "2"
                },
                {
                    "name": "Urine",
                    "id": "3"
                },
                {
                    "name": "Other",
                    "id": "4"
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
            "humanReadableId": "driver-48",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
            "humanReadableId": "driver-49",
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
            "humanReadableId": "driver-50",
            "questionDependency": [
                {
                    "dependencyUid": "qlTVIWWS",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "name": "Test Not Given",
                    "id": "0"
                },
                {
                    "name": "Test Given",
                    "id": "1"
                },
                {
                    "name": "Test Refused",
                    "id": "2"
                },
                {
                    "name": "Unknown if Tested",
                    "id": "3"
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
            "humanReadableId": "driver-51",
            "questionDependency": [
                {
                    "dependencyUid": "qlTVIWWS",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "name": "Not Applicable (Test Not Given)",
                    "id": "0"
                },
                {
                    "name": "Blood",
                    "id": "1"
                },
                {
                    "name": "Saliva",
                    "id": "2"
                },
                {
                    "name": "Urine",
                    "id": "3"
                },
                {
                    "name": "Other",
                    "id": "4"
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
            "helperText": "Format: (YYYY/MM/DD)"
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
            "helperText": "Format: Street Address 1; Street Address 2",
            "tooltip": "E.g. 1000 Olin Way; MB 999"
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
            "helperText": "Format: 15555551212"
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
                    "name": "Female",
                    "id": "0"
                },
                {
                    "name": "Male",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
                    "name": "Bicyclist",
                    "id": "0"
                },
                {
                    "name": "Other Cyclist",
                    "id": "1"
                },
                {
                    "name": "Pedestrian",
                    "id": "2"
                },
                {
                    "name": "Other Pedestrian (wheelchair, person in a building, skater, personal convey)",
                    "id": "3"
                },
                {
                    "name": "Occupant of a Non-Motor Vehicle Transportation Device",
                    "id": "4"
                },
                {
                    "name": "Unknown Type of Non-Motorist",
                    "id": "5"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "EMS",
                    "id": "1"
                },
                {
                    "name": "Fire",
                    "id": "2"
                },
                {
                    "name": "Police",
                    "id": "3"
                },
                {
                    "name": "Tow Operator",
                    "id": "4"
                },
                {
                    "name": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                    "id": "5"
                },
                {
                    "name": "Other",
                    "id": "6"
                },
                {
                    "name": "Unknown",
                    "id": "7"
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
                    "name": "Fatal Injury",
                    "id": "0"
                },
                {
                    "name": "Suspected Serious Injury",
                    "id": "1"
                },
                {
                    "name": "Suspected Minor Injury",
                    "id": "2"
                },
                {
                    "name": "Possible Injury",
                    "id": "3"
                },
                {
                    "name": "No Apparent Injury",
                    "id": "4"
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
                    "name": "Not Transported",
                    "id": "0"
                },
                {
                    "name": "EMS Air",
                    "id": "1"
                },
                {
                    "name": "EMS Ground",
                    "id": "2"
                },
                {
                    "name": "Law Enforcement",
                    "id": "3"
                },
                {
                    "name": "Other",
                    "id": "4"
                },
                {
                    "name": "Unknown",
                    "id": "5"
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
                    "name": "Not Distracted",
                    "id": "0"
                },
                {
                    "name": "Talking/listening",
                    "id": "1"
                },
                {
                    "name": "Manually Operating (texting, dialing, playing game, etc.)",
                    "id": "2"
                },
                {
                    "name": "Other Action (looking away from task, etc.)",
                    "id": "3"
                },
                {
                    "name": "Unknown",
                    "id": "4"
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
                    "name": "Not Applicable (Not Distracted)",
                    "id": "0"
                },
                {
                    "name": "Hands-Free Mobile Phone",
                    "id": "1"
                },
                {
                    "name": "Hand-Held Mobile Phone",
                    "id": "2"
                },
                {
                    "name": "Other Electronic Device",
                    "id": "3"
                },
                {
                    "name": "Vehicle-Integrated Device",
                    "id": "4"
                },
                {
                    "name": "Passenger/Other Non-Motorist",
                    "id": "5"
                },
                {
                    "name": "External (to vehicle/non-motorist area)",
                    "id": "6"
                },
                {
                    "name": "Other Distraction (animal, food, grooming)",
                    "id": "7"
                },
                {
                    "name": "Unknown",
                    "id": "8"
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
                    "name": "Not Applicable",
                    "id": "0"
                },
                {
                    "name": "Asleep or Fatigued",
                    "id": "1"
                },
                {
                    "name": "Emotional (depressed, angry, disturbed, etc.)",
                    "id": "2"
                },
                {
                    "name": "Ill (sick), Fainted",
                    "id": "3"
                },
                {
                    "name": "Physically Impaired",
                    "id": "4"
                },
                {
                    "name": "Under the Influence of Medications/Drugs/Alcohol",
                    "id": "5"
                },
                {
                    "name": "Other",
                    "id": "6"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
                    "name": "Test Not Given",
                    "id": "0"
                },
                {
                    "name": "Test Given",
                    "id": "1"
                },
                {
                    "name": "Test Refused",
                    "id": "2"
                },
                {
                    "name": "Unknown if Tested",
                    "id": "3"
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
                    "name": "Not Applicable (Test Not Given)",
                    "id": "0"
                },
                {
                    "name": "Blood",
                    "id": "1"
                },
                {
                    "name": "Breath",
                    "id": "2"
                },
                {
                    "name": "Urine",
                    "id": "3"
                },
                {
                    "name": "Other",
                    "id": "4"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
                    "name": "Test Not Given",
                    "id": "0"
                },
                {
                    "name": "Test Given",
                    "id": "1"
                },
                {
                    "name": "Test Refused",
                    "id": "2"
                },
                {
                    "name": "Unknown if Tested",
                    "id": "3"
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
                    "name": "Not Applicable (Test Not Given)",
                    "id": "0"
                },
                {
                    "name": "Blood",
                    "id": "1"
                },
                {
                    "name": "Saliva",
                    "id": "2"
                },
                {
                    "name": "Urine",
                    "id": "3"
                },
                {
                    "name": "Other",
                    "id": "4"
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
            "tooltip": "e.g. '2' for Vehicle 2"
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
                    "name": "None",
                    "id": "0"
                },
                {
                    "name": "Adjacent to Roadway (e.g., Shoulder, Median)",
                    "id": "1"
                },
                {
                    "name": "Crossing Roadway",
                    "id": "2"
                },
                {
                    "name": "In Roadway - Other",
                    "id": "3"
                },
                {
                    "name": "Waiting to Cross Roadway",
                    "id": "4"
                },
                {
                    "name": "Walking/Cycling Along Roadway Against Traffic (In or Adjacent to Travel Lane)",
                    "id": "5"
                },
                {
                    "name": "Walking/Cycling Along Roadway with Traffic (In or Adjacent to Travel Lane)",
                    "id": "6"
                },
                {
                    "name": "Walking/Cycling on Sidewalk",
                    "id": "7"
                },
                {
                    "name": "Working in Trafficway (Incident Response)",
                    "id": "8"
                },
                {
                    "name": "Other",
                    "id": "9"
                },
                {
                    "name": "Unknown",
                    "id": "10"
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
                    "name": "Going to or from School (K-12)",
                    "id": "0"
                },
                {
                    "name": "Going to or from Transit",
                    "id": "1"
                },
                {
                    "name": "Not Applicable",
                    "id": "2"
                },
                {
                    "name": "Unknown",
                    "id": "3"
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
                    "name": "Dart/Dash",
                    "id": "0"
                },
                {
                    "name": "Disabled Vehicle-Related (Working on, Pushing, Leaving/Approaching)",
                    "id": "1"
                },
                {
                    "name": "Entering/Exiting Parked/Standing Vehicle",
                    "id": "2"
                },
                {
                    "name": "Failure to Obey Traffic Signs, Signals, or Officer",
                    "id": "3"
                },
                {
                    "name": "Failure to Yield Right-Of-Way",
                    "id": "4"
                },
                {
                    "name": "Improper Passing",
                    "id": "5"
                },
                {
                    "name": "Improper Turn/Merge",
                    "id": "6"
                },
                {
                    "name": "Inattentive (Talking, Eating, etc.)",
                    "id": "7"
                },
                {
                    "name": "In Roadway Improperly (Standing, Lying, Working, Playing)",
                    "id": "8"
                },
                {
                    "name": "Not Visible (Dark Clothing, No Lighting, etc.)",
                    "id": "9"
                },
                {
                    "name": "Wrong-Way Riding or Walking",
                    "id": "10"
                },
                {
                    "name": "Other",
                    "id": "11"
                },
                {
                    "name": "Unknown",
                    "id": "12"
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
                    "name": "Intersection - Marked Crosswalk",
                    "id": "0"
                },
                {
                    "name": "Intersection - Unmarked Crosswalk",
                    "id": "1"
                },
                {
                    "name": "Intersection - Other",
                    "id": "2"
                },
                {
                    "name": "Median/Crossing Island",
                    "id": "3"
                },
                {
                    "name": "Midblock - Marked Crosswalk",
                    "id": "4"
                },
                {
                    "name": "Shoulder/Roadside",
                    "id": "5"
                },
                {
                    "name": "Travel Lane - Other Location",
                    "id": "6"
                },
                {
                    "name": "Signed Route (no pavement marking)",
                    "id": "7"
                },
                {
                    "name": "Shared Lane Markings",
                    "id": "8"
                },
                {
                    "name": "On-Street Bike Lanes",
                    "id": "9"
                },
                {
                    "name": "On-Street Buffered Bike Lanes",
                    "id": "10"
                },
                {
                    "name": "Separated Bike Lanes",
                    "id": "11"
                },
                {
                    "name": "Off-Street Trails/Sidepaths",
                    "id": "12"
                },
                {
                    "name": "Driveway Access",
                    "id": "13"
                },
                {
                    "name": "Non-Trafficway Area",
                    "id": "14"
                },
                {
                    "name": "Shared-Use Path or Trail",
                    "id": "15"
                },
                {
                    "name": "Sidewalk",
                    "id": "16"
                },
                {
                    "name": "Other",
                    "id": "17"
                },
                {
                    "name": "Unknown",
                    "id": "18"
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
                    "name": "None",
                    "id": "0"
                },
                {
                    "name": "Helmet",
                    "id": "1"
                },
                {
                    "name": "Protective Pads Used (elbows, knees, shins, etc.)",
                    "id": "2"
                },
                {
                    "name": "Reflective Wear (backpack, triangles, etc.)",
                    "id": "3"
                },
                {
                    "name": "Lighting",
                    "id": "4"
                },
                {
                    "name": "Reflectors",
                    "id": "5"
                },
                {
                    "name": "Other",
                    "id": "6"
                },
                {
                    "name": "Unknown",
                    "id": "7"
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
                    "name": "Right",
                    "id": "0"
                },
                {
                    "name": "Rear",
                    "id": "1"
                },
                {
                    "name": "Left",
                    "id": "2"
                },
                {
                    "name": "Front",
                    "id": "3"
                },
                {
                    "name": "Unknown",
                    "id": "4"
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
            "helperText": "Format: (YYYY/MM/DD)"
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
                    "name": "Female",
                    "id": "0"
                },
                {
                    "name": "Male",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "EMS",
                    "id": "1"
                },
                {
                    "name": "Fire",
                    "id": "2"
                },
                {
                    "name": "Police",
                    "id": "3"
                },
                {
                    "name": "Tow Operator",
                    "id": "4"
                },
                {
                    "name": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                    "id": "5"
                },
                {
                    "name": "Other",
                    "id": "6"
                },
                {
                    "name": "Unknown",
                    "id": "7"
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
                    "name": "Fatal Injury",
                    "id": "0"
                },
                {
                    "name": "Suspected Serious Injury",
                    "id": "1"
                },
                {
                    "name": "Suspected Minor Injury",
                    "id": "2"
                },
                {
                    "name": "Possible Injury",
                    "id": "3"
                },
                {
                    "name": "No Apparent Injury",
                    "id": "4"
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
                    "name": "Not Transported",
                    "id": "0"
                },
                {
                    "name": "EMS Air",
                    "id": "1"
                },
                {
                    "name": "EMS Ground",
                    "id": "2"
                },
                {
                    "name": "Law Enforcement",
                    "id": "3"
                },
                {
                    "name": "Other",
                    "id": "4"
                },
                {
                    "name": "Unknown",
                    "id": "5"
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
                    "name": "Front",
                    "id": "0"
                },
                {
                    "name": "Second",
                    "id": "1"
                },
                {
                    "name": "Third",
                    "id": "2"
                },
                {
                    "name": "Fourth",
                    "id": "3"
                },
                {
                    "name": "Other Row (bus, 15 passenger van, etc.)",
                    "id": "4"
                },
                {
                    "name": "Unknown Row",
                    "id": "5"
                },
                {
                    "name": "Left (usually the motor vehicle or motorcycle driver except for postal vehicles)",
                    "id": "6"
                },
                {
                    "name": "Middle",
                    "id": "7"
                },
                {
                    "name": "Right",
                    "id": "8"
                },
                {
                    "name": "Unknown Seat",
                    "id": "9"
                },
                {
                    "name": "Other Enclosed Cargo Area",
                    "id": "10"
                },
                {
                    "name": "Riding on Motor Vehicle Exterior (non-trailing unit)",
                    "id": "11"
                },
                {
                    "name": "Sleeper Section of Cab (truck)",
                    "id": "12"
                },
                {
                    "name": "Trailing Unit",
                    "id": "13"
                },
                {
                    "name": "Unenclosed Cargo Area",
                    "id": "14"
                },
                {
                    "name": "Not Applicable",
                    "id": "15"
                },
                {
                    "name": "Unknown",
                    "id": "16"
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
                    "name": "Booster Seat",
                    "id": "0"
                },
                {
                    "name": "Child Restraint System - Forward Facing",
                    "id": "1"
                },
                {
                    "name": "Child Restraint System - Rear Facing",
                    "id": "2"
                },
                {
                    "name": "Child Restraint - Type Unknown",
                    "id": "3"
                },
                {
                    "name": "Lap Belt Only Used",
                    "id": "4"
                },
                {
                    "name": "None Used - Motor Vehicle Occupant",
                    "id": "5"
                },
                {
                    "name": "Restraint Used - Type Unknown",
                    "id": "6"
                },
                {
                    "name": "Shoulder and Lap Belt Used",
                    "id": "7"
                },
                {
                    "name": "Shoulder Belt Only Used",
                    "id": "8"
                },
                {
                    "name": "Stretcher",
                    "id": "9"
                },
                {
                    "name": "Wheelchair",
                    "id": "10"
                },
                {
                    "name": "DOT-Compliant Motorcycle Helmet",
                    "id": "11"
                },
                {
                    "name": "Not DOT-Compliant Motorcycle Helmet",
                    "id": "12"
                },
                {
                    "name": "Unknown If DOT-Compliant Motorcycle Helmet",
                    "id": "13"
                },
                {
                    "name": "No Helmet",
                    "id": "14"
                },
                {
                    "name": "Not Applicable",
                    "id": "15"
                },
                {
                    "name": "Other",
                    "id": "16"
                },
                {
                    "name": "Unknown",
                    "id": "17"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
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
                    "name": "Not Deployed",
                    "id": "0"
                },
                {
                    "name": "Not Applicable",
                    "id": "1"
                },
                {
                    "name": "Curtain",
                    "id": "2"
                },
                {
                    "name": "Front",
                    "id": "3"
                },
                {
                    "name": "Side",
                    "id": "4"
                },
                {
                    "name": "Other (knee, air belt, etc.)",
                    "id": "5"
                },
                {
                    "name": "Deployment Unknown",
                    "id": "6"
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
                    "name": "Not Ejected",
                    "id": "0"
                },
                {
                    "name": "Ejected, Partially",
                    "id": "1"
                },
                {
                    "name": "Ejected, Totally",
                    "id": "2"
                },
                {
                    "name": "Not Applicable",
                    "id": "3"
                },
                {
                    "name": "Unknown",
                    "id": "4"
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
            "humanReadableId": "road-0",
            "tooltip": "The unique identifier within a given year that identifies a given crash within a State. "
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
                    "name": "Fatal Injury",
                    "id": "0"
                },
                {
                    "name": "Suspected Serious Injury",
                    "id": "1"
                },
                {
                    "name": "Suspected Minor Injury",
                    "id": "2"
                },
                {
                    "name": "Possible Injury",
                    "id": "3"
                },
                {
                    "name": "Property Damage-Only",
                    "id": "4"
                },
                {
                    "name": "Unknown",
                    "id": "5"
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
            "tooltip": "Provide type for ownership of the land where the crash occurred",
            "answerOptions": [
                {
                    "name": "Public Property",
                    "id": "0"
                },
                {
                    "name": "Private Property",
                    "id": "1"
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
            "tooltip": "Does the crash happen on a road?",
            "answerOptions": [
                {
                    "name": "Trafficway, On Road",
                    "id": "0"
                },
                {
                    "name": "Trafficway, Not on Road",
                    "id": "1"
                },
                {
                    "name": "Non-Trafficway",
                    "id": "2"
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
            "tooltip": "A Secondary Crash is a crash  that resulted from another crash",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
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
            "helperText": "Foramtt: (YYYY/MM/DD HH:MM)",
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
            "helperText": "Format: (HHMM)"
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
                    "name": "Alabama",
                    "id": "0"
                },
                {
                    "name": "Alaska",
                    "id": "1"
                },
                {
                    "name": "American Samoa",
                    "id": "2"
                },
                {
                    "name": "Arizona",
                    "id": "3"
                },
                {
                    "name": "Arkansas",
                    "id": "4"
                },
                {
                    "name": "California",
                    "id": "5"
                },
                {
                    "name": "Colorado",
                    "id": "6"
                },
                {
                    "name": "Commonwealth of the Northern Mariana Islands",
                    "id": "7"
                },
                {
                    "name": "Connecticut",
                    "id": "8"
                },
                {
                    "name": "Delaware",
                    "id": "9"
                },
                {
                    "name": "District of Columbia",
                    "id": "10"
                },
                {
                    "name": "Florida",
                    "id": "11"
                },
                {
                    "name": "Georgia",
                    "id": "12"
                },
                {
                    "name": "Guam",
                    "id": "13"
                },
                {
                    "name": "Hawaii",
                    "id": "14"
                },
                {
                    "name": "Idaho",
                    "id": "15"
                },
                {
                    "name": "Illinois",
                    "id": "16"
                },
                {
                    "name": "Indiana",
                    "id": "17"
                },
                {
                    "name": "Iowa",
                    "id": "18"
                },
                {
                    "name": "Kansas",
                    "id": "19"
                },
                {
                    "name": "Kentucky",
                    "id": "20"
                },
                {
                    "name": "Louisiana",
                    "id": "21"
                },
                {
                    "name": "Maine",
                    "id": "22"
                },
                {
                    "name": "Maryland",
                    "id": "23"
                },
                {
                    "name": "Massachusetts",
                    "id": "24"
                },
                {
                    "name": "Michigan",
                    "id": "25"
                },
                {
                    "name": "Minnesota",
                    "id": "26"
                },
                {
                    "name": "Mississippi",
                    "id": "27"
                },
                {
                    "name": "Missouri",
                    "id": "28"
                },
                {
                    "name": "Montana",
                    "id": "29"
                },
                {
                    "name": "Nebraska",
                    "id": "30"
                },
                {
                    "name": "Nevada",
                    "id": "31"
                },
                {
                    "name": "New Hampshire",
                    "id": "32"
                },
                {
                    "name": "New Jersey",
                    "id": "33"
                },
                {
                    "name": "New Mexico",
                    "id": "34"
                },
                {
                    "name": "New York",
                    "id": "35"
                },
                {
                    "name": "North Carolina",
                    "id": "36"
                },
                {
                    "name": "North Dakota",
                    "id": "37"
                },
                {
                    "name": "Ohio",
                    "id": "38"
                },
                {
                    "name": "Oklahoma",
                    "id": "39"
                },
                {
                    "name": "Oregon",
                    "id": "40"
                },
                {
                    "name": "Pennsylvania",
                    "id": "41"
                },
                {
                    "name": "Puerto Rico",
                    "id": "42"
                },
                {
                    "name": "Rhode Island",
                    "id": "43"
                },
                {
                    "name": "South Carolina",
                    "id": "44"
                },
                {
                    "name": "South Dakota",
                    "id": "45"
                },
                {
                    "name": "Tennessee",
                    "id": "46"
                },
                {
                    "name": "Texas",
                    "id": "47"
                },
                {
                    "name": "United States Virgin Islands",
                    "id": "48"
                },
                {
                    "name": "Utah",
                    "id": "49"
                },
                {
                    "name": "Vermont",
                    "id": "50"
                },
                {
                    "name": "Virginia",
                    "id": "51"
                },
                {
                    "name": "Washington",
                    "id": "52"
                },
                {
                    "name": "West Virginia",
                    "id": "53"
                },
                {
                    "name": "Wisconsin",
                    "id": "54"
                },
                {
                    "name": "Wyoming",
                    "id": "55"
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
            "humanReadableId": "road-12"
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
            "tooltip": "The first injury or damage-producing event that characterizes the crash type.",
            "answerOptions": [
                {
                    "name": "Cargo/Equipment Loss or Shift",
                    "id": "0"
                },
                {
                    "name": "Fell/Jumped From Motor Vehicle",
                    "id": "1"
                },
                {
                    "name": "Fire/Explosion",
                    "id": "2"
                },
                {
                    "name": "Immersion, Full or Partial",
                    "id": "3"
                },
                {
                    "name": "Jackknife",
                    "id": "4"
                },
                {
                    "name": "Other Non-Collision",
                    "id": "5"
                },
                {
                    "name": "Overturn/Rollover",
                    "id": "6"
                },
                {
                    "name": "Thrown or Falling Object",
                    "id": "7"
                },
                {
                    "name": "Animal (live)",
                    "id": "8"
                },
                {
                    "name": "Construction Equipment (backhoe, bulldozer, etc.)",
                    "id": "9"
                },
                {
                    "name": "Farm Equipment (tractor, combine harvester, etc.)",
                    "id": "10"
                },
                {
                    "name": "Motor Vehicle in Transport",
                    "id": "11"
                },
                {
                    "name": "Other Non-Fixed Object",
                    "id": "12"
                },
                {
                    "name": "Other Non-motorist",
                    "id": "13"
                },
                {
                    "name": "Parked Motor Vehicle",
                    "id": "14"
                },
                {
                    "name": "Pedalcycle",
                    "id": "15"
                },
                {
                    "name": "Pedestrian",
                    "id": "16"
                },
                {
                    "name": "Railway Vehicle (train, engine)",
                    "id": "17"
                },
                {
                    "name": "Strikes Object at Rest from MV in Transport",
                    "id": "18"
                },
                {
                    "name": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                    "id": "19"
                },
                {
                    "name": "Bridge Overhead Structure",
                    "id": "20"
                },
                {
                    "name": "Bridge Pier or Support",
                    "id": "21"
                },
                {
                    "name": "Bridge Rail",
                    "id": "22"
                },
                {
                    "name": "Cable Barrier",
                    "id": "23"
                },
                {
                    "name": "Concrete Traffic Barrier",
                    "id": "24"
                },
                {
                    "name": "Culvert",
                    "id": "25"
                },
                {
                    "name": "Curb",
                    "id": "26"
                },
                {
                    "name": "Ditch",
                    "id": "27"
                },
                {
                    "name": "Embankment",
                    "id": "28"
                },
                {
                    "name": "Fence",
                    "id": "29"
                },
                {
                    "name": "Guardrail End Terminal",
                    "id": "30"
                },
                {
                    "name": "Guardrail Face",
                    "id": "31"
                },
                {
                    "name": "Impact Attenuator/Crash Cushion",
                    "id": "32"
                },
                {
                    "name": "Mailbox",
                    "id": "33"
                },
                {
                    "name": "Other Fixed Object (wall, building, tunnel, etc.)",
                    "id": "34"
                },
                {
                    "name": "Other Post, Pole, or Support",
                    "id": "35"
                },
                {
                    "name": "Other Traffic Barrier",
                    "id": "36"
                },
                {
                    "name": "Traffic Sign Support",
                    "id": "37"
                },
                {
                    "name": "Traffic Signal Support",
                    "id": "38"
                },
                {
                    "name": "Tree (standing)",
                    "id": "39"
                },
                {
                    "name": "Utility Pole/Light Support",
                    "id": "40"
                },
                {
                    "name": "Unknown",
                    "id": "41"
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
                    "name": "Gore",
                    "id": "0"
                },
                {
                    "name": "In Parking Lane or Zone",
                    "id": "1"
                },
                {
                    "name": "Median",
                    "id": "2"
                },
                {
                    "name": "Off-Roadway, Location Unknown",
                    "id": "3"
                },
                {
                    "name": "On Roadway",
                    "id": "4"
                },
                {
                    "name": "On Shoulder, Left Side",
                    "id": "5"
                },
                {
                    "name": "On Shoulder, Right Side",
                    "id": "6"
                },
                {
                    "name": "Outside Road/Right-of-Way",
                    "id": "7"
                },
                {
                    "name": "Roadside",
                    "id": "8"
                },
                {
                    "name": "Separator/Traffic Island",
                    "id": "9"
                },
                {
                    "name": "Unknown",
                    "id": "10"
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
                    "name": "Not a Collision between Two Motor Vehicles In-transport",
                    "id": "0"
                },
                {
                    "name": "Angle",
                    "id": "1"
                },
                {
                    "name": "Front to Front",
                    "id": "2"
                },
                {
                    "name": "Front to Rear",
                    "id": "3"
                },
                {
                    "name": "Rear to Rear",
                    "id": "4"
                },
                {
                    "name": "Rear to Side",
                    "id": "5"
                },
                {
                    "name": "Sideswipe, Opposite Direction",
                    "id": "6"
                },
                {
                    "name": "Sideswipe, Same Direction",
                    "id": "7"
                },
                {
                    "name": "Single Vehicle Collision",
                    "id": "8"
                },
                {
                    "name": "Collision with a Parked Motor Vehicle",
                    "id": "9"
                },
                {
                    "name": "Other",
                    "id": "10"
                },
                {
                    "name": "Unknown",
                    "id": "11"
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
            "tooltip": "Affiliation of the person completing the crash report",
            "answerOptions": [
                {
                    "name": "Law Enforcement Agency",
                    "id": "0"
                },
                {
                    "name": "Civilian",
                    "id": "1"
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
                    "name": "Clear",
                    "id": "0"
                },
                {
                    "name": "Cloudy",
                    "id": "1"
                },
                {
                    "name": "Blowing Sand, Soil, Dirt",
                    "id": "2"
                },
                {
                    "name": "Blowing Snow",
                    "id": "3"
                },
                {
                    "name": "Fog, Smog, Smoke",
                    "id": "4"
                },
                {
                    "name": "Freezing Rain or Freezing Drizzle",
                    "id": "5"
                },
                {
                    "name": "Rain",
                    "id": "6"
                },
                {
                    "name": "Severe Crosswinds",
                    "id": "7"
                },
                {
                    "name": "Sleet or Hail",
                    "id": "8"
                },
                {
                    "name": "Snow",
                    "id": "9"
                },
                {
                    "name": "Other",
                    "id": "10"
                },
                {
                    "name": "Unknown",
                    "id": "11"
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
                    "name": "Daylight",
                    "id": "0"
                },
                {
                    "name": "Dawn/Dusk",
                    "id": "1"
                },
                {
                    "name": "Dark - Lighted",
                    "id": "2"
                },
                {
                    "name": "Dark - Not Lighted",
                    "id": "3"
                },
                {
                    "name": "Dark - Unknown Lighting",
                    "id": "4"
                },
                {
                    "name": "Other",
                    "id": "5"
                },
                {
                    "name": "Unknown",
                    "id": "6"
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
                    "name": "Dry",
                    "id": "0"
                },
                {
                    "name": "Ice/Frost",
                    "id": "1"
                },
                {
                    "name": "Mud, Dirt, Gravel",
                    "id": "2"
                },
                {
                    "name": "Oil",
                    "id": "3"
                },
                {
                    "name": "Sand",
                    "id": "4"
                },
                {
                    "name": "Slush",
                    "id": "5"
                },
                {
                    "name": "Snow",
                    "id": "6"
                },
                {
                    "name": "Water (standing, moving)",
                    "id": "7"
                },
                {
                    "name": "Wet",
                    "id": "8"
                },
                {
                    "name": "Other",
                    "id": "9"
                },
                {
                    "name": "Unknown",
                    "id": "10"
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
                    "name": "None",
                    "id": "0"
                },
                {
                    "name": "Animal(s)",
                    "id": "1"
                },
                {
                    "name": "Debris",
                    "id": "2"
                },
                {
                    "name": "Glare",
                    "id": "3"
                },
                {
                    "name": "Non-Highway Work",
                    "id": "4"
                },
                {
                    "name": "Obstructed Crosswalks",
                    "id": "5"
                },
                {
                    "name": "Obstruction in Roadway",
                    "id": "6"
                },
                {
                    "name": "Prior Crash",
                    "id": "7"
                },
                {
                    "name": "Prior Non-Recurring Incident",
                    "id": "8"
                },
                {
                    "name": "Regular Congestion",
                    "id": "9"
                },
                {
                    "name": "Related to a Bus Stop",
                    "id": "10"
                },
                {
                    "name": "Road Surface Condition (wet, icy, snow, slush, etc.)",
                    "id": "11"
                },
                {
                    "name": "Ruts, Holes, Bumps",
                    "id": "12"
                },
                {
                    "name": "Shoulders (none, low, soft, high)",
                    "id": "13"
                },
                {
                    "name": "Toll Booth/Plaza Related",
                    "id": "14"
                },
                {
                    "name": "Traffic Control Device",
                    "id": "15"
                },
                {
                    "name": "Traffic Incident",
                    "id": "16"
                },
                {
                    "name": "Visual Obstruction(s)",
                    "id": "17"
                },
                {
                    "name": "Weather Conditions",
                    "id": "18"
                },
                {
                    "name": "Work Zone (construction/maintenance/utility)",
                    "id": "19"
                },
                {
                    "name": "Worn, Travel-Polished Surface",
                    "id": "20"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
                    "name": "Not an Interchange Area",
                    "id": "0"
                },
                {
                    "name": "Acceleration/Deceleration Lane",
                    "id": "1"
                },
                {
                    "name": "Crossover-Related",
                    "id": "2"
                },
                {
                    "name": "Driveway Access or Related",
                    "id": "3"
                },
                {
                    "name": "Entrance/Exit Ramp or Related",
                    "id": "4"
                },
                {
                    "name": "Intersection or Related",
                    "id": "5"
                },
                {
                    "name": "Non-Junction",
                    "id": "6"
                },
                {
                    "name": "Railway Grade Crossing",
                    "id": "7"
                },
                {
                    "name": "Shared-Use Path or Trail",
                    "id": "8"
                },
                {
                    "name": "Through Roadway",
                    "id": "9"
                },
                {
                    "name": "Other Location Not Listed Above Within an Interchange Area (median, shoulder an",
                    "id": "10"
                },
                {
                    "name": "Unknown",
                    "id": "11"
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
                    "name": "Not an Intersection",
                    "id": "0"
                },
                {
                    "name": "Two",
                    "id": "1"
                },
                {
                    "name": "Three",
                    "id": "2"
                },
                {
                    "name": "Four",
                    "id": "3"
                },
                {
                    "name": "Five or more",
                    "id": "4"
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
                    "name": "Angled/Skewed",
                    "id": "0"
                },
                {
                    "name": "Roundabout/Traffic Circle",
                    "id": "1"
                },
                {
                    "name": "Perpendicular",
                    "id": "2"
                },
                {
                    "name": "Not Applicable/Not an Intersection",
                    "id": "3"
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
                    "name": "Signalized",
                    "id": "0"
                },
                {
                    "name": "Stop - All Way",
                    "id": "1"
                },
                {
                    "name": "Stop - Partial",
                    "id": "2"
                },
                {
                    "name": "Yield",
                    "id": "3"
                },
                {
                    "name": "No Controls",
                    "id": "4"
                },
                {
                    "name": "Not Applicable/Not an Intersection",
                    "id": "5"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes, School Bus Directly Involved",
                    "id": "1"
                },
                {
                    "name": "Yes, School Bus Indirectly Involved",
                    "id": "2"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
                    "name": "Before the First Work Zone Warning Sign",
                    "id": "0"
                },
                {
                    "name": "Advance Warning Area",
                    "id": "1"
                },
                {
                    "name": "Transition Area",
                    "id": "2"
                },
                {
                    "name": "Activity Area",
                    "id": "3"
                },
                {
                    "name": "Termination Area",
                    "id": "4"
                },
                {
                    "name": "Not Applicable/Not Within or Related to a Work Zone",
                    "id": "5"
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
                    "name": "Lane Closure",
                    "id": "0"
                },
                {
                    "name": "Lane Shift/Crossover",
                    "id": "1"
                },
                {
                    "name": "Work on Shoulder or Median",
                    "id": "2"
                },
                {
                    "name": "Intermittent or Moving Work",
                    "id": "3"
                },
                {
                    "name": "Other Type of Work Zone",
                    "id": "4"
                },
                {
                    "name": "Not Applicable/Not Within or Related to a Work Zone",
                    "id": "5"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Not Applicable/Not Within or Related to a Work Zone",
                    "id": "2"
                },
                {
                    "name": "Unknown",
                    "id": "3"
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Not Applicable/Not Within or Related to a Work Zone",
                    "id": "2"
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
            "question": "Vehicle Owner's Street Address 1",
            "id": "ywUJNXkj",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-3"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's Street Address 2",
            "id": "ChFUHnC4",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-4"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's City/Town",
            "id": "4G5ht6pl",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-5"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's State",
            "id": "3g8Oxu93",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-6"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Owner's ZIP Code",
            "id": "crxPGHSm",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-7"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Insurance Information",
            "id": "yuQ3Zjt2",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-8"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Insurance Company Name",
            "id": "TDkAb1u9",
            "answerType": "openTextBoxWithSelection",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-9",
            "answerOptions": [
                {
                    "name": "Uninsured",
                    "id": "0"
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
            "humanReadableId": "vehicle-10",
            "answerOptions": [
                {
                    "name": "Unknown",
                    "id": "0"
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
            "humanReadableId": "vehicle-11",
            "answerOptions": [
                {
                    "name": "Unknown",
                    "id": "0"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Vehicle Identification Number (VIN)",
            "id": "Bw7d2KTr",
            "answerType": "advancedOpenTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-12",
            "tooltip": "The VIN can often be found on the lower-left corner of the dashboard, in front of the steering wheel.",
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
            "humanReadableId": "vehicle-13",
            "answerOptions": [
                {
                    "name": "Motor Vehicle in Transport",
                    "id": "0"
                },
                {
                    "name": "Parked Motor Vehicle",
                    "id": "1"
                },
                {
                    "name": "Working Vehicle/Equipment",
                    "id": "2"
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
            "humanReadableId": "vehicle-14",
            "tooltip": "The category indicating the general configuration or shape of a motor vehicle distinguished by characteristics such as number of doors, rows of seats, windows, or roof line."
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Identifier",
            "id": "d7zJ5NIq",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-15",
            "helperText": "Might be zip code"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Year of Motor Vehicle Registration",
            "id": "QoX1IOdG",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-16",
            "helperText": "Format: YYYY"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle License Plate Number",
            "id": "vDnyDl5t",
            "answerType": "advancedOpenTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-17",
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
            "humanReadableId": "vehicle-18"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Model",
            "id": "29h5OiPC",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-19"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Model Year",
            "id": "C0rbnXHC",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-20",
            "helperText": "Format: YYYY"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Body Type Category",
            "id": "IOCCjh0h",
            "answerType": "header",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-21"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Body Type Category",
            "id": "MMkwgaog",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-22"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Vehicle Size",
            "id": "CynWHwxP",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-23",
            "answerOptions": [
                {
                    "name": "Light (10,000 lbs. or less GVWR/GCWR)",
                    "id": "0"
                },
                {
                    "name": "Medium (10,001 - 26,000 lbs. GVWR/GCWR)",
                    "id": "1"
                },
                {
                    "name": "Heavy (Greater than 26,000 lbs. GVWR/GCWR)",
                    "id": "2"
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
            "humanReadableId": "vehicle-24",
            "tooltip": "GVWR is used for single-unit trucks and other body types. GCWR is used for combination trucks or any vehicle with a trailing unit",
            "answerOptions": [
                {
                    "name": "1",
                    "id": "0"
                },
                {
                    "name": "2",
                    "id": "1"
                },
                {
                    "name": "3",
                    "id": "2"
                },
                {
                    "name": "Not Applicable",
                    "id": "3"
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
            "humanReadableId": "vehicle-25",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Total Occupants in Motor Vehicle",
            "id": "CTfb8pdV",
            "answerType": "numberButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-26"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Special Function of Motor Vehicle in Transport",
            "id": "4vrmnvfC",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-27",
            "answerOptions": [
                {
                    "name": "No Special Function",
                    "id": "0"
                },
                {
                    "name": "Bus - School (Public or Private)",
                    "id": "1"
                },
                {
                    "name": "Bus - Childcare/Daycare",
                    "id": "2"
                },
                {
                    "name": "Bus - Transit/Commuter",
                    "id": "3"
                },
                {
                    "name": "Bus - Charter/Tour",
                    "id": "4"
                },
                {
                    "name": "Bus - Intercity",
                    "id": "5"
                },
                {
                    "name": "Bus - Shuttle",
                    "id": "6"
                },
                {
                    "name": "Bus - Other",
                    "id": "7"
                },
                {
                    "name": "Farm Vehicle",
                    "id": "8"
                },
                {
                    "name": "Fire Truck",
                    "id": "9"
                },
                {
                    "name": "Highway/Maintenance",
                    "id": "10"
                },
                {
                    "name": "Mail Carrier",
                    "id": "11"
                },
                {
                    "name": "Military",
                    "id": "12"
                },
                {
                    "name": "Ambulance",
                    "id": "13"
                },
                {
                    "name": "Police",
                    "id": "14"
                },
                {
                    "name": "Public Utility",
                    "id": "15"
                },
                {
                    "name": "Non-Transport Emergency Services Vehicle",
                    "id": "16"
                },
                {
                    "name": "Safety Service Patrols - Incident Response",
                    "id": "17"
                },
                {
                    "name": "Other Incident Response",
                    "id": "18"
                },
                {
                    "name": "Rental Truck (Over 10,000 lbs.)",
                    "id": "19"
                },
                {
                    "name": "Towing - Incident Response",
                    "id": "20"
                },
                {
                    "name": "Truck Acting as Crash Attenuator",
                    "id": "21"
                },
                {
                    "name": "Taxi",
                    "id": "22"
                },
                {
                    "name": "Vehicle Used for Electronic Ride-hailing (transportation network company)",
                    "id": "23"
                },
                {
                    "name": "Other",
                    "id": "24"
                },
                {
                    "name": "Unknown",
                    "id": "25"
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
            "humanReadableId": "vehicle-28",
            "answerOptions": [
                {
                    "name": "Not Applicable",
                    "id": "0"
                },
                {
                    "name": "Non-Emergency, Non-Transport",
                    "id": "1"
                },
                {
                    "name": "Non-Emergency Transport",
                    "id": "2"
                },
                {
                    "name": "Emergency Operation, Emergency Warning Equipment Not in Use",
                    "id": "3"
                },
                {
                    "name": "Emergency Operation, Emergency Warning Equipment in Use",
                    "id": "4"
                },
                {
                    "name": "Unknown",
                    "id": "5"
                }
            ]
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Motor Vehicle Posted/ Statutory Speed Limit",
            "id": "wAqrAfiG",
            "answerType": "numberButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-29"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Direction of Travel Before Crash",
            "id": "CP4soemD",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-30",
            "answerOptions": [
                {
                    "name": "Not on Roadway",
                    "id": "0"
                },
                {
                    "name": "Northbound",
                    "id": "1"
                },
                {
                    "name": "Eastbound",
                    "id": "2"
                },
                {
                    "name": "Southbound",
                    "id": "3"
                },
                {
                    "name": "Westbound",
                    "id": "4"
                },
                {
                    "name": "Unknown",
                    "id": "5"
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
            "humanReadableId": "vehicle-31"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Travel Directions",
            "id": "udnyu4F5",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-32",
            "answerOptions": [
                {
                    "name": "One-Way",
                    "id": "0"
                },
                {
                    "name": "Two-Way",
                    "id": "1"
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
            "humanReadableId": "vehicle-33",
            "answerOptions": [
                {
                    "name": "Not Divided",
                    "id": "0"
                },
                {
                    "name": "Not Divided, With a Continuous Left-Turn Lane",
                    "id": "1"
                },
                {
                    "name": "Divided, Flush Median (greater than 4ft wide)",
                    "id": "2"
                },
                {
                    "name": "Divided, Raised Median (curbed)",
                    "id": "3"
                },
                {
                    "name": "Divided, Depressed Median",
                    "id": "4"
                },
                {
                    "name": "Unknown",
                    "id": "5"
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
            "humanReadableId": "vehicle-34",
            "answerOptions": [
                {
                    "name": "No Barrier",
                    "id": "0"
                },
                {
                    "name": "Cable Barrier",
                    "id": "1"
                },
                {
                    "name": "Concrete Barrier (e.g. Jersey Barrier)",
                    "id": "2"
                },
                {
                    "name": "Earth Embankment",
                    "id": "3"
                },
                {
                    "name": "Guardrail",
                    "id": "4"
                },
                {
                    "name": "Other",
                    "id": "5"
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
            "humanReadableId": "vehicle-35",
            "tooltip": "High occupancy vehicle/high occupancy toll lane",
            "answerOptions": [
                {
                    "name": "None present",
                    "id": "0"
                },
                {
                    "name": "Separated, Barrier, Flush (greater than 4ft wide), Raised or Depressed Median",
                    "id": "1"
                },
                {
                    "name": "Not Separated, Painted Pavement Markings, Post-Mounted Delineators",
                    "id": "2"
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
            "humanReadableId": "vehicle-36",
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
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
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
            "humanReadableId": "vehicle-37"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Enter the total through lanes, excluding auxiliary lanes.",
            "id": "FdF7XvAQ",
            "answerType": "numberButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-38",
            "helperText": "If trafficway is divided, total only lanes in vehicle's direction"
        },
        {
            "numOptionsAllowed": "0.0",
            "question": "Enter the total auxiliary lanes",
            "id": "JwQN2ENk",
            "answerType": "numberButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-39",
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
            "humanReadableId": "vehicle-40"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Horizontal Alignment",
            "id": "UigT0ygk",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-41",
            "answerOptions": [
                {
                    "name": "Straight",
                    "id": "0"
                },
                {
                    "name": "Curve Left",
                    "id": "1"
                },
                {
                    "name": "Curve Right",
                    "id": "2"
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
            "humanReadableId": "vehicle-42",
            "answerOptions": [
                {
                    "name": "Level",
                    "id": "0"
                },
                {
                    "name": "Uphill",
                    "id": "1"
                },
                {
                    "name": "Hillcrest",
                    "id": "2"
                },
                {
                    "name": "Downhill",
                    "id": "3"
                },
                {
                    "name": "Sag (bottom)",
                    "id": "4"
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
            "humanReadableId": "vehicle-43"
        },
        {
            "numOptionsAllowed": "4.0",
            "question": "TCD Type(s)",
            "id": "xBm1Bisf",
            "answerType": "dropdownMultiSelect",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-44",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "name": "No Controls",
                    "id": "0"
                },
                {
                    "name": "Person (including flagger, law enforcement, crossing guard, etc.)",
                    "id": "1"
                },
                {
                    "name": "Bicycle Crossing Sign",
                    "id": "2"
                },
                {
                    "name": "\"Curve Ahead\" Warning Sign",
                    "id": "3"
                },
                {
                    "name": "\"Intersection Ahead\" Warning Sign",
                    "id": "4"
                },
                {
                    "name": "Other Warning Sign",
                    "id": "5"
                },
                {
                    "name": "Pedestrian Crossing Sign",
                    "id": "6"
                },
                {
                    "name": "Railroad Crossing Sign",
                    "id": "7"
                },
                {
                    "name": "\"Reduce Speed Ahead\" Warning Sign",
                    "id": "8"
                },
                {
                    "name": "School Zone Sign",
                    "id": "9"
                },
                {
                    "name": "Stop Sign",
                    "id": "10"
                },
                {
                    "name": "Yield Sign",
                    "id": "11"
                },
                {
                    "name": "Flashing Railroad Crossing Signal (may include gates)",
                    "id": "12"
                },
                {
                    "name": "Flashing School Zone Signal",
                    "id": "13"
                },
                {
                    "name": "Flashing Traffic Control Signal",
                    "id": "14"
                },
                {
                    "name": "Lane Use Control Signal",
                    "id": "15"
                },
                {
                    "name": "Other Signal",
                    "id": "16"
                },
                {
                    "name": "Ramp Meter Signal",
                    "id": "17"
                },
                {
                    "name": "Traffic Control Signal",
                    "id": "18"
                },
                {
                    "name": "Bicycle Crossing",
                    "id": "19"
                },
                {
                    "name": "Other Pavement Marking (excluding edgelines, centerlines, or lane lines)",
                    "id": "20"
                },
                {
                    "name": "Pedestrian Crossing",
                    "id": "21"
                },
                {
                    "name": "Railroad Crossing",
                    "id": "22"
                },
                {
                    "name": "School Zone",
                    "id": "23"
                },
                {
                    "name": "No Controls",
                    "id": "24"
                },
                {
                    "name": "Person (including flagger, law enforcement, crossing guard, etc.)",
                    "id": "25"
                },
                {
                    "name": "Other",
                    "id": "26"
                },
                {
                    "name": "Unknown",
                    "id": "27"
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
            "humanReadableId": "vehicle-45",
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
                    "name": "None inoperative or missing",
                    "id": "0"
                },
                {
                    "name": "Person (including flagger, law enforcement, crossing guard, etc.)",
                    "id": "1"
                },
                {
                    "name": "Bicycle Crossing Sign",
                    "id": "2"
                },
                {
                    "name": "\"Curve Ahead\" Warning Sign",
                    "id": "3"
                },
                {
                    "name": "\"Intersection Ahead\" Warning Sign",
                    "id": "4"
                },
                {
                    "name": "Other Warning Sign",
                    "id": "5"
                },
                {
                    "name": "Pedestrian Crossing Sign",
                    "id": "6"
                },
                {
                    "name": "Railroad Crossing Sign",
                    "id": "7"
                },
                {
                    "name": "\"Reduce Speed Ahead\" Warning Sign",
                    "id": "8"
                },
                {
                    "name": "School Zone Sign",
                    "id": "9"
                },
                {
                    "name": "Stop Sign",
                    "id": "10"
                },
                {
                    "name": "Yield Sign",
                    "id": "11"
                },
                {
                    "name": "Flashing Railroad Crossing Signal (may include gates)",
                    "id": "12"
                },
                {
                    "name": "Flashing School Zone Signal",
                    "id": "13"
                },
                {
                    "name": "Flashing Traffic Control Signal",
                    "id": "14"
                },
                {
                    "name": "Lane Use Control Signal",
                    "id": "15"
                },
                {
                    "name": "Other Signal",
                    "id": "16"
                },
                {
                    "name": "Ramp Meter Signal",
                    "id": "17"
                },
                {
                    "name": "Traffic Control Signal",
                    "id": "18"
                },
                {
                    "name": "Bicycle Crossing",
                    "id": "19"
                },
                {
                    "name": "Other Pavement Marking (excluding edgelines, centerlines, or lane lines)",
                    "id": "20"
                },
                {
                    "name": "Pedestrian Crossing",
                    "id": "21"
                },
                {
                    "name": "Railroad Crossing",
                    "id": "22"
                },
                {
                    "name": "School Zone",
                    "id": "23"
                },
                {
                    "name": "No Controls",
                    "id": "24"
                },
                {
                    "name": "Person (including flagger, law enforcement, crossing guard, etc.)",
                    "id": "25"
                },
                {
                    "name": "Other",
                    "id": "26"
                },
                {
                    "name": "Unknown",
                    "id": "27"
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
            "humanReadableId": "vehicle-46",
            "answerOptions": [
                {
                    "name": "Movements Essentially Straight Ahead",
                    "id": "0"
                },
                {
                    "name": "Backing",
                    "id": "1"
                },
                {
                    "name": "Changing Lanes",
                    "id": "2"
                },
                {
                    "name": "Entering Traffic Lane",
                    "id": "3"
                },
                {
                    "name": "Leaving Traffic Lane",
                    "id": "4"
                },
                {
                    "name": "Making U-Turn",
                    "id": "5"
                },
                {
                    "name": "Negotiating a Curve",
                    "id": "6"
                },
                {
                    "name": "Overtaking/Passing",
                    "id": "7"
                },
                {
                    "name": "Parked",
                    "id": "8"
                },
                {
                    "name": "Slowing",
                    "id": "9"
                },
                {
                    "name": "Stopped in Traffic",
                    "id": "10"
                },
                {
                    "name": "Turning Left",
                    "id": "11"
                },
                {
                    "name": "Turning Right",
                    "id": "12"
                },
                {
                    "name": "Other",
                    "id": "13"
                },
                {
                    "name": "Unknown",
                    "id": "14"
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
            "humanReadableId": "vehicle-47"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Initial Point of Contact",
            "id": "4KpRmZXB",
            "answerType": "dropdown",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-48",
            "tooltip": "Provide the approximate contact point on this vehicle associated with this vehicle’s initial harmful event.",
            "helperImg": "../image/initial_contact.png",
            "answerOptions": [
                {
                    "name": "Non-Collision",
                    "id": "0"
                },
                {
                    "name": "(Clock Position) 1",
                    "id": "1"
                },
                {
                    "name": "(Clock Position) 2",
                    "id": "2"
                },
                {
                    "name": "(Clock Position) 3",
                    "id": "3"
                },
                {
                    "name": "(Clock Position) 4",
                    "id": "4"
                },
                {
                    "name": "(Clock Position) 5",
                    "id": "5"
                },
                {
                    "name": "(Clock Position) 6",
                    "id": "6"
                },
                {
                    "name": "(Clock Position) 7",
                    "id": "7"
                },
                {
                    "name": "(Clock Position) 8",
                    "id": "8"
                },
                {
                    "name": "(Clock Position) 9",
                    "id": "9"
                },
                {
                    "name": "(Clock Position) 10",
                    "id": "10"
                },
                {
                    "name": "(Clock Position) 11",
                    "id": "11"
                },
                {
                    "name": "(Clock Position) 12",
                    "id": "12"
                },
                {
                    "name": "Top",
                    "id": "13"
                },
                {
                    "name": "Undercarriage",
                    "id": "14"
                },
                {
                    "name": "Cargo Loss",
                    "id": "15"
                },
                {
                    "name": "Vehicle Not at Scene",
                    "id": "16"
                },
                {
                    "name": "Unknown",
                    "id": "17"
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
            "humanReadableId": "vehicle-49",
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
                    "name": "(Clock Position) 1",
                    "id": "0"
                },
                {
                    "name": "(Clock Position) 2",
                    "id": "1"
                },
                {
                    "name": "(Clock Position) 3",
                    "id": "2"
                },
                {
                    "name": "(Clock Position) 4",
                    "id": "3"
                },
                {
                    "name": "(Clock Position) 5",
                    "id": "4"
                },
                {
                    "name": "(Clock Position) 6",
                    "id": "5"
                },
                {
                    "name": "(Clock Position) 7",
                    "id": "6"
                },
                {
                    "name": "(Clock Position) 8",
                    "id": "7"
                },
                {
                    "name": "(Clock Position) 9",
                    "id": "8"
                },
                {
                    "name": "(Clock Position) 10",
                    "id": "9"
                },
                {
                    "name": "(Clock Position) 11",
                    "id": "10"
                },
                {
                    "name": "(Clock Position) 12",
                    "id": "11"
                },
                {
                    "name": "Top",
                    "id": "12"
                },
                {
                    "name": "Undercarriage",
                    "id": "13"
                },
                {
                    "name": "All Areas",
                    "id": "14"
                },
                {
                    "name": "No Damage",
                    "id": "15"
                },
                {
                    "name": "Vehicle Not at Scene",
                    "id": "16"
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
            "humanReadableId": "vehicle-50",
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
                    "name": "No Damage",
                    "id": "0"
                },
                {
                    "name": "Minor Damage",
                    "id": "1"
                },
                {
                    "name": "Functional Damage",
                    "id": "2"
                },
                {
                    "name": "Disabling Damage",
                    "id": "3"
                },
                {
                    "name": "Vehicle Not at Scene",
                    "id": "4"
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
            "humanReadableId": "vehicle-51",
            "helperText": "(choose up to 4)",
            "answerOptions": [
                {
                    "name": "Cross Centerline",
                    "id": "0"
                },
                {
                    "name": "Cross Median",
                    "id": "1"
                },
                {
                    "name": "End Departure (T-intersection, dead-end, etc.)",
                    "id": "2"
                },
                {
                    "name": "Downhill Runaway",
                    "id": "3"
                },
                {
                    "name": "Equipment Failure (blown tire, brake failure, etc.)",
                    "id": "4"
                },
                {
                    "name": "Ran Off Roadway Left",
                    "id": "5"
                },
                {
                    "name": "Ran Off Roadway Right",
                    "id": "6"
                },
                {
                    "name": "Reentering Roadway",
                    "id": "7"
                },
                {
                    "name": "Separation of Units",
                    "id": "8"
                },
                {
                    "name": "Other Non-Harmful Event",
                    "id": "9"
                },
                {
                    "name": "Cargo/Equipment Loss or Shift",
                    "id": "10"
                },
                {
                    "name": "Fell/Jumped From Motor Vehicle",
                    "id": "11"
                },
                {
                    "name": "Fire/Explosion",
                    "id": "12"
                },
                {
                    "name": "Immersion, Full or Partial",
                    "id": "13"
                },
                {
                    "name": "Jackknife",
                    "id": "14"
                },
                {
                    "name": "Other Non-Collision Harmful Event",
                    "id": "15"
                },
                {
                    "name": "Overturn/Rollover",
                    "id": "16"
                },
                {
                    "name": "Thrown or Falling Object",
                    "id": "17"
                },
                {
                    "name": "Animal (live)",
                    "id": "18"
                },
                {
                    "name": "Motor Vehicle in Transport",
                    "id": "19"
                },
                {
                    "name": "Other Non-Fixed Object",
                    "id": "20"
                },
                {
                    "name": "Other Non-Motorist",
                    "id": "21"
                },
                {
                    "name": "Parked Motor Vehicle",
                    "id": "22"
                },
                {
                    "name": "Pedalcycle",
                    "id": "23"
                },
                {
                    "name": "Pedestrian",
                    "id": "24"
                },
                {
                    "name": "Railway Vehicle (train, engine)",
                    "id": "25"
                },
                {
                    "name": "Strikes Object at Rest from MV in Transport",
                    "id": "26"
                },
                {
                    "name": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                    "id": "27"
                },
                {
                    "name": "Work Zone/Maintenance Equipment",
                    "id": "28"
                },
                {
                    "name": "Bridge Overhead Structure",
                    "id": "29"
                },
                {
                    "name": "Bridge Pier or Support",
                    "id": "30"
                },
                {
                    "name": "Bridge Rail",
                    "id": "31"
                },
                {
                    "name": "Cable Barrier",
                    "id": "32"
                },
                {
                    "name": "Concrete Traffic Barrier",
                    "id": "33"
                },
                {
                    "name": "Culvert",
                    "id": "34"
                },
                {
                    "name": "Curb",
                    "id": "35"
                },
                {
                    "name": "Ditch",
                    "id": "36"
                },
                {
                    "name": "Embankment",
                    "id": "37"
                },
                {
                    "name": "Fence",
                    "id": "38"
                },
                {
                    "name": "Guardrail End Terminal",
                    "id": "39"
                },
                {
                    "name": "Guardrail Face",
                    "id": "40"
                },
                {
                    "name": "Impact Attenuator/Crash Cushion",
                    "id": "41"
                },
                {
                    "name": "Mailbox",
                    "id": "42"
                },
                {
                    "name": "Other Fixed Object (wall, building, tunnel, etc.)",
                    "id": "43"
                },
                {
                    "name": "Other Post, Pole or Support",
                    "id": "44"
                },
                {
                    "name": "Other Traffic Barrier",
                    "id": "45"
                },
                {
                    "name": "Traffic Sign Support",
                    "id": "46"
                },
                {
                    "name": "Traffic Signal Support",
                    "id": "47"
                },
                {
                    "name": "Tree (standing)",
                    "id": "48"
                },
                {
                    "name": "Utility Pole/Light Support",
                    "id": "49"
                },
                {
                    "name": "Unknown Fixed Object",
                    "id": "50"
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
            "humanReadableId": "vehicle-52",
            "answerOptions": [
                {
                    "name": "Cargo/Equipment Loss or Shift",
                    "id": "0"
                },
                {
                    "name": "Fell/Jumped From Motor Vehicle",
                    "id": "1"
                },
                {
                    "name": "Fire/Explosion",
                    "id": "2"
                },
                {
                    "name": "Immersion, Full or Partial",
                    "id": "3"
                },
                {
                    "name": "Jackknife",
                    "id": "4"
                },
                {
                    "name": "Other Non-Collision Harmful Event",
                    "id": "5"
                },
                {
                    "name": "Overturn/Rollover",
                    "id": "6"
                },
                {
                    "name": "Thrown or Falling Object",
                    "id": "7"
                },
                {
                    "name": "Animal (live)",
                    "id": "8"
                },
                {
                    "name": "Motor Vehicle in Transport",
                    "id": "9"
                },
                {
                    "name": "Other Non-Fixed Object",
                    "id": "10"
                },
                {
                    "name": "Other Non-Motorist",
                    "id": "11"
                },
                {
                    "name": "Parked Motor Vehicle",
                    "id": "12"
                },
                {
                    "name": "Pedalcycle",
                    "id": "13"
                },
                {
                    "name": "Pedestrian",
                    "id": "14"
                },
                {
                    "name": "Railway Vehicle (train, engine)",
                    "id": "15"
                },
                {
                    "name": "Strikes Object at Rest from MV in Transport",
                    "id": "16"
                },
                {
                    "name": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                    "id": "17"
                },
                {
                    "name": "Work Zone / Maintenance Equipment",
                    "id": "18"
                },
                {
                    "name": "Bridge Overhead Structure",
                    "id": "19"
                },
                {
                    "name": "Bridge Pier or Support",
                    "id": "20"
                },
                {
                    "name": "Bridge Rail",
                    "id": "21"
                },
                {
                    "name": "Cable Barrier",
                    "id": "22"
                },
                {
                    "name": "Concrete Traffic Barrier",
                    "id": "23"
                },
                {
                    "name": "Culvert",
                    "id": "24"
                },
                {
                    "name": "Curb",
                    "id": "25"
                },
                {
                    "name": "Ditch",
                    "id": "26"
                },
                {
                    "name": "Embankment",
                    "id": "27"
                },
                {
                    "name": "Fence",
                    "id": "28"
                },
                {
                    "name": "Guardrail End Terminal",
                    "id": "29"
                },
                {
                    "name": "Guardrail Face",
                    "id": "30"
                },
                {
                    "name": "Impact Attenuator/Crash Cushion",
                    "id": "31"
                },
                {
                    "name": "Mailbox",
                    "id": "32"
                },
                {
                    "name": "Other Fixed Object (wall, building, tunnel, etc.)",
                    "id": "33"
                },
                {
                    "name": "Other Post, Pole or Support",
                    "id": "34"
                },
                {
                    "name": "Other Traffic Barrier",
                    "id": "35"
                },
                {
                    "name": "Traffic Sign Support",
                    "id": "36"
                },
                {
                    "name": "Traffic Signal Support",
                    "id": "37"
                },
                {
                    "name": "Tree (standing)",
                    "id": "38"
                },
                {
                    "name": "Utility Pole/Light Support",
                    "id": "39"
                },
                {
                    "name": "Unknown Collision With Fixed Object",
                    "id": "40"
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
            "humanReadableId": "vehicle-53",
            "answerOptions": [
                {
                    "name": "No, Did Not Leave Scene",
                    "id": "0"
                },
                {
                    "name": "Yes, Driver or Car and Driver Left Scene",
                    "id": "1"
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
            "humanReadableId": "vehicle-54",
            "answerOptions": [
                {
                    "name": "Not towed",
                    "id": "0"
                },
                {
                    "name": "Towed, But Not Due to Disabling Damage",
                    "id": "1"
                },
                {
                    "name": "Towed Due to Disabling Damage",
                    "id": "2"
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
            "humanReadableId": "vehicle-55",
            "answerOptions": [
                {
                    "name": "None",
                    "id": "0"
                },
                {
                    "name": "Brakes",
                    "id": "1"
                },
                {
                    "name": "Exhaust System",
                    "id": "2"
                },
                {
                    "name": "Body, Doors",
                    "id": "3"
                },
                {
                    "name": "Steering",
                    "id": "4"
                },
                {
                    "name": "Power Train",
                    "id": "5"
                },
                {
                    "name": "Suspension",
                    "id": "6"
                },
                {
                    "name": "Tires",
                    "id": "7"
                },
                {
                    "name": "Wheels",
                    "id": "8"
                },
                {
                    "name": "Lights (head, signal, tail)",
                    "id": "9"
                },
                {
                    "name": "Windows/Windshield",
                    "id": "10"
                },
                {
                    "name": "Mirrors",
                    "id": "11"
                },
                {
                    "name": "Wipers",
                    "id": "12"
                },
                {
                    "name": "Truck Coupling/Trailer Hitch/Safety Chains",
                    "id": "13"
                },
                {
                    "name": "Other",
                    "id": "14"
                },
                {
                    "name": "Unknown",
                    "id": "15"
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
            "humanReadableId": "vehicle-56",
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
            "humanReadableId": "vehicle-57",
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
            "humanReadableId": "vehicle-58",
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
            "humanReadableId": "vehicle-59",
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
            "humanReadableId": "vehicle-60",
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
            "humanReadableId": "vehicle-61",
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
            "humanReadableId": "vehicle-62",
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
            "humanReadableId": "vehicle-63",
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
            "humanReadableId": "vehicle-64",
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
            "humanReadableId": "vehicle-65",
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
            "humanReadableId": "vehicle-66",
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
            "humanReadableId": "vehicle-67",
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
            "humanReadableId": "vehicle-68",
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
            "humanReadableId": "vehicle-69",
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
            "humanReadableId": "vehicle-70",
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
            "humanReadableId": "vehicle-71",
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
            "humanReadableId": "vehicle-72",
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
            "humanReadableId": "vehicle-73",
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
            "humanReadableId": "vehicle-74",
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
            "humanReadableId": "vehicle-75",
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
            "question": "Truck Tractor",
            "id": "SsyJwusb",
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
            "humanReadableId": "vehicle-78",
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
            "humanReadableId": "vehicle-79",
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
            "humanReadableId": "vehicle-80",
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
            "humanReadableId": "vehicle-82",
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
                    "name": "US DOT Number",
                    "id": "0"
                },
                {
                    "name": "State Number",
                    "id": "1"
                },
                {
                    "name": "Not Applicable",
                    "id": "2"
                },
                {
                    "name": "Unknown/Unable to Determine",
                    "id": "3"
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
            "humanReadableId": "vehicle-83",
            "tooltip": "Non-US Country Code (e.g. Mexico or Canada) US State Code",
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
            "humanReadableId": "vehicle-84",
            "tooltip": "US DOT Number - up to 7 digits If not a US DOT Number, include State issued Identification Number and State",
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
            "humanReadableId": "vehicle-85",
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
            "question": "Motor Carrier City/Town",
            "id": "5TFzoeJL",
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
            "question": "Motor Carrier State",
            "id": "vQBsuEeU",
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
            "numOptionsAllowed": "0.0",
            "question": "Motor Carrier ZIP Code",
            "id": "1WeAldXJ",
            "answerType": "openTextBox",
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
            ],
            "answerOptions": [
                {
                    "name": "Interstate Carrier",
                    "id": "0"
                },
                {
                    "name": "Intrastate Carrier",
                    "id": "1"
                },
                {
                    "name": "Not in Commerce/Government",
                    "id": "2"
                },
                {
                    "name": "Not in Commerce/Other Truck or Bus",
                    "id": "3"
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
            "humanReadableId": "vehicle-92",
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
                    "name": "Vehicle 10,000 lbs. or less placarded for hazardous materials",
                    "id": "0"
                },
                {
                    "name": "Bus/Large Van (seats for 9-15 occupants, including driver)",
                    "id": "1"
                },
                {
                    "name": "Bus (seats more than 15 occupants, including driver)",
                    "id": "2"
                },
                {
                    "name": "Single-Unit Truck (2-axle and GVWR > 10,000 lbs.)",
                    "id": "3"
                },
                {
                    "name": "Single-Unit Truck (3 or more axles)",
                    "id": "4"
                },
                {
                    "name": "Truck Pulling Trailer(s)",
                    "id": "5"
                },
                {
                    "name": "Truck Tractor (Bobtail)",
                    "id": "6"
                },
                {
                    "name": "Truck Tractor/Semi-Trailer",
                    "id": "7"
                },
                {
                    "name": "Truck Tractor/Double",
                    "id": "8"
                },
                {
                    "name": "Truck Tractor/Triple",
                    "id": "9"
                },
                {
                    "name": "Truck More Than 10,000 lbs., cannot classify",
                    "id": "10"
                },
                {
                    "name": "Unknown",
                    "id": "11"
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
            "humanReadableId": "vehicle-93",
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
                    "name": "No special sizing",
                    "id": "0"
                },
                {
                    "name": "Over-height",
                    "id": "1"
                },
                {
                    "name": "Over-length",
                    "id": "2"
                },
                {
                    "name": "Over-weight",
                    "id": "3"
                },
                {
                    "name": "Over-width",
                    "id": "4"
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
            "humanReadableId": "vehicle-94",
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
                    "name": "Non-Permitted Load",
                    "id": "0"
                },
                {
                    "name": "Permitted Load",
                    "id": "1"
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
            "humanReadableId": "vehicle-95",
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
                    "name": "No Cargo Body (bobtail, light MV with hazardous materials [HM] placard, etc.)",
                    "id": "0"
                },
                {
                    "name": "Bus",
                    "id": "1"
                },
                {
                    "name": "Auto Transporter",
                    "id": "2"
                },
                {
                    "name": "Cargo Tank",
                    "id": "3"
                },
                {
                    "name": "Concrete Mixer",
                    "id": "4"
                },
                {
                    "name": "Dump",
                    "id": "5"
                },
                {
                    "name": "Flatbed",
                    "id": "6"
                },
                {
                    "name": "Garbage/Refuse",
                    "id": "7"
                },
                {
                    "name": "Grain/Chips/Gravel",
                    "id": "8"
                },
                {
                    "name": "Intermodal Container Chassis",
                    "id": "9"
                },
                {
                    "name": "Log",
                    "id": "10"
                },
                {
                    "name": "Pole-Trailer",
                    "id": "11"
                },
                {
                    "name": "Van/Enclosed Box",
                    "id": "12"
                },
                {
                    "name": "Vehicle Towing Another Vehicle",
                    "id": "13"
                },
                {
                    "name": "Not Applicable (MV 10,000 lbs. or less, not displaying HM placard)",
                    "id": "14"
                },
                {
                    "name": "Other",
                    "id": "15"
                },
                {
                    "name": "Unknown",
                    "id": "16"
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
            "question": "Hazardous Materials ID",
            "id": "N2Ehyq4C",
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
            "numOptionsAllowed": "0.0",
            "question": "Hazardous Materials Class",
            "id": "0rOcRDq2",
            "answerType": "openTextBox",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-98",
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
            "humanReadableId": "vehicle-99",
            "questionDependency": [
                {
                    "dependencyUid": "sM5HGjcV",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Not Applicable",
                    "id": "2"
                },
                {
                    "name": "Unknown if Released",
                    "id": "3"
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
            "humanReadableId": "vehicle-100"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Automated System or Systems in Vehicle",
            "id": "krQbh0po",
            "answerType": "multiButton",
            "display": [
                "vehicle"
            ],
            "humanReadableId": "vehicle-101",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
                },
                {
                    "name": "Unknown",
                    "id": "2"
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
            "humanReadableId": "vehicle-102",
            "questionDependency": [
                {
                    "dependencyUid": "krQbh0po",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "name": "No Automation",
                    "id": "0"
                },
                {
                    "name": "Driver Assistance",
                    "id": "1"
                },
                {
                    "name": "Partial Automation",
                    "id": "2"
                },
                {
                    "name": "Conditional Automation",
                    "id": "3"
                },
                {
                    "name": "High Automation",
                    "id": "4"
                },
                {
                    "name": "Full Automation",
                    "id": "5"
                },
                {
                    "name": "Automation Level Unknown",
                    "id": "6"
                },
                {
                    "name": "Unknown",
                    "id": "7"
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
            "humanReadableId": "vehicle-103",
            "questionDependency": [
                {
                    "dependencyUid": "krQbh0po",
                    "dependencyOptionCode": "1"
                }
            ],
            "answerOptions": [
                {
                    "name": "No Automation",
                    "id": "0"
                },
                {
                    "name": "Driver Assistance",
                    "id": "1"
                },
                {
                    "name": "Partial Automation",
                    "id": "2"
                },
                {
                    "name": "Conditional Automation",
                    "id": "3"
                },
                {
                    "name": "High Automation",
                    "id": "4"
                },
                {
                    "name": "Full Automation",
                    "id": "5"
                },
                {
                    "name": "Automation Level Unknown",
                    "id": "6"
                },
                {
                    "name": "Unknown",
                    "id": "7"
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
            "tooltip": "Ownership refers to the type of property, public or private",
            "answerOptions": [
                {
                    "name": "Public Property",
                    "id": "0"
                },
                {
                    "name": "Private Property",
                    "id": "1"
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
            "tooltip": "A Secondary Crash is a crash that resulted from another crash",
            "answerOptions": [
                {
                    "name": "No",
                    "id": "0"
                },
                {
                    "name": "Yes",
                    "id": "1"
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
                    "name": "Fatal Injury",
                    "id": "0"
                },
                {
                    "name": "Suspected Serious Injury",
                    "id": "1"
                },
                {
                    "name": "Suspected Minor Injury",
                    "id": "2"
                },
                {
                    "name": "Possible Injury",
                    "id": "3"
                },
                {
                    "name": "Property Damage-Only",
                    "id": "4"
                },
                {
                    "name": "Unknown",
                    "id": "5"
                }
            ]
        }
    ]
}