{
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
                    "id": "jkc3Za9x",
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
                    "id": "f6tgewDR",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-20"
                },
                {
                    "numOptionsAllowed": "3.0",
                    "question": "Driver License Restrictions",
                    "id": "8BtBdls2",
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
                    "id": "uCbQngHX",
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
                    "id": "saCEI1G1",
                    "answerType": "questionHeader",
                    "display": [
                        "driver"
                    ],
                    "humanReadableId": "driver-23"
                },
                {
                    "numOptionsAllowed": "1.0",
                    "question": "Type Applicable for This Person",
                    "id": "p7o3PRwH",
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
                    "id": "QT39Fndd",
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
                    "id": "ia9MO3Tf",
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
                    "id": "33YmQHlJ",
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
                    "id": "v7InKQ1D",
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
                    "id": "3vGBj243",
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
                    "id": "HFaeY0Jd",
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
            ]
        }
    ]
}