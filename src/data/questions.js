
export const questions = {
    "data": [
        {
            "sectionTitle": "Personal Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "0",
                    "question": "First Name of Person Involved",
                    "id": "9b4d88e5-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-firstName"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Middle Initial of Person Involved",
                    "id": "9b4d88e6-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-middleName"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Last Name of Person Involved",
                    "id": "9b4d88e7-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-lastName"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Date of Birth",
                    "id": "9b4d88e8-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-dob",
                    "helperText": "Format: YYYY/MM/DD",
                    "tooltip": "Use 99 if the month and/or day are unknown. For example, 2017/02/99 indicates that the birthday is in February 2017 but the day is unknown."
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Street Address 1",
                    "id": "9b4d88e9-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-streetAddress1",
                    "tooltip": "E.g. 1000 Olin Way"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Street Address 2",
                    "id": "9b4d88ea-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-streetAddress2"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "City/Town",
                    "id": "9b4d88eb-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-city"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "State",
                    "id": "9b4d88ec-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-state"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "ZIP Code",
                    "id": "9b4d88ed-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-zip"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Phone Number",
                    "id": "9b4d88ee-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-phoneNum",
                    "helperText": "format: 15555551212 (no dashes)"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Sex",
                    "id": "9b4d88ef-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-sex",
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
                    "numOptionsAllowed": "0",
                    "question": "Driver License Jurisdiction",
                    "id": "9b4d88f1-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseJurisdiction"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Type",
                    "id": "9b4d88f2-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-jurisidctionType",
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
                    "numOptionsAllowed": "0",
                    "question": "Name of Jurisdiction (ANSI Code)",
                    "id": "9b4d88f3-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-jurisdictionName",
                    "tooltip": "Provide the specific State, Province or Nation indicated on the Driver's License"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "License Number",
                    "id": "9b4d88f4-5877-11ec-9a03-572d0da876f3",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseNum",
                    "tooltip": "Scan the barcode on the back of the driver's license.",
                    "autoMethod": "driverIDCamera"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Class",
                    "id": "9b4d88f5-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseClass",
                    "tooltip": "The Class is the type of driver license issued by the State and the type of motor vehicle the driver is qualified to drive.\nA: Any combination of vehicles with a gross combination weight rating (GCWR) of 26,001 pounds or more provided the GVWR of the vehicles being towed is in excess of 10,000 pounds.\n\nB: Any single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.\n\nC: Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or B, but is either designed to transport 16 or more passengers, including the driver, or is used in the transportation of materials found to be hazardous, which require the motor vehicle to be placarded.\n\nM: Motorcycles, mopeds, motor-driven cycles.\n\nRegular Driver License Class: Any regular or standard driver license issued for the operation of automobiles and light trucks by States that separate these vehicles from Class C. Other class designation  such as \"D\", \"R\", and others may be used by States to indicate a regular driver license class.\n",
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
                    "numOptionsAllowed": "1",
                    "question": "Commercial Driver License (CDL)",
                    "id": "9b4d88f6-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CDL",
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
                    "question": "Endorsements",
                    "id": "9b4d88f7-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CDLEndorsements",
                    "helperImg": "../image/CDL_endorsements.png",
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
                    "numOptionsAllowed": "0",
                    "question": "Restrictions",
                    "id": "9b4d88f8-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-restrictions"
                },
                {
                    "numOptionsAllowed": "3",
                    "question": "Driver License Restrictions",
                    "id": "9b4d88f9-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseRestrictions",
                    "helperText": "(select up to 3)",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0"
                        },
                        {
                            "name": "Alcohol Interlock Device",
                            "id": "1"
                        },
                        {
                            "name": "CDL Intrastate Only",
                            "id": "2"
                        },
                        {
                            "name": "Corrective Lenses",
                            "id": "3"
                        },
                        {
                            "name": "Farm Waiver",
                            "id": "4"
                        },
                        {
                            "name": "Except Class A Bus",
                            "id": "5"
                        },
                        {
                            "name": "Except Class A and Class B Bus",
                            "id": "6"
                        },
                        {
                            "name": "Except Tractor-Trailer",
                            "id": "7"
                        },
                        {
                            "name": "Intermediate License Restrictios",
                            "id": "8"
                        },
                        {
                            "name": "Learner's Permit Restrictions",
                            "id": "9"
                        },
                        {
                            "name": "Limited to Daylight Only",
                            "id": "10"
                        },
                        {
                            "name": "Limited to Employment",
                            "id": "11"
                        },
                        {
                            "name": "Limited - Other",
                            "id": "12"
                        },
                        {
                            "name": "Mechanical Devices (special brakes, hand controls, or other adaptive devices)",
                            "id": "13"
                        },
                        {
                            "name": "Military Vehicles",
                            "id": "14"
                        },
                        {
                            "name": "Motor Vehicles Without Air Brakes",
                            "id": "15"
                        },
                        {
                            "name": "Outside Mirror",
                            "id": "16"
                        },
                        {
                            "name": "Prosthetic Aid",
                            "id": "17"
                        },
                        {
                            "name": "Other",
                            "id": "18"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Alcohol Interlock Present?",
                    "id": "9b4d88fa-5877-11ec-9a03-572d0da876f3",
                    "answerType": "numberButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-alcoholInterlock",
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
                    "numOptionsAllowed": "0",
                    "question": "Driver License Status",
                    "id": "9b4d88fb-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseStatus"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Type Applicable for This Person",
                    "id": "9b4d88fc-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-statusType",
                    "answerOptions": [
                        {
                            "name": "Non-CDL Driver License",
                            "id": "0"
                        },
                        {
                            "name": "Non-CDL, Restricted Driver license (Learner's Permit, Temporary/Limited, Graduated Driver license, etc.)",
                            "id": "1"
                        },
                        {
                            "name": "Commercial Driver License (CDL)",
                            "id": "2"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Status",
                    "id": "9b4d88fd-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-status",
                    "answerOptions": [
                        {
                            "name": "Not Licensed",
                            "id": "0"
                        },
                        {
                            "name": "Canceled or Denied",
                            "id": "1"
                        },
                        {
                            "name": "DIsqualified (CDL)",
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
                            "name": "Valid License",
                            "id": "6"
                        },
                        {
                            "name": "Unknown",
                            "id": "7"
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
                    "numOptionsAllowed": "2",
                    "question": "Seating Position",
                    "id": "9b4d88ff-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-seatingPos",
                    "helperText": "(choose up to 2)",
                    "helperImg": "../image/seating_positions.png",
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
                    "numOptionsAllowed": "0",
                    "question": "Restraint Systems / Motorcycle Helmet Use",
                    "id": "9b4d8900-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-restraintSys"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Restraint Systems in Use",
                    "id": "9b4d8901-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-restraintInUse",
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
                    "numOptionsAllowed": "1",
                    "question": "Any Indication of Improper Use?",
                    "id": "9b4d8902-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-improperUse",
                    "tooltip": "ie, seatbelt was not buckled in correctly",
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
                    "numOptionsAllowed": "4",
                    "question": "Air Bag Deployed?",
                    "id": "9b4d8903-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-airbag",
                    "helperText": "(choose up to 4)",
                    "helperImg": "../image/airbag_diagram.png",
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
                    "numOptionsAllowed": "1",
                    "question": "Ejection?",
                    "id": "9b4d8904-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-ejection",
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
                    "numOptionsAllowed": "1",
                    "question": "Speeding-Related?",
                    "id": "9b4d8905-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-speeding",
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
                    "numOptionsAllowed": "4",
                    "question": "Driver Actions at Time of Crash",
                    "id": "9b4d8906-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-actions",
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
                    "numOptionsAllowed": "0",
                    "question": "Violation Codes",
                    "id": "9b4d8907-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-violationCodes",
                    "helperText": "(choose up to 2)",
                    "tooltip": "Select the two most critical",
                    "answerOptions": [
                        {
                            "name": "No Violation",
                            "id": "0"
                        },
                        {
                            "name": "Unknown",
                            "id": "1"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Distracted By",
                    "id": "9b4d8908-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-distracted"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Action",
                    "id": "9b4d8909-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-distractedAction",
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
                    "numOptionsAllowed": "1",
                    "question": "Source",
                    "id": "9b4d890a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-distractionSource",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8909-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8909-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d8909-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "9b4d8909-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "2",
                    "question": "Condition at Time of the Crash",
                    "id": "9b4d890b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-condition",
                    "helperText": "(choose up to 2)",
                    "answerOptions": [
                        {
                            "name": "Apparently Normal",
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
                            "name": "Under the Influence of Medication/Drugs/Alcohol",
                            "id": "5"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "6"
                        },
                        {
                            "name": "Other",
                            "id": "7"
                        },
                        {
                            "name": "Unknown",
                            "id": "8"
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
                    "numOptionsAllowed": "1",
                    "question": "Incident Responder?",
                    "id": "9b4d890d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-incidentResponder",
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
                    "numOptionsAllowed": "1",
                    "question": "Injury Status",
                    "id": "9b4d890e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-injuryStatus",
                    "tooltip": "Fatal Injury: an injury that results in death within 30 days after the motor vehicle crash in which the injury occured. If the person did not die at the scene, but died within 30 days of the motor vehicle crash in which the injury occured, the injury classification should be changed to Fatal Injury. \n\nSuspected Serious Injury: any injury other than fatal which results in one or more of the following: severe laceration reuslting in exposure of underlying tissues/muscles/organs or resulting in significant loss of blood; broken or distorted arm or leg; crush injuries; suspected skull, chest, or abdominal injury other than bruises or minor lacerations; significant burns (second and third degree burns over 10% or more of the body); unconsciousness when taken from crash scene; paralysis\n\nSuspected Minor Injury: any injury that is evident at the scene of the crash, other than fatal or serious injuries. Examples include lump on the head, abrasions, bruises, minor lacerations (cuts on the skin surface with minimal bleeding and no exposure of deeper tissue/muscle).\n\nPossible Injury: any injury reported or claimed which is not fatal, suspected  serious, or suspected minor. Examples include momentary loss of consciousness, claim of injury, limping, or complaint of pain or nausea. These are reported by the person or indicated by their behavior, but no wounds or injuries are readily evident.\n\nNo Apparent Injury: there is no reason to believe that the person received any bodily harm from the motor vehicle crash. There is no physical evidence of injury and the person does not report any change in normal function.\n",
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
                    "numOptionsAllowed": "1",
                    "question": "Injury Area",
                    "id": "9b4d890f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-injuryArea",
                    "tooltip": "Select the primary or most obvious area of the person's body injured during the crash. This will be typically be indicated in a matrix or narrative in the EMS records or as a hospital discharge code (ICD-9-CM or ICD-10, if implemented) in the emergency department, hospital or insurance records.",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Head",
                            "id": "0"
                        },
                        {
                            "name": "Face",
                            "id": "1"
                        },
                        {
                            "name": "Neck",
                            "id": "2"
                        },
                        {
                            "name": "Upper Extremity",
                            "id": "3"
                        },
                        {
                            "name": "Thorax (chest)",
                            "id": "4"
                        },
                        {
                            "name": "Spine",
                            "id": "5"
                        },
                        {
                            "name": "Adnomen and Pelvis",
                            "id": "6"
                        },
                        {
                            "name": "Lower Extremity",
                            "id": "7"
                        },
                        {
                            "name": "Unspecified",
                            "id": "8"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Injury Diagnosis",
                    "id": "9b4d8910-5877-11ec-9a03-572d0da876f3",
                    "answerType": "largeTextField",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-injuryDiagnosis",
                    "tooltip": "Describe the injury.",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Injury Severity",
                    "id": "9b4d8911-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-injurySeverity",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Fatal",
                            "id": "0"
                        },
                        {
                            "name": "Serious",
                            "id": "1"
                        },
                        {
                            "name": "Moderate",
                            "id": "2"
                        },
                        {
                            "name": "Minor",
                            "id": "3"
                        },
                        {
                            "name": "No Injury",
                            "id": "4"
                        },
                        {
                            "name": "Unknown",
                            "id": "5"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Transported to First Medical Facility By",
                    "id": "9b4d8912-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-transport",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "9b4d8913-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-transportSource",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "0",
                    "question": "EMS Response Agency Identifier",
                    "id": "9b4d8914-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-EMSIdentifier",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "EMS Response Run Number",
                    "id": "9b4d8915-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-EMSRunNum",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "9b4d8916-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-medicalFacility",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "0",
                    "question": "CMV License Status and Compliance with CDL Endorsements",
                    "id": "9b4d8918-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CMV",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "CMV License Status",
                    "id": "9b4d8919-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CMVStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "Compliance with CDL Endorsement(s)",
                    "id": "9b4d891a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-complianceCDL",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "Law Enforcement Suspects Alcohol Use",
                    "id": "9b4d891c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-suspectedAlcohol",
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
                    "numOptionsAllowed": "1",
                    "question": "Alcohol Test Status",
                    "id": "9b4d891d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-alcoholTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d891c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d891c-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "Type of Alcohol Test",
                    "id": "9b4d891e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-alcoholTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d891c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d891c-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "BAC Test Result",
                    "id": "9b4d891f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-BACTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d891c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d891c-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Pending",
                            "id": "0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "1"
                        },
                        {
                            "name": "Unknown",
                            "id": "2"
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
                    "numOptionsAllowed": "1",
                    "question": "Law Enforcement Suspects Drug Use",
                    "id": "9b4d8921-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-suspectedDrug",
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
                    "numOptionsAllowed": "1",
                    "question": "Drug Test Status",
                    "id": "9b4d8922-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-drugTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8921-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8921-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "Type of Drug Test",
                    "id": "9b4d8923-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-drugTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8921-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8921-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Blood",
                            "id": "0"
                        },
                        {
                            "name": "Saliva",
                            "id": "1"
                        },
                        {
                            "name": "Urine",
                            "id": "2"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "3"
                        },
                        {
                            "name": "Other",
                            "id": "4"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "4",
                    "question": "Drug Test Result",
                    "id": "9b4d8924-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-drugTestResult",
                    "helperText": "(choose up to 4)",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8921-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8921-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Negative",
                            "id": "0"
                        },
                        {
                            "name": "Amphetamine",
                            "id": "1"
                        },
                        {
                            "name": "Cocaine",
                            "id": "2"
                        },
                        {
                            "name": "Marijuana",
                            "id": "3"
                        },
                        {
                            "name": "Opiate",
                            "id": "4"
                        },
                        {
                            "name": "Other Controlled Substance",
                            "id": "5"
                        },
                        {
                            "name": "PCP",
                            "id": "6"
                        },
                        {
                            "name": "Other Drug (excludes post-crash drugs)",
                            "id": "7"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "8"
                        },
                        {
                            "name": "Unknown",
                            "id": "9"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Fataiity-Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "1",
                    "question": "Attempted Avoidance Maneuver",
                    "id": "9b4d8926-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-attemptedAvoidance",
                    "tooltip": "Movements/actions taken by the driver after the driver realizes there is an impending danger.",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "0",
                    "question": "Detailed Alcohol Test Information",
                    "id": "9b4d8927-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-delatedAlcohol",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Alcohol Test Type",
                    "id": "9b4d8928-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalAlcoholTest",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0"
                        },
                        {
                            "name": "Breath Test (AC)",
                            "id": "1"
                        },
                        {
                            "name": "Blood",
                            "id": "2"
                        },
                        {
                            "name": "Blood Clot",
                            "id": "3"
                        },
                        {
                            "name": "Blood Plasma/Serum",
                            "id": "4"
                        },
                        {
                            "name": "Liver",
                            "id": "5"
                        },
                        {
                            "name": "Preliminary Breath Test (PBT)",
                            "id": "6"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "7"
                        },
                        {
                            "name": "Urine",
                            "id": "8"
                        },
                        {
                            "name": "Vitreous",
                            "id": "9"
                        },
                        {
                            "name": "Other Test Type",
                            "id": "10"
                        },
                        {
                            "name": "Unknown Test Type",
                            "id": "11"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Alcohol Test Result",
                    "id": "9b4d8929-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalAlcoholResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "0.94 or Greater",
                            "id": "0"
                        },
                        {
                            "name": "Test Not Given",
                            "id": "1"
                        },
                        {
                            "name": "AC Test Performed, Results Unknown",
                            "id": "2"
                        },
                        {
                            "name": "Positive Reading with No Actual Value",
                            "id": "3"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "4"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Detailed Drug Test Information",
                    "id": "9b4d892a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-deltailedDrug",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Drug Test Type",
                    "id": "9b4d892b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalDrugTest",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0"
                        },
                        {
                            "name": "Blood",
                            "id": "1"
                        },
                        {
                            "name": "Both Blood and Urine",
                            "id": "2"
                        },
                        {
                            "name": "Unknown Test Type",
                            "id": "3"
                        },
                        {
                            "name": "Urine",
                            "id": "4"
                        },
                        {
                            "name": "Other Test Type",
                            "id": "5"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "6"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Result of Drug Test",
                    "id": "9b4d892c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalDrugResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d890e-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0"
                        },
                        {
                            "name": "Tested No Drugs Found/Negative",
                            "id": "1"
                        },
                        {
                            "name": "Narcotic",
                            "id": "2"
                        },
                        {
                            "name": "Depressant",
                            "id": "3"
                        },
                        {
                            "name": "Simulant",
                            "id": "4"
                        },
                        {
                            "name": "Hallucinogen",
                            "id": "5"
                        },
                        {
                            "name": "Cannabinoid",
                            "id": "6"
                        },
                        {
                            "name": "Phencyclidine (PCP)",
                            "id": "7"
                        },
                        {
                            "name": "Anabolic Steroid",
                            "id": "8"
                        },
                        {
                            "name": "Inhalant",
                            "id": "9"
                        },
                        {
                            "name": "Other Drug",
                            "id": "10"
                        },
                        {
                            "name": "Tested for Drugs, Results Unknown",
                            "id": "11"
                        },
                        {
                            "name": "Tested for Drugs, Drugs Found, Type Unknown/Positive",
                            "id": "12"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "13"
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
                    "id": "9b4d892e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerFirst"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial",
                    "id": "9b4d892f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerMiddle"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name",
                    "id": "9b4d8930-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerLast"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 1",
                    "id": "9b4d8931-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerStreet1"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 2",
                    "id": "9b4d8932-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerStreet2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "9b4d8933-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerCity"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "9b4d8934-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerState"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "9b4d8935-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerZIP"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Insurance Information",
                    "id": "9b4d8936-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerInsurance"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Insurance Company Name",
                    "id": "9b4d8937-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-insuranceCompany",
                    "answerOptions": [
                        {
                            "name": "Unknown",
                            "id": "0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "NAIC #",
                    "id": "9b4d8938-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-NAIC",
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
                    "id": "9b4d8939-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-policy",
                    "answerOptions": [
                        {
                            "name": "Unknown",
                            "id": "0"
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
                    "id": "9b4d893b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-VIN",
                    "tooltip": "The VIN can often be found on the lower-left corner of the dashboard, in front of the steering wheel."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Motor Vehicle Unit Type ",
                    "id": "9b4d893c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorUnitType",
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
                    "id": "9b4d893d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorRegistration",
                    "tooltip": "The category indicating the general configuration or shape of a motor vehicle distinguished by characteristics such as number of doors, rows of seats, windows, or roof line."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Identifier",
                    "id": "9b4d893e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-identifier",
                    "helperText": "Might be zip code",
                    "tooltip": "No Driver Present, State Identifier, Unknown"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Year of Motor Vehicle Registration",
                    "id": "9b4d893f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-yearRegistration",
                    "helperText": "Format: YYYY"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle License Plate Number",
                    "id": "9b4d8940-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-licensePlate"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Make",
                    "id": "9b4d8941-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-make"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Model",
                    "id": "9b4d8942-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-model"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Model Year",
                    "id": "9b4d8943-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-modelYear",
                    "helperText": "Format: YYYY"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Body Type Category",
                    "id": "9b4d8944-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorBodyType"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Body Type Category",
                    "id": "9b4d8945-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-bodyType",
                    "tooltip": "What is the general configuration or shape of a motor vehicle? You should use characteristics like the number of doors, rows of seats, windows, roof line, etc. to distinguish between different body types. Personal conveyances, like skateboards, motorized toy cars, and wheelchairs are not considered motor vehicles.",
                    "answerOptions": [
                        {
                            "name": "Passenger Car",
                            "id": "0"
                        },
                        {
                            "name": "Jeep",
                            "id": "1"
                        },
                        {
                            "name": "Sport Utility Vehicle",
                            "id": "2"
                        },
                        {
                            "name": "Mini-Van (personal use, up to 8 seats)",
                            "id": "3"
                        },
                        {
                            "name": "Motor home/recreational vehicle",
                            "id": "4"
                        },
                        {
                            "name": "Limo",
                            "id": "5"
                        },
                        {
                            "name": "Passenger Van",
                            "id": "6"
                        },
                        {
                            "name": "School Bus",
                            "id": "7"
                        },
                        {
                            "name": "Transit Bus",
                            "id": "8"
                        },
                        {
                            "name": "Charter/Tour Bus",
                            "id": "9"
                        },
                        {
                            "name": "Intercity Bus",
                            "id": "10"
                        },
                        {
                            "name": "Shuttle Bus",
                            "id": "11"
                        },
                        {
                            "name": "ChildCare/DayCare",
                            "id": "12"
                        },
                        {
                            "name": "Other Large Passenger Trucks",
                            "id": "13"
                        },
                        {
                            "name": "Cargo Van",
                            "id": "14"
                        },
                        {
                            "name": "Pickup Truck",
                            "id": "15"
                        },
                        {
                            "name": "Single Unit Truck (2 axles)",
                            "id": "16"
                        },
                        {
                            "name": "SIngle-Unit Truck (3 or more axles)",
                            "id": "17"
                        },
                        {
                            "name": "Truck, Axles Unknown",
                            "id": "18"
                        },
                        {
                            "name": "Truck Tractor (Bobtail)",
                            "id": "19"
                        },
                        {
                            "name": "Construction Equipment (Backhoe, Bulldozer, etc.)",
                            "id": "20"
                        },
                        {
                            "name": "Farm Equipment (Tractor, Combine, Harvester, etc.)",
                            "id": "21"
                        },
                        {
                            "name": "2-Wheeled Motorcycle",
                            "id": "22"
                        },
                        {
                            "name": "3-Wheeled Motorcycle",
                            "id": "23"
                        },
                        {
                            "name": "Autocycle",
                            "id": "24"
                        },
                        {
                            "name": "All-Terrain Vehicle/All-Terrain Cycle (ATV/ATC)",
                            "id": "25"
                        },
                        {
                            "name": "Golf cart",
                            "id": "26"
                        },
                        {
                            "name": "Snowmobile",
                            "id": "27"
                        },
                        {
                            "name": "Moped or motorizled bicycle",
                            "id": "28"
                        },
                        {
                            "name": "Recreational Off-Highway Vehicle (ROV)",
                            "id": "29"
                        },
                        {
                            "name": "Low speed vehicle",
                            "id": "30"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Vehicle Size",
                    "id": "9b4d8946-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-size",
                    "tooltip": "GVWR is used for single-unit trucks and other body types. GCWR is used for combination trucks or any vehicle with a trailing unit",
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
                    "id": "9b4d8947-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-numTrailingUnits",
                    "tooltip": "The number of trailers attached to this vehicle",
                    "answerOptions": [
                        {
                            "name": 1,
                            "id": "0"
                        },
                        {
                            "name": 2,
                            "id": "1"
                        },
                        {
                            "name": 3,
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
                    "id": "9b4d8948-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterials",
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
                    "id": "9b4d8949-5877-11ec-9a03-572d0da876f3",
                    "answerType": "numberButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-occupants"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Special Function of Motor Vehicle in Transport",
                    "id": "9b4d894a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-specialFunction",
                    "tooltip": "What was the special function (if any) that this vehicle was serving (regardless of whether the function is marked on the vehicle) at the time of the crash? For example, was the vehicle acting as a school bus, even if it is not actually marked as a school bus? Buses are any motor vehicles with seats to transport nine (9) or more people, including the driver seat, but not including vans owned and operated for personal use."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Emergency Motor Vehicle Use",
                    "id": "9b4d894b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-emergencyUse",
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
                    "id": "9b4d894c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-speedLimit",
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
                    "id": "9b4d894e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-directionBefore",
                    "tooltip": "Note that this is not a compass direction, but a direction consistent with the designated direction of the road. For example, the direction of a State-designated North-South highway must be either northbound or southbound even though a motor vehicle may have been traveling due east as a result of a short segment of the highway having an east-west orientation.",
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
                    "id": "9b4d894f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trafficway"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Travel Directions",
                    "id": "9b4d8950-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-travelDirections",
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
                    "id": "9b4d8951-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-divided",
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
                    "id": "9b4d8952-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-barrierType",
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
                    "id": "9b4d8953-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hovHotLanes",
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
                    "id": "9b4d8954-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-crashHovHotRelated",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hovHotLanes",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8953-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hovHotLanes",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8953-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8955-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-totalLanes"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Enter the total through lanes, excluding auxiliary lanes.",
                    "id": "9b4d8956-5877-11ec-9a03-572d0da876f3",
                    "answerType": "numberButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-throughLanes",
                    "tooltip": "If the traffic way is divided, only count the total through lanes in the vehicle's direction."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Enter the total auxiliary lanes",
                    "id": "9b4d8957-5877-11ec-9a03-572d0da876f3",
                    "answerType": "numberButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-auxillaryLanes",
                    "tooltip": "If the traffic way is divided, only count the total through lanes in the vehicle's direction."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Roadway Alignment and Grade",
                    "id": "9b4d8958-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-roadwayAlignmentGrade"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Horizontal Alignment",
                    "id": "9b4d8959-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-horizontalAlignment",
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
                    "id": "9b4d895a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-grade",
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
                    "question": "Traffic Control Device (TCD) Type",
                    "id": "9b4d895b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trafficControl"
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "TCD Type(s)",
                    "id": "9b4d895c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-TCDTypes",
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
                    "id": "9b4d895d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-TCDInoperativeMissing",
                    "helperText": "(choose up to 4)",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "6.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "7.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "8.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "9.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "10.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "11.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "12.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "13.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "14.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "15.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "16.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "17.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "18.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "19.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "20.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "21.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "22.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "23.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "24.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "25.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "26.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "27.0",
                            "dependencyUuid": "9b4d895c-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d895f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-manueverAction",
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
                    "id": "9b4d8960-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-damage"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Initial Point of Contact",
                    "id": "9b4d8961-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-initialPointContact",
                    "tooltip": "Provide the approximate contact point on this vehicle associated with this vehicle’s initial harmful event. If there was no collision, select \"Non-Collision\". If the initial harmful event for this vehicle involves striking another vehicle, person, or property (a collision event) because a load/cargo fell from or was propelled by the vehicle, then select \"Cargo Loss\". If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
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
                    "id": "9b4d8962-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-damageLocation",
                    "helperText": "(choose up to 13)",
                    "tooltip": "If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "6.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "7.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "8.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "9.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "10.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "11.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "12.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "13.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "14.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "15.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "16.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "17.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8963-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-resultingExtentDamage",
                    "tooltip": "If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "6.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "7.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "8.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "9.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "10.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "11.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "12.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "13.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "14.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "15.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "16.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "17.0",
                            "dependencyUuid": "9b4d8961-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8964-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-sequence",
                    "helperText": "(choose up to 4)",
                    "tooltip": "Describe the sequence of events related to this motor vehicle, including non-harmful events, non-collision harmful events and collision events.",
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
                    "id": "9b4d8965-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-mostHarmfulEvent",
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
                    "id": "9b4d8966-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hitRun",
                    "tooltip": "Refers to cases where the vehicle or the driver of the vehicle in transport is a contact vehicle in a crash and departs the scene without stopping to render aid or report the crash.",
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
                    "id": "9b4d8967-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-towed",
                    "tooltip": "Disabling damage is damage to the motor vehicle that is sufficient to require the motor vehicle be towed or carried from the scene.",
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
                    "id": "9b4d8968-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-contributingCircumstances",
                    "tooltip": "Pre-existing motor vehicle defects or maintenance conditions that may have contributed to the crash.",
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
                    "question": "Motor Vehicle Automated Driving System(s)",
                    "id": "9b4d8969-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-automated"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Automated System(s) in Vehicle",
                    "id": "9b4d896a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-automatedSystems",
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
                    "numOptionsAllowed": "5.0",
                    "question": "Automated System Levels in Vehicle",
                    "id": "9b4d896b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-automatedSystemLevels",
                    "helperText": "(choose up to 5)",
                    "tooltip": "No Automation: Requires full-time performance of human driver, even when enhanced by warning or intervention systems\nDriver Assistance: Assistance of either steering or acceleration/deceleration using information about the drivng environment, with the expectation that the driver does the rest\nPartial Automation: Driving mode-specific execution by one or more driver assistance systems of both steering and acceleration/deceleration, with the expectation that the driver does the rest\nConditional Automation: Driving mode-specific performance by an automated driving system of all dynamic driving tasks, with the expectation that the human driver will respond appropriately to a request to intervene\nHigh Automation: The driving mode-specific performance by an automated driving system of all aspects of dynamic driving tasks, even if the human driver does not respond appropriately to a request to intervene\nFull automation: The full-time performance by an automated driving system of all aspects of the dynamic driving task under all roadway and environmental conditions that can be managed by a human driver\nDynamic driving task: operational (steering, braking, accelerating, monitoring the vehicle and roadway) and tactical (responding to events, determining when to change lanes, turn, use signals, etc), aspects of the driving task, but not strategic (determining destinations and waypoints)\nDriving mode: type of driving scenario with characteristic dynamic driving task requirements (e.g., expressway merging, high-speed cruising, low speed traffic jam, closed-campus operations, etc.)\nRequest to intervene: notification by the automated driving system to a human driver that they should promptly begin or resume performance of the dynamic driving task\n",
                    "helperImg": "../image/automation_levels.png",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-automatedSystems",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d896a-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "5.0",
                    "question": "Automated System Levels Engaged at Time of Crash",
                    "id": "9b4d896c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-systemsEngaged",
                    "helperText": "(choose up to 5)",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-automatedSystems",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d896a-5877-11ec-9a03-572d0da876f3"
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
                }
            ],
            "display": [
                "vehicle"
            ]
        },
        {
            "sectionTitle": "Large Vehicles and Hazardous Material Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer License Plate Number",
                    "id": "9b4d896e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerLicensePlate",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "9b4d896f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerLicense",
                    "helperText": "License Plate 1",
                    "autoMethod": "plateCamera",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "9b4d8970-5877-11ec-9a03-572d0da876f3",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-secondTrailerLicense",
                    "helperText": "License Plate 2",
                    "autoMethod": "plateCamera",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "9b4d8971-5877-11ec-9a03-572d0da876f3",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-thirdTrailerLicense",
                    "helperText": "License Plate 3",
                    "autoMethod": "plateCamera",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer VIN(s)",
                    "id": "9b4d8972-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerVINs",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "9b4d8973-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerVin",
                    "helperText": "VIN 1",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "9b4d8974-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-secondTrailerVin",
                    "helperText": "VIN 2",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "9b4d8975-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-thirdTrailerVin",
                    "helperText": "VIN 3",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Make(s)",
                    "id": "9b4d8976-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerMakes",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "9b4d8977-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerMake",
                    "helperText": "Make 1",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "9b4d8978-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-secondTrailerMake",
                    "helperText": "Make 2",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "9b4d8979-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-thirdTrailerMake",
                    "helperText": "Make 3",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Model(s)",
                    "id": "9b4d897a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerModels",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "9b4d897b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerModel",
                    "helperText": "Model 1",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "9b4d897c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehile-secondTrailerModel",
                    "helperText": "Model 2",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "9b4d897d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-thirdTrailerModel",
                    "helperText": "Model 3",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Model Year(s)",
                    "id": "9b4d897e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerModelYears",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "9b4d897f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerModelYear",
                    "helperText": "Year 1",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "9b4d8980-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-secondTrailerModelYear",
                    "helperText": "Year 2",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "9b4d8981-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-thirdTrailerModelYear",
                    "helperText": "Year 3",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Total Number of Axles",
                    "id": "9b4d8982-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-numAxles",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Truck Tractor",
                    "id": "9b4d8983-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-truckAxles",
                    "helperText": "Number of axles",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "9b4d8984-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerAxles",
                    "helperText": "Number of axles",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "9b4d8985-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-secondTrailerAxles",
                    "helperText": "Number of axles",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "9b4d8986-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-thirdTrailerAxles",
                    "helperText": "Number of axles",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Identification",
                    "id": "9b4d8987-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorIdentification",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Identification Type",
                    "id": "9b4d8988-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-identificationType",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8989-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-countryStateCode",
                    "tooltip": "Non-US Country Code (e.g. Mexico or Canada) US State Code",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Identification Number",
                    "id": "9b4d898a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-identificationNum",
                    "tooltip": "US DOT Number - up to 7 digits If not a US DOT Number, include State issued Identification Number and State",
                    "helperImg": "../image/determine_responsible_carrier.png",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Name",
                    "id": "9b4d898b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierName",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Street Address",
                    "id": "9b4d898c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierStreetAddress",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier City/Town",
                    "id": "9b4d898d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierCityTown",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier State",
                    "id": "9b4d898e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierState",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier ZIP Code",
                    "id": "9b4d898f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierZIP",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Carrier",
                    "id": "9b4d8990-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierType",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
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
                    "question": "Vehicle Configuration Information",
                    "id": "9b4d8991-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-configurationInfo",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Vehicle Configuration",
                    "id": "9b4d8992-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-configuration",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8993-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-specialSizing",
                    "helperText": "(choose up to 4)",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8994-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-permitted",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8947-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8995-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-cargoBodyType",
                    "helperImg": "../image/cargo_body_types.png",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d8946-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8996-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterialsCargo",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Hazardous Materials ID",
                    "id": "9b4d8997-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterialsID",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Hazardous Materials Class",
                    "id": "9b4d8998-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterialsClass",
                    "helperImg": "../image/hazardous_materials_class.png",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Release of hazardous materials from a cargo compartment (e.g. trailer), cargo container (e.g. tank) or from a package?",
                    "id": "9b4d8999-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-releaseHazardousMaterials",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8948-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "0",
                    "question": "First Name of Person Involved",
                    "id": "9b4d899b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-firstName"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Middle Initial of Person Involved",
                    "id": "9b4d899c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-middleName"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Last Name of Person Involved",
                    "id": "9b4d899d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-lastName"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Date of Birth",
                    "id": "9b4d899e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-dob",
                    "helperText": "Format: (YYYY/MM/DD)"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Street Address 1",
                    "id": "9b4d899f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-streetAddress1",
                    "tooltip": "E.g. 1000 Olin Way; MB 999"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Street Address 2",
                    "id": "9b4d89a0-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-streetAddress2"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "City/Town",
                    "id": "9b4d89a1-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-city"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "State",
                    "id": "9b4d89a2-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-state"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "ZIP Code",
                    "id": "9b4d89a3-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-zip"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Phone Number",
                    "id": "9b4d89a4-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-phoneNum",
                    "helperText": "Format: 15555551212"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Sex",
                    "id": "9b4d89a5-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-sex",
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
                }
            ],
            "display": [
                "nonmotorist"
            ]
        },
        {
            "sectionTitle": "Crash-Related Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "1",
                    "question": "Person Type",
                    "id": "9b4d89a7-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-personType",
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
                    "numOptionsAllowed": "2",
                    "question": "Condition at Time of the Crash",
                    "id": "9b4d89a8-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-condition",
                    "helperText": "(choose up to 2)",
                    "answerOptions": [
                        {
                            "name": "Not Applicable",
                            "id": "0"
                        },
                        {
                            "name": "Apparently Normal",
                            "id": "1"
                        },
                        {
                            "name": "Asleep or Fatigued",
                            "id": "2"
                        },
                        {
                            "name": "Emotional (depressed, angry, disturbed, etc.)",
                            "id": "3"
                        },
                        {
                            "name": "Ill (sick), Fainted",
                            "id": "4"
                        },
                        {
                            "name": "Physically Impaired",
                            "id": "5"
                        },
                        {
                            "name": "Under the Influence of Medications/Drugs/Alcohol",
                            "id": "6"
                        },
                        {
                            "name": "Other",
                            "id": "7"
                        },
                        {
                            "name": "Unknown",
                            "id": "8"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Unit Number of Motor Vehicle Striking Non-Motorist",
                    "id": "9b4d89a9-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-unitNum",
                    "tooltip": "e.g. '2' for Vehicle 2"
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Non-Motorist Action/Circumstance Prior to Crash",
                    "id": "9b4d89aa-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-actionPrior"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Action/Circumstance",
                    "id": "9b4d89ab-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-actionCircumstance",
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
                    "numOptionsAllowed": "1",
                    "question": "Origin/Destination",
                    "id": "9b4d89ac-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-originDestination",
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
                    "numOptionsAllowed": "2",
                    "question": "Non-Motorist Contributing Action(s)/Circumstance(s)",
                    "id": "9b4d89ad-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-contributingAction",
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
                        },
                        {
                            "name": "None (No Improper Action)",
                            "id": "13"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Non-Motorist Location at Time of Crash",
                    "id": "9b4d89ae-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-locationAtCrash",
                    "helperImg": "../image/bike_lanes.png",
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
                    "numOptionsAllowed": "5",
                    "question": "Non-Motorist Safety Equipment",
                    "id": "9b4d89af-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-safetyEquipment",
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
                    "numOptionsAllowed": "1",
                    "question": "Initial Contact Point on Non-Motorist",
                    "id": "9b4d89b0-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-initialContactPoint",
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
                    "numOptionsAllowed": "0",
                    "question": "Distracted By",
                    "id": "9b4d89b1-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedBy"
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Action",
                    "id": "9b4d89b2-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedAction",
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
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Source",
                    "id": "9b4d89b3-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedSource",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-distractedAction",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89b2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-distractedAction",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89b2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-distractedAction",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89b2-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "Incident Responder?",
                    "id": "9b4d89b5-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-incidentResponder",
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
                    "numOptionsAllowed": "1",
                    "question": "Injury Status",
                    "id": "9b4d89b6-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injuryStatus",
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
                    "numOptionsAllowed": "1",
                    "question": "Injury Area",
                    "id": "9b4d89b7-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injuryArea",
                    "tooltip": "Select the primary or most obvious area of the person's body injured during the crash. This will be typically be indicated in a matrix or narrative in the EMS records or as a hospital discharge code (ICD-9-CM or ICD-10, if implemented) in the emergency department, hospital or insurance records.",
                    "answerOptions": [
                        {
                            "name": "Head",
                            "id": "0"
                        },
                        {
                            "name": "Face",
                            "id": "1"
                        },
                        {
                            "name": "Neck",
                            "id": "2"
                        },
                        {
                            "name": "Upper Extremity",
                            "id": "3"
                        },
                        {
                            "name": "Thorax (chest)",
                            "id": "4"
                        },
                        {
                            "name": "Spine",
                            "id": "5"
                        },
                        {
                            "name": "Adnomen and Pelvis",
                            "id": "6"
                        },
                        {
                            "name": "Lower Extremity",
                            "id": "7"
                        },
                        {
                            "name": "Unspecified",
                            "id": "8"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Injury Diagnosis",
                    "id": "9b4d89b8-5877-11ec-9a03-572d0da876f3",
                    "answerType": "largeTextField",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injuryDiagnosis",
                    "tooltip": "Describe the injury."
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Injury Severity",
                    "id": "9b4d89b9-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injurySeverity",
                    "answerOptions": [
                        {
                            "name": "Fatal",
                            "id": "0"
                        },
                        {
                            "name": "Serious",
                            "id": "1"
                        },
                        {
                            "name": "Moderate",
                            "id": "2"
                        },
                        {
                            "name": "Minor",
                            "id": "3"
                        },
                        {
                            "name": "No Injury",
                            "id": "4"
                        },
                        {
                            "name": "Unknown",
                            "id": "5"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Transported to First Medical Facility By",
                    "id": "9b4d89ba-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-transported",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "9b4d89bb-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-sourceTransport",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "0",
                    "question": "EMS Response Agency Identifier",
                    "id": "9b4d89bc-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-EMSIdentifier",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "EMS Response Run Number",
                    "id": "9b4d89bd-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-EMSRunNumber",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "9b4d89be-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-medicalFacility",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "Law Enforcement Suspects Alcohol Use",
                    "id": "9b4d89c0-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-suspectedAlcohol",
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
                    "numOptionsAllowed": "1",
                    "question": "Alcohol Test Status",
                    "id": "9b4d89c1-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-alcoholTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89c0-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "Type of Alcohol Test",
                    "id": "9b4d89c2-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-alcoholTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89c0-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "BAC Test Result",
                    "id": "9b4d89c3-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-BACTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89c0-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Pending",
                            "id": "0"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "1"
                        },
                        {
                            "name": "Unknown",
                            "id": "2"
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
                    "numOptionsAllowed": "1",
                    "question": "Law Enforcement Suspects Drug Use",
                    "id": "9b4d89c5-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-suspectedDrug",
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
                    "numOptionsAllowed": "1",
                    "question": "Drug Test Status",
                    "id": "9b4d89c6-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89c5-5877-11ec-9a03-572d0da876f3"
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
                    "numOptionsAllowed": "1",
                    "question": "Type of Drug Test",
                    "id": "9b4d89c7-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89c5-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Blood",
                            "id": "0"
                        },
                        {
                            "name": "Saliva",
                            "id": "1"
                        },
                        {
                            "name": "Urine",
                            "id": "2"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "3"
                        },
                        {
                            "name": "Other",
                            "id": "4"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "4",
                    "question": "Drug Test Result",
                    "id": "9b4d89c8-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89c5-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Negative",
                            "id": "0"
                        },
                        {
                            "name": "Amphetamine",
                            "id": "1"
                        },
                        {
                            "name": "Cocaine",
                            "id": "2"
                        },
                        {
                            "name": "Marijuana",
                            "id": "3"
                        },
                        {
                            "name": "Opiate",
                            "id": "4"
                        },
                        {
                            "name": "Other Controlled Substance",
                            "id": "5"
                        },
                        {
                            "name": "PCP",
                            "id": "6"
                        },
                        {
                            "name": "Other Drug (excludes post-crash drugs)",
                            "id": "7"
                        },
                        {
                            "name": "Not Applicable (Test Not Given)",
                            "id": "8"
                        },
                        {
                            "name": "Unknown",
                            "id": "9"
                        }
                    ]
                }
            ],
            "display": [
                "nonmotorist"
            ]
        },
        {
            "sectionTitle": "Fatality-Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "0",
                    "question": "Detailed Alcohol Test Information",
                    "id": "9b4d89ca-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-detailedAlcohol",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Alcohol Test Type",
                    "id": "9b4d89cb-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalAlcoholTest",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0"
                        },
                        {
                            "name": "Breath Test (AC)",
                            "id": "1"
                        },
                        {
                            "name": "Blood",
                            "id": "2"
                        },
                        {
                            "name": "Blood Clot",
                            "id": "3"
                        },
                        {
                            "name": "Blood Plasma/Serum",
                            "id": "4"
                        },
                        {
                            "name": "Liver",
                            "id": "5"
                        },
                        {
                            "name": "Preliminary Breath Test (PBT)",
                            "id": "6"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "7"
                        },
                        {
                            "name": "Urine",
                            "id": "8"
                        },
                        {
                            "name": "Vitreous",
                            "id": "9"
                        },
                        {
                            "name": "Other Test Type",
                            "id": "10"
                        },
                        {
                            "name": "Unknown Test Type",
                            "id": "11"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Alcohol Test Result",
                    "id": "9b4d89cc-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalAlcoholREsult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "0.94 or Greater",
                            "id": "0"
                        },
                        {
                            "name": "Test Not Given",
                            "id": "1"
                        },
                        {
                            "name": "AC Test Performed, Results Unknown",
                            "id": "2"
                        },
                        {
                            "name": "Positive Reading with No Actual Value",
                            "id": "3"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "4"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0",
                    "question": "Detailed Drug Test Information",
                    "id": "9b4d89cd-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-detailedDrug",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Drug Test Type",
                    "id": "9b4d89ce-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalDrugTest",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0"
                        },
                        {
                            "name": "Blood",
                            "id": "1"
                        },
                        {
                            "name": "Both Blood and Urine",
                            "id": "2"
                        },
                        {
                            "name": "Unknown Test Type",
                            "id": "3"
                        },
                        {
                            "name": "Urine",
                            "id": "4"
                        },
                        {
                            "name": "Other Test Type",
                            "id": "5"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "6"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1",
                    "question": "Result of Drug Test",
                    "id": "9b4d89cf-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalDrugResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89b9-5877-11ec-9a03-572d0da876f3"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Test Not Given",
                            "id": "0"
                        },
                        {
                            "name": "Tested No Drugs Found/Negative",
                            "id": "1"
                        },
                        {
                            "name": "Narcotic",
                            "id": "2"
                        },
                        {
                            "name": "Depressant",
                            "id": "3"
                        },
                        {
                            "name": "Simulant",
                            "id": "4"
                        },
                        {
                            "name": "Hallucinogen",
                            "id": "5"
                        },
                        {
                            "name": "Cannabinoid",
                            "id": "6"
                        },
                        {
                            "name": "Phencyclidine (PCP)",
                            "id": "7"
                        },
                        {
                            "name": "Anabolic Steroid",
                            "id": "8"
                        },
                        {
                            "name": "Inhalant",
                            "id": "9"
                        },
                        {
                            "name": "Other Drug",
                            "id": "10"
                        },
                        {
                            "name": "Tested for Drugs, Results Unknown",
                            "id": "11"
                        },
                        {
                            "name": "Tested for Drugs, Drugs Found, Type Unknown/Positive",
                            "id": "12"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "13"
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
                    "id": "9b4d89d1-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-firstName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "9b4d89d2-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-middleName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "9b4d89d3-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-lastName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Date of Birth",
                    "id": "9b4d89d4-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-dob",
                    "helperText": "Format: YYYY/MM/DD"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Sex",
                    "id": "9b4d89d5-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-sex",
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
                    "id": "9b4d89d7-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-incidentResponder",
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
                    "numOptionsAllowed": "2.0",
                    "question": "Seating Position",
                    "id": "9b4d89d8-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-seatingPos",
                    "helperText": "(choose up to 2)",
                    "helperImg": "../image/seating_positions.png",
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
                    "numOptionsAllowed": "nan",
                    "question": "Restraint Systems / Motorcycle Helmet Use",
                    "id": "9b4d89d9-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-restraints"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Restraint Systems in Use",
                    "id": "9b4d89da-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-restraintsInUse",
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
                    "id": "9b4d89db-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-improperUse",
                    "tooltip": "ie, seatbelt was not buckled in correctly",
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
                    "id": "9b4d89dc-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-airbag",
                    "helperText": "(choose up to 4)",
                    "helperImg": "../image/airbag_diagram.png",
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
                    "id": "9b4d89dd-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-ejection",
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
                }
            ],
            "display": [
                "passenger"
            ]
        },
        {
            "sectionTitle": "Injury Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Status",
                    "id": "9b4d89df-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injuryStatus",
                    "tooltip": "Fatal Injury: an injury that results in death within 30 days after the motor vehicle crash in which the injury occured. If the person did not die at the scene, but died within 30 days of the motor vehicle crash in which the injury occured, the injury classification should be changed to Fatal Injury. \n\nSuspected Serious Injury: any injury other than fatal which results in one or more of the following: severe laceration reuslting in exposure of underlying tissues/muscles/organs or resulting in significant loss of blood; broken or distorted arm or leg; crush injuries; suspected skull, chest, or abdominal injury other than bruises or minor lacerations; significant burns (second and third degree burns over 10% or more of the body); unconsciousness when taken from crash scene; paralysis\n\nSuspected Minor Injury: any injury that is evident at the scene of the crash, other than fatal or serious injuries. Examples include lump on the head, abrasions, bruises, minor lacerations (cuts on the skin surface with minimal bleeding and no exposure of deeper tissue/muscle).\n\nPossible Injury: any injury reported or claimed which is not fatal, suspected  serious, or suspected minor. Examples include momentary loss of consciousness, claim of injury, limping, or complaint of pain or nausea. These are reported by the person or indicated by their behavior, but no wounds or injuries are readily evident.\n\nNo Apparent Injury: there is no reason to believe that the person received any bodily harm from the motor vehicle crash. There is no physical evidence of injury and the person does not report any change in normal function.\n",
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
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Area",
                    "id": "9b4d89e0-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injuryArea",
                    "tooltip": "Select the primary or most obvious area of the person's body injured during the crash. This will be typically be indicated in a matrix or narrative in the EMS records or as a hospital discharge code (ICD-9-CM or ICD-10, if implemented) in the emergency department, hospital or insurance records.",
                    "answerOptions": [
                        {
                            "name": "Head",
                            "id": "0"
                        },
                        {
                            "name": "Face",
                            "id": "1"
                        },
                        {
                            "name": "Neck",
                            "id": "2"
                        },
                        {
                            "name": "Upper Extremity",
                            "id": "3"
                        },
                        {
                            "name": "Thorax (chest)",
                            "id": "4"
                        },
                        {
                            "name": "Spine",
                            "id": "5"
                        },
                        {
                            "name": "Adnomen and Pelvis",
                            "id": "6"
                        },
                        {
                            "name": "Lower Extremity",
                            "id": "7"
                        },
                        {
                            "name": "Unspecified",
                            "id": "8"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Injury Diagnosis",
                    "id": "9b4d89e1-5877-11ec-9a03-572d0da876f3",
                    "answerType": "largeTextField",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injuryDiagnosis",
                    "tooltip": "Describe the injury."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Severity",
                    "id": "9b4d89e2-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injurySeverity",
                    "answerOptions": [
                        {
                            "name": "Fatal",
                            "id": "0"
                        },
                        {
                            "name": "Serious",
                            "id": "1"
                        },
                        {
                            "name": "Moderate",
                            "id": "2"
                        },
                        {
                            "name": "Minor",
                            "id": "3"
                        },
                        {
                            "name": "No Injury",
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
                    "question": "Transported to First Medical Facility By",
                    "id": "9b4d89e3-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-transported",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "9b4d89e4-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-transportSource",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d89e5-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-EMSIdentifier",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Run Number",
                    "id": "9b4d89e6-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-EMSRunNumber",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "9b4d89e7-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-medicalFacility",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "9b4d89e2-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                }
            ],
            "display": [
                "passenger"
            ]
        },
        {
            "numOptionsAllowed": "1",
            "question": "Ownership",
            "id": "9b4d89e8-5877-11ec-9a03-572d0da876f3",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-ownership",
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
            "id": "9b4d89e9-5877-11ec-9a03-572d0da876f3",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-secondary",
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
            "id": "9b4d89ea-5877-11ec-9a03-572d0da876f3",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-severity",
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
            "sectionTitle": "Basic Crash Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Identifier",
                    "id": "9b4d89ec-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-crashIdentifier",
                    "tooltip": "The unique identifier within a given year that identifies a given crash within a State. "
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Agency Crash Identifier",
                    "id": "9b4d89ed-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-agencyIdentifier"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash Severity",
                    "id": "9b4d89ee-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-severity",
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
                    "question": "Crash Description",
                    "id": "9b4d89ef-5877-11ec-9a03-572d0da876f3",
                    "answerType": "largeTextField",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-description"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Classification",
                    "id": "9b4d89f0-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-classification"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Ownership",
                    "id": "9b4d89f1-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-ownership",
                    "tooltip": "Provide type for ownership of the land where the crash occurred.",
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
                    "id": "9b4d89f2-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-characteristics",
                    "tooltip": "Did the crash occur on or off a trafficway?",
                    "helperImg": "../image/trafficway_diagram.png",
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
                    "id": "9b4d89f3-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-secondary",
                    "tooltip": "A Secondary Crash is a crash that resulted from another crash.",
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
                    "question": "School Bus-Related?",
                    "id": "9b4d89f4-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-schoolBus",
                    "tooltip": "Was a school bus or motor vehicle functioning as a school bus for a school-related purpose involved in the crash? The \"school bus\", with or without a passenger on board, must be directly involved as a contact motor vehicle, or iindirectly involved (ie, children struck when boarding or alighting from the school bus, two vehicles colliding as a result of the stopped school bus, etc.)",
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
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Date and Time",
                    "id": "9b4d89f5-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-dateTime"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Date and Time (Valid Military Time)",
                    "id": "9b4d89f6-5877-11ec-9a03-572d0da876f3",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-dateTimeMilitary",
                    "helperText": "Foramtt: YYYY/MM/DD HH:MM",
                    "tooltip": "Midnight should be coded as 00:00. Use 99 for any dates or times that are unknown. For example, 02/99/2017 22:51 denotes that the crash occurred in February 2017 at 22:51, but the day of the month was unknown. Unknown should not be used for the year, only for the month, day, hour, and minute.",
                    "autoMethod": "time"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Time of Roadway Clearance (Valid Military Time)",
                    "id": "9b4d89f7-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-timeClearance",
                    "helperText": "Format: HH:MM",
                    "tooltip": "The time of roadway clearance is the time that all lanes were available for traffic flow. Midnight should be coded as 00:00. Use 99 for any dates or times that are unknown. For example, 02/99/2017 22:51 denotes that the crash occurred in February 2017 at 22:51, but the day of the month was unknown. "
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Location",
                    "id": "9b4d89f8-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-location"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash State",
                    "id": "9b4d89f9-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-state",
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
                    "id": "9b4d89fa-5877-11ec-9a03-572d0da876f3",
                    "answerType": "countyDropDown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-county",
                    "autoMethod": "county",
                    "questionDependency": [
                        {
                            "dependencyName": "road-state",
                            "dependencyOptionCode": "",
                            "dependencyUuid": "9b4d89f9-5877-11ec-9a03-572d0da876f3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash City/Place",
                    "id": "9b4d89fb-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-city"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Latitude",
                    "id": "9b4d89fc-5877-11ec-9a03-572d0da876f3",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-latitude",
                    "helperText": "Format: degrees.minutes.seconds, compass direction",
                    "autoMethod": "map"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Longitude",
                    "id": "9b4d89fd-5877-11ec-9a03-572d0da876f3",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-longitude",
                    "helperText": "Format: degrees.minutes.seconds, compass direction",
                    "autoMethod": "map"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Nearest Street Address",
                    "id": "9b4d89fe-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-streetAddress",
                    "questionDependency": [
                        {
                            "dependencyName": "road-latitude",
                            "dependencyOptionCode": "",
                            "dependencyUuid": "9b4d89fc-5877-11ec-9a03-572d0da876f3"
                        },
                        {
                            "dependencyName": "road-longitude",
                            "dependencyOptionCode": "",
                            "dependencyUuid": "9b4d89fd-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8a00-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-firstHarmfulEventInfo"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "First Harmful Event",
                    "id": "9b4d8a01-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-firstHarmfulEvent",
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
                    "id": "9b4d8a02-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-locationFirstHarmful",
                    "helperImg": "../image/trafficway_diagram.png",
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
                    "id": "9b4d8a03-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-mannerCollision",
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
                    "question": "Relation to Junction Section",
                    "id": "9b4d8a04-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-relationJunction"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Within Interchange Area?",
                    "id": "9b4d8a05-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-withinInterchange",
                    "helperImg": "../image/interchange_diagram.png",
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
                    "id": "9b4d8a06-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-specificLocation",
                    "tooltip": " ",
                    "helperImg": "../image/intersection_diagram.png",
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
                    "question": "Source of Information Section",
                    "id": "9b4d8a07-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-sourceInfoSection"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Information",
                    "id": "9b4d8a08-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-sourceInfo",
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
                    "id": "9b4d8a09-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lawEnforcementIdentifier",
                    "helperText": "9 character NCIC Originating Agency Identifier"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Environment Conditions",
                    "id": "9b4d8a0a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-environmentConditions"
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Weather Conditions",
                    "id": "9b4d8a0b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-weatherConditions",
                    "helperText": "(choose up to 2)",
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
                    "id": "9b4d8a0c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lightConditions",
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
                    "id": "9b4d8a0d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-surfaceCondition",
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
                    "id": "9b4d8a0e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-roadwayEnvironment",
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
                    "question": "Type of Intersection",
                    "id": "9b4d8a0f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-typeIntersection"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Number of Approaches",
                    "id": "9b4d8a10-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-numApproaches",
                    "helperImg": "../image/intersection_examples.png",
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
                    "id": "9b4d8a11-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-intersectionGeometry",
                    "helperImg": "../image/intersection_examples.png",
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
                    "id": "9b4d8a12-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-overallTCD",
                    "helperImg": "../image/intersection_examples.png",
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
                    "numOptionsAllowed": "0.0",
                    "question": "Work Zone-Related (Constrution/Maintenance/Utility)",
                    "id": "9b4d8a13-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-workZone",
                    "helperImg": " "
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Was the crash work-zone related?",
                    "id": "9b4d8a14-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-workzoneRelated",
                    "tooltip": "Did the crash occur in or is it related to a construction, maintenance, or utility work zone (regardless of whether workers were actually present at the time of the crash)? \"Work zone-related crashes\" may also include those involve motor vehicles slowed or stopped because of the work zone, even if the first harmful event occurred before the first warning sign.",
                    "helperImg": " ",
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
                    "question": "Location of the Crash",
                    "id": "9b4d8a15-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-locationWorkZone",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8a14-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8a16-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-typeWorkZone",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8a14-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8a17-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-workersPresent",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8a14-5877-11ec-9a03-572d0da876f3"
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
                    "id": "9b4d8a18-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lawEnforcementPresent",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "9b4d8a14-5877-11ec-9a03-572d0da876f3"
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
                }
            ],
            "display": [
                "road"
            ]
        },
        {
            "sectionTitle": "Additional Roadway Information",
            "questions": [
                {
                    "numOptionsAllowed": "nan",
                    "question": "Bridge/Structure Identification Number",
                    "id": "9b4d8a1a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-bridgeStructureNum",
                    "tooltip": "A unique federal inspection/inventory identifier assigned to a bridge, underpass, overpass, or tunnel bridge/structure that is also linkable to the National Bridge Inventory."
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Roadway Curvature",
                    "id": "9b4d8a1b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-curvature",
                    "tooltip": "The measurement (in feet) of the curvature in the roadway expressed in terms of its radius, length, and superelevation. Obtained from the Roadway Inventory data."
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Curve Radius",
                    "id": "9b4d8a1c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-curveRadius"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Length",
                    "id": "9b4d8a1d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-length"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Superelevation",
                    "id": "9b4d8a1e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-superelevation"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Grade",
                    "id": "9b4d8a1f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-grade"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Direction of Slope",
                    "id": "9b4d8a20-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-directionSlope",
                    "tooltip": "Indicate up with a \"+\" and down with a \"-\""
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Percent of Slope",
                    "id": "9b4d8a21-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-percentSlope"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Part of National Highway System",
                    "id": "9b4d8a22-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-nationalHighway",
                    "tooltip": "Is this road a part of the National Highway System?",
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
                    "numOptionsAllowed": "nan",
                    "question": "Roadway Functional Class: Rural or Urban",
                    "id": "9b4d8a23-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-ruralUrban",
                    "tooltip": "The character of service or function of streets or highways",
                    "answerOptions": [
                        {
                            "name": "Rural",
                            "id": "0"
                        },
                        {
                            "name": "Urban",
                            "id": "1"
                        },
                        {
                            "name": "Unknown",
                            "id": "2"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Roadway Functional Class: Specific Class",
                    "id": "9b4d8a24-5877-11ec-9a03-572d0da876f3",
                    "answerType": NaN,
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-specificClass",
                    "answerOptions": [
                        {
                            "name": "Interstate",
                            "id": "0"
                        },
                        {
                            "name": "Principal Arterial - Other Freeway or Expressway",
                            "id": "1"
                        },
                        {
                            "name": "Principal Arterial - Other",
                            "id": "2"
                        },
                        {
                            "name": "Minor Arterial",
                            "id": "3"
                        },
                        {
                            "name": "Major Collector",
                            "id": "4"
                        },
                        {
                            "name": "Minor Collector",
                            "id": "5"
                        },
                        {
                            "name": "Local",
                            "id": "6"
                        },
                        {
                            "name": "Unknown",
                            "id": "7"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Annual Average Daily Traffic (AADT)",
                    "id": "9b4d8a25-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-AADT"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "AADT (Year)",
                    "id": "9b4d8a26-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-AADTYear",
                    "tooltip": "The specific calendar year during which the AADT was calculated."
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "AADT (Value)",
                    "id": "9b4d8a27-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-AADTValue"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Truck (over 10,000 lbs) Count or Percentage",
                    "id": "9b4d8a28-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-truckCount"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Motorcycle Count or Percentage",
                    "id": "9b4d8a29-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-motorcycleCount"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Widths of Lane(s) and Shoulder(s)",
                    "id": "9b4d8a2a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-laneShoulderWidths"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Lane Width",
                    "id": "9b4d8a2b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-laneWidth",
                    "helperText": "(in feet)"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Left Shoulder Width",
                    "id": "9b4d8a2c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-leftShoulderWidth",
                    "helperText": "(in feet)"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Right Shoulder Width",
                    "id": "9b4d8a2d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-rightShoulderWidth",
                    "helperText": "(in feet)"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Width of Median",
                    "id": "9b4d8a2e-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-medianWidth",
                    "helperText": "(in feet)",
                    "tooltip": "Width from the travel lane edge to travel lane edge of the portion of divided highway separating the road for traffic in opposing directions where the crash occurred. If a crash occurs at a mid-block section, the median width is based on the mid-block section. If the crash occurs at an intersection, the median width is based on the median widths at the intersection."
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Access Control",
                    "id": "9b4d8a2f-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-accessControl",
                    "tooltip": "The degree that access to abutting land is fully, partially, or not controlled by a public authority.\nFull access control: preference given to through traffic movements by providing interchanges with selected public roads, and by prohbiting crossing at-grade and direct driveway connections (ie, limited access to the facility).\nPartial access control: preference given to through traffic movement. In addition to interchanges, there may be some crossings at-grade with public roads, but direct private driveway connections have been minimized through th euse of frontage roads or other local access restrictions. Control of curb cuts is not access control.\nNo access control: no degree of access control exists; full access to the facility is permitted.\n",
                    "answerOptions": [
                        {
                            "name": "No Access Control",
                            "id": "0"
                        },
                        {
                            "name": "Partial Access Control",
                            "id": "1"
                        },
                        {
                            "name": "Full Access Control",
                            "id": "2"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Railway Crossing ID",
                    "id": "9b4d8a30-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-railwayCrossingId",
                    "tooltip": "Unique US DOT/AAR number assigned for identification purposes to a railroad crossing by a State highway agency in cooperation with the Federal Railroad Administration."
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Roadway Lighting",
                    "id": "9b4d8a31-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lighting",
                    "answerOptions": [
                        {
                            "name": "Continuous Lighting on Both SIdes",
                            "id": "0"
                        },
                        {
                            "name": "Continuous Lighting on One Side",
                            "id": "1"
                        },
                        {
                            "name": "No Lighting",
                            "id": "2"
                        },
                        {
                            "name": "Spot Illumination on Both Sides",
                            "id": "3"
                        },
                        {
                            "name": "Spot Illumination on One Side",
                            "id": "4"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Pavement Markings, Longitudinal",
                    "id": "9b4d8a32-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-pavementMarkings",
                    "helperText": " us"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Edgeline Presence/Type",
                    "id": "9b4d8a33-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-edgeline",
                    "answerOptions": [
                        {
                            "name": "No Marked Edgeline",
                            "id": "0"
                        },
                        {
                            "name": "Standard Width Edgeline",
                            "id": "1"
                        },
                        {
                            "name": "Wide Edgeline",
                            "id": "2"
                        },
                        {
                            "name": "Other",
                            "id": "3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Centerline Presence/Type",
                    "id": "9b4d8a34-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-centerline",
                    "answerOptions": [
                        {
                            "name": "No Marked Centerline",
                            "id": "0"
                        },
                        {
                            "name": "Centerline with Centerline Rumble Stirp",
                            "id": "1"
                        },
                        {
                            "name": "Standard Centerline Markings",
                            "id": "2"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Lane Line Markings",
                    "id": "9b4d8a35-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-laneLine",
                    "answerOptions": [
                        {
                            "name": "No Lane Markings",
                            "id": "0"
                        },
                        {
                            "name": "Standard Lane Line",
                            "id": "1"
                        },
                        {
                            "name": "Wide Lane Line",
                            "id": "2"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Presence/Type of Bicycle Facility",
                    "id": "9b4d8a36-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-bicycleFacility"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Facility",
                    "id": "9b4d8a37-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-facility",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0"
                        },
                        {
                            "name": "Marked Bicycle Lane",
                            "id": "1"
                        },
                        {
                            "name": "Separated Bicycle Path/Trail",
                            "id": "2"
                        },
                        {
                            "name": "Unmarked Pave Shoulder",
                            "id": "3"
                        },
                        {
                            "name": "Wide Curb Lane",
                            "id": "4"
                        },
                        {
                            "name": "Unknown",
                            "id": "5"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Signed Bicycle Route",
                    "id": "9b4d8a38-5877-11ec-9a03-572d0da876f3",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-signedBicycleRoute",
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
                            "name": "Unknown",
                            "id": "3"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Mainline Number of Lanes at Intersection",
                    "id": "9b4d8a39-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-mainlineLanesAtIntersection",
                    "tooltip": "Number of through lanes on the mainline approaches of an intersection, including all lanes with through movement (through and left-turn, or through and right-turn) but not exclusive turn lanes.",
                    "answerOptions": [
                        {
                            "name": "Not an Intersection or Interchange",
                            "id": "0"
                        },
                        {
                            "name": "One Lane",
                            "id": "1"
                        },
                        {
                            "name": "Two Lanes",
                            "id": "2"
                        },
                        {
                            "name": "Three Lanes",
                            "id": "3"
                        },
                        {
                            "name": "Four to Six Lanes",
                            "id": "4"
                        },
                        {
                            "name": "Seven or More Lanes",
                            "id": "5"
                        },
                        {
                            "name": "Unknown",
                            "id": "6"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Cross-Street Number of Lanes at Intersection",
                    "id": "9b4d8a3a-5877-11ec-9a03-572d0da876f3",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-crossStreetLanesAtIntersection",
                    "tooltip": "Number of through lanes on the side-road approaches at intersection including all lanes with through movement (through and left-turn, or through and right-turn) but not exclusive turn lanes.",
                    "answerOptions": [
                        {
                            "name": "Not an Intersection or Interchange",
                            "id": "0"
                        },
                        {
                            "name": "One Lane",
                            "id": "1"
                        },
                        {
                            "name": "Two Lanes",
                            "id": "2"
                        },
                        {
                            "name": "Three Lanes",
                            "id": "3"
                        },
                        {
                            "name": "Four to Six Lanes",
                            "id": "4"
                        },
                        {
                            "name": "Seven or More Lanes",
                            "id": "5"
                        },
                        {
                            "name": "Unknown",
                            "id": "6"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Total Volume of Entering Vehicles",
                    "id": "9b4d8a3b-5877-11ec-9a03-572d0da876f3",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-totalVolumeVehicles"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Year",
                    "id": "9b4d8a3c-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-totalVolumeYear"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Value",
                    "id": "9b4d8a3d-5877-11ec-9a03-572d0da876f3",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-totalVolumeValue"
                }
            ],
            "display": [
                "road"
            ]
        }
    ]
}