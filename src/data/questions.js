export const questions = {
    "data": [
        {
            "sectionTitle": "Personal Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Name of Person Involved",
                    "id": "b8985121-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-firstName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "b8985122-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-middleName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "b8985123-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-lastName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Date of Birth",
                    "id": "b8985124-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-dob",
                    "helperText": "Format: YYYY/MM/DD",
                    "tooltip": "Use 99 if the month and/or day are unknown. For example, 2017/02/99 indicates that the birthday is in February 2017 but the day is unknown."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 1",
                    "id": "b8985125-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-streetAddress1",
                    "tooltip": "E.g. 1000 Olin Way"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 2",
                    "id": "b8985126-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-streetAddress2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "b8985127-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-city"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "b8985128-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-state"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "b8985129-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-zip"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Phone Number",
                    "id": "b898512a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-phoneNum",
                    "helperText": "format: 15555551212 (no dashes)"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Sex",
                    "id": "b898512b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-sex",
                    "answerOptions": [
                        {
                            "name": "Female",
                            "id": "0.0"
                        },
                        {
                            "name": "Male",
                            "id": "1.0"
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
                    "id": "b898512d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseJurisdiction"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type",
                    "id": "b898512e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-jurisdictionType",
                    "answerOptions": [
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        },
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
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Name of Jurisdiction (ANSI Code)",
                    "id": "b898512f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-jurisdictionName",
                    "tooltip": "Provide the specific State, Province or Nation indicated on the Driver's License"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "License Number",
                    "id": "b8985130-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseNum",
                    "tooltip": "Scan the barcode on the back of the driver's license.",
                    "autoMethod": "driverIDCamera"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Class",
                    "id": "b8985131-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseClass",
                    "tooltip": "The Class is the type of driver license issued by the State and the type of motor vehicle the driver is qualified to drive.\nA: Any combination of vehicles with a gross combination weight rating (GCWR) of 26,001 pounds or more provided the GVWR of the vehicles being towed is in excess of 10,000 pounds.\n\nB: Any single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.\n\nC: Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or B, but is either designed to transport 16 or more passengers, including the driver, or is used in the transportation of materials found to be hazardous, which require the motor vehicle to be placarded.\n\nM: Motorcycles, mopeds, motor-driven cycles.\n\nRegular Driver License Class: Any regular or standard driver license issued for the operation of automobiles and light trucks by States that separate these vehicles from Class C. Other class designation  such as \"D\", \"R\", and others may be used by States to indicate a regular driver license class.\n",
                    "answerOptions": [
                        {
                            "name": "Unknown",
                            "id": "8.0"
                        },
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
                    "id": "b8985132-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CDL",
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
                            "name": "None/Not Applicable",
                            "id": "0.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Endorsements",
                    "id": "b8985133-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CDLEndorsements",
                    "helperImg": "../image/CDL_endorsements.png",
                    "answerOptions": [
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
                        },
                        {
                            "name": "None",
                            "id": "0.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Restrictions",
                    "id": "b8985134-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-restrictions"
                },
                {
                    "numOptionsAllowed": "3.0",
                    "question": "Driver License Restrictions",
                    "id": "b8985135-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseRestrictions",
                    "helperText": "(select up to 3)",
                    "answerOptions": [
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
                            "name": "Intermediate License Restrictions",
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
                    "id": "b8985136-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "numberButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-alcoholInterlock",
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
                    "id": "b8985137-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseStatus"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type Applicable for This Person",
                    "id": "b8985138-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-statusType",
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
                        },
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
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Status",
                    "id": "b8985139-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-status"
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
                    "id": "b898513b-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898513c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-restraintSys"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Restraint Systems in Use",
                    "id": "b898513d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-restraintInUse",
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
                    "id": "b898513e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-improperUse",
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
                    "id": "b898513f-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985140-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-ejection",
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
                    "id": "b8985141-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-speeding",
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
                    "id": "b8985142-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-actions",
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
                    "id": "b8985143-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985144-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-distracted"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action",
                    "id": "b8985145-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-distractedAction",
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
                        },
                        {
                            "name": "Not Applicable (Not Distracted)",
                            "id": "0.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source",
                    "id": "b8985146-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-distractionSource",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b8985145-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985145-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985145-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b8985145-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b8985145-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b8985145-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
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
                    "id": "b8985147-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-condition",
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
                    "id": "b8985149-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-incidentResponder",
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
                    "id": "b898514a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-injuryStatus",
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
                    "id": "b898514b-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
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
                    "id": "b898514c-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
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
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Severity",
                    "id": "b898514d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-injurySeverity",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Transported to First Medical Facility By",
                    "id": "b898514e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-transport",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "b898514f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-transportSource",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b8985150-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-EMSIdentifier",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Run Number",
                    "id": "b8985151-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-EMSRunNum",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "b8985152-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-medicalFacility",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b8985154-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CMV",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "CMV License Status",
                    "id": "b8985155-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CMVStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b8985156-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-complianceCDL",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b8985158-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-suspectedAlcohol",
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
                    "id": "b8985159-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-alcoholTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
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
                            "name": "Not Applicable (Test Not Given)",
                            "id": "0.0"
                        },
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
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Alcohol Test",
                    "id": "b898515a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-alcoholTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
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
                    "id": "b898515b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-BACTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985158-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b898515d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-suspectedDrug",
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
                    "id": "b898515e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-drugTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
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
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Drug Test",
                    "id": "b898515f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-drugTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b8985160-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-drugTestResult",
                    "helperText": "(choose up to 4)",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b898515d-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                }
            ],
            "display": [
                "driver"
            ]
        },
        {
            "sectionTitle": "Fataility-Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Attempted Avoidance Maneuver",
                    "id": "b8985162-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No Driver Present/Unknown if Driver Present",
                            "id": "0.0"
                        },
                        {
                            "name": "Accelerating",
                            "id": "1.0"
                        },
                        {
                            "name": "Accelerating and Steering Left",
                            "id": "2.0"
                        },
                        {
                            "name": "Accelerating and Steering Right",
                            "id": "3.0"
                        },
                        {
                            "name": "Braking and Steering Left",
                            "id": "4.0"
                        },
                        {
                            "name": "Braking and Steering Right",
                            "id": "5.0"
                        },
                        {
                            "name": "Braking (Lockup)",
                            "id": "6.0"
                        },
                        {
                            "name": "Braking (Lockup Unknown)",
                            "id": "7.0"
                        },
                        {
                            "name": "Braking (No Lockup)",
                            "id": "8.0"
                        },
                        {
                            "name": "No Avoidance Maneuver",
                            "id": "9.0"
                        },
                        {
                            "name": "Releasing Brakes",
                            "id": "10.0"
                        },
                        {
                            "name": "Steering Left",
                            "id": "11.0"
                        },
                        {
                            "name": "Steering Right",
                            "id": "12.0"
                        },
                        {
                            "name": "Other Actions",
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
                    "question": "Detailed Alcohol Test Information",
                    "id": "b8985163-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-detailedAlcohol",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Test Type",
                    "id": "b8985164-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalAlcoholTest",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
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
                    "question": "Alcohol Test Result",
                    "id": "b8985165-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalAlcoholResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "0.94 or Greater",
                            "id": "0.0"
                        },
                        {
                            "name": "Test Not Given",
                            "id": "1.0"
                        },
                        {
                            "name": "AC Test Performed, Results Unknown",
                            "id": "2.0"
                        },
                        {
                            "name": "Positive Reading with No Actual Value",
                            "id": "3.0"
                        },
                        {
                            "name": "Unknown if Tested",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Detailed Drug Test Information",
                    "id": "b8985166-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-deltailedDrug",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Drug Test Type",
                    "id": "b8985167-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalDrugTest",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
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
                    "question": "Result of Drug Test",
                    "id": "b8985168-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalDrugResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b898514a-8ec0-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
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
                    "id": "b898516a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerFirst"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial",
                    "id": "b898516b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerMiddle"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name",
                    "id": "b898516c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerLast"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 1",
                    "id": "b898516d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerStreet1"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 2",
                    "id": "b898516e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerStreet2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "b898516f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerCity"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "b8985170-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerState"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "b8985171-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerZIP"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Insurance Information",
                    "id": "b8985172-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerInsurance"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Insurance Company Name",
                    "id": "b8985173-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-insuranceCompany"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "NAIC #",
                    "id": "b8985174-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-NAIC"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Policy #",
                    "id": "b8985175-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-policy"
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
                    "id": "b8985177-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985178-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorUnitType"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Registration State and Year",
                    "id": "b8985179-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898517a-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898517b-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898517c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-licensePlate"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Make",
                    "id": "b898517d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-make"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Model",
                    "id": "b898517e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-model"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Model Year",
                    "id": "b898517f-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985180-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorBodyType"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Body Type Category",
                    "id": "b8985181-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-bodyType",
                    "tooltip": "What is the general configuration or shape of a motor vehicle? You should use characteristics like the number of doors, rows of seats, windows, roof line, etc. to distinguish between different body types. Personal conveyances, like skateboards, motorized toy cars, and wheelchairs are not considered motor vehicles."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Vehicle Size",
                    "id": "b8985182-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-size",
                    "tooltip": "GVWR is used for single-unit trucks and other body types. GCWR is used for combination trucks or any vehicle with a trailing unit"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Number of Trailing Units",
                    "id": "b8985183-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-numTrailingUnits",
                    "tooltip": "The number of trailers attached to this vehicle"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Did this motor vehicle display a hazardous materials (HM) placard?",
                    "id": "b8985184-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterials"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Total Occupants in Motor Vehicle",
                    "id": "b8985185-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "numberButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-occupants"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Special Function of Motor Vehicle in Transport",
                    "id": "b8985186-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985187-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-emergencyUse"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Posted/ Statutory Speed Limit",
                    "id": "b8985188-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898518a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-directionBefore",
                    "tooltip": "Note that this is not a compass direction, but a direction consistent with the designated direction of the road. For example, the direction of a State-designated North-South highway must be either northbound or southbound even though a motor vehicle may have been traveling due east as a result of a short segment of the highway having an east-west orientation."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trafficway Description",
                    "id": "b898518b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trafficway"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Travel Directions",
                    "id": "b898518c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-travelDirections"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Divided?",
                    "id": "b898518d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-divided"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Barrier Type",
                    "id": "b898518e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-barrierType"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "HOV/HOT Lanes",
                    "id": "b898518f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hovHotLanes",
                    "tooltip": "High occupancy vehicle/high occupancy toll lane"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash Related to HOV/HOT Lane?",
                    "id": "b8985190-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-crashHovHotRelated",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Total Lanes in Roadway",
                    "id": "b8985191-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-totalLanes"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Enter the total through lanes, excluding auxiliary lanes.",
                    "id": "b8985192-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985193-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985194-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-roadwayAlignmentGrade"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Horizontal Alignment",
                    "id": "b8985195-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-horizontalAlignment"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Grade",
                    "id": "b8985196-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-grade"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Traffic Control Device (TCD) Type",
                    "id": "b8985197-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trafficControl"
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "TCD Type(s)",
                    "id": "b8985198-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-TCDTypes",
                    "helperText": "(choose up to 4)"
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "Are any Inoperative or Missing?",
                    "id": "b8985199-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-TCDInoperativeMissing",
                    "helperText": "(choose up to 4)",
                    "questionDependency": []
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
                    "id": "b898519b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-manueverAction"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Vehicle Damage",
                    "id": "b898519c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-damage"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Initial Point of Contact",
                    "id": "b898519d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-initialPointContact",
                    "tooltip": "Provide the approximate contact point on this vehicle associated with this vehicle’s initial harmful event. If there was no collision, select \"Non-Collision\". If the initial harmful event for this vehicle involves striking another vehicle, person, or property (a collision event) because a load/cargo fell from or was propelled by the vehicle, then select \"Cargo Loss\". If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "helperImg": "../image/initial_contact.png"
                },
                {
                    "numOptionsAllowed": "13.0",
                    "question": "Location of Damage Area(s)",
                    "id": "b898519e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-damageLocation",
                    "helperText": "(choose up to 13)",
                    "tooltip": "If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Resulting Extent of Damage",
                    "id": "b898519f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-resultingExtentDamage",
                    "tooltip": "If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "Sequence of Events",
                    "id": "b89851a0-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-sequence",
                    "helperText": "(choose up to 4)",
                    "tooltip": "Describe the sequence of events related to this motor vehicle, including non-harmful events, non-collision harmful events and collision events."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Most Harmful Event for this Motor Vehicle",
                    "id": "b89851a1-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-mostHarmfulEvent"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Hit and Run",
                    "id": "b89851a2-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hitRun",
                    "tooltip": "Refers to cases where the vehicle or the driver of the vehicle in transport is a contact vehicle in a crash and departs the scene without stopping to render aid or report the crash."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Towed Due to Disabling Damage",
                    "id": "b89851a3-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-towed",
                    "tooltip": "Disabling damage is damage to the motor vehicle that is sufficient to require the motor vehicle be towed or carried from the scene."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Contributing Circumstances, Motor Vehicle",
                    "id": "b89851a4-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-contributingCircumstances",
                    "tooltip": "Pre-existing motor vehicle defects or maintenance conditions that may have contributed to the crash."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Automated Driving System(s)",
                    "id": "b89851a5-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-automated"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Automated System(s) in Vehicle",
                    "id": "b89851a6-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-automatedSystems"
                },
                {
                    "numOptionsAllowed": "5.0",
                    "question": "Automated System Levels in Vehicle",
                    "id": "b89851a7-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b89851a6-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "5.0",
                    "question": "Automated System Levels Engaged at Time of Crash",
                    "id": "b89851a8-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b89851a6-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b89851aa-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerLicensePlate",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "b89851ab-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "advancedOpenTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerLicense",
                    "helperText": "License Plate 1",
                    "autoMethod": "plateCamera",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "b89851ac-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "b89851ad-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer VIN(s)",
                    "id": "b89851ae-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerVINs",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "b89851af-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerVin",
                    "helperText": "VIN 1",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "b89851b0-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "b89851b1-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Make(s)",
                    "id": "b89851b2-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerMakes",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "b89851b3-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerMake",
                    "helperText": "Make 1",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "b89851b4-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "b89851b5-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Model(s)",
                    "id": "b89851b6-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerModels",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "b89851b7-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerModel",
                    "helperText": "Model 1",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "b89851b8-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "b89851b9-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Model Year(s)",
                    "id": "b89851ba-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerModelYears",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "b89851bb-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerModelYear",
                    "helperText": "Year 1",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "b89851bc-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "b89851bd-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Total Number of Axles",
                    "id": "b89851be-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-numAxles",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Truck Tractor",
                    "id": "b89851bf-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-truckAxles",
                    "helperText": "Number of axles",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "b89851c0-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-firstTrailerAxles",
                    "helperText": "Number of axles",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "b89851c1-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "b89851c2-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985183-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Identification",
                    "id": "b89851c3-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorIdentification",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Identification Type",
                    "id": "b89851c4-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-identificationType",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Country/State Code",
                    "id": "b89851c5-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-countryStateCode",
                    "tooltip": "Non-US Country Code (e.g. Mexico or Canada) US State Code",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Identification Number",
                    "id": "b89851c6-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-identificationNum",
                    "tooltip": "US DOT Number - up to 7 digits If not a US DOT Number, include State issued Identification Number and State",
                    "helperImg": "../image/determine_responsible_carrier.png",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Name",
                    "id": "b89851c7-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierName",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Street Address",
                    "id": "b89851c8-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierStreetAddress",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier City/Town",
                    "id": "b89851c9-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierCityTown",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier State",
                    "id": "b89851ca-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierState",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier ZIP Code",
                    "id": "b89851cb-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierZIP",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Carrier",
                    "id": "b89851cc-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierType",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Vehicle Configuration Information",
                    "id": "b89851cd-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-configurationInfo",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Vehicle Configuration",
                    "id": "b89851ce-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-configuration",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Special Sizing",
                    "id": "b89851cf-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-specialSizing",
                    "helperText": "(choose up to 4)",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Permitted?",
                    "id": "b89851d0-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-permitted",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Cargo Body Type",
                    "id": "b89851d1-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-cargoBodyType",
                    "helperImg": "../image/cargo_body_types.png",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Hazardous Materials (Cargo Only)",
                    "id": "b89851d2-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterialsCargo",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Hazardous Materials ID",
                    "id": "b89851d3-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterialsID",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Hazardous Materials Class",
                    "id": "b89851d4-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Release of hazardous materials from a cargo compartment (e.g. trailer), cargo container (e.g. tank) or from a package?",
                    "id": "b89851d5-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-releaseHazardousMaterials",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985184-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b89851d7-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-firstName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "b89851d8-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-middleName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "b89851d9-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-lastName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Date of Birth",
                    "id": "b89851da-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-dob",
                    "helperText": "Format: (YYYY/MM/DD)"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 1",
                    "id": "b89851db-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-streetAddress1",
                    "tooltip": "E.g. 1000 Olin Way; MB 999"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 2",
                    "id": "b89851dc-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-streetAddress2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "b89851dd-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-city"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "b89851de-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-state"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "b89851df-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-zip"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Phone Number",
                    "id": "b89851e0-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-phoneNum",
                    "helperText": "Format: 15555551212"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Sex",
                    "id": "b89851e1-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-sex"
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
                    "numOptionsAllowed": "1.0",
                    "question": "Person Type",
                    "id": "b89851e3-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-personType"
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Condition at Time of the Crash",
                    "id": "b89851e4-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-condition",
                    "helperText": "(choose up to 2)"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Unit Number of Motor Vehicle Striking Non-Motorist",
                    "id": "b89851e5-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-unitNum",
                    "tooltip": "e.g. '2' for Vehicle 2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Non-Motorist Action/Circumstance Prior to Crash",
                    "id": "b89851e6-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-actionPrior"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action/Circumstance",
                    "id": "b89851e7-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-actionCircumstance"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Origin/Destination",
                    "id": "b89851e8-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-originDestination"
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Non-Motorist Contributing Action(s)/Circumstance(s)",
                    "id": "b89851e9-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-contributingAction",
                    "helperText": "(choose up to 2)"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Non-Motorist Location at Time of Crash",
                    "id": "b89851ea-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-locationAtCrash",
                    "helperImg": "../image/bike_lanes.png"
                },
                {
                    "numOptionsAllowed": "5.0",
                    "question": "Non-Motorist Safety Equipment",
                    "id": "b89851eb-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-safetyEquipment",
                    "helperText": "(choose up to 5)"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Initial Contact Point on Non-Motorist",
                    "id": "b89851ec-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-initialContactPoint"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Distracted By",
                    "id": "b89851ed-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedBy"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action",
                    "id": "b89851ee-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedAction"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source",
                    "id": "b89851ef-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedSource",
                    "questionDependency": []
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
                    "id": "b89851f1-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-incidentResponder"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Status",
                    "id": "b89851f2-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injuryStatus"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Area",
                    "id": "b89851f3-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injuryArea",
                    "tooltip": "Select the primary or most obvious area of the person's body injured during the crash. This will be typically be indicated in a matrix or narrative in the EMS records or as a hospital discharge code (ICD-9-CM or ICD-10, if implemented) in the emergency department, hospital or insurance records."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Injury Diagnosis",
                    "id": "b89851f4-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "largeTextField",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injuryDiagnosis",
                    "tooltip": "Describe the injury."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Severity",
                    "id": "b89851f5-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injurySeverity"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Transported to First Medical Facility By",
                    "id": "b89851f6-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-transported",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "b89851f7-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-sourceTransport",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Agency Identifier",
                    "id": "b89851f8-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-EMSIdentifier",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Run Number",
                    "id": "b89851f9-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-EMSRunNumber",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "b89851fa-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-medicalFacility",
                    "questionDependency": []
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
                    "id": "b89851fc-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-suspectedAlcohol"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Test Status",
                    "id": "b89851fd-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-alcoholTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b89851fc-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Alcohol Test",
                    "id": "b89851fe-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-alcoholTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b89851fc-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "BAC Test Result",
                    "id": "b89851ff-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-BACTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b89851fc-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b8985201-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-suspectedDrug"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Drug Test Status",
                    "id": "b8985202-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985201-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Drug Test",
                    "id": "b8985203-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985201-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "Drug Test Result",
                    "id": "b8985204-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985201-8ec0-11ec-bff1-879486270f1d"
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
                    "numOptionsAllowed": "0.0",
                    "question": "Detailed Alcohol Test Information",
                    "id": "b8985206-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-detailedAlcohol",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b89851f5-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Test Type",
                    "id": "b8985207-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalAlcoholTest",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b89851f5-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Test Result",
                    "id": "b8985208-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalAlcoholREsult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b89851f5-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Detailed Drug Test Information",
                    "id": "b8985209-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-detailedDrug",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b89851f5-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Drug Test Type",
                    "id": "b898520a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalDrugTest",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b89851f5-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Result of Drug Test",
                    "id": "b898520b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalDrugResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "b89851f5-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b898520d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-firstName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "b898520e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-middleName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "b898520f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-lastName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Date of Birth",
                    "id": "b8985210-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985211-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-sex"
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
                    "id": "b8985213-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-incidentResponder"
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Seating Position",
                    "id": "b8985214-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-seatingPos",
                    "helperText": "(choose up to 2)",
                    "helperImg": "../image/seating_positions.png"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Restraint Systems / Motorcycle Helmet Use",
                    "id": "b8985215-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-restraints"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Restraint Systems in Use",
                    "id": "b8985216-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-restraintsInUse"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Any Indication of Improper Use?",
                    "id": "b8985217-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-improperUse",
                    "tooltip": "ie, seatbelt was not buckled in correctly"
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "Air Bag Deployed?",
                    "id": "b8985218-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-airbag",
                    "helperText": "(choose up to 4)",
                    "helperImg": "../image/airbag_diagram.png"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Ejection?",
                    "id": "b8985219-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-ejection"
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
                    "id": "b898521b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injuryStatus",
                    "tooltip": "Fatal Injury: an injury that results in death within 30 days after the motor vehicle crash in which the injury occured. If the person did not die at the scene, but died within 30 days of the motor vehicle crash in which the injury occured, the injury classification should be changed to Fatal Injury. \n\nSuspected Serious Injury: any injury other than fatal which results in one or more of the following: severe laceration reuslting in exposure of underlying tissues/muscles/organs or resulting in significant loss of blood; broken or distorted arm or leg; crush injuries; suspected skull, chest, or abdominal injury other than bruises or minor lacerations; significant burns (second and third degree burns over 10% or more of the body); unconsciousness when taken from crash scene; paralysis\n\nSuspected Minor Injury: any injury that is evident at the scene of the crash, other than fatal or serious injuries. Examples include lump on the head, abrasions, bruises, minor lacerations (cuts on the skin surface with minimal bleeding and no exposure of deeper tissue/muscle).\n\nPossible Injury: any injury reported or claimed which is not fatal, suspected  serious, or suspected minor. Examples include momentary loss of consciousness, claim of injury, limping, or complaint of pain or nausea. These are reported by the person or indicated by their behavior, but no wounds or injuries are readily evident.\n\nNo Apparent Injury: there is no reason to believe that the person received any bodily harm from the motor vehicle crash. There is no physical evidence of injury and the person does not report any change in normal function.\n"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Area",
                    "id": "b898521c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injuryArea",
                    "tooltip": "Select the primary or most obvious area of the person's body injured during the crash. This will be typically be indicated in a matrix or narrative in the EMS records or as a hospital discharge code (ICD-9-CM or ICD-10, if implemented) in the emergency department, hospital or insurance records."
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Injury Diagnosis",
                    "id": "b898521d-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898521e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injurySeverity"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Transported to First Medical Facility By",
                    "id": "b898521f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-transported",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "b8985220-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-transportSource",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Agency Identifier",
                    "id": "b8985221-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-EMSIdentifier",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Run Number",
                    "id": "b8985222-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-EMSRunNumber",
                    "questionDependency": []
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "b8985223-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-medicalFacility",
                    "questionDependency": []
                }
            ],
            "display": [
                "passenger"
            ]
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Ownership",
            "id": "b8985224-8ec0-11ec-bff1-879486270f1d",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-ownership",
            "tooltip": "Ownership refers to the type of property, public or private",
            "required": "true"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Secondary Crash",
            "id": "b8985225-8ec0-11ec-bff1-879486270f1d",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-secondary",
            "tooltip": "A Secondary Crash is a crash that resulted from another crash",
            "required": "true"
        },
        {
            "numOptionsAllowed": "1.0",
            "question": "Crash Severity",
            "id": "b8985226-8ec0-11ec-bff1-879486270f1d",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-severity",
            "required": "true"
        },
        {
            "sectionTitle": "Basic Crash Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Identifier",
                    "id": "b8985228-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985229-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-agencyIdentifier"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash Severity",
                    "id": "b898522a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-severity"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Description",
                    "id": "b898522b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "largeTextField",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-description"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Classification",
                    "id": "b898522c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-classification"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Ownership",
                    "id": "b898522d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-ownership",
                    "tooltip": "Provide type for ownership of the land where the crash occurred."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Characteristics",
                    "id": "b898522e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-characteristics",
                    "tooltip": "Did the crash occur on or off a trafficway?",
                    "helperImg": "../image/trafficway_diagram.png"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Secondary Crash",
                    "id": "b898522f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-secondary",
                    "tooltip": "A Secondary Crash is a crash that resulted from another crash."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "School Bus-Related?",
                    "id": "b8985230-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-schoolBus",
                    "tooltip": "Was a school bus or motor vehicle functioning as a school bus for a school-related purpose involved in the crash? The \"school bus\", with or without a passenger on board, must be directly involved as a contact motor vehicle, or iindirectly involved (ie, children struck when boarding or alighting from the school bus, two vehicles colliding as a result of the stopped school bus, etc.)"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Date and Time",
                    "id": "b8985231-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-dateTime"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Date and Time (Valid Military Time)",
                    "id": "b8985232-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985233-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985234-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-location"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash State",
                    "id": "b8985235-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-state"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash County",
                    "id": "b8985236-8ec0-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "b8985235-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash City/Place",
                    "id": "b8985237-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-city"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Latitude",
                    "id": "b8985238-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985239-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898523a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-streetAddress",
                    "questionDependency": [
                        {
                            "dependencyName": "road-latitude",
                            "dependencyOptionCode": "",
                            "dependencyUuid": "b8985238-8ec0-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "road-longitude",
                            "dependencyOptionCode": "",
                            "dependencyUuid": "b8985239-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b898523c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-firstHarmfulEventInfo"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "First Harmful Event",
                    "id": "b898523d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-firstHarmfulEvent",
                    "tooltip": "The first injury or damage-producing event that characterizes the crash type."
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Location of First Harmful Event Relative to the Trafficway",
                    "id": "b898523e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-locationFirstHarmful",
                    "helperImg": "../image/trafficway_diagram.png"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Manner of Crash/ Collision Impact",
                    "id": "b898523f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-mannerCollision",
                    "helperText": "This question refers only to crashes where the first harmful event involves a collision between two motor vehicles.",
                    "tooltip": "The figure below displays a diagram of the manner of collision.",
                    "helperImg": "../image/manner_example.png"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Relation to Junction Section",
                    "id": "b8985240-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-relationJunction"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Within Interchange Area?",
                    "id": "b8985241-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-withinInterchange",
                    "helperImg": "../image/interchange_diagram.png"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Specific Location",
                    "id": "b8985242-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-specificLocation",
                    "tooltip": " ",
                    "helperImg": "../image/intersection_diagram.png"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Source of Information Section",
                    "id": "b8985243-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-sourceInfoSection"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Information",
                    "id": "b8985244-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-sourceInfo",
                    "tooltip": "Affiliation of the person completing the crash report"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Law Enforcement Agency Identifier",
                    "id": "b8985245-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985246-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-environmentConditions"
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Weather Conditions",
                    "id": "b8985247-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-weatherConditions",
                    "helperText": "(choose up to 2)"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Light Condition",
                    "id": "b8985248-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "number ap"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Roadway Surface Condition",
                    "id": "b8985249-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-surfaceCondition"
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Contributing Circumstances - Roadway Environment",
                    "id": "b898524a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-roadwayEnvironment",
                    "helperText": "(choose up to 2)"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Type of Intersection",
                    "id": "b898524b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-typeIntersection"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Number of Approaches",
                    "id": "b898524c-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-numApproaches",
                    "helperImg": "../image/intersection_examples.png"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Overall Intersection Geometry",
                    "id": "b898524d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-intersectionGeometry",
                    "helperImg": "../image/intersection_examples.png"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Overall Traffic Control Device",
                    "id": "b898524e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-overallTCD",
                    "helperImg": "../image/intersection_examples.png"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Work Zone-Related (Constrution/Maintenance/Utility)",
                    "id": "b898524f-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985250-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-workzoneRelated",
                    "tooltip": "Did the crash occur in or is it related to a construction, maintenance, or utility work zone (regardless of whether workers were actually present at the time of the crash)? \"Work zone-related crashes\" may also include those involve motor vehicles slowed or stopped because of the work zone, even if the first harmful event occurred before the first warning sign.",
                    "helperImg": " "
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Location of the Crash",
                    "id": "b8985251-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-locationWorkZone",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985250-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Work Zone",
                    "id": "b8985252-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-typeWorkZone",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985250-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Workers Present?",
                    "id": "b8985253-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-workersPresent",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985250-8ec0-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Law Enforcement Present?",
                    "id": "b8985254-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lawEnforcementPresent",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "b8985250-8ec0-11ec-bff1-879486270f1d"
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
                    "id": "b8985256-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985257-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985258-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-curveRadius"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Length",
                    "id": "b8985259-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-length"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Superelevation",
                    "id": "b898525a-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-superelevation"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Grade",
                    "id": "b898525b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-grade"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Direction of Slope",
                    "id": "b898525c-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898525d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-percentSlope"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Part of National Highway System",
                    "id": "b898525e-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-nationalHighway",
                    "tooltip": "Is this road a part of the National Highway System?"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Roadway Functional Class: Rural or Urban",
                    "id": "b898525f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-ruralUrban",
                    "tooltip": "The character of service or function of streets or highways"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Roadway Functional Class: Specific Class",
                    "id": "b8985260-8ec0-11ec-bff1-879486270f1d",
                    "answerType": NaN,
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-specificClass"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Annual Average Daily Traffic (AADT)",
                    "id": "b8985261-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-AADT"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "AADT (Year)",
                    "id": "b8985262-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985263-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-AADTValue"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Truck (over 10,000 lbs) Count or Percentage",
                    "id": "b8985264-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-truckCount"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Motorcycle Count or Percentage",
                    "id": "b8985265-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-motorcycleCount"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Widths of Lane(s) and Shoulder(s)",
                    "id": "b8985266-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-laneShoulderWidths"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Lane Width",
                    "id": "b8985267-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985268-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b8985269-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898526a-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898526b-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-accessControl",
                    "tooltip": "The degree that access to abutting land is fully, partially, or not controlled by a public authority.\nFull access control: preference given to through traffic movements by providing interchanges with selected public roads, and by prohbiting crossing at-grade and direct driveway connections (ie, limited access to the facility).\nPartial access control: preference given to through traffic movement. In addition to interchanges, there may be some crossings at-grade with public roads, but direct private driveway connections have been minimized through th euse of frontage roads or other local access restrictions. Control of curb cuts is not access control.\nNo access control: no degree of access control exists; full access to the facility is permitted.\n"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Railway Crossing ID",
                    "id": "b898526c-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898526d-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lighting"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Pavement Markings, Longitudinal",
                    "id": "b898526e-8ec0-11ec-bff1-879486270f1d",
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
                    "id": "b898526f-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-edgeline"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Centerline Presence/Type",
                    "id": "b8985270-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-centerline"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Lane Line Markings",
                    "id": "b8985271-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-laneLine"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Presence/Type of Bicycle Facility",
                    "id": "b8985272-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-bicycleFacility"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Facility",
                    "id": "b8985273-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-facility"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Signed Bicycle Route",
                    "id": "b8985274-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-signedBicycleRoute"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Mainline Number of Lanes at Intersection",
                    "id": "b8985275-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-mainlineLanesAtIntersection",
                    "tooltip": "Number of through lanes on the mainline approaches of an intersection, including all lanes with through movement (through and left-turn, or through and right-turn) but not exclusive turn lanes."
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Cross-Street Number of Lanes at Intersection",
                    "id": "b8985276-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-crossStreetLanesAtIntersection",
                    "tooltip": "Number of through lanes on the side-road approaches at intersection including all lanes with through movement (through and left-turn, or through and right-turn) but not exclusive turn lanes."
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Total Volume of Entering Vehicles",
                    "id": "b8985277-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-totalVolumeVehicles"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Year",
                    "id": "b8985278-8ec0-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-totalVolumeYear"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Value",
                    "id": "b8985279-8ec0-11ec-bff1-879486270f1d",
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