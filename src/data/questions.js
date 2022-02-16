export const questions = {
    "data": [
        {
            "sectionTitle": "Personal Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Name of Person Involved",
                    "id": "544a985b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-firstName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "544a985c-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-middleName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "544a985d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-lastName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Date of Birth",
                    "id": "544a985e-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a985f-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9860-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-streetAddress2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "544a9861-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-city"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "544a9862-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-state"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "544a9863-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-zip"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Phone Number",
                    "id": "544a9864-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9865-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9867-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseJurisdiction"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type",
                    "id": "544a9868-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-jurisidctionType",
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
                    "id": "544a9869-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a986a-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a986b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseClass",
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
                    "id": "544a986c-8eab-11ec-bff1-879486270f1d",
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
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Endorsements",
                    "id": "544a986d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CDLEndorsements",
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
                    "id": "544a986e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-restrictions"
                },
                {
                    "numOptionsAllowed": "3.0",
                    "question": "Driver License Restrictions",
                    "id": "544a986f-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseRestrictions",
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
                    "id": "544a9870-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9871-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-licenseStatus"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type Applicable for This Person",
                    "id": "544a9872-8eab-11ec-bff1-879486270f1d",
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
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Status",
                    "id": "544a9873-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-status",
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
                    "id": "544a9875-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9876-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-restraintSys"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Restraint Systems in Use",
                    "id": "544a9877-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9878-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9879-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a987a-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a987b-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a987c-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a987d-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a987e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-distracted"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action",
                    "id": "544a987f-8eab-11ec-bff1-879486270f1d",
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
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source",
                    "id": "544a9880-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-distractionSource",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a987f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a987f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a987f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a987f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-distractedAction",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a987f-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9881-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9883-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9884-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9885-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9886-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Severity",
                    "id": "544a9887-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-injurySeverity",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "numOptionsAllowed": "0.0",
                    "question": "Transported to First Medical Facility By",
                    "id": "544a9888-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-transport",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "544a9889-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-transportSource",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a988a-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-EMSIdentifier",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Run Number",
                    "id": "544a988b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-EMSRunNum",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "544a988c-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-medicalFacility",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a988e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CMV",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "CMV License Status",
                    "id": "544a988f-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-CMVStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9890-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-complianceCDL",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9892-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9893-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-alcoholTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9894-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-alcoholTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9895-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-BACTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedAlcohol",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9892-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9897-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9898-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-drugTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9899-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-drugTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a989a-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "driver-suspectedDrug",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9897-8eab-11ec-bff1-879486270f1d"
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
                "driver"
            ]
        },
        {
            "sectionTitle": "Fataiity-Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Attempted Avoidance Maneuver",
                    "id": "544a989c-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a989d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-delatedAlcohol",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Test Type",
                    "id": "544a989e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalAlcoholTest",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a989f-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalAlcoholResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a98a0-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-deltailedDrug",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Drug Test Type",
                    "id": "544a98a1-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalDrugTest",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a98a2-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-fatalDrugResult",
                    "questionDependency": [
                        {
                            "dependencyName": "driver-injuryStatus",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9884-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a98a4-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerFirst"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial",
                    "id": "544a98a5-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerMiddle"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name",
                    "id": "544a98a6-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerLast"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 1",
                    "id": "544a98a7-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerStreet1"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Street Address 2",
                    "id": "544a98a8-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerStreet2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "544a98a9-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerCity"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "544a98aa-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerState"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "544a98ab-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerZIP"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Insurance Information",
                    "id": "544a98ac-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-ownerInsurance"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Insurance Company Name",
                    "id": "544a98ad-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-insuranceCompany",
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
                    "id": "544a98ae-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-NAIC",
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
                    "id": "544a98af-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-policy",
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
                    "id": "544a98b1-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98b2-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorUnitType",
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
                    "id": "544a98b3-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98b4-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98b5-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98b6-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-licensePlate"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Make",
                    "id": "544a98b7-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-make"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Model",
                    "id": "544a98b8-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-model"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Vehicle Model Year",
                    "id": "544a98b9-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98ba-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorBodyType"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Body Type Category",
                    "id": "544a98bb-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-bodyType",
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
                    "id": "544a98bc-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-size",
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
                    "id": "544a98bd-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-numTrailingUnits",
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
                    "id": "544a98be-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterials",
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
                    "id": "544a98bf-8eab-11ec-bff1-879486270f1d",
                    "answerType": "numberButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-occupants"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Special Function of Motor Vehicle in Transport",
                    "id": "544a98c0-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98c1-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-emergencyUse",
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
                    "id": "544a98c2-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98c4-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-directionBefore",
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
                    "id": "544a98c5-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trafficway"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Travel Directions",
                    "id": "544a98c6-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-travelDirections",
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
                    "id": "544a98c7-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-divided",
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
                    "id": "544a98c8-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-barrierType",
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
                    "id": "544a98c9-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hovHotLanes",
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
                    "id": "544a98ca-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-crashHovHotRelated",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hovHotLanes",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98c9-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hovHotLanes",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98c9-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hovHotLanes",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98c9-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a98cb-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-totalLanes"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Enter the total through lanes, excluding auxiliary lanes.",
                    "id": "544a98cc-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98cd-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98ce-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-roadwayAlignmentGrade"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Horizontal Alignment",
                    "id": "544a98cf-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-horizontalAlignment",
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
                    "id": "544a98d0-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-grade",
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
                    "id": "544a98d1-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trafficControl"
                },
                {
                    "numOptionsAllowed": "4.0",
                    "question": "TCD Type(s)",
                    "id": "544a98d2-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-TCDTypes",
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
                    "id": "544a98d3-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-TCDInoperativeMissing",
                    "helperText": "(choose up to 4)",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "6.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "7.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "8.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "9.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "10.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "11.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "12.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "13.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "14.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "15.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "16.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "17.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "18.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "19.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "20.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "21.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "22.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "23.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "24.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "25.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "26.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-TCDTypes",
                            "dependencyOptionCode": "27.0",
                            "dependencyUuid": "544a98d2-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a98d5-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-manueverAction",
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
                    "id": "544a98d6-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-damage"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Initial Point of Contact",
                    "id": "544a98d7-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98d8-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "6.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "7.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "8.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "9.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "10.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "11.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "12.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "13.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "14.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "15.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "16.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "17.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a98d9-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-resultingExtentDamage",
                    "tooltip": "If the vehicle was not at the scene for the officer to assess the initial point of contact, location of damaged area(s), or resulting extent of amage, then select \"Vehicle Not At Scene\".",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "6.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "7.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "8.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "9.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "10.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "11.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "12.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "13.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "14.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "15.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "16.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-initialPointContact",
                            "dependencyOptionCode": "17.0",
                            "dependencyUuid": "544a98d7-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a98da-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a98db-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-mostHarmfulEvent",
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
                    "id": "544a98dc-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hitRun",
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
                    "id": "544a98dd-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-towed",
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
                    "id": "544a98de-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-contributingCircumstances",
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
                    "id": "544a98df-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-automated"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Automated System(s) in Vehicle",
                    "id": "544a98e0-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-automatedSystems",
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
                    "id": "544a98e1-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98e0-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a98e2-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98e0-8eab-11ec-bff1-879486270f1d"
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
            "sectionTitle": "Large Vehicles and Hazardous Material Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer License Plate Number",
                    "id": "544a98e4-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerLicensePlate",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "544a98e5-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "544a98e6-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "544a98e7-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer VIN(s)",
                    "id": "544a98e8-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerVINs",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "544a98e9-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "544a98ea-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "544a98eb-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Make(s)",
                    "id": "544a98ec-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerMakes",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "544a98ed-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "544a98ee-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "544a98ef-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Model(s)",
                    "id": "544a98f0-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerModels",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "544a98f1-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "544a98f2-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "544a98f3-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Trailer Model Year(s)",
                    "id": "544a98f4-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-trailerModelYears",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "544a98f5-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "544a98f6-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "544a98f7-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Total Number of Axles",
                    "id": "544a98f8-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-numAxles",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Truck Tractor",
                    "id": "544a98f9-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Trailer Behind Tractor",
                    "id": "544a98fa-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Second Trailer Behind Tractor",
                    "id": "544a98fb-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Third Trailer Behind Tractor",
                    "id": "544a98fc-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Identification",
                    "id": "544a98fd-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-motorIdentification",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Identification Type",
                    "id": "544a98fe-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-identificationType",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "US DOT Number",
                            "id": "0.0"
                        },
                        {
                            "name": "State Number",
                            "id": "1.0"
                        },
                        {
                            "name": "Not Applicable",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown/Unable to Determine",
                            "id": "3.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Country/State Code",
                    "id": "544a98ff-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Identification Number",
                    "id": "544a9900-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Name",
                    "id": "544a9901-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierName",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier Street Address",
                    "id": "544a9902-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierStreetAddress",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier City/Town",
                    "id": "544a9903-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierCityTown",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier State",
                    "id": "544a9904-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierState",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Motor Carrier ZIP Code",
                    "id": "544a9905-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierZIP",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type of Carrier",
                    "id": "544a9906-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-carrierType",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Interstate Carrier",
                            "id": "0.0"
                        },
                        {
                            "name": "Intrastate Carrier",
                            "id": "1.0"
                        },
                        {
                            "name": "Not in Commerce/Government",
                            "id": "2.0"
                        },
                        {
                            "name": "Not in Commerce/Other Truck or Bus",
                            "id": "3.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Vehicle Configuration Information",
                    "id": "544a9907-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-configurationInfo",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Vehicle Configuration",
                    "id": "544a9908-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-configuration",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Vehicle 10,000 lbs. or less placarded for hazardous materials",
                            "id": "0.0"
                        },
                        {
                            "name": "Bus/Large Van (seats for 9-15 occupants, including driver)",
                            "id": "1.0"
                        },
                        {
                            "name": "Bus (seats more than 15 occupants, including driver)",
                            "id": "2.0"
                        },
                        {
                            "name": "Single-Unit Truck (2-axle and GVWR > 10,000 lbs.)",
                            "id": "3.0"
                        },
                        {
                            "name": "Single-Unit Truck (3 or more axles)",
                            "id": "4.0"
                        },
                        {
                            "name": "Truck Pulling Trailer(s)",
                            "id": "5.0"
                        },
                        {
                            "name": "Truck Tractor (Bobtail)",
                            "id": "6.0"
                        },
                        {
                            "name": "Truck Tractor/Semi-Trailer",
                            "id": "7.0"
                        },
                        {
                            "name": "Truck Tractor/Double",
                            "id": "8.0"
                        },
                        {
                            "name": "Truck Tractor/Triple",
                            "id": "9.0"
                        },
                        {
                            "name": "Truck More Than 10,000 lbs., cannot classify",
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
                    "question": "Special Sizing",
                    "id": "544a9909-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No special sizing",
                            "id": "0.0"
                        },
                        {
                            "name": "Over-height",
                            "id": "1.0"
                        },
                        {
                            "name": "Over-length",
                            "id": "2.0"
                        },
                        {
                            "name": "Over-weight",
                            "id": "3.0"
                        },
                        {
                            "name": "Over-width",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Permitted?",
                    "id": "544a990a-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-permitted",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-numTrailingUnits",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a98bd-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "Non-Permitted Load",
                            "id": "0.0"
                        },
                        {
                            "name": "Permitted Load",
                            "id": "1.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Cargo Body Type",
                    "id": "544a990b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-cargoBodyType",
                    "helperImg": "../image/cargo_body_types.png",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "vehicle-size",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a98bc-8eab-11ec-bff1-879486270f1d"
                        }
                    ],
                    "answerOptions": [
                        {
                            "name": "No Cargo Body (bobtail, light MV with hazardous materials [HM] placard, etc.)",
                            "id": "0.0"
                        },
                        {
                            "name": "Bus",
                            "id": "1.0"
                        },
                        {
                            "name": "Auto Transporter",
                            "id": "2.0"
                        },
                        {
                            "name": "Cargo Tank",
                            "id": "3.0"
                        },
                        {
                            "name": "Concrete Mixer",
                            "id": "4.0"
                        },
                        {
                            "name": "Dump",
                            "id": "5.0"
                        },
                        {
                            "name": "Flatbed",
                            "id": "6.0"
                        },
                        {
                            "name": "Garbage/Refuse",
                            "id": "7.0"
                        },
                        {
                            "name": "Grain/Chips/Gravel",
                            "id": "8.0"
                        },
                        {
                            "name": "Intermodal Container Chassis",
                            "id": "9.0"
                        },
                        {
                            "name": "Log",
                            "id": "10.0"
                        },
                        {
                            "name": "Pole-Trailer",
                            "id": "11.0"
                        },
                        {
                            "name": "Van/Enclosed Box",
                            "id": "12.0"
                        },
                        {
                            "name": "Vehicle Towing Another Vehicle",
                            "id": "13.0"
                        },
                        {
                            "name": "Not Applicable (MV 10,000 lbs. or less, not displaying HM placard)",
                            "id": "14.0"
                        },
                        {
                            "name": "Other",
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
                    "question": "Hazardous Materials (Cargo Only)",
                    "id": "544a990c-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterialsCargo",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Hazardous Materials ID",
                    "id": "544a990d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-hazardousMaterialsID",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Hazardous Materials Class",
                    "id": "544a990e-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Release of hazardous materials from a cargo compartment (e.g. trailer), cargo container (e.g. tank) or from a package?",
                    "id": "544a990f-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "vehicle"
                    ],
                    "humanReadableId": "vehicle-releaseHazardousMaterials",
                    "questionDependency": [
                        {
                            "dependencyName": "vehicle-hazardousMaterials",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a98be-8eab-11ec-bff1-879486270f1d"
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
                            "name": "Not Applicable",
                            "id": "2.0"
                        },
                        {
                            "name": "Unknown if Released",
                            "id": "3.0"
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
                    "id": "544a9911-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-firstName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "544a9912-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-middleName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "544a9913-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-lastName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Date of Birth",
                    "id": "544a9914-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9915-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9916-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-streetAddress2"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "City/Town",
                    "id": "544a9917-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-city"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "State",
                    "id": "544a9918-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-state"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "ZIP Code",
                    "id": "544a9919-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-zip"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Phone Number",
                    "id": "544a991a-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a991b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-sex",
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
                "nonmotorist"
            ]
        },
        {
            "sectionTitle": "Crash-Related Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Person Type",
                    "id": "544a991d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-personType",
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
                    "id": "544a991e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-condition",
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
                    "id": "544a991f-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9920-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-actionPrior"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action/Circumstance",
                    "id": "544a9921-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-actionCircumstance",
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
                    "id": "544a9922-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-originDestination",
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
                    "id": "544a9923-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-contributingAction",
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
                    "id": "544a9924-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-locationAtCrash",
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
                    "id": "544a9925-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-safetyEquipment",
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
                    "id": "544a9926-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-initialContactPoint",
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
                    "id": "544a9927-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedBy"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Action",
                    "id": "544a9928-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedAction",
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
                    "id": "544a9929-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-distractedSource",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-distractedAction",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9928-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-distractedAction",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9928-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-distractedAction",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9928-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-distractedAction",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9928-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a992b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-incidentResponder",
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
                    "id": "544a992c-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injuryStatus",
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
                    "id": "544a992d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injuryArea",
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
                    "id": "544a992e-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a992f-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-injurySeverity",
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
                    "id": "544a9930-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-transported",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "544a9931-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-sourceTransport",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9932-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-EMSIdentifier",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Run Number",
                    "id": "544a9933-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-EMSRunNumber",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "544a9934-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-medicalFacility",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9936-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-suspectedAlcohol",
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
                    "id": "544a9937-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-alcoholTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9936-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9938-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-alcoholTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9936-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9939-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-BACTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedAlcohol",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9936-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a993b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-suspectedDrug",
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
                    "id": "544a993c-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestStatus",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a993b-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a993d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestType",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a993b-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a993e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-drugTestResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-suspectedDrug",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a993b-8eab-11ec-bff1-879486270f1d"
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
            "sectionTitle": "Fatality-Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Detailed Alcohol Test Information",
                    "id": "544a9940-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-detailedAlcohol",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Alcohol Test Type",
                    "id": "544a9941-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalAlcoholTest",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9942-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBoxWithSelection",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalAlcoholREsult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9943-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-detailedDrug",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Drug Test Type",
                    "id": "544a9944-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalDrugTest",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9945-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "nonmotorist"
                    ],
                    "humanReadableId": "nonmotorist-fatalDrugResult",
                    "questionDependency": [
                        {
                            "dependencyName": "nonmotorist-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a992f-8eab-11ec-bff1-879486270f1d"
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
                "nonmotorist"
            ]
        },
        {
            "sectionTitle": "Personal Information Section",
            "questions": [
                {
                    "numOptionsAllowed": "0.0",
                    "question": "First Name of Person Involved",
                    "id": "544a9947-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-firstName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Middle Initial of Person Involved",
                    "id": "544a9948-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-middleName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Last Name of Person Involved",
                    "id": "544a9949-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-lastName"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Date of Birth",
                    "id": "544a994a-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a994b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-sex",
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
                    "id": "544a994d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-incidentResponder",
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
                    "id": "544a994e-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a994f-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-restraints"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Restraint Systems in Use",
                    "id": "544a9950-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-restraintsInUse",
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
                    "id": "544a9951-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-improperUse",
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
                    "id": "544a9952-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9953-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-ejection",
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
            "sectionTitle": "Injury Related Information",
            "questions": [
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Injury Status",
                    "id": "544a9955-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injuryStatus",
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
                    "id": "544a9956-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injuryArea",
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
                    "id": "544a9957-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9958-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-injurySeverity",
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
                    "id": "544a9959-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-transported",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Transport to First Medical Facility",
                    "id": "544a995a-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-transportSource",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a995b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-EMSIdentifier",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "EMS Response Run Number",
                    "id": "544a995c-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-EMSRunNumber",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Medical Facility Receiving Patient",
                    "id": "544a995d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "passenger"
                    ],
                    "humanReadableId": "passenger-medicalFacility",
                    "questionDependency": [
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "0.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "2.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "3.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "4.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "passenger-injurySeverity",
                            "dependencyOptionCode": "5.0",
                            "dependencyUuid": "544a9958-8eab-11ec-bff1-879486270f1d"
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
            "id": "544a995e-8eab-11ec-bff1-879486270f1d",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-ownership",
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
            "id": "544a995f-8eab-11ec-bff1-879486270f1d",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-secondary",
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
            "id": "544a9960-8eab-11ec-bff1-879486270f1d",
            "answerType": "multiButton",
            "display": [
                "setup"
            ],
            "humanReadableId": "road-severity",
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
                    "id": "544a9962-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9963-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-agencyIdentifier"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash Severity",
                    "id": "544a9964-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-severity",
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
                    "id": "544a9965-8eab-11ec-bff1-879486270f1d",
                    "answerType": "largeTextField",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-description"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Classification",
                    "id": "544a9966-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-classification"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Ownership",
                    "id": "544a9967-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-ownership",
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
                    "id": "544a9968-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9969-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-secondary",
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
                    "id": "544a996a-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-schoolBus",
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
                    "id": "544a996b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-dateTime"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash Date and Time (Valid Military Time)",
                    "id": "544a996c-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a996d-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a996e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-location"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Crash State",
                    "id": "544a996f-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-state",
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
                    "id": "544a9970-8eab-11ec-bff1-879486270f1d",
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
                            "dependencyUuid": "544a996f-8eab-11ec-bff1-879486270f1d"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Crash City/Place",
                    "id": "544a9971-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-city"
                },
                {
                    "numOptionsAllowed": "0.0",
                    "question": "Latitude",
                    "id": "544a9972-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9973-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9974-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-streetAddress",
                    "questionDependency": [
                        {
                            "dependencyName": "road-latitude",
                            "dependencyOptionCode": "",
                            "dependencyUuid": "544a9972-8eab-11ec-bff1-879486270f1d"
                        },
                        {
                            "dependencyName": "road-longitude",
                            "dependencyOptionCode": "",
                            "dependencyUuid": "544a9973-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a9976-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-firstHarmfulEventInfo"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "First Harmful Event",
                    "id": "544a9977-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-firstHarmfulEvent",
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
                    "id": "544a9978-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-locationFirstHarmful",
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
                    "id": "544a9979-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a997a-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-relationJunction"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Within Interchange Area?",
                    "id": "544a997b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-withinInterchange",
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
                    "id": "544a997c-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a997d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-sourceInfoSection"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Source of Information",
                    "id": "544a997e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-sourceInfo",
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
                    "id": "544a997f-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9980-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-environmentConditions"
                },
                {
                    "numOptionsAllowed": "2.0",
                    "question": "Weather Conditions",
                    "id": "544a9981-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-weatherConditions",
                    "helperText": "(choose up to 2)",
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
                    "id": "544a9982-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lightConditions",
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
                    "id": "544a9983-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-surfaceCondition",
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
                    "id": "544a9984-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdownMultiSelect",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-roadwayEnvironment",
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
                    "id": "544a9985-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-typeIntersection"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Number of Approaches",
                    "id": "544a9986-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-numApproaches",
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
                    "id": "544a9987-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-intersectionGeometry",
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
                    "id": "544a9988-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-overallTCD",
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
                    "id": "544a9989-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a998a-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a998b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-locationWorkZone",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a998a-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a998c-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-typeWorkZone",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a998a-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a998d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-workersPresent",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a998a-8eab-11ec-bff1-879486270f1d"
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
                    "id": "544a998e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lawEnforcementPresent",
                    "questionDependency": [
                        {
                            "dependencyName": "road-workzoneRelated",
                            "dependencyOptionCode": "1.0",
                            "dependencyUuid": "544a998a-8eab-11ec-bff1-879486270f1d"
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
        },
        {
            "sectionTitle": "Additional Roadway Information",
            "questions": [
                {
                    "numOptionsAllowed": "nan",
                    "question": "Bridge/Structure Identification Number",
                    "id": "544a9990-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9991-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9992-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-curveRadius"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Length",
                    "id": "544a9993-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-length"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Superelevation",
                    "id": "544a9994-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-superelevation"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Grade",
                    "id": "544a9995-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-grade"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Direction of Slope",
                    "id": "544a9996-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a9997-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-percentSlope"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Part of National Highway System",
                    "id": "544a9998-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-nationalHighway",
                    "tooltip": "Is this road a part of the National Highway System?",
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
                    "numOptionsAllowed": "nan",
                    "question": "Roadway Functional Class: Rural or Urban",
                    "id": "544a9999-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-ruralUrban",
                    "tooltip": "The character of service or function of streets or highways",
                    "answerOptions": [
                        {
                            "name": "Rural",
                            "id": "0.0"
                        },
                        {
                            "name": "Urban",
                            "id": "1.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Roadway Functional Class: Specific Class",
                    "id": "544a999a-8eab-11ec-bff1-879486270f1d",
                    "answerType": NaN,
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-specificClass",
                    "answerOptions": [
                        {
                            "name": "Interstate",
                            "id": "0.0"
                        },
                        {
                            "name": "Principal Arterial - Other Freeway or Expressway",
                            "id": "1.0"
                        },
                        {
                            "name": "Principal Arterial - Other",
                            "id": "2.0"
                        },
                        {
                            "name": "Minor Arterial",
                            "id": "3.0"
                        },
                        {
                            "name": "Major Collector",
                            "id": "4.0"
                        },
                        {
                            "name": "Minor Collector",
                            "id": "5.0"
                        },
                        {
                            "name": "Local",
                            "id": "6.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "7.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Annual Average Daily Traffic (AADT)",
                    "id": "544a999b-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-AADT"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "AADT (Year)",
                    "id": "544a999c-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a999d-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-AADTValue"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Truck (over 10,000 lbs) Count or Percentage",
                    "id": "544a999e-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-truckCount"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Motorcycle Count or Percentage",
                    "id": "544a999f-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-motorcycleCount"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Widths of Lane(s) and Shoulder(s)",
                    "id": "544a99a0-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-laneShoulderWidths"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Lane Width",
                    "id": "544a99a1-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a99a2-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a99a3-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a99a4-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a99a5-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-accessControl",
                    "tooltip": "The degree that access to abutting land is fully, partially, or not controlled by a public authority.\nFull access control: preference given to through traffic movements by providing interchanges with selected public roads, and by prohbiting crossing at-grade and direct driveway connections (ie, limited access to the facility).\nPartial access control: preference given to through traffic movement. In addition to interchanges, there may be some crossings at-grade with public roads, but direct private driveway connections have been minimized through th euse of frontage roads or other local access restrictions. Control of curb cuts is not access control.\nNo access control: no degree of access control exists; full access to the facility is permitted.\n",
                    "answerOptions": [
                        {
                            "name": "No Access Control",
                            "id": "0.0"
                        },
                        {
                            "name": "Partial Access Control",
                            "id": "1.0"
                        },
                        {
                            "name": "Full Access Control",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Railway Crossing ID",
                    "id": "544a99a6-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a99a7-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-lighting",
                    "answerOptions": [
                        {
                            "name": "Continuous Lighting on Both SIdes",
                            "id": "0.0"
                        },
                        {
                            "name": "Continuous Lighting on One Side",
                            "id": "1.0"
                        },
                        {
                            "name": "No Lighting",
                            "id": "2.0"
                        },
                        {
                            "name": "Spot Illumination on Both Sides",
                            "id": "3.0"
                        },
                        {
                            "name": "Spot Illumination on One Side",
                            "id": "4.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Pavement Markings, Longitudinal",
                    "id": "544a99a8-8eab-11ec-bff1-879486270f1d",
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
                    "id": "544a99a9-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-edgeline",
                    "answerOptions": [
                        {
                            "name": "No Marked Edgeline",
                            "id": "0.0"
                        },
                        {
                            "name": "Standard Width Edgeline",
                            "id": "1.0"
                        },
                        {
                            "name": "Wide Edgeline",
                            "id": "2.0"
                        },
                        {
                            "name": "Other",
                            "id": "3.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Centerline Presence/Type",
                    "id": "544a99aa-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-centerline",
                    "answerOptions": [
                        {
                            "name": "No Marked Centerline",
                            "id": "0.0"
                        },
                        {
                            "name": "Centerline with Centerline Rumble Stirp",
                            "id": "1.0"
                        },
                        {
                            "name": "Standard Centerline Markings",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Lane Line Markings",
                    "id": "544a99ab-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-laneLine",
                    "answerOptions": [
                        {
                            "name": "No Lane Markings",
                            "id": "0.0"
                        },
                        {
                            "name": "Standard Lane Line",
                            "id": "1.0"
                        },
                        {
                            "name": "Wide Lane Line",
                            "id": "2.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Presence/Type of Bicycle Facility",
                    "id": "544a99ac-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-bicycleFacility"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Facility",
                    "id": "544a99ad-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-facility",
                    "answerOptions": [
                        {
                            "name": "None",
                            "id": "0.0"
                        },
                        {
                            "name": "Marked Bicycle Lane",
                            "id": "1.0"
                        },
                        {
                            "name": "Separated Bicycle Path/Trail",
                            "id": "2.0"
                        },
                        {
                            "name": "Unmarked Pave Shoulder",
                            "id": "3.0"
                        },
                        {
                            "name": "Wide Curb Lane",
                            "id": "4.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "5.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Signed Bicycle Route",
                    "id": "544a99ae-8eab-11ec-bff1-879486270f1d",
                    "answerType": "dropdown",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-signedBicycleRoute",
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
                    "numOptionsAllowed": "nan",
                    "question": "Mainline Number of Lanes at Intersection",
                    "id": "544a99af-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-mainlineLanesAtIntersection",
                    "tooltip": "Number of through lanes on the mainline approaches of an intersection, including all lanes with through movement (through and left-turn, or through and right-turn) but not exclusive turn lanes.",
                    "answerOptions": [
                        {
                            "name": "Not an Intersection or Interchange",
                            "id": "0.0"
                        },
                        {
                            "name": "One Lane",
                            "id": "1.0"
                        },
                        {
                            "name": "Two Lanes",
                            "id": "2.0"
                        },
                        {
                            "name": "Three Lanes",
                            "id": "3.0"
                        },
                        {
                            "name": "Four to Six Lanes",
                            "id": "4.0"
                        },
                        {
                            "name": "Seven or More Lanes",
                            "id": "5.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "6.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Cross-Street Number of Lanes at Intersection",
                    "id": "544a99b0-8eab-11ec-bff1-879486270f1d",
                    "answerType": "multiButton",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-crossStreetLanesAtIntersection",
                    "tooltip": "Number of through lanes on the side-road approaches at intersection including all lanes with through movement (through and left-turn, or through and right-turn) but not exclusive turn lanes.",
                    "answerOptions": [
                        {
                            "name": "Not an Intersection or Interchange",
                            "id": "0.0"
                        },
                        {
                            "name": "One Lane",
                            "id": "1.0"
                        },
                        {
                            "name": "Two Lanes",
                            "id": "2.0"
                        },
                        {
                            "name": "Three Lanes",
                            "id": "3.0"
                        },
                        {
                            "name": "Four to Six Lanes",
                            "id": "4.0"
                        },
                        {
                            "name": "Seven or More Lanes",
                            "id": "5.0"
                        },
                        {
                            "name": "Unknown",
                            "id": "6.0"
                        }
                    ]
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Total Volume of Entering Vehicles",
                    "id": "544a99b1-8eab-11ec-bff1-879486270f1d",
                    "answerType": "questionHeader",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-totalVolumeVehicles"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Year",
                    "id": "544a99b2-8eab-11ec-bff1-879486270f1d",
                    "answerType": "openTextBox",
                    "display": [
                        "road"
                    ],
                    "humanReadableId": "road-totalVolumeYear"
                },
                {
                    "numOptionsAllowed": "nan",
                    "question": "Value",
                    "id": "544a99b3-8eab-11ec-bff1-879486270f1d",
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