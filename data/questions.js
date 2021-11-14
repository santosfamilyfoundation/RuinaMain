export const questions = {
    "data": [
        {
            "sectionTitle": "Personal Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Name of Person Involved",
                    "id": "reJw3rUT",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-1"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "ElI9UkWD",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "Iv7jSfKw",
                    "answerType": "openTextBox",
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
                    "helperText": "Format: YYYY/MM/DD",
                    "tooltip": "Use 99 if the month and/or day are unknown. For example, 2017/02/99 indicates that the birthday is in February 2017 but the day is unknown."
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
                    "id": "juihpNVm",
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
                    "helperText": "format: 15555551212 (no dashes)"
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
                            "id": "0.0"
                        },
                        {
                            "name": "Male",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Driver License Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Driver License Jurisdiction",
                    "id": "RTMZU1us",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-13"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type",
                    "id": "swdK3ctL",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-7",
                    "answerOptions": [
                        {
                            "name": "Not Licensed",
                            "id": "0.0"
                        },
                        {
                            "name": "Canada",
                            "id": "1.0"
                        },
                        {
                            "name": "Indian Nation",
                            "id": "2.0"
                        },
                        {
                            "name": "International License (other than Mexico or Canada)",
                            "id": "3.0"
                        },
                        {
                            "name": "Mexico",
                            "id": "4.0"
                        },
                        {
                            "name": "State",
                            "id": "5.0"
                        },
                        {
                            "name": "U.S. Government",
                            "id": "6.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "7.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "8.0"
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
                    "humanReadableId": "driver-15",
                    "tooltip": "Provide the specific State, Province or Nation indicated on the Driver's License"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "License Number",
                    "id": "xL5WOZpG",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-16",
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
                    "humanReadableId": "driver-17",
                    "tooltip": "The Class is the type of driver license issued by the State and the type of motor vehicle the driver is qualified to drive.\nA: Any combination of vehicles with a gross combination weight rating (GCWR) of 26,001 pounds or more provided the GVWR of the vehicles being towed is in excess of 10,000 pounds.\n\nB: Any single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.\n\nC: Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or B, but is either designed to transport 16 or more passengers, including the driver, or is used in the transportation of materials found to be hazardous, which require the motor vehicle to be placarded.\n\nM: Motorcycles, mopeds, motor-driven cycles.\n\nRegular Driver License Class: Any regular or standard driver license issued for the operation of automobiles and light trucks by States that separate these vehicles from Class C. Other class designation  such as \"D\", \"R\", and others may be used by States to indicate a regular driver license class.\n",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0.0"
                        },
                        {
                            "name": "Class A",
                            "id": "1.0"
                        },
                        {
                            "name": "Class B",
                            "id": "2.0"
                        },
                        {
                            "name": "Class C",
                            "id": "3.0"
                        },
                        {
                            "name": "Class M",
                            "id": "4.0"
                        },
                        {
                            "name": "Regular Driver License Class",
                            "id": "5.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "6.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Commercial Driver License (CDL)",
                    "id": "16LCTlmo",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-18",
                    "helperImg": "../image/CDL.png",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
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
                    "humanReadableId": "driver-19",
                    "helperImg": "../image/CDL_endorsements.png",
                    "answerOptions": [
                        {
                            "name": "None/Not Applicable",
                            "id": "0.0"
                        },
                        {
                            "name": "H - Hazardous Materials",
                            "id": "1.0"
                        },
                        {
                            "name": "N - Tank Vehicle",
                            "id": "2.0"
                        },
                        {
                            "name": "P - Passenger",
                            "id": "3.0"
                        },
                        {
                            "name": "S - School",
                            "id": "4.0"
                        },
                        {
                            "name": "T - Double/Triple Trailers",
                            "id": "5.0"
                        },
                        {
                            "name": "X - Combination of Tank Vehicle and Hazardous Materials",
                            "id": "6.0"
                        },
                        {
                            "name": "Other non-commercial license endorsements (e.g., motorcycle, etc.)",
                            "id": "7.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Restrictions",
                    "id": "GE0UVywS",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-20"
                },
                {
                    "numOptionsAllowed": "3.0",
                    "question": "Driver License Restrictions",
                    "id": "mVfImy06",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-21",
                    "helperText": "(select up to 3)",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0.0"
                        },
                        {
                            "name": "Alcohol Interlock Device",
                            "id": "1.0"
                        },
                        {
                            "name": "CDL Intrastate Only",
                            "id": "2.0"
                        },
                        {
                            "name": "Corrective Lenses",
                            "id": "3.0"
                        },
                        {
                            "name": "Farm Waiver",
                            "id": "4.0"
                        },
                        {
                            "name": "Except Class A Bus",
                            "id": "5.0"
                        },
                        {
                            "name": "Except Class A and Class B Bus",
                            "id": "6.0"
                        },
                        {
                            "name": "Except Tractor-Trailer",
                            "id": "7.0"
                        },
                        {
                            "name": "Intermediate License Restrictios",
                            "id": "8.0"
                        },
                        {
                            "name": "Learner's Permit Restrictions",
                            "id": "9.0"
                        },
                        {
                            "name": "Limited to Daylight Only",
                            "id": "10.0"
                        },
                        {
                            "name": "Limited to Employment",
                            "id": "11.0"
                        },
                        {
                            "name": "Limited - Other",
                            "id": "12.0"
                        },
                        {
                            "name": "Mechanical Devices (special brakes, hand controls, or other adaptive devices)",
                            "id": "13.0"
                        },
                        {
                            "name": "Military Vehicles",
                            "id": "14.0"
                        },
                        {
                            "name": "Motor Vehicles Without Air Brakes",
                            "id": "15.0"
                        },
                        {
                            "name": "Outside Mirror",
                            "id": "16.0"
                        },
                        {
                            "name": "Prosthetic Aid",
                            "id": "17.0"
                        },
                        {
                            "name": "Other",
                            "id": "18.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Interlock Present?",
                    "id": "Rb2JOQaH",
                    "answerType": "numberButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-22",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Driver License Status",
                    "id": "2pL19EuI",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-23"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type Applicable for This Person",
                    "id": "ug5OYr9e",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-24",
                    "answerOptions": [
                        {
                            "name": "Non-CDL Driver License",
                            "id": "0.0"
                        },
                        {
                            "name": "Non-CDL, Restricted Driver license (Learner's Permit, Temporary/Limited, Graduated Driver license, etc.)",
                            "id": "1.0"
                        },
                        {
                            "name": "Commercial Driver License (CDL)",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Status",
                    "id": "NLku3A2C",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-25",
                    "answerOptions": [
                        {
                            "name": "Not Licensed",
                            "id": "0.0"
                        },
                        {
                            "name": "Canceled or Denied",
                            "id": "1.0"
                        },
                        {
                            "name": "DIsqualified (CDL)",
                            "id": "2.0"
                        },
                        {
                            "name": "Expired",
                            "id": "3.0"
                        },
                        {
                            "name": "Revoked",
                            "id": "4.0"
                        },
                        {
                            "name": "Suspended",
                            "id": "5.0"
                        },
                        {
                            "name": "Valid License",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "7.0"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Crash-Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Seating Position",
                    "id": "qAJO1kQq",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-27",
                    "helperText": "(choose up to 2)",
                    "helperImg": "../image/seating_positions.png",
                    "answerOptions": [
                        {
                            "name": "Front",
                            "id": "0.0"
                        },
                        {
                            "name": "Second",
                            "id": "1.0"
                        },
                        {
                            "name": "Third",
                            "id": "2.0"
                        },
                        {
                            "name": "Fourth",
                            "id": "3.0"
                        },
                        {
                            "name": "Other Row (bus, 15 passenger van, etc.)",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown Row",
                            "id": "5.0"
                        },
                        {
                            "name": "Left (usually the motor vehicle or motorcycle driver except for postal vehicles)",
                            "id": "6.0"
                        },
                        {
                            "name": "Middle",
                            "id": "7.0"
                        },
                        {
                            "name": "Right",
                            "id": "8.0"
                        },
                        {
                            "name": "Unknown Seat",
                            "id": "9.0"
                        },
                        {
                            "name": "Other Enclosed Cargo Area",
                            "id": "10.0"
                        },
                        {
                            "name": "Riding on Motor Vehicle Exterior (non-trailing unit)",
                            "id": "11.0"
                        },
                        {
                            "name": "Sleeper Section of Cab (truck)",
                            "id": "12.0"
                        },
                        {
                            "name": "Trailing Unit",
                            "id": "13.0"
                        },
                        {
                            "name": "Unenclosed Cargo Area",
                            "id": "14.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "15.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "16.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Restraint Systems / Motorcycle Helmet Use",
                    "id": "OkqAxNuI",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-28"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Restraint Systems in Use",
                    "id": "Pr9o5SM6",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-29",
                    "answerOptions": [
                        {
                            "name": "Booster Seat",
                            "id": "0.0"
                        },
                        {
                            "name": "Child Restraint System - Forward Facing",
                            "id": "1.0"
                        },
                        {
                            "name": "Child Restraint System - Rear Facing",
                            "id": "2.0"
                        },
                        {
                            "name": "Child Restraint - Type Unknown",
                            "id": "3.0"
                        },
                        {
                            "name": "Lap Belt Only Used",
                            "id": "4.0"
                        },
                        {
                            "name": "None Used - Motor Vehicle Occupant",
                            "id": "5.0"
                        },
                        {
                            "name": "Restraint Used - Type Unknown",
                            "id": "6.0"
                        },
                        {
                            "name": "Shoulder and Lap Belt Used",
                            "id": "7.0"
                        },
                        {
                            "name": "Shoulder Belt Only Used",
                            "id": "8.0"
                        },
                        {
                            "name": "Stretcher",
                            "id": "9.0"
                        },
                        {
                            "name": "Wheelchair",
                            "id": "10.0"
                        },
                        {
                            "name": "DOT-Compliant Motorcycle Helmet",
                            "id": "11.0"
                        },
                        {
                            "name": "Not DOT-Compliant Motorcycle Helmet",
                            "id": "12.0"
                        },
                        {
                            "name": "Unknown If DOT-Compliant Motorcycle Helmet",
                            "id": "13.0"
                        },
                        {
                            "name": "No Helmet",
                            "id": "14.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "15.0"
                        },
                        {
                            "name": "Other",
                            "id": "16.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "17.0"
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
                    "humanReadableId": "driver-30",
                    "tooltip": "ie, seatbelt was not buckled in correctly",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
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
                    "humanReadableId": "driver-31",
                    "helperText": "(choose up to 4)",
                    "helperImg": "../image/airbag_diagram.png",
                    "answerOptions": [
                        {
                            "name": "Not Deployed",
                            "id": "0.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "1.0"
                        },
                        {
                            "name": "Curtain",
                            "id": "2.0"
                        },
                        {
                            "name": "Front",
                            "id": "3.0"
                        },
                        {
                            "name": "Side",
                            "id": "4.0"
                        },
                        {
                            "name": "Other (knee, air belt, etc.)",
                            "id": "5.0"
                        },
                        {
                            "name": "Deployment Unknown",
                            "id": "6.0"
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
                    "humanReadableId": "driver-32",
                    "answerOptions": [
                        {
                            "name": "Not Ejected",
                            "id": "0.0"
                        },
                        {
                            "name": "Ejected, Partially",
                            "id": "1.0"
                        },
                        {
                            "name": "Ejected, Totally",
                            "id": "2.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "3.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "4.0"
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
                            "id": "0.0"
                        },
                        {
                            "name": "Exceeded Speed Limit",
                            "id": "1.0"
                        },
                        {
                            "name": "Racing",
                            "id": "2.0"
                        },
                        {
                            "name": "Too Fast for Conditions",
                            "id": "3.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "4.0"
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
                    "humanReadableId": "driver-9",
                    "helperText": "(choose up to 4)",
                    "answerOptions": [
                        {
                            "name": "No Contributing Action",
                            "id": "0.0"
                        },
                        {
                            "name": "Disregarded Other Road Markings",
                            "id": "1.0"
                        },
                        {
                            "name": "Disregarded Other Traffic Sign",
                            "id": "2.0"
                        },
                        {
                            "name": "Failed to Keep in Proper Lane",
                            "id": "3.0"
                        },
                        {
                            "name": "Failed to Yield Right-of-Way",
                            "id": "4.0"
                        },
                        {
                            "name": "Followed Too Closely",
                            "id": "5.0"
                        },
                        {
                            "name": "Improper Backing",
                            "id": "6.0"
                        },
                        {
                            "name": "Improper Passing",
                            "id": "7.0"
                        },
                        {
                            "name": "Improper Turn",
                            "id": "8.0"
                        },
                        {
                            "name": "Operated Motor Vehicle in Inattentive, Careless, Negligent, or Erratic Manner",
                            "id": "9.0"
                        },
                        {
                            "name": "Operated Motor Vehicle in Reckless or Aggressive Manner",
                            "id": "10.0"
                        },
                        {
                            "name": "Over-Correcting/Over-Steering",
                            "id": "11.0"
                        },
                        {
                            "name": "Ran Off Roadway",
                            "id": "12.0"
                        },
                        {
                            "name": "Ran Red Light",
                            "id": "13.0"
                        },
                        {
                            "name": "Ran Stop Sign",
                            "id": "14.0"
                        },
                        {
                            "name": "Swerved or Avoided Due to Wind, Slippery Surface, Motor Vehicle, Object, Non-Mo",
                            "id": "15.0"
                        },
                        {
                            "name": "Wrong Side or Wrong Way",
                            "id": "16.0"
                        },
                        {
                            "name": "Other Contributing Action",
                            "id": "17.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "18.0"
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
                    "helperText": "(choose up to 2)",
                    "tooltip": "Select the two most critical",
                    "answerOptions": [
                        {
                            "name": "No Violation",
                            "id": "0.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "1.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Distracted By",
                    "id": "lUTQ3LEq",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-36"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action",
                    "id": "0Mat8q8u",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-37",
                    "answerOptions": [
                        {
                            "name": "Not Distracted",
                            "id": "0.0"
                        },
                        {
                            "name": "Talking/listening",
                            "id": "1.0"
                        },
                        {
                            "name": "Manually Operating (texting, dialing, playing game, etc.)",
                            "id": "2.0"
                        },
                        {
                            "name": "Other Action (looking away from task, etc.)",
                            "id": "3.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "4.0"
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
                    "humanReadableId": "driver-38",
                    "questionDependency": [
                        {
                            "dependencyUid": "0Mat8q8u",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "0Mat8q8u",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "0Mat8q8u",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "0Mat8q8u",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "0Mat8q8u",
                            "dependencyOptionCode": "4.0"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Not Applicable (Not Distracted)",
                            "id": "0.0"
                        },
                        {
                            "name": "Hands-Free Mobile Phone",
                            "id": "1.0"
                        },
                        {
                            "name": "Hand-Held Mobile Phone",
                            "id": "2.0"
                        },
                        {
                            "name": "Other Electronic Device",
                            "id": "3.0"
                        },
                        {
                            "name": "Vehicle-Integrated Device",
                            "id": "4.0"
                        },
                        {
                            "name": "Passenger/Other Non-Motorist",
                            "id": "5.0"
                        },
                        {
                            "name": "External (to vehicle/non-motorist area)",
                            "id": "6.0"
                        },
                        {
                            "name": "Other Distraction (animal, food, grooming)",
                            "id": "7.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "8.0"
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
                    "humanReadableId": "driver-39",
                    "helperText": "(choose up to 2)",
                    "answerOptions": [
                        {
                            "name": "Apparently Normal",
                            "id": "0.0"
                        },
                        {
                            "name": "Asleep or Fatigued",
                            "id": "1.0"
                        },
                        {
                            "name": "Emotional (depressed, angry, disturbed, etc.)",
                            "id": "2.0"
                        },
                        {
                            "name": "Ill (sick), Fainted",
                            "id": "3.0"
                        },
                        {
                            "name": "Physically Impaired",
                            "id": "4.0"
                        },
                        {
                            "name": "Under the Influence of Medication/Drugs/Alcohol",
                            "id": "5.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "6.0"
                        },
                        {
                            "name": "Other",
                            "id": "7.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "8.0"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Injury Section",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Incident Responder?",
                    "id": "xwtnXE2c",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-10",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "EMS",
                            "id": "1.0"
                        },
                        {
                            "name": "Fire",
                            "id": "2.0"
                        },
                        {
                            "name": "Police",
                            "id": "3.0"
                        },
                        {
                            "name": "Tow Operator",
                            "id": "4.0"
                        },
                        {
                            "name": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                            "id": "5.0"
                        },
                        {
                            "name": "Other",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "7.0"
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
                    "humanReadableId": "driver-42",
                    "tooltip": "Fatal Injury: an injury that results in death within 30 days after the motor vehicle crash in which the injury occured. If the person did not die at the scene, but died within 30 days of the motor vehicle crash in which the injury occured, the injury classification should be changed to Fatal Injury. \n\nSuspected Serious Injury: any injury other than fatal which results in one or more of the following: severe laceration reuslting in exposure of underlying tissues/muscles/organs or resulting in significant loss of blood; broken or distorted arm or leg; crush injuries; suspected skull, chest, or abdominal injury other than bruises or minor lacerations; significant burns (second and third degree burns over 10% or more of the body); unconsciousness when taken from crash scene; paralysis\n\nSuspected Minor Injury: any injury that is evident at the scene of the crash, other than fatal or serious injuries. Examples include lump on the head, abrasions, bruises, minor lacerations (cuts on the skin surface with minimal bleeding and no exposure of deeper tissue/muscle).\n\nPossible Injury: any injury reported or claimed which is not fatal, suspected  serious, or suspected minor. Examples include momentary loss of consciousness, claim of injury, limping, or complaint of pain or nausea. These are reported by the person or indicated by their behavior, but no wounds or injuries are readily evident.\n\nNo Apparent Injury: there is no reason to believe that the person received any bodily harm from the motor vehicle crash. There is no physical evidence of injury and the person does not report any change in normal function.\n",
                    "answerOptions": [
                        {
                            "name": "Fatal Injury",
                            "id": "0.0"
                        },
                        {
                            "name": "Suspected Serious Injury",
                            "id": "1.0"
                        },
                        {
                            "name": "Suspected Minor Injury",
                            "id": "2.0"
                        },
                        {
                            "name": "Possible Injury",
                            "id": "3.0"
                        },
                        {
                            "name": "No Apparent Injury",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Area",
                    "id": "yLSbTFSX",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-44",
                    "tooltip": "Select the primary or most obvious area of the person's body injured during the crash. This will be typically be indicated in a matrix or narrative in the EMS records or as a hospital discharge code (ICD-9-CM or ICD-10, if implemented) in the emergency department, hospital or insurance records.",
                    "answerOptions": [
                        {
                            "name": "Head",
                            "id": "0.0"
                        },
                        {
                            "name": "Face",
                            "id": "1.0"
                        },
                        {
                            "name": "Neck",
                            "id": "2.0"
                        },
                        {
                            "name": "Upper Extremity",
                            "id": "3.0"
                        },
                        {
                            "name": "Thorax (chest)",
                            "id": "4.0"
                        },
                        {
                            "name": "Spine",
                            "id": "5.0"
                        },
                        {
                            "name": "Adnomen and Pelvis",
                            "id": "6.0"
                        },
                        {
                            "name": "Lower Extremity",
                            "id": "7.0"
                        },
                        {
                            "name": "Unspecified",
                            "id": "8.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Injury Diagnosis",
                    "id": "qcL5HdYm",
                    "answerType": "largeTextField",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-45",
                    "tooltip": "Describe the injury."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Severity",
                    "id": "gklh2mdF",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-46",
                    "answerOptions": [
                        {
                            "name": "Fatal",
                            "id": "0.0"
                        },
                        {
                            "name": "Serious",
                            "id": "1.0"
                        },
                        {
                            "name": "Moderate",
                            "id": "2.0"
                        },
                        {
                            "name": "Minor",
                            "id": "3.0"
                        },
                        {
                            "name": "No Injury",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Transported to First Medical Facility By",
                    "id": "N4korfDu",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-46",
                    "questionDependency": [
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "4.0"
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
                    "humanReadableId": "driver-47",
                    "questionDependency": [
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "4.0"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Not Transported",
                            "id": "0.0"
                        },
                        {
                            "name": "EMS Air",
                            "id": "1.0"
                        },
                        {
                            "name": "EMS Ground",
                            "id": "2.0"
                        },
                        {
                            "name": "Law Enforcement",
                            "id": "3.0"
                        },
                        {
                            "name": "Other",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
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
                    "humanReadableId": "driver-48",
                    "questionDependency": [
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "4.0"
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
                    "humanReadableId": "driver-49",
                    "questionDependency": [
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "4.0"
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
                    "humanReadableId": "driver-50",
                    "questionDependency": [
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "TNNilZo2",
                            "dependencyOptionCode": "4.0"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Large Vehicle and Hazardous Material Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "CMV License Status and Compliance with CDL Endorsements",
                    "id": "fWq06Row",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-52",
                    "questionDependency": [
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "2.0"
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
                    "humanReadableId": "driver-11",
                    "questionDependency": [
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "sM5HGjcV",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No CDL",
                            "id": "0.0"
                        },
                        {
                            "name": "Canceled or Denied",
                            "id": "1.0"
                        },
                        {
                            "name": "Disqualified",
                            "id": "2.0"
                        },
                        {
                            "name": "Expired",
                            "id": "3.0"
                        },
                        {
                            "name": "Revoked",
                            "id": "4.0"
                        },
                        {
                            "name": "Suspended",
                            "id": "5.0"
                        },
                        {
                            "name": "Learner's Permit",
                            "id": "6.0"
                        },
                        {
                            "name": "Valid",
                            "id": "7.0"
                        },
                        {
                            "name": "Other - Not Valid",
                            "id": "8.0"
                        },
                        {
                            "name": "Unknown License Status",
                            "id": "9.0"
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
                    "humanReadableId": "driver-54",
                    "questionDependency": [
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "ovVntlnU",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "CynWHwxP",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "sM5HGjcV",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No Endorsement(s) Required for the Vehicle",
                            "id": "0.0"
                        },
                        {
                            "name": "Endorsement(s) Required, Complied With",
                            "id": "1.0"
                        },
                        {
                            "name": "Endorsement(s) Required, Not Complied With",
                            "id": "2.0"
                        },
                        {
                            "name": "Endorsement(s) Required, Compliance Unknown",
                            "id": "3.0"
                        },
                        {
                            "name": "Unknown if Required",
                            "id": "4.0"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Alcohol Section",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Law Enforcement Suspects Alcohol Use",
                    "id": "9cFGpRmQ",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-56",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Test Status",
                    "id": "uTZ8u8an",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-57",
                    "questionDependency": [
                        {
                            "dependencyUid": "9cFGpRmQ",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Test Given",
                            "id": "1.0"
                        },
                        {
                            "name": "Test Refused",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "3.0"
                        },
                        {
                            "name": "Negative",
                            "id": "0.0"
                        },
                        {
                            "name": "Amphetamine",
                            "id": "1.0"
                        },
                        {
                            "name": "Cocaine",
                            "id": "2.0"
                        },
                        {
                            "name": "Marijuana",
                            "id": "3.0"
                        },
                        {
                            "name": "Opiate",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Controlled Substance",
                            "id": "5.0"
                        },
                        {
                            "name": "PCP",
                            "id": "6.0"
                        },
                        {
                            "name": "Other Drug (excludes post-crash drugs)",
                            "id": "7.0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "8.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "9.0"
                        },
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Blood",
                            "id": "1.0"
                        },
                        {
                            "name": "Both Blood and Urine",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown Test Type",
                            "id": "3.0"
                        },
                        {
                            "name": "Urine",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Test Type",
                            "id": "5.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "6.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Alcohol Test",
                    "id": "Um6CdyUJ",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-58",
                    "questionDependency": [
                        {
                            "dependencyUid": "9cFGpRmQ",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "0.0"
                        },
                        {
                            "name": "Blood",
                            "id": "1.0"
                        },
                        {
                            "name": "Breath",
                            "id": "2.0"
                        },
                        {
                            "name": "Urine",
                            "id": "3.0"
                        },
                        {
                            "name": "Other",
                            "id": "4.0"
                        },
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Tested No Drugs Found/Negative",
                            "id": "1.0"
                        },
                        {
                            "name": "Narcotic",
                            "id": "2.0"
                        },
                        {
                            "name": "Depressant",
                            "id": "3.0"
                        },
                        {
                            "name": "Simulant",
                            "id": "4.0"
                        },
                        {
                            "name": "Hallucinogen",
                            "id": "5.0"
                        },
                        {
                            "name": "Cannabinoid",
                            "id": "6.0"
                        },
                        {
                            "name": "Phencyclidine (PCP)",
                            "id": "7.0"
                        },
                        {
                            "name": "Anabolic Steroid",
                            "id": "8.0"
                        },
                        {
                            "name": "Inhalant",
                            "id": "9.0"
                        },
                        {
                            "name": "Other Drug",
                            "id": "10.0"
                        },
                        {
                            "name": "Tested for Drugs, Results Unknown",
                            "id": "11.0"
                        },
                        {
                            "name": "Tested for Drugs, Drugs Found, Type Unknown/Positive",
                            "id": "12.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "13.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "BAC Test Result",
                    "id": "xew9fNfA",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-56",
                    "questionDependency": [
                        {
                            "dependencyUid": "9cFGpRmQ",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Pending",
                            "id": "0.0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Drug Section",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Law Enforcement Suspects Drug Use",
                    "id": "qlTVIWWS",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-61",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        },
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Breath Test (AC)",
                            "id": "1.0"
                        },
                        {
                            "name": "Blood",
                            "id": "2.0"
                        },
                        {
                            "name": "Blood Clot",
                            "id": "3.0"
                        },
                        {
                            "name": "Blood Plasma/Serum",
                            "id": "4.0"
                        },
                        {
                            "name": "Liver",
                            "id": "5.0"
                        },
                        {
                            "name": "Preliminary Breath Test (PBT)",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "7.0"
                        },
                        {
                            "name": "Urine",
                            "id": "8.0"
                        },
                        {
                            "name": "Vitreous",
                            "id": "9.0"
                        },
                        {
                            "name": "Other Test Type",
                            "id": "10.0"
                        },
                        {
                            "name": "Unknown Test Type",
                            "id": "11.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Drug Test Status",
                    "id": "nCXTPsU5",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-12",
                    "questionDependency": [
                        {
                            "dependencyUid": "qlTVIWWS",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Test Given",
                            "id": "1.0"
                        },
                        {
                            "name": "Test Refused",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "3.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Drug Test",
                    "id": "QUYxXsUT",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-63",
                    "questionDependency": [
                        {
                            "dependencyUid": "qlTVIWWS",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Blood",
                            "id": "0.0"
                        },
                        {
                            "name": "Saliva",
                            "id": "1.0"
                        },
                        {
                            "name": "Urine",
                            "id": "2.0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "3.0"
                        },
                        {
                            "name": "Other",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "Drug Test Result",
                    "id": "uTZ8u8an",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-64",
                    "helperText": "(choose up to 4)",
                    "questionDependency": [
                        {
                            "dependencyUid": "qlTVIWWS",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Test Given",
                            "id": "1.0"
                        },
                        {
                            "name": "Test Refused",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "3.0"
                        },
                        {
                            "name": "Negative",
                            "id": "0.0"
                        },
                        {
                            "name": "Amphetamine",
                            "id": "1.0"
                        },
                        {
                            "name": "Cocaine",
                            "id": "2.0"
                        },
                        {
                            "name": "Marijuana",
                            "id": "3.0"
                        },
                        {
                            "name": "Opiate",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Controlled Substance",
                            "id": "5.0"
                        },
                        {
                            "name": "PCP",
                            "id": "6.0"
                        },
                        {
                            "name": "Other Drug (excludes post-crash drugs)",
                            "id": "7.0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "8.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "9.0"
                        },
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Blood",
                            "id": "1.0"
                        },
                        {
                            "name": "Both Blood and Urine",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown Test Type",
                            "id": "3.0"
                        },
                        {
                            "name": "Urine",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Test Type",
                            "id": "5.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "6.0"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Vehicle Owner Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Name",
                    "id": "YyQ6jMwd",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-1"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial",
                    "id": "SulL32si",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name",
                    "id": "zOGjRlMJ",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-3"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 1",
                    "id": "ywUJNXkj",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-4"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 2",
                    "id": "ZA66gCFK",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-4"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "4G5ht6pl",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-6"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "3g8Oxu93",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-7"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "crxPGHSm",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-8"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Insurance Information",
                    "id": "yuQ3Zjt2",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-9"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Insurance Company Name",
                    "id": "TDkAb1u9",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-10",
                    "answerOptions": [
                        {
                            "name": "Unknown",
                            "id": "0.0"
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
                    "humanReadableId": "vehicle-11",
                    "answerOptions": [
                        {
                            "name": "Unknown",
                            "id": "0.0"
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
                    "humanReadableId": "vehicle-12",
                    "answerOptions": [
                        {
                            "name": "Unknown",
                            "id": "0.0"
                        }
                    ]
                }
            ],
            "display": [
                "vehicle"
            ]
        },
        {
            "sectionTitle": "Vehicle Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Vehicle Identification Number (VIN)",
                    "id": "Bw7d2KTr",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-14",
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
                    "humanReadableId": "vehicle-15",
                    "answerOptions": [
                        {
                            "name": "Motor Vehicle in Transport",
                            "id": "0.0"
                        },
                        {
                            "name": "Parked Motor Vehicle",
                            "id": "1.0"
                        },
                        {
                            "name": "Working Vehicle/Equipment",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Registration State and Year",
                    "id": "sXvB0sJf",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-16",
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
                    "humanReadableId": "vehicle-17",
                    "helperText": "Might be zip code",
                    "tooltip": "No Driver Present, State Identifier, Unknown"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Year of Motor Vehicle Registration",
                    "id": "QoX1IOdG",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-18",
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
                    "humanReadableId": "vehicle-19",
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
                    "humanReadableId": "vehicle-20"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Model",
                    "id": "29h5OiPC",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-21"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Model Year",
                    "id": "C0rbnXHC",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-22",
                    "helperText": "Format: YYYY"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Body Type Category",
                    "id": "IOCCjh0h",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-23"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Body Type Category",
                    "id": "MMkwgaog",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-24",
                    "tooltip": "What is the general configuration or shape of a motor vehicle? You should use characteristics like the number of doors, rows of seats, windows, roof line, etc. to distinguish between different body types. Personal conveyances, like skateboards, motorized toy cars, and wheelchairs are not considered motor vehicles.",
                    "answerOptions": [
                        {
                            "name": "Passenger Car",
                            "id": "0.0"
                        },
                        {
                            "name": "Jeep",
                            "id": "1.0"
                        },
                        {
                            "name": "Sport Utility Vehicle",
                            "id": "2.0"
                        },
                        {
                            "name": "Mini-Van (personal use, up to 8 seats)",
                            "id": "3.0"
                        },
                        {
                            "name": "Motor home/recreational vehicle",
                            "id": "4.0"
                        },
                        {
                            "name": "Limo",
                            "id": "5.0"
                        },
                        {
                            "name": "Passenger Van",
                            "id": "6.0"
                        },
                        {
                            "name": "School Bus",
                            "id": "7.0"
                        },
                        {
                            "name": "Transit Bus",
                            "id": "8.0"
                        },
                        {
                            "name": "Charter/Tour Bus",
                            "id": "9.0"
                        },
                        {
                            "name": "Intercity Bus",
                            "id": "10.0"
                        },
                        {
                            "name": "Shuttle Bus",
                            "id": "11.0"
                        },
                        {
                            "name": "ChildCare/DayCare",
                            "id": "12.0"
                        },
                        {
                            "name": "Other Large Passenger Trucks",
                            "id": "13.0"
                        },
                        {
                            "name": "Cargo Van",
                            "id": "14.0"
                        },
                        {
                            "name": "Pickup Truck",
                            "id": "15.0"
                        },
                        {
                            "name": "Single Unit Truck (2 axles)",
                            "id": "16.0"
                        },
                        {
                            "name": "SIngle-Unit Truck (3 or more axles)",
                            "id": "17.0"
                        },
                        {
                            "name": "Truck, Axles Unknown",
                            "id": "18.0"
                        },
                        {
                            "name": "Truck Tractor (Bobtail)",
                            "id": "19.0"
                        },
                        {
                            "name": "Construction Equipment (Backhoe, Bulldozer, etc.)",
                            "id": "20.0"
                        },
                        {
                            "name": "Farm Equipment (Tractor, Combine, Harvester, etc.)",
                            "id": "21.0"
                        },
                        {
                            "name": "2-Wheeled Motorcycle",
                            "id": "22.0"
                        },
                        {
                            "name": "3-Wheeled Motorcycle",
                            "id": "23.0"
                        },
                        {
                            "name": "Autocycle",
                            "id": "24.0"
                        },
                        {
                            "name": "All-Terrain Vehicle/All-Terrain Cycle (ATV/ATC)",
                            "id": "25.0"
                        },
                        {
                            "name": "Golf cart",
                            "id": "26.0"
                        },
                        {
                            "name": "Snowmobile",
                            "id": "27.0"
                        },
                        {
                            "name": "Moped or motorizled bicycle",
                            "id": "28.0"
                        },
                        {
                            "name": "Recreational Off-Highway Vehicle (ROV)",
                            "id": "29.0"
                        },
                        {
                            "name": "Low speed vehicle",
                            "id": "30.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Vehicle Size",
                    "id": "CynWHwxP",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-25",
                    "tooltip": "GVWR is used for single-unit trucks and other body types. GCWR is used for combination trucks or any vehicle with a trailing unit",
                    "answerOptions": [
                        {
                            "name": "Light (10,000 lbs. or less GVWR/GCWR)",
                            "id": "0.0"
                        },
                        {
                            "name": "Medium (10,001 - 26,000 lbs. GVWR/GCWR)",
                            "id": "1.0"
                        },
                        {
                            "name": "Heavy (Greater than 26,000 lbs. GVWR/GCWR)",
                            "id": "2.0"
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
                    "humanReadableId": "vehicle-26",
                    "tooltip": "The number of trailers attached to this vehicle",
                    "answerOptions": [
                        {
                            "name": 1.0,
                            "id": "0.0"
                        },
                        {
                            "name": 2.0,
                            "id": "1.0"
                        },
                        {
                            "name": 3.0,
                            "id": "2.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "3.0"
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
                    "humanReadableId": "vehicle-27",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
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
                    "humanReadableId": "vehicle-28"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Special Function of Motor Vehicle in Transport",
                    "id": "4vrmnvfC",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-29",
                    "tooltip": "What was the special function (if any) that this vehicle was serving (regardless of whether the function is marked on the vehicle) at the time of the crash? For example, was the vehicle acting as a school bus, even if it is not actually marked as a school bus? Buses are any motor vehicles with seats to transport nine (9) or more people, including the driver seat, but not including vans owned and operated for personal use."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Emergency Motor Vehicle Use",
                    "id": "CFa8RCtt",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-30",
                    "answerOptions": [
                        {
                            "name": "Not Applicable",
                            "id": "0.0"
                        },
                        {
                            "name": "Non-Emergency, Non-Transport",
                            "id": "1.0"
                        },
                        {
                            "name": "Non-Emergency Transport",
                            "id": "2.0"
                        },
                        {
                            "name": "Emergency Operation, Emergency Warning Equipment Not in Use",
                            "id": "3.0"
                        },
                        {
                            "name": "Emergency Operation, Emergency Warning Equipment in Use",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
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
                    "humanReadableId": "vehicle-31",
                    "tooltip": "Must be divisble by 5. If unknown enter 99. If not applicable enter 97."
                }
            ],
            "display": [
                "vehicle"
            ]
        },
        {
            "sectionTitle": "Crash-Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Direction of Travel Before Crash",
                    "id": "CP4soemD",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-33",
                    "tooltip": "Note that this is not a compass direction, but a direction consistent with the designated direction of the road. For example, the direction of a State-designated North-South highway must be either northbound or southbound even though a motor vehicle may have been traveling due east as a result of a short segment of the highway having an east-west orientation.",
                    "answerOptions": [
                        {
                            "name": "Not on Roadway",
                            "id": "0.0"
                        },
                        {
                            "name": "Northbound",
                            "id": "1.0"
                        },
                        {
                            "name": "Eastbound",
                            "id": "2.0"
                        },
                        {
                            "name": "Southbound",
                            "id": "3.0"
                        },
                        {
                            "name": "Westbound",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trafficway Description",
                    "id": "Ahz6r67I",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-34"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Travel Directions",
                    "id": "udnyu4F5",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-35",
                    "answerOptions": [
                        {
                            "name": "One-Way",
                            "id": "0.0"
                        },
                        {
                            "name": "Two-Way",
                            "id": "1.0"
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
                    "humanReadableId": "vehicle-36",
                    "answerOptions": [
                        {
                            "name": "Not Divided",
                            "id": "0.0"
                        },
                        {
                            "name": "Not Divided, With a Continuous Left-Turn Lane",
                            "id": "1.0"
                        },
                        {
                            "name": "Divided, Flush Median (greater than 4ft wide)",
                            "id": "2.0"
                        },
                        {
                            "name": "Divided, Raised Median (curbed)",
                            "id": "3.0"
                        },
                        {
                            "name": "Divided, Depressed Median",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
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
                    "humanReadableId": "vehicle-37",
                    "answerOptions": [
                        {
                            "name": "No Barrier",
                            "id": "0.0"
                        },
                        {
                            "name": "Cable Barrier",
                            "id": "1.0"
                        },
                        {
                            "name": "Concrete Barrier (e.g. Jersey Barrier)",
                            "id": "2.0"
                        },
                        {
                            "name": "Earth Embankment",
                            "id": "3.0"
                        },
                        {
                            "name": "Guardrail",
                            "id": "4.0"
                        },
                        {
                            "name": "Other",
                            "id": "5.0"
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
                    "humanReadableId": "vehicle-38",
                    "tooltip": "High occupancy vehicle/high occupancy toll lane",
                    "answerOptions": [
                        {
                            "name": "None present",
                            "id": "0.0"
                        },
                        {
                            "name": "Separated, Barrier, Flush (greater than 4ft wide), Raised or Depressed Median",
                            "id": "1.0"
                        },
                        {
                            "name": "Not Separated, Painted Pavement Markings, Post-Mounted Delineators",
                            "id": "2.0"
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
                    "humanReadableId": "vehicle-39",
                    "questionDependency": [
                        {
                            "dependencyUid": "Gk088QR4",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "Gk088QR4",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "Gk088QR4",
                            "dependencyOptionCode": "2.0"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Total Lanes in Roadway",
                    "id": "iTScm08u",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-40"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Enter the total through lanes, excluding auxiliary lanes.",
                    "id": "FdF7XvAQ",
                    "answerType": "numberButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-41",
                    "tooltip": "If the traffic way is divided, only count the total through lanes in the vehicle's direction."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Enter the total auxiliary lanes",
                    "id": "JwQN2ENk",
                    "answerType": "numberButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-42",
                    "tooltip": "If the traffic way is divided, only count the total through lanes in the vehicle's direction."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Roadway Alignment and Grade",
                    "id": "nuD8IERF",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-43"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Horizontal Alignment",
                    "id": "UigT0ygk",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-44",
                    "answerOptions": [
                        {
                            "name": "Straight",
                            "id": "0.0"
                        },
                        {
                            "name": "Curve Left",
                            "id": "1.0"
                        },
                        {
                            "name": "Curve Right",
                            "id": "2.0"
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
                    "humanReadableId": "vehicle-45",
                    "answerOptions": [
                        {
                            "name": "Level",
                            "id": "0.0"
                        },
                        {
                            "name": "Uphill",
                            "id": "1.0"
                        },
                        {
                            "name": "Hillcrest",
                            "id": "2.0"
                        },
                        {
                            "name": "Downhill",
                            "id": "3.0"
                        },
                        {
                            "name": "Sag (bottom)",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Traffic Control Device (TCD) Type",
                    "id": "LEx2ZDxu",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-46"
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "TCD Type(s)",
                    "id": "xBm1Bisf",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-47",
                    "helperText": "(choose up to 4)",
                    "answerOptions": [
                        {
                            "name": "No Controls",
                            "id": "0.0"
                        },
                        {
                            "name": "Person (including flagger, law enforcement, crossing guard, etc.)",
                            "id": "1.0"
                        },
                        {
                            "name": "Bicycle Crossing Sign",
                            "id": "2.0"
                        },
                        {
                            "name": "\"Curve Ahead\" Warning Sign",
                            "id": "3.0"
                        },
                        {
                            "name": "\"Intersection Ahead\" Warning Sign",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Warning Sign",
                            "id": "5.0"
                        },
                        {
                            "name": "Pedestrian Crossing Sign",
                            "id": "6.0"
                        },
                        {
                            "name": "Railroad Crossing Sign",
                            "id": "7.0"
                        },
                        {
                            "name": "\"Reduce Speed Ahead\" Warning Sign",
                            "id": "8.0"
                        },
                        {
                            "name": "School Zone Sign",
                            "id": "9.0"
                        },
                        {
                            "name": "Stop Sign",
                            "id": "10.0"
                        },
                        {
                            "name": "Yield Sign",
                            "id": "11.0"
                        },
                        {
                            "name": "Flashing Railroad Crossing Signal (may include gates)",
                            "id": "12.0"
                        },
                        {
                            "name": "Flashing School Zone Signal",
                            "id": "13.0"
                        },
                        {
                            "name": "Flashing Traffic Control Signal",
                            "id": "14.0"
                        },
                        {
                            "name": "Lane Use Control Signal",
                            "id": "15.0"
                        },
                        {
                            "name": "Other Signal",
                            "id": "16.0"
                        },
                        {
                            "name": "Ramp Meter Signal",
                            "id": "17.0"
                        },
                        {
                            "name": "Traffic Control Signal",
                            "id": "18.0"
                        },
                        {
                            "name": "Bicycle Crossing",
                            "id": "19.0"
                        },
                        {
                            "name": "Other Pavement Marking (excluding edgelines, centerlines, or lane lines)",
                            "id": "20.0"
                        },
                        {
                            "name": "Pedestrian Crossing",
                            "id": "21.0"
                        },
                        {
                            "name": "Railroad Crossing",
                            "id": "22.0"
                        },
                        {
                            "name": "School Zone",
                            "id": "23.0"
                        },
                        {
                            "name": "No Controls",
                            "id": "24.0"
                        },
                        {
                            "name": "Person (including flagger, law enforcement, crossing guard, etc.)",
                            "id": "25.0"
                        },
                        {
                            "name": "Other",
                            "id": "26.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "27.0"
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
                    "humanReadableId": "vehicle-48",
                    "helperText": "(choose up to 4)",
                    "questionDependency": [
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "4.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "5.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "6.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "7.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "8.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "9.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "10.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "11.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "12.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "13.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "14.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "15.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "16.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "17.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "18.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "19.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "20.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "21.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "22.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "23.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "24.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "25.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "26.0"
                        },
                        {
                            "dependencyUid": "xBm1Bisf",
                            "dependencyOptionCode": "27.0"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "None inoperative or missing",
                            "id": "0.0"
                        },
                        {
                            "name": "Person (including flagger, law enforcement, crossing guard, etc.)",
                            "id": "1.0"
                        },
                        {
                            "name": "Bicycle Crossing Sign",
                            "id": "2.0"
                        },
                        {
                            "name": "\"Curve Ahead\" Warning Sign",
                            "id": "3.0"
                        },
                        {
                            "name": "\"Intersection Ahead\" Warning Sign",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Warning Sign",
                            "id": "5.0"
                        },
                        {
                            "name": "Pedestrian Crossing Sign",
                            "id": "6.0"
                        },
                        {
                            "name": "Railroad Crossing Sign",
                            "id": "7.0"
                        },
                        {
                            "name": "\"Reduce Speed Ahead\" Warning Sign",
                            "id": "8.0"
                        },
                        {
                            "name": "School Zone Sign",
                            "id": "9.0"
                        },
                        {
                            "name": "Stop Sign",
                            "id": "10.0"
                        },
                        {
                            "name": "Yield Sign",
                            "id": "11.0"
                        },
                        {
                            "name": "Flashing Railroad Crossing Signal (may include gates)",
                            "id": "12.0"
                        },
                        {
                            "name": "Flashing School Zone Signal",
                            "id": "13.0"
                        },
                        {
                            "name": "Flashing Traffic Control Signal",
                            "id": "14.0"
                        },
                        {
                            "name": "Lane Use Control Signal",
                            "id": "15.0"
                        },
                        {
                            "name": "Other Signal",
                            "id": "16.0"
                        },
                        {
                            "name": "Ramp Meter Signal",
                            "id": "17.0"
                        },
                        {
                            "name": "Traffic Control Signal",
                            "id": "18.0"
                        },
                        {
                            "name": "Bicycle Crossing",
                            "id": "19.0"
                        },
                        {
                            "name": "Other Pavement Marking (excluding edgelines, centerlines, or lane lines)",
                            "id": "20.0"
                        },
                        {
                            "name": "Pedestrian Crossing",
                            "id": "21.0"
                        },
                        {
                            "name": "Railroad Crossing",
                            "id": "22.0"
                        },
                        {
                            "name": "School Zone",
                            "id": "23.0"
                        },
                        {
                            "name": "No Controls",
                            "id": "24.0"
                        },
                        {
                            "name": "Person (including flagger, law enforcement, crossing guard, etc.)",
                            "id": "25.0"
                        },
                        {
                            "name": "Other",
                            "id": "26.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "27.0"
                        }
                    ]
                }
            ],
            "display": [
                "vehicle"
            ]
        },
        {
            "sectionTitle": "Crash Events",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Motor Vehicle Maneuver/Action",
                    "id": "DJ4YPDuQ",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-50",
                    "answerOptions": [
                        {
                            "name": "Movements Essentially Straight Ahead",
                            "id": "0.0"
                        },
                        {
                            "name": "Backing",
                            "id": "1.0"
                        },
                        {
                            "name": "Changing Lanes",
                            "id": "2.0"
                        },
                        {
                            "name": "Entering Traffic Lane",
                            "id": "3.0"
                        },
                        {
                            "name": "Leaving Traffic Lane",
                            "id": "4.0"
                        },
                        {
                            "name": "Making U-Turn",
                            "id": "5.0"
                        },
                        {
                            "name": "Negotiating a Curve",
                            "id": "6.0"
                        },
                        {
                            "name": "Overtaking/Passing",
                            "id": "7.0"
                        },
                        {
                            "name": "Parked",
                            "id": "8.0"
                        },
                        {
                            "name": "Slowing",
                            "id": "9.0"
                        },
                        {
                            "name": "Stopped in Traffic",
                            "id": "10.0"
                        },
                        {
                            "name": "Turning Left",
                            "id": "11.0"
                        },
                        {
                            "name": "Turning Right",
                            "id": "12.0"
                        },
                        {
                            "name": "Other",
                            "id": "13.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "14.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Vehicle Damage",
                    "id": "i7hJdGR6",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-51"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Initial Point of Contact",
                    "id": "4KpRmZXB",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-52",
                    "tooltip": "Provide the approximate contact point on this vehicle associated with this vehicle’s initial harmful event. If there was no collision, select \"Non-Collision\". If the initial harmful event for this vehicle involves striking another vehicle, person, or property (a collision event) because a load/cargo fell from or was propelled by the vehicle, then select \"Cargo Loss\". If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "helperImg": "../image/initial_contact.png",
                    "answerOptions": [
                        {
                            "name": "Non-Collision",
                            "id": "0.0"
                        },
                        {
                            "name": "(Clock Position) 1",
                            "id": "1.0"
                        },
                        {
                            "name": "(Clock Position) 2",
                            "id": "2.0"
                        },
                        {
                            "name": "(Clock Position) 3",
                            "id": "3.0"
                        },
                        {
                            "name": "(Clock Position) 4",
                            "id": "4.0"
                        },
                        {
                            "name": "(Clock Position) 5",
                            "id": "5.0"
                        },
                        {
                            "name": "(Clock Position) 6",
                            "id": "6.0"
                        },
                        {
                            "name": "(Clock Position) 7",
                            "id": "7.0"
                        },
                        {
                            "name": "(Clock Position) 8",
                            "id": "8.0"
                        },
                        {
                            "name": "(Clock Position) 9",
                            "id": "9.0"
                        },
                        {
                            "name": "(Clock Position) 10",
                            "id": "10.0"
                        },
                        {
                            "name": "(Clock Position) 11",
                            "id": "11.0"
                        },
                        {
                            "name": "(Clock Position) 12",
                            "id": "12.0"
                        },
                        {
                            "name": "Top",
                            "id": "13.0"
                        },
                        {
                            "name": "Undercarriage",
                            "id": "14.0"
                        },
                        {
                            "name": "Cargo Loss",
                            "id": "15.0"
                        },
                        {
                            "name": "Vehicle Not at Scene",
                            "id": "16.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "17.0"
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
                    "humanReadableId": "vehicle-53",
                    "helperText": "(choose up to 13)",
                    "tooltip": "If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "questionDependency": [
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "4.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "5.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "6.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "7.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "8.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "9.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "10.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "11.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "12.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "13.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "14.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "15.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "16.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "17.0"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "(Clock Position) 1",
                            "id": "0.0"
                        },
                        {
                            "name": "(Clock Position) 2",
                            "id": "1.0"
                        },
                        {
                            "name": "(Clock Position) 3",
                            "id": "2.0"
                        },
                        {
                            "name": "(Clock Position) 4",
                            "id": "3.0"
                        },
                        {
                            "name": "(Clock Position) 5",
                            "id": "4.0"
                        },
                        {
                            "name": "(Clock Position) 6",
                            "id": "5.0"
                        },
                        {
                            "name": "(Clock Position) 7",
                            "id": "6.0"
                        },
                        {
                            "name": "(Clock Position) 8",
                            "id": "7.0"
                        },
                        {
                            "name": "(Clock Position) 9",
                            "id": "8.0"
                        },
                        {
                            "name": "(Clock Position) 10",
                            "id": "9.0"
                        },
                        {
                            "name": "(Clock Position) 11",
                            "id": "10.0"
                        },
                        {
                            "name": "(Clock Position) 12",
                            "id": "11.0"
                        },
                        {
                            "name": "Top",
                            "id": "12.0"
                        },
                        {
                            "name": "Undercarriage",
                            "id": "13.0"
                        },
                        {
                            "name": "All Areas",
                            "id": "14.0"
                        },
                        {
                            "name": "No Damage",
                            "id": "15.0"
                        },
                        {
                            "name": "Vehicle Not at Scene",
                            "id": "16.0"
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
                    "humanReadableId": "vehicle-54",
                    "tooltip": "If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "questionDependency": [
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "4.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "5.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "6.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "7.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "8.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "9.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "10.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "11.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "12.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "13.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "14.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "15.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "16.0"
                        },
                        {
                            "dependencyUid": "4KpRmZXB",
                            "dependencyOptionCode": "17.0"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No Damage",
                            "id": "0.0"
                        },
                        {
                            "name": "Minor Damage",
                            "id": "1.0"
                        },
                        {
                            "name": "Functional Damage",
                            "id": "2.0"
                        },
                        {
                            "name": "Disabling Damage",
                            "id": "3.0"
                        },
                        {
                            "name": "Vehicle Not at Scene",
                            "id": "4.0"
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
                    "humanReadableId": "vehicle-55",
                    "helperText": "(choose up to 4)",
                    "tooltip": "Describe the sequence of events related to this motor vehicle, including non-harmful events, non-collision harmful events and collision events.",
                    "answerOptions": [
                        {
                            "name": "Cross Centerline",
                            "id": "0.0"
                        },
                        {
                            "name": "Cross Median",
                            "id": "1.0"
                        },
                        {
                            "name": "End Departure (T-intersection, dead-end, etc.)",
                            "id": "2.0"
                        },
                        {
                            "name": "Downhill Runaway",
                            "id": "3.0"
                        },
                        {
                            "name": "Equipment Failure (blown tire, brake failure, etc.)",
                            "id": "4.0"
                        },
                        {
                            "name": "Ran Off Roadway Left",
                            "id": "5.0"
                        },
                        {
                            "name": "Ran Off Roadway Right",
                            "id": "6.0"
                        },
                        {
                            "name": "Reentering Roadway",
                            "id": "7.0"
                        },
                        {
                            "name": "Separation of Units",
                            "id": "8.0"
                        },
                        {
                            "name": "Other Non-Harmful Event",
                            "id": "9.0"
                        },
                        {
                            "name": "Cargo/Equipment Loss or Shift",
                            "id": "10.0"
                        },
                        {
                            "name": "Fell/Jumped From Motor Vehicle",
                            "id": "11.0"
                        },
                        {
                            "name": "Fire/Explosion",
                            "id": "12.0"
                        },
                        {
                            "name": "Immersion, Full or Partial",
                            "id": "13.0"
                        },
                        {
                            "name": "Jackknife",
                            "id": "14.0"
                        },
                        {
                            "name": "Other Non-Collision Harmful Event",
                            "id": "15.0"
                        },
                        {
                            "name": "Overturn/Rollover",
                            "id": "16.0"
                        },
                        {
                            "name": "Thrown or Falling Object",
                            "id": "17.0"
                        },
                        {
                            "name": "Animal (live)",
                            "id": "18.0"
                        },
                        {
                            "name": "Motor Vehicle in Transport",
                            "id": "19.0"
                        },
                        {
                            "name": "Other Non-Fixed Object",
                            "id": "20.0"
                        },
                        {
                            "name": "Other Non-Motorist",
                            "id": "21.0"
                        },
                        {
                            "name": "Parked Motor Vehicle",
                            "id": "22.0"
                        },
                        {
                            "name": "Pedalcycle",
                            "id": "23.0"
                        },
                        {
                            "name": "Pedestrian",
                            "id": "24.0"
                        },
                        {
                            "name": "Railway Vehicle (train, engine)",
                            "id": "25.0"
                        },
                        {
                            "name": "Strikes Object at Rest from MV in Transport",
                            "id": "26.0"
                        },
                        {
                            "name": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                            "id": "27.0"
                        },
                        {
                            "name": "Work Zone/Maintenance Equipment",
                            "id": "28.0"
                        },
                        {
                            "name": "Bridge Overhead Structure",
                            "id": "29.0"
                        },
                        {
                            "name": "Bridge Pier or Support",
                            "id": "30.0"
                        },
                        {
                            "name": "Bridge Rail",
                            "id": "31.0"
                        },
                        {
                            "name": "Cable Barrier",
                            "id": "32.0"
                        },
                        {
                            "name": "Concrete Traffic Barrier",
                            "id": "33.0"
                        },
                        {
                            "name": "Culvert",
                            "id": "34.0"
                        },
                        {
                            "name": "Curb",
                            "id": "35.0"
                        },
                        {
                            "name": "Ditch",
                            "id": "36.0"
                        },
                        {
                            "name": "Embankment",
                            "id": "37.0"
                        },
                        {
                            "name": "Fence",
                            "id": "38.0"
                        },
                        {
                            "name": "Guardrail End Terminal",
                            "id": "39.0"
                        },
                        {
                            "name": "Guardrail Face",
                            "id": "40.0"
                        },
                        {
                            "name": "Impact Attenuator/Crash Cushion",
                            "id": "41.0"
                        },
                        {
                            "name": "Mailbox",
                            "id": "42.0"
                        },
                        {
                            "name": "Other Fixed Object (wall, building, tunnel, etc.)",
                            "id": "43.0"
                        },
                        {
                            "name": "Other Post, Pole or Support",
                            "id": "44.0"
                        },
                        {
                            "name": "Other Traffic Barrier",
                            "id": "45.0"
                        },
                        {
                            "name": "Traffic Sign Support",
                            "id": "46.0"
                        },
                        {
                            "name": "Traffic Signal Support",
                            "id": "47.0"
                        },
                        {
                            "name": "Tree (standing)",
                            "id": "48.0"
                        },
                        {
                            "name": "Utility Pole/Light Support",
                            "id": "49.0"
                        },
                        {
                            "name": "Unknown Fixed Object",
                            "id": "50.0"
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
                    "humanReadableId": "vehicle-56",
                    "answerOptions": [
                        {
                            "name": "Cargo/Equipment Loss or Shift",
                            "id": "0.0"
                        },
                        {
                            "name": "Fell/Jumped From Motor Vehicle",
                            "id": "1.0"
                        },
                        {
                            "name": "Fire/Explosion",
                            "id": "2.0"
                        },
                        {
                            "name": "Immersion, Full or Partial",
                            "id": "3.0"
                        },
                        {
                            "name": "Jackknife",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Non-Collision Harmful Event",
                            "id": "5.0"
                        },
                        {
                            "name": "Overturn/Rollover",
                            "id": "6.0"
                        },
                        {
                            "name": "Thrown or Falling Object",
                            "id": "7.0"
                        },
                        {
                            "name": "Animal (live)",
                            "id": "8.0"
                        },
                        {
                            "name": "Motor Vehicle in Transport",
                            "id": "9.0"
                        },
                        {
                            "name": "Other Non-Fixed Object",
                            "id": "10.0"
                        },
                        {
                            "name": "Other Non-Motorist",
                            "id": "11.0"
                        },
                        {
                            "name": "Parked Motor Vehicle",
                            "id": "12.0"
                        },
                        {
                            "name": "Pedalcycle",
                            "id": "13.0"
                        },
                        {
                            "name": "Pedestrian",
                            "id": "14.0"
                        },
                        {
                            "name": "Railway Vehicle (train, engine)",
                            "id": "15.0"
                        },
                        {
                            "name": "Strikes Object at Rest from MV in Transport",
                            "id": "16.0"
                        },
                        {
                            "name": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                            "id": "17.0"
                        },
                        {
                            "name": "Work Zone / Maintenance Equipment",
                            "id": "18.0"
                        },
                        {
                            "name": "Bridge Overhead Structure",
                            "id": "19.0"
                        },
                        {
                            "name": "Bridge Pier or Support",
                            "id": "20.0"
                        },
                        {
                            "name": "Bridge Rail",
                            "id": "21.0"
                        },
                        {
                            "name": "Cable Barrier",
                            "id": "22.0"
                        },
                        {
                            "name": "Concrete Traffic Barrier",
                            "id": "23.0"
                        },
                        {
                            "name": "Culvert",
                            "id": "24.0"
                        },
                        {
                            "name": "Curb",
                            "id": "25.0"
                        },
                        {
                            "name": "Ditch",
                            "id": "26.0"
                        },
                        {
                            "name": "Embankment",
                            "id": "27.0"
                        },
                        {
                            "name": "Fence",
                            "id": "28.0"
                        },
                        {
                            "name": "Guardrail End Terminal",
                            "id": "29.0"
                        },
                        {
                            "name": "Guardrail Face",
                            "id": "30.0"
                        },
                        {
                            "name": "Impact Attenuator/Crash Cushion",
                            "id": "31.0"
                        },
                        {
                            "name": "Mailbox",
                            "id": "32.0"
                        },
                        {
                            "name": "Other Fixed Object (wall, building, tunnel, etc.)",
                            "id": "33.0"
                        },
                        {
                            "name": "Other Post, Pole or Support",
                            "id": "34.0"
                        },
                        {
                            "name": "Other Traffic Barrier",
                            "id": "35.0"
                        },
                        {
                            "name": "Traffic Sign Support",
                            "id": "36.0"
                        },
                        {
                            "name": "Traffic Signal Support",
                            "id": "37.0"
                        },
                        {
                            "name": "Tree (standing)",
                            "id": "38.0"
                        },
                        {
                            "name": "Utility Pole/Light Support",
                            "id": "39.0"
                        },
                        {
                            "name": "Unknown Collision With Fixed Object",
                            "id": "40.0"
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
                    "humanReadableId": "vehicle-57",
                    "tooltip": "Refers to cases where the vehicle or the driver of the vehicle in transport is a contact vehicle in a crash and departs the scene without stopping to render aid or report the crash.",
                    "answerOptions": [
                        {
                            "name": "No, Did Not Leave Scene",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes, Driver or Car and Driver Left Scene",
                            "id": "1.0"
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
                    "humanReadableId": "vehicle-58",
                    "tooltip": "Disabling damage is damage to the motor vehicle that is sufficient to require the motor vehicle be towed or carried from the scene.",
                    "answerOptions": [
                        {
                            "name": "Not towed",
                            "id": "0.0"
                        },
                        {
                            "name": "Towed, But Not Due to Disabling Damage",
                            "id": "1.0"
                        },
                        {
                            "name": "Towed Due to Disabling Damage",
                            "id": "2.0"
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
                    "humanReadableId": "vehicle-59",
                    "tooltip": "Pre-existing motor vehicle defects or maintenance conditions that may have contributed to the crash.",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0.0"
                        },
                        {
                            "name": "Brakes",
                            "id": "1.0"
                        },
                        {
                            "name": "Exhaust System",
                            "id": "2.0"
                        },
                        {
                            "name": "Body, Doors",
                            "id": "3.0"
                        },
                        {
                            "name": "Steering",
                            "id": "4.0"
                        },
                        {
                            "name": "Power Train",
                            "id": "5.0"
                        },
                        {
                            "name": "Suspension",
                            "id": "6.0"
                        },
                        {
                            "name": "Tires",
                            "id": "7.0"
                        },
                        {
                            "name": "Wheels",
                            "id": "8.0"
                        },
                        {
                            "name": "Lights (head, signal, tail)",
                            "id": "9.0"
                        },
                        {
                            "name": "Windows/Windshield",
                            "id": "10.0"
                        },
                        {
                            "name": "Mirrors",
                            "id": "11.0"
                        },
                        {
                            "name": "Wipers",
                            "id": "12.0"
                        },
                        {
                            "name": "Truck Coupling/Trailer Hitch/Safety Chains",
                            "id": "13.0"
                        },
                        {
                            "name": "Other",
                            "id": "14.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "15.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Automated Driving System(s)",
                    "id": "QA0BSYIz",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-60"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Automated System(s) in Vehicle",
                    "id": "krQbh0po",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-61",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "5.0",
                    "question": "Automated System Levels in Vehicle",
                    "id": "d4OE8GnI",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-62",
                    "helperText": "(choose up to 5)",
                    "tooltip": "No Automation: Requires full-time performance of human driver, even when enhanced by warning or intervention systems\nDriver Assistance: Assistance of either steering or acceleration/deceleration using information about the drivng environment, with the expectation that the driver does the rest\nPartial Automation: Driving mode-specific execution by one or more driver assistance systems of both steering and acceleration/deceleration, with the expectation that the driver does the rest\nConditional Automation: Driving mode-specific performance by an automated driving system of all dynamic driving tasks, with the expectation that the human driver will respond appropriately to a request to intervene\nHigh Automation: The driving mode-specific performance by an automated driving system of all aspects of dynamic driving tasks, even if the human driver does not respond appropriately to a request to intervene\nFull automation: The full-time performance by an automated driving system of all aspects of the dynamic driving task under all roadway and environmental conditions that can be managed by a human driver\nDynamic driving task: operational (steering, braking, accelerating, monitoring the vehicle and roadway) and tactical (responding to events, determining when to change lanes, turn, use signals, etc), aspects of the driving task, but not strategic (determining destinations and waypoints)\nDriving mode: type of driving scenario with characteristic dynamic driving task requirements (e.g., expressway merging, high-speed cruising, low speed traffic jam, closed-campus operations, etc.)\nRequest to intervene: notification by the automated driving system to a human driver that they should promptly begin or resume performance of the dynamic driving task\n",
                    "helperImg": "../image/automation_levels.png",
                    "questionDependency": [
                        {
                            "dependencyUid": "krQbh0po",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No Automation",
                            "id": "0.0"
                        },
                        {
                            "name": "Driver Assistance",
                            "id": "1.0"
                        },
                        {
                            "name": "Partial Automation",
                            "id": "2.0"
                        },
                        {
                            "name": "Conditional Automation",
                            "id": "3.0"
                        },
                        {
                            "name": "High Automation",
                            "id": "4.0"
                        },
                        {
                            "name": "Full Automation",
                            "id": "5.0"
                        },
                        {
                            "name": "Automation Level Unknown",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "7.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "5.0",
                    "question": "Automated System Levels Engaged at Time of Crash",
                    "id": "zk6QtmkD",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-63",
                    "helperText": "(choose up to 5)",
                    "questionDependency": [
                        {
                            "dependencyUid": "krQbh0po",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No Automation",
                            "id": "0.0"
                        },
                        {
                            "name": "Driver Assistance",
                            "id": "1.0"
                        },
                        {
                            "name": "Partial Automation",
                            "id": "2.0"
                        },
                        {
                            "name": "Conditional Automation",
                            "id": "3.0"
                        },
                        {
                            "name": "High Automation",
                            "id": "4.0"
                        },
                        {
                            "name": "Full Automation",
                            "id": "5.0"
                        },
                        {
                            "name": "Automation Level Unknown",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "7.0"
                        }
                    ]
                }
            ],
            "display": [
                "vehicle"
            ]
        },
        {
            "sectionTitle": "Personal Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Name of Person Involved",
                    "id": "wgjUrZEh",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-1"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "sv3smQdV",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "OEKyiMLG",
                    "answerType": "openTextBox",
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
                    "question": "Street Address 1",
                    "id": "dQxO7MP5",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-5",
                    "tooltip": "E.g. 1000 Olin Way; MB 999"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 2",
                    "id": "MZZ4opND",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-6"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "QmWZUbzm",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-7"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "AIurIT7V",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-8"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "CwUaGdXZ",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-9"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Phone Number",
                    "id": "WHYkEvFv",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-10",
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
                    "humanReadableId": "nonmotorist-11",
                    "answerOptions": [
                        {
                            "name": "Female",
                            "id": "0.0"
                        },
                        {
                            "name": "Male",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash-Related Information Section",
                    "id": "nLuF6bPr",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-12"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Person Type",
                    "id": "6TkriXzZ",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-13",
                    "answerOptions": [
                        {
                            "name": "Bicyclist",
                            "id": "0.0"
                        },
                        {
                            "name": "Other Cyclist",
                            "id": "1.0"
                        },
                        {
                            "name": "Pedestrian",
                            "id": "2.0"
                        },
                        {
                            "name": "Other Pedestrian (wheelchair, person in a building, skater, personal convey)",
                            "id": "3.0"
                        },
                        {
                            "name": "Occupant of a Non-Motor Vehicle Transportation Device",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown Type of Non-Motorist",
                            "id": "5.0"
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
                    "humanReadableId": "nonmotorist-14",
                    "helperText": "(choose up to 2)",
                    "answerOptions": [
                        {
                            "name": "Not Applicable",
                            "id": "0.0"
                        },
                        {
                            "name": "Apparently Normal",
                            "id": "1.0"
                        },
                        {
                            "name": "Asleep or Fatigued",
                            "id": "2.0"
                        },
                        {
                            "name": "Emotional (depressed, angry, disturbed, etc.)",
                            "id": "3.0"
                        },
                        {
                            "name": "Ill (sick), Fainted",
                            "id": "4.0"
                        },
                        {
                            "name": "Physically Impaired",
                            "id": "5.0"
                        },
                        {
                            "name": "Under the Influence of Medications/Drugs/Alcohol",
                            "id": "6.0"
                        },
                        {
                            "name": "Other",
                            "id": "7.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "8.0"
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
                    "humanReadableId": "nonmotorist-15",
                    "tooltip": "e.g. '2' for Vehicle 2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Non-Motorist Action/Circumstance Prior to Crash",
                    "id": "SM5BGqvn",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-16"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action/Circumstance",
                    "id": "m1CAZSdr",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-17",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0.0"
                        },
                        {
                            "name": "Adjacent to Roadway (e.g., Shoulder, Median)",
                            "id": "1.0"
                        },
                        {
                            "name": "Crossing Roadway",
                            "id": "2.0"
                        },
                        {
                            "name": "In Roadway - Other",
                            "id": "3.0"
                        },
                        {
                            "name": "Waiting to Cross Roadway",
                            "id": "4.0"
                        },
                        {
                            "name": "Walking/Cycling Along Roadway Against Traffic (In or Adjacent to Travel Lane)",
                            "id": "5.0"
                        },
                        {
                            "name": "Walking/Cycling Along Roadway with Traffic (In or Adjacent to Travel Lane)",
                            "id": "6.0"
                        },
                        {
                            "name": "Walking/Cycling on Sidewalk",
                            "id": "7.0"
                        },
                        {
                            "name": "Working in Trafficway (Incident Response)",
                            "id": "8.0"
                        },
                        {
                            "name": "Other",
                            "id": "9.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "10.0"
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
                    "humanReadableId": "nonmotorist-18",
                    "answerOptions": [
                        {
                            "name": "Going to or from School (K-12)",
                            "id": "0.0"
                        },
                        {
                            "name": "Going to or from Transit",
                            "id": "1.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "3.0"
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
                    "humanReadableId": "nonmotorist-19",
                    "helperText": "(choose up to 2)",
                    "answerOptions": [
                        {
                            "name": "Dart/Dash",
                            "id": "0.0"
                        },
                        {
                            "name": "Disabled Vehicle-Related (Working on, Pushing, Leaving/Approaching)",
                            "id": "1.0"
                        },
                        {
                            "name": "Entering/Exiting Parked/Standing Vehicle",
                            "id": "2.0"
                        },
                        {
                            "name": "Failure to Obey Traffic Signs, Signals, or Officer",
                            "id": "3.0"
                        },
                        {
                            "name": "Failure to Yield Right-Of-Way",
                            "id": "4.0"
                        },
                        {
                            "name": "Improper Passing",
                            "id": "5.0"
                        },
                        {
                            "name": "Improper Turn/Merge",
                            "id": "6.0"
                        },
                        {
                            "name": "Inattentive (Talking, Eating, etc.)",
                            "id": "7.0"
                        },
                        {
                            "name": "In Roadway Improperly (Standing, Lying, Working, Playing)",
                            "id": "8.0"
                        },
                        {
                            "name": "Not Visible (Dark Clothing, No Lighting, etc.)",
                            "id": "9.0"
                        },
                        {
                            "name": "Wrong-Way Riding or Walking",
                            "id": "10.0"
                        },
                        {
                            "name": "Other",
                            "id": "11.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "12.0"
                        },
                        {
                            "name": "None (No Improper Action)",
                            "id": "13.0"
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
                    "humanReadableId": "nonmotorist-20",
                    "helperImg": "../image/bike_lanes.png",
                    "answerOptions": [
                        {
                            "name": "Intersection - Marked Crosswalk",
                            "id": "0.0"
                        },
                        {
                            "name": "Intersection - Unmarked Crosswalk",
                            "id": "1.0"
                        },
                        {
                            "name": "Intersection - Other",
                            "id": "2.0"
                        },
                        {
                            "name": "Median/Crossing Island",
                            "id": "3.0"
                        },
                        {
                            "name": "Midblock - Marked Crosswalk",
                            "id": "4.0"
                        },
                        {
                            "name": "Shoulder/Roadside",
                            "id": "5.0"
                        },
                        {
                            "name": "Travel Lane - Other Location",
                            "id": "6.0"
                        },
                        {
                            "name": "Signed Route (no pavement marking)",
                            "id": "7.0"
                        },
                        {
                            "name": "Shared Lane Markings",
                            "id": "8.0"
                        },
                        {
                            "name": "On-Street Bike Lanes",
                            "id": "9.0"
                        },
                        {
                            "name": "On-Street Buffered Bike Lanes",
                            "id": "10.0"
                        },
                        {
                            "name": "Separated Bike Lanes",
                            "id": "11.0"
                        },
                        {
                            "name": "Off-Street Trails/Sidepaths",
                            "id": "12.0"
                        },
                        {
                            "name": "Driveway Access",
                            "id": "13.0"
                        },
                        {
                            "name": "Non-Trafficway Area",
                            "id": "14.0"
                        },
                        {
                            "name": "Shared-Use Path or Trail",
                            "id": "15.0"
                        },
                        {
                            "name": "Sidewalk",
                            "id": "16.0"
                        },
                        {
                            "name": "Other",
                            "id": "17.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "18.0"
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
                    "humanReadableId": "nonmotorist-21",
                    "helperText": "(choose up to 5)",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0.0"
                        },
                        {
                            "name": "Helmet",
                            "id": "1.0"
                        },
                        {
                            "name": "Protective Pads Used (elbows, knees, shins, etc.)",
                            "id": "2.0"
                        },
                        {
                            "name": "Reflective Wear (backpack, triangles, etc.)",
                            "id": "3.0"
                        },
                        {
                            "name": "Lighting",
                            "id": "4.0"
                        },
                        {
                            "name": "Reflectors",
                            "id": "5.0"
                        },
                        {
                            "name": "Other",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "7.0"
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
                    "humanReadableId": "nonmotorist-22",
                    "answerOptions": [
                        {
                            "name": "Right",
                            "id": "0.0"
                        },
                        {
                            "name": "Rear",
                            "id": "1.0"
                        },
                        {
                            "name": "Left",
                            "id": "2.0"
                        },
                        {
                            "name": "Front",
                            "id": "3.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Distracted By",
                    "id": "qNaBDuaT",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-23"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action",
                    "id": "0ZnIFZ0X",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-24",
                    "answerOptions": [
                        {
                            "name": "Not Distracted",
                            "id": "0.0"
                        },
                        {
                            "name": "Talking/listening",
                            "id": "1.0"
                        },
                        {
                            "name": "Manually Operating (texting, dialing, playing game, etc.)",
                            "id": "2.0"
                        },
                        {
                            "name": "Other Action (looking away from task, etc.)",
                            "id": "3.0"
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
                    "humanReadableId": "nonmotorist-25",
                    "questionDependency": [
                        {
                            "dependencyUid": "0ZnIFZ0X",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "0ZnIFZ0X",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "0ZnIFZ0X",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "0ZnIFZ0X",
                            "dependencyOptionCode": "3.0"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Not Applicable (Not Distracted)",
                            "id": "0.0"
                        },
                        {
                            "name": "Hands-Free Mobile Phone",
                            "id": "1.0"
                        },
                        {
                            "name": "Hand-Held Mobile Phone",
                            "id": "2.0"
                        },
                        {
                            "name": "Other Electronic Device",
                            "id": "3.0"
                        },
                        {
                            "name": "Vehicle-Integrated Device",
                            "id": "4.0"
                        },
                        {
                            "name": "Passenger/Other Non-Motorist",
                            "id": "5.0"
                        },
                        {
                            "name": "External (to vehicle/non-motorist area)",
                            "id": "6.0"
                        },
                        {
                            "name": "Other Distraction (animal, food, grooming)",
                            "id": "7.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "8.0"
                        }
                    ]
                }
            ],
            "display": [
                "nonmotorist"
            ]
        },
        {
            "sectionTitle": "Injury Section",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Incident Responder?",
                    "id": "MNdMxtx5",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-27",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "EMS",
                            "id": "1.0"
                        },
                        {
                            "name": "Fire",
                            "id": "2.0"
                        },
                        {
                            "name": "Police",
                            "id": "3.0"
                        },
                        {
                            "name": "Tow Operator",
                            "id": "4.0"
                        },
                        {
                            "name": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                            "id": "5.0"
                        },
                        {
                            "name": "Other",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "7.0"
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
                    "humanReadableId": "nonmotorist-28",
                    "answerOptions": [
                        {
                            "name": "Fatal Injury",
                            "id": "0.0"
                        },
                        {
                            "name": "Suspected Serious Injury",
                            "id": "1.0"
                        },
                        {
                            "name": "Suspected Minor Injury",
                            "id": "2.0"
                        },
                        {
                            "name": "Possible Injury",
                            "id": "3.0"
                        },
                        {
                            "name": "No Apparent Injury",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Area",
                    "id": "CFTkeTju",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-29",
                    "tooltip": "Select the primary or most obvious area of the person's body injured during the crash. This will be typically be indicated in a matrix or narrative in the EMS records or as a hospital discharge code (ICD-9-CM or ICD-10, if implemented) in the emergency department, hospital or insurance records.",
                    "answerOptions": [
                        {
                            "name": "Head",
                            "id": "0.0"
                        },
                        {
                            "name": "Face",
                            "id": "1.0"
                        },
                        {
                            "name": "Neck",
                            "id": "2.0"
                        },
                        {
                            "name": "Upper Extremity",
                            "id": "3.0"
                        },
                        {
                            "name": "Thorax (chest)",
                            "id": "4.0"
                        },
                        {
                            "name": "Spine",
                            "id": "5.0"
                        },
                        {
                            "name": "Adnomen and Pelvis",
                            "id": "6.0"
                        },
                        {
                            "name": "Lower Extremity",
                            "id": "7.0"
                        },
                        {
                            "name": "Unspecified",
                            "id": "8.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Injury Diagnosis",
                    "id": "fmrO5ZWz",
                    "answerType": "largeTextField",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-30",
                    "tooltip": "Describe the injury."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Severity",
                    "id": "nPPoAnU5",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-31",
                    "answerOptions": [
                        {
                            "name": "Fatal",
                            "id": "0.0"
                        },
                        {
                            "name": "Serious",
                            "id": "1.0"
                        },
                        {
                            "name": "Moderate",
                            "id": "2.0"
                        },
                        {
                            "name": "Minor",
                            "id": "3.0"
                        },
                        {
                            "name": "No Injury",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Transported to First Medical Facility By",
                    "id": "0yuO9rxr",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-32",
                    "questionDependency": [
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "4.0"
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
                    "humanReadableId": "nonmotorist-33",
                    "questionDependency": [
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "4.0"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Not Transported",
                            "id": "0.0"
                        },
                        {
                            "name": "EMS Air",
                            "id": "1.0"
                        },
                        {
                            "name": "EMS Ground",
                            "id": "2.0"
                        },
                        {
                            "name": "Law Enforcement",
                            "id": "3.0"
                        },
                        {
                            "name": "Other",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
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
                    "humanReadableId": "nonmotorist-34",
                    "questionDependency": [
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "4.0"
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
                    "humanReadableId": "nonmotorist-35",
                    "questionDependency": [
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "4.0"
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
                    "humanReadableId": "nonmotorist-36",
                    "questionDependency": [
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "0.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "1.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "2.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "3.0"
                        },
                        {
                            "dependencyUid": "WRishqwU",
                            "dependencyOptionCode": "4.0"
                        }
                    ]
                }
            ],
            "display": [
                "nonmotorist"
            ]
        },
        {
            "sectionTitle": "Alcohol Use",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Law Enforcement Suspects Alcohol Use",
                    "id": "ski3jtpd",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-38",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Test Status",
                    "id": "eweonIMI",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-39",
                    "questionDependency": [
                        {
                            "dependencyUid": "ski3jtpd",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Test Given",
                            "id": "1.0"
                        },
                        {
                            "name": "Test Refused",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "3.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Alcohol Test",
                    "id": "mZGcJRTW",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-40",
                    "questionDependency": [
                        {
                            "dependencyUid": "ski3jtpd",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "0.0"
                        },
                        {
                            "name": "Blood",
                            "id": "1.0"
                        },
                        {
                            "name": "Breath",
                            "id": "2.0"
                        },
                        {
                            "name": "Urine",
                            "id": "3.0"
                        },
                        {
                            "name": "Other",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "BAC Test Result",
                    "id": "vZokhj4y",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-41",
                    "questionDependency": [
                        {
                            "dependencyUid": "ski3jtpd",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Pending",
                            "id": "0.0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                }
            ],
            "display": [
                "nonmotorist"
            ]
        },
        {
            "sectionTitle": "Drug Use",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Law Enforcement Suspects Drug Use",
                    "id": "Qenr80I4",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-43",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Drug Test Status",
                    "id": "uqQGx3Rc",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-44",
                    "questionDependency": [
                        {
                            "dependencyUid": "Qenr80I4",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0.0"
                        },
                        {
                            "name": "Test Given",
                            "id": "1.0"
                        },
                        {
                            "name": "Test Refused",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "3.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Drug Test",
                    "id": "cYXv5Qkz",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-45",
                    "questionDependency": [
                        {
                            "dependencyUid": "Qenr80I4",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Blood",
                            "id": "0.0"
                        },
                        {
                            "name": "Saliva",
                            "id": "1.0"
                        },
                        {
                            "name": "Urine",
                            "id": "2.0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "3.0"
                        },
                        {
                            "name": "Other",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "Drug Test Result",
                    "id": "LX3Hspui",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-46",
                    "questionDependency": [
                        {
                            "dependencyUid": "Qenr80I4",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Negative",
                            "id": "0.0"
                        },
                        {
                            "name": "Amphetamine",
                            "id": "1.0"
                        },
                        {
                            "name": "Cocaine",
                            "id": "2.0"
                        },
                        {
                            "name": "Marijuana",
                            "id": "3.0"
                        },
                        {
                            "name": "Opiate",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Controlled Substance",
                            "id": "5.0"
                        },
                        {
                            "name": "PCP",
                            "id": "6.0"
                        },
                        {
                            "name": "Other Drug (excludes post-crash drugs)",
                            "id": "7.0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "8.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "9.0"
                        }
                    ]
                }
            ],
            "display": [
                "nonmotorist"
            ]
        },
        {
            "sectionTitle": "Personal Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Name of Person Involved",
                    "id": "PHBTL0FJ",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-1"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "UQqBQHCB",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "h1QuqLnp",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-3"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Date of Birth",
                    "id": "6EiSSnQN",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-4",
                    "helperText": "Format: YYYY/MM/DD"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Sex",
                    "id": "VPBTzbPO",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-5",
                    "answerOptions": [
                        {
                            "name": "Female",
                            "id": "0.0"
                        },
                        {
                            "name": "Male",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                }
            ],
            "display": [
                "passenger"
            ]
        },
        {
            "sectionTitle": "Crash Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Incident Responder?",
                    "id": "v9M7QPjK",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-7",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "EMS",
                            "id": "1.0"
                        },
                        {
                            "name": "Fire",
                            "id": "2.0"
                        },
                        {
                            "name": "Police",
                            "id": "3.0"
                        },
                        {
                            "name": "Tow Operator",
                            "id": "4.0"
                        },
                        {
                            "name": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.)",
                            "id": "5.0"
                        },
                        {
                            "name": "Other",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "7.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Seating Position",
                    "id": "az0jhcoG",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-8",
                    "helperText": "(choose up to 2)",
                    "helperImg": "../image/seating_positions.png",
                    "answerOptions": [
                        {
                            "name": "Front",
                            "id": "0.0"
                        },
                        {
                            "name": "Second",
                            "id": "1.0"
                        },
                        {
                            "name": "Third",
                            "id": "2.0"
                        },
                        {
                            "name": "Fourth",
                            "id": "3.0"
                        },
                        {
                            "name": "Other Row (bus, 15 passenger van, etc.)",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown Row",
                            "id": "5.0"
                        },
                        {
                            "name": "Left (usually the motor vehicle or motorcycle driver except for postal vehicles)",
                            "id": "6.0"
                        },
                        {
                            "name": "Middle",
                            "id": "7.0"
                        },
                        {
                            "name": "Right",
                            "id": "8.0"
                        },
                        {
                            "name": "Unknown Seat",
                            "id": "9.0"
                        },
                        {
                            "name": "Other Enclosed Cargo Area",
                            "id": "10.0"
                        },
                        {
                            "name": "Riding on Motor Vehicle Exterior (non-trailing unit)",
                            "id": "11.0"
                        },
                        {
                            "name": "Sleeper Section of Cab (truck)",
                            "id": "12.0"
                        },
                        {
                            "name": "Trailing Unit",
                            "id": "13.0"
                        },
                        {
                            "name": "Unenclosed Cargo Area",
                            "id": "14.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "15.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "16.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Restraint Systems / Motorcycle Helmet Use",
                    "id": "aQC2P7xI",
                    "answerType": "questionHeader",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-9"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Restraint Systems in Use",
                    "id": "8hTxEZ6K",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-10",
                    "answerOptions": [
                        {
                            "name": "Booster Seat",
                            "id": "0.0"
                        },
                        {
                            "name": "Child Restraint System - Forward Facing",
                            "id": "1.0"
                        },
                        {
                            "name": "Child Restraint System - Rear Facing",
                            "id": "2.0"
                        },
                        {
                            "name": "Child Restraint - Type Unknown",
                            "id": "3.0"
                        },
                        {
                            "name": "Lap Belt Only Used",
                            "id": "4.0"
                        },
                        {
                            "name": "None Used - Motor Vehicle Occupant",
                            "id": "5.0"
                        },
                        {
                            "name": "Restraint Used - Type Unknown",
                            "id": "6.0"
                        },
                        {
                            "name": "Shoulder and Lap Belt Used",
                            "id": "7.0"
                        },
                        {
                            "name": "Shoulder Belt Only Used",
                            "id": "8.0"
                        },
                        {
                            "name": "Stretcher",
                            "id": "9.0"
                        },
                        {
                            "name": "Wheelchair",
                            "id": "10.0"
                        },
                        {
                            "name": "DOT-Compliant Motorcycle Helmet",
                            "id": "11.0"
                        },
                        {
                            "name": "Not DOT-Compliant Motorcycle Helmet",
                            "id": "12.0"
                        },
                        {
                            "name": "Unknown If DOT-Compliant Motorcycle Helmet",
                            "id": "13.0"
                        },
                        {
                            "name": "No Helmet",
                            "id": "14.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "15.0"
                        },
                        {
                            "name": "Other",
                            "id": "16.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "17.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Any Indication of Improper Use?",
                    "id": "lEqfMxPo",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-11",
                    "tooltip": "ie, seatbelt was not buckled in correctly",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "Air Bag Deployed?",
                    "id": "sN8ceYNO",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-12",
                    "helperText": "(choose up to 4)",
                    "helperImg": "../image/airbag_diagram.png",
                    "answerOptions": [
                        {
                            "name": "Not Deployed",
                            "id": "0.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "1.0"
                        },
                        {
                            "name": "Curtain",
                            "id": "2.0"
                        },
                        {
                            "name": "Front",
                            "id": "3.0"
                        },
                        {
                            "name": "Side",
                            "id": "4.0"
                        },
                        {
                            "name": "Other (knee, air belt, etc.)",
                            "id": "5.0"
                        },
                        {
                            "name": "Deployment Unknown",
                            "id": "6.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Ejection?",
                    "id": "cg3r6Gut",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-13",
                    "answerOptions": [
                        {
                            "name": "Not Ejected",
                            "id": "0.0"
                        },
                        {
                            "name": "Ejected, Partially",
                            "id": "1.0"
                        },
                        {
                            "name": "Ejected, Totally",
                            "id": "2.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "3.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "4.0"
                        }
                    ]
                }
            ],
            "display": [
                "passenger"
            ]
        },
        {
            "numOptionsAllowed": "1.0",
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
                    "id": "0.0"
                },
                {
                    "name": "Private Property",
                    "id": "1.0"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
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
                    "id": "0.0"
                },
                {
                    "name": "Yes",
                    "id": "1.0"
                }
            ]
        },
        {
            "numOptionsAllowed": "1.0",
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
                    "id": "0.0"
                },
                {
                    "name": "Suspected Serious Injury",
                    "id": "1.0"
                },
                {
                    "name": "Suspected Minor Injury",
                    "id": "2.0"
                },
                {
                    "name": "Possible Injury",
                    "id": "3.0"
                },
                {
                    "name": "Property Damage-Only",
                    "id": "4.0"
                },
                {
                    "name": "Unknown",
                    "id": "5.0"
                }
            ]
        },
        {
            "sectionTitle": "Basic Crash Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Identifier",
                    "id": "gNkzJih5",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-1",
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
                    "humanReadableId": "road-2"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash Severity",
                    "id": "8dY73Yzs",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-3",
                    "answerOptions": [
                        {
                            "name": "Fatal Injury",
                            "id": "0.0"
                        },
                        {
                            "name": "Suspected Serious Injury",
                            "id": "1.0"
                        },
                        {
                            "name": "Suspected Minor Injury",
                            "id": "2.0"
                        },
                        {
                            "name": "Possible Injury",
                            "id": "3.0"
                        },
                        {
                            "name": "Property Damage-Only",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
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
                    "humanReadableId": "road-4"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Classification",
                    "id": "E79ZNLXO",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-5"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Ownership",
                    "id": "pT0Wq1RO",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-6",
                    "tooltip": "Provide type for ownership of the land where the crash occurred.",
                    "answerOptions": [
                        {
                            "name": "Public Property",
                            "id": "0.0"
                        },
                        {
                            "name": "Private Property",
                            "id": "1.0"
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
                    "humanReadableId": "road-7",
                    "tooltip": "Did the crash occur on or off a trafficway?",
                    "helperImg": "../image/trafficway_diagram.png",
                    "answerOptions": [
                        {
                            "name": "Trafficway, On Road",
                            "id": "0.0"
                        },
                        {
                            "name": "Trafficway, Not on Road",
                            "id": "1.0"
                        },
                        {
                            "name": "Non-Trafficway",
                            "id": "2.0"
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
                    "humanReadableId": "road-8",
                    "tooltip": "A Secondary Crash is a crash that resulted from another crash.",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
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
                    "humanReadableId": "road-9",
                    "tooltip": "Was a school bus or motor vehicle functioning as a school bus for a school-related purpose involved in the crash? The \"school bus\", with or without a passenger on board, must be directly involved as a contact motor vehicle, or iindirectly involved (ie, children struck when boarding or alighting from the school bus, two vehicles colliding as a result of the stopped school bus, etc.)",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes, School Bus Directly Involved",
                            "id": "1.0"
                        },
                        {
                            "name": "Yes, School Bus Indirectly Involved",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Date and Time",
                    "id": "iJ8lLM6P",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-10"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Date and Time (Valid Military Time)",
                    "id": "FQ2cYAHj",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-11",
                    "helperText": "Foramtt: YYYY/MM/DD HH:MM",
                    "tooltip": "Midnight should be coded as 00:00. Use 99 for any dates or times that are unknown. For example, 02/99/2017 22:51 denotes that the crash occurred in February 2017 at 22:51, but the day of the month was unknown. Unknown should not be used for the year, only for the month, day, hour, and minute.",
                    "autoMethod": "time"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Time of Roadway Clearance (Valid Military Time",
                    "id": "zyHP4WbS",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-12",
                    "helperText": "Format: HH:MM",
                    "tooltip": "The time of roadway clearance is the time that all lanes were available for traffic flow. Midnight should be coded as 00:00. Use 99 for any dates or times that are unknown. For example, 02/99/2017 22:51 denotes that the crash occurred in February 2017 at 22:51, but the day of the month was unknown. "
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Location",
                    "id": "GlitCeKG",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-13"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash State",
                    "id": "Sl6ypLYA",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-14",
                    "answerOptions": [
                        {
                            "name": "Alabama",
                            "id": "0.0"
                        },
                        {
                            "name": "Alaska",
                            "id": "1.0"
                        },
                        {
                            "name": "American Samoa",
                            "id": "2.0"
                        },
                        {
                            "name": "Arizona",
                            "id": "3.0"
                        },
                        {
                            "name": "Arkansas",
                            "id": "4.0"
                        },
                        {
                            "name": "California",
                            "id": "5.0"
                        },
                        {
                            "name": "Colorado",
                            "id": "6.0"
                        },
                        {
                            "name": "Commonwealth of the Northern Mariana Islands",
                            "id": "7.0"
                        },
                        {
                            "name": "Connecticut",
                            "id": "8.0"
                        },
                        {
                            "name": "Delaware",
                            "id": "9.0"
                        },
                        {
                            "name": "District of Columbia",
                            "id": "10.0"
                        },
                        {
                            "name": "Florida",
                            "id": "11.0"
                        },
                        {
                            "name": "Georgia",
                            "id": "12.0"
                        },
                        {
                            "name": "Guam",
                            "id": "13.0"
                        },
                        {
                            "name": "Hawaii",
                            "id": "14.0"
                        },
                        {
                            "name": "Idaho",
                            "id": "15.0"
                        },
                        {
                            "name": "Illinois",
                            "id": "16.0"
                        },
                        {
                            "name": "Indiana",
                            "id": "17.0"
                        },
                        {
                            "name": "Iowa",
                            "id": "18.0"
                        },
                        {
                            "name": "Kansas",
                            "id": "19.0"
                        },
                        {
                            "name": "Kentucky",
                            "id": "20.0"
                        },
                        {
                            "name": "Louisiana",
                            "id": "21.0"
                        },
                        {
                            "name": "Maine",
                            "id": "22.0"
                        },
                        {
                            "name": "Maryland",
                            "id": "23.0"
                        },
                        {
                            "name": "Massachusetts",
                            "id": "24.0"
                        },
                        {
                            "name": "Michigan",
                            "id": "25.0"
                        },
                        {
                            "name": "Minnesota",
                            "id": "26.0"
                        },
                        {
                            "name": "Mississippi",
                            "id": "27.0"
                        },
                        {
                            "name": "Missouri",
                            "id": "28.0"
                        },
                        {
                            "name": "Montana",
                            "id": "29.0"
                        },
                        {
                            "name": "Nebraska",
                            "id": "30.0"
                        },
                        {
                            "name": "Nevada",
                            "id": "31.0"
                        },
                        {
                            "name": "New Hampshire",
                            "id": "32.0"
                        },
                        {
                            "name": "New Jersey",
                            "id": "33.0"
                        },
                        {
                            "name": "New Mexico",
                            "id": "34.0"
                        },
                        {
                            "name": "New York",
                            "id": "35.0"
                        },
                        {
                            "name": "North Carolina",
                            "id": "36.0"
                        },
                        {
                            "name": "North Dakota",
                            "id": "37.0"
                        },
                        {
                            "name": "Ohio",
                            "id": "38.0"
                        },
                        {
                            "name": "Oklahoma",
                            "id": "39.0"
                        },
                        {
                            "name": "Oregon",
                            "id": "40.0"
                        },
                        {
                            "name": "Pennsylvania",
                            "id": "41.0"
                        },
                        {
                            "name": "Puerto Rico",
                            "id": "42.0"
                        },
                        {
                            "name": "Rhode Island",
                            "id": "43.0"
                        },
                        {
                            "name": "South Carolina",
                            "id": "44.0"
                        },
                        {
                            "name": "South Dakota",
                            "id": "45.0"
                        },
                        {
                            "name": "Tennessee",
                            "id": "46.0"
                        },
                        {
                            "name": "Texas",
                            "id": "47.0"
                        },
                        {
                            "name": "United States Virgin Islands",
                            "id": "48.0"
                        },
                        {
                            "name": "Utah",
                            "id": "49.0"
                        },
                        {
                            "name": "Vermont",
                            "id": "50.0"
                        },
                        {
                            "name": "Virginia",
                            "id": "51.0"
                        },
                        {
                            "name": "Washington",
                            "id": "52.0"
                        },
                        {
                            "name": "West Virginia",
                            "id": "53.0"
                        },
                        {
                            "name": "Wisconsin",
                            "id": "54.0"
                        },
                        {
                            "name": "Wyoming",
                            "id": "55.0"
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
                    "humanReadableId": "road-15",
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
                    "humanReadableId": "road-16"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Latitude",
                    "id": "Y0UeyBYf",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-17",
                    "helperText": "Format: degrees.minutes.seconds, compass direction",
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
                    "humanReadableId": "road-18",
                    "helperText": "Format: degrees.minutes.seconds, compass direction",
                    "autoMethod": "map"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Nearest Street Address",
                    "id": "UKo2l3Dr",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-19",
                    "questionDependency": [
                        {
                            "dependencyUid": "YOUeyBYf",
                            "dependencyOptionCode": " eFXNchTA"
                        }
                    ]
                }
            ],
            "display": [
                "road"
            ]
        },
        {
            "sectionTitle": "Detailed Crash Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Harmful Event Information",
                    "id": "jMCrhZwO",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-21"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "First Harmful Event",
                    "id": "Anwspdcw",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-22",
                    "tooltip": "The first injury or damage-producing event that characterizes the crash type.",
                    "answerOptions": [
                        {
                            "name": "Cargo/Equipment Loss or Shift",
                            "id": "0.0"
                        },
                        {
                            "name": "Fell/Jumped From Motor Vehicle",
                            "id": "1.0"
                        },
                        {
                            "name": "Fire/Explosion",
                            "id": "2.0"
                        },
                        {
                            "name": "Immersion, Full or Partial",
                            "id": "3.0"
                        },
                        {
                            "name": "Jackknife",
                            "id": "4.0"
                        },
                        {
                            "name": "Other Non-Collision",
                            "id": "5.0"
                        },
                        {
                            "name": "Overturn/Rollover",
                            "id": "6.0"
                        },
                        {
                            "name": "Thrown or Falling Object",
                            "id": "7.0"
                        },
                        {
                            "name": "Animal (live)",
                            "id": "8.0"
                        },
                        {
                            "name": "Construction Equipment (backhoe, bulldozer, etc.)",
                            "id": "9.0"
                        },
                        {
                            "name": "Farm Equipment (tractor, combine harvester, etc.)",
                            "id": "10.0"
                        },
                        {
                            "name": "Motor Vehicle in Transport",
                            "id": "11.0"
                        },
                        {
                            "name": "Other Non-Fixed Object",
                            "id": "12.0"
                        },
                        {
                            "name": "Other Non-motorist",
                            "id": "13.0"
                        },
                        {
                            "name": "Parked Motor Vehicle",
                            "id": "14.0"
                        },
                        {
                            "name": "Pedalcycle",
                            "id": "15.0"
                        },
                        {
                            "name": "Pedestrian",
                            "id": "16.0"
                        },
                        {
                            "name": "Railway Vehicle (train, engine)",
                            "id": "17.0"
                        },
                        {
                            "name": "Strikes Object at Rest from MV in Transport",
                            "id": "18.0"
                        },
                        {
                            "name": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle",
                            "id": "19.0"
                        },
                        {
                            "name": "Bridge Overhead Structure",
                            "id": "20.0"
                        },
                        {
                            "name": "Bridge Pier or Support",
                            "id": "21.0"
                        },
                        {
                            "name": "Bridge Rail",
                            "id": "22.0"
                        },
                        {
                            "name": "Cable Barrier",
                            "id": "23.0"
                        },
                        {
                            "name": "Concrete Traffic Barrier",
                            "id": "24.0"
                        },
                        {
                            "name": "Culvert",
                            "id": "25.0"
                        },
                        {
                            "name": "Curb",
                            "id": "26.0"
                        },
                        {
                            "name": "Ditch",
                            "id": "27.0"
                        },
                        {
                            "name": "Embankment",
                            "id": "28.0"
                        },
                        {
                            "name": "Fence",
                            "id": "29.0"
                        },
                        {
                            "name": "Guardrail End Terminal",
                            "id": "30.0"
                        },
                        {
                            "name": "Guardrail Face",
                            "id": "31.0"
                        },
                        {
                            "name": "Impact Attenuator/Crash Cushion",
                            "id": "32.0"
                        },
                        {
                            "name": "Mailbox",
                            "id": "33.0"
                        },
                        {
                            "name": "Other Fixed Object (wall, building, tunnel, etc.)",
                            "id": "34.0"
                        },
                        {
                            "name": "Other Post, Pole, or Support",
                            "id": "35.0"
                        },
                        {
                            "name": "Other Traffic Barrier",
                            "id": "36.0"
                        },
                        {
                            "name": "Traffic Sign Support",
                            "id": "37.0"
                        },
                        {
                            "name": "Traffic Signal Support",
                            "id": "38.0"
                        },
                        {
                            "name": "Tree (standing)",
                            "id": "39.0"
                        },
                        {
                            "name": "Utility Pole/Light Support",
                            "id": "40.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "41.0"
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
                    "humanReadableId": "road-23",
                    "helperImg": "../image/trafficway_diagram.png",
                    "answerOptions": [
                        {
                            "name": "Gore",
                            "id": "0.0"
                        },
                        {
                            "name": "In Parking Lane or Zone",
                            "id": "1.0"
                        },
                        {
                            "name": "Median",
                            "id": "2.0"
                        },
                        {
                            "name": "Off-Roadway, Location Unknown",
                            "id": "3.0"
                        },
                        {
                            "name": "On Roadway",
                            "id": "4.0"
                        },
                        {
                            "name": "On Shoulder, Left Side",
                            "id": "5.0"
                        },
                        {
                            "name": "On Shoulder, Right Side",
                            "id": "6.0"
                        },
                        {
                            "name": "Outside Road/Right-of-Way",
                            "id": "7.0"
                        },
                        {
                            "name": "Roadside",
                            "id": "8.0"
                        },
                        {
                            "name": "Separator/Traffic Island",
                            "id": "9.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "10.0"
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
                    "humanReadableId": "road-24",
                    "helperText": "This question refers only to crashes where the first harmful event involves a collision between two motor vehicles.",
                    "tooltip": "The figure below displays a diagram of the manner of collision.",
                    "helperImg": "../image/manner_example.png",
                    "answerOptions": [
                        {
                            "name": "Not a Collision between Two Motor Vehicles In-transport",
                            "id": "0.0"
                        },
                        {
                            "name": "Angle",
                            "id": "1.0"
                        },
                        {
                            "name": "Front to Front",
                            "id": "2.0"
                        },
                        {
                            "name": "Front to Rear",
                            "id": "3.0"
                        },
                        {
                            "name": "Rear to Rear",
                            "id": "4.0"
                        },
                        {
                            "name": "Rear to Side",
                            "id": "5.0"
                        },
                        {
                            "name": "Sideswipe, Opposite Direction",
                            "id": "6.0"
                        },
                        {
                            "name": "Sideswipe, Same Direction",
                            "id": "7.0"
                        },
                        {
                            "name": "Single Vehicle Collision",
                            "id": "8.0"
                        },
                        {
                            "name": "Collision with a Parked Motor Vehicle",
                            "id": "9.0"
                        },
                        {
                            "name": "Other",
                            "id": "10.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "11.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Relation to Junction Section",
                    "id": "XgWpu2Tk",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-25"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Within Interchange Area?",
                    "id": "2cnmGpDV",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-26",
                    "helperImg": "../image/interchange_diagram.png",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
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
                    "humanReadableId": "road-27",
                    "tooltip": " ",
                    "helperImg": "../image/intersection_diagram.png",
                    "answerOptions": [
                        {
                            "name": "Not an Interchange Area",
                            "id": "0.0"
                        },
                        {
                            "name": "Acceleration/Deceleration Lane",
                            "id": "1.0"
                        },
                        {
                            "name": "Crossover-Related",
                            "id": "2.0"
                        },
                        {
                            "name": "Driveway Access or Related",
                            "id": "3.0"
                        },
                        {
                            "name": "Entrance/Exit Ramp or Related",
                            "id": "4.0"
                        },
                        {
                            "name": "Intersection or Related",
                            "id": "5.0"
                        },
                        {
                            "name": "Non-Junction",
                            "id": "6.0"
                        },
                        {
                            "name": "Railway Grade Crossing",
                            "id": "7.0"
                        },
                        {
                            "name": "Shared-Use Path or Trail",
                            "id": "8.0"
                        },
                        {
                            "name": "Through Roadway",
                            "id": "9.0"
                        },
                        {
                            "name": "Other Location Not Listed Above Within an Interchange Area (median, shoulder an",
                            "id": "10.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "11.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Source of Information Section",
                    "id": "S3xImn49",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-28"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Information",
                    "id": "IGD5NNyh",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-29",
                    "tooltip": "Affiliation of the person completing the crash report",
                    "answerOptions": [
                        {
                            "name": "Law Enforcement Agency",
                            "id": "0.0"
                        },
                        {
                            "name": "Civilian",
                            "id": "1.0"
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
                    "humanReadableId": "road-30",
                    "helperText": "9 character NCIC Originating Agency Identifier"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Environment Conditions",
                    "id": "qdbONl1x",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-31"
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Weather Conditions",
                    "id": "u07WbEUL",
                    "answerType": "advancedDropDown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-32",
                    "helperText": "(choose up to 2)",
                    "autoMethod": "weather",
                    "answerOptions": [
                        {
                            "name": "Clear",
                            "id": "0.0"
                        },
                        {
                            "name": "Cloudy",
                            "id": "1.0"
                        },
                        {
                            "name": "Blowing Sand, Soil, Dirt",
                            "id": "2.0"
                        },
                        {
                            "name": "Blowing Snow",
                            "id": "3.0"
                        },
                        {
                            "name": "Fog, Smog, Smoke",
                            "id": "4.0"
                        },
                        {
                            "name": "Freezing Rain or Freezing Drizzle",
                            "id": "5.0"
                        },
                        {
                            "name": "Rain",
                            "id": "6.0"
                        },
                        {
                            "name": "Severe Crosswinds",
                            "id": "7.0"
                        },
                        {
                            "name": "Sleet or Hail",
                            "id": "8.0"
                        },
                        {
                            "name": "Snow",
                            "id": "9.0"
                        },
                        {
                            "name": "Other",
                            "id": "10.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "11.0"
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
                    "humanReadableId": "road-33",
                    "answerOptions": [
                        {
                            "name": "Daylight",
                            "id": "0.0"
                        },
                        {
                            "name": "Dawn/Dusk",
                            "id": "1.0"
                        },
                        {
                            "name": "Dark - Lighted",
                            "id": "2.0"
                        },
                        {
                            "name": "Dark - Not Lighted",
                            "id": "3.0"
                        },
                        {
                            "name": "Dark - Unknown Lighting",
                            "id": "4.0"
                        },
                        {
                            "name": "Other",
                            "id": "5.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "6.0"
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
                    "humanReadableId": "road-34",
                    "answerOptions": [
                        {
                            "name": "Dry",
                            "id": "0.0"
                        },
                        {
                            "name": "Ice/Frost",
                            "id": "1.0"
                        },
                        {
                            "name": "Mud, Dirt, Gravel",
                            "id": "2.0"
                        },
                        {
                            "name": "Oil",
                            "id": "3.0"
                        },
                        {
                            "name": "Sand",
                            "id": "4.0"
                        },
                        {
                            "name": "Slush",
                            "id": "5.0"
                        },
                        {
                            "name": "Snow",
                            "id": "6.0"
                        },
                        {
                            "name": "Water (standing, moving)",
                            "id": "7.0"
                        },
                        {
                            "name": "Wet",
                            "id": "8.0"
                        },
                        {
                            "name": "Other",
                            "id": "9.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "10.0"
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
                    "humanReadableId": "road-35",
                    "helperText": "(choose up to 2)",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0.0"
                        },
                        {
                            "name": "Animal(s)",
                            "id": "1.0"
                        },
                        {
                            "name": "Debris",
                            "id": "2.0"
                        },
                        {
                            "name": "Glare",
                            "id": "3.0"
                        },
                        {
                            "name": "Non-Highway Work",
                            "id": "4.0"
                        },
                        {
                            "name": "Obstructed Crosswalks",
                            "id": "5.0"
                        },
                        {
                            "name": "Obstruction in Roadway",
                            "id": "6.0"
                        },
                        {
                            "name": "Prior Crash",
                            "id": "7.0"
                        },
                        {
                            "name": "Prior Non-Recurring Incident",
                            "id": "8.0"
                        },
                        {
                            "name": "Regular Congestion",
                            "id": "9.0"
                        },
                        {
                            "name": "Related to a Bus Stop",
                            "id": "10.0"
                        },
                        {
                            "name": "Road Surface Condition (wet, icy, snow, slush, etc.)",
                            "id": "11.0"
                        },
                        {
                            "name": "Ruts, Holes, Bumps",
                            "id": "12.0"
                        },
                        {
                            "name": "Shoulders (none, low, soft, high)",
                            "id": "13.0"
                        },
                        {
                            "name": "Toll Booth/Plaza Related",
                            "id": "14.0"
                        },
                        {
                            "name": "Traffic Control Device",
                            "id": "15.0"
                        },
                        {
                            "name": "Traffic Incident",
                            "id": "16.0"
                        },
                        {
                            "name": "Visual Obstruction(s)",
                            "id": "17.0"
                        },
                        {
                            "name": "Weather Conditions",
                            "id": "18.0"
                        },
                        {
                            "name": "Work Zone (construction/maintenance/utility)",
                            "id": "19.0"
                        },
                        {
                            "name": "Worn, Travel-Polished Surface",
                            "id": "20.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Type of Intersection",
                    "id": "fwfC3bVi",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-36"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Number of Approaches",
                    "id": "fvIxja95",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-37",
                    "helperImg": "../image/intersection_examples.png",
                    "answerOptions": [
                        {
                            "name": "Not an Intersection",
                            "id": "0.0"
                        },
                        {
                            "name": "Two",
                            "id": "1.0"
                        },
                        {
                            "name": "Three",
                            "id": "2.0"
                        },
                        {
                            "name": "Four",
                            "id": "3.0"
                        },
                        {
                            "name": "Five or more",
                            "id": "4.0"
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
                    "humanReadableId": "road-38",
                    "helperImg": "../image/intersection_examples.png",
                    "answerOptions": [
                        {
                            "name": "Angled/Skewed",
                            "id": "0.0"
                        },
                        {
                            "name": "Roundabout/Traffic Circle",
                            "id": "1.0"
                        },
                        {
                            "name": "Perpendicular",
                            "id": "2.0"
                        },
                        {
                            "name": "Not Applicable/Not an Intersection",
                            "id": "3.0"
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
                    "humanReadableId": "road-39",
                    "helperImg": "../image/intersection_examples.png",
                    "answerOptions": [
                        {
                            "name": "Signalized",
                            "id": "0.0"
                        },
                        {
                            "name": "Stop - All Way",
                            "id": "1.0"
                        },
                        {
                            "name": "Stop - Partial",
                            "id": "2.0"
                        },
                        {
                            "name": "Yield",
                            "id": "3.0"
                        },
                        {
                            "name": "No Controls",
                            "id": "4.0"
                        },
                        {
                            "name": "Not Applicable/Not an Intersection",
                            "id": "5.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Work Zone-Related (Constrution/Maintenance/Utility)",
                    "id": "DtJB6lqd",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-40",
                    "helperImg": " "
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Was the crash work-zone related?",
                    "id": "34oHCyQs",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-41",
                    "tooltip": "Did the crash occur in or is it related to a construction, maintenance, or utility work zone (regardless of whether workers were actually present at the time of the crash)? \"Work zone-related crashes\" may also include those involve motor vehicles slowed or stopped because of the work zone, even if the first harmful event occurred before the first warning sign.",
                    "helperImg": " ",
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
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
                    "humanReadableId": "road-42",
                    "questionDependency": [
                        {
                            "dependencyUid": "34oHCyQs",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Before the First Work Zone Warning Sign",
                            "id": "0.0"
                        },
                        {
                            "name": "Advance Warning Area",
                            "id": "1.0"
                        },
                        {
                            "name": "Transition Area",
                            "id": "2.0"
                        },
                        {
                            "name": "Activity Area",
                            "id": "3.0"
                        },
                        {
                            "name": "Termination Area",
                            "id": "4.0"
                        },
                        {
                            "name": "Not Applicable/Not Within or Related to a Work Zone",
                            "id": "5.0"
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
                    "humanReadableId": "road-43",
                    "questionDependency": [
                        {
                            "dependencyUid": "34oHCyQs",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Lane Closure",
                            "id": "0.0"
                        },
                        {
                            "name": "Lane Shift/Crossover",
                            "id": "1.0"
                        },
                        {
                            "name": "Work on Shoulder or Median",
                            "id": "2.0"
                        },
                        {
                            "name": "Intermittent or Moving Work",
                            "id": "3.0"
                        },
                        {
                            "name": "Other Type of Work Zone",
                            "id": "4.0"
                        },
                        {
                            "name": "Not Applicable/Not Within or Related to a Work Zone",
                            "id": "5.0"
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
                    "humanReadableId": "road-44",
                    "questionDependency": [
                        {
                            "dependencyUid": "34oHCyQs",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Not Applicable/Not Within or Related to a Work Zone",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "3.0"
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
                    "humanReadableId": "road-45",
                    "questionDependency": [
                        {
                            "dependencyUid": "34oHCyQs",
                            "dependencyOptionCode": "1"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No",
                            "id": "0.0"
                        },
                        {
                            "name": "Yes",
                            "id": "1.0"
                        },
                        {
                            "name": "Not Applicable/Not Within or Related to a Work Zone",
                            "id": "2.0"
                        }
                    ]
                }
            ],
            "display": [
                "road"
            ]
        }
    ]
}