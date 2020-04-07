export const questions = {
    "data": [
    {
        "answerType": "header", 
        "question": "Crash Classification", 
        "display": [
            "road"
        ], 
        "id": "C2"
    }, 
    {
        "answerOptions": [
            {
                "text": "Public Property", 
                "idCode": "01"
            }, 
            {
                "text": "Private Property", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Ownership", 
        "id": "C2-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Trafficway, On Road", 
                "idCode": "01"
            }, 
            {
                "text": "Trafficway, Not on Road", 
                "idCode": "02"
            }, 
            {
                "text": "Non-Trafficway", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Characteristics", 
        "id": "C2-S2", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Secondary Crash", 
        "id": "C2-S3", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Crash Date and Time", 
        "display": [
            "road"
        ], 
        "id": "C3"
    }, 
    {
        "autoMethod": "time", 
        "helperText": "(YYYYMMDDHHMM)", 
        "question": "Crash Date and Time", 
        "id": "C3", 
        "answerType": "advancedOpenTextBox", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(HHMM)", 
        "question": "Time of Roadway Clearance", 
        "display": [
            "road"
        ], 
        "id": "C3-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Crash County", 
        "display": [
            "road"
        ], 
        "id": "C4"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(Political Jurisdiction)", 
        "question": "Crash City/Place", 
        "display": [
            "road"
        ], 
        "id": "C5"
    }, 
    {
        "answerType": "header", 
        "question": "Crash Location", 
        "display": [
            "road"
        ], 
        "id": "C6"
    }, 
    {
        "autoMethod": "map", 
        "helperText": "(degrees.minutes.seconds + compass direction)", 
        "question": "Latitude", 
        "id": "C6-S1", 
        "answerType": "advancedOpenTextBox", 
        "display": [
            "road"
        ]
    }, 
    {
        "autoMethod": "map", 
        "helperText": "(degrees.minutes.seconds + compass direction)", 
        "question": "Longitude", 
        "id": "C6-S2", 
        "answerType": "advancedOpenTextBox", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Cargo/Equipment Loss or Shift", 
                "idCode": "01"
            }, 
            {
                "text": "Fell/Jumped From Motor Vehicle", 
                "idCode": "02"
            }, 
            {
                "text": "Fire/Explosion", 
                "idCode": "03"
            }, 
            {
                "text": "Immersion, Full or Partial", 
                "idCode": "04"
            }, 
            {
                "text": "Jackknife", 
                "idCode": "05"
            }, 
            {
                "text": "Other Non-Collision", 
                "idCode": "06"
            }, 
            {
                "text": "Overturn/Rollover", 
                "idCode": "07"
            }, 
            {
                "text": "Thrown or Falling Object", 
                "idCode": "08"
            }, 
            {
                "text": "Animal (live)", 
                "idCode": "09"
            }, 
            {
                "text": "Construction Equipment (backhoe, bulldozer, etc.)", 
                "idCode": "10"
            }, 
            {
                "text": "Farm Equipment (tractor, combine harvester, etc.)", 
                "idCode": "11"
            }, 
            {
                "text": "Motor Vehicle in Transport", 
                "idCode": "12"
            }, 
            {
                "text": "Other Non-Fixed Object", 
                "idCode": "13"
            }, 
            {
                "text": "Other Non-motorist", 
                "idCode": "14"
            }, 
            {
                "text": "Parked Motor Vehicle", 
                "idCode": "15"
            }, 
            {
                "text": "Pedalcycle", 
                "idCode": "16"
            }, 
            {
                "text": "Pedestrian", 
                "idCode": "17"
            }, 
            {
                "text": "Railway Vehicle (train, engine)", 
                "idCode": "18"
            }, 
            {
                "text": "Strikes Object at Rest from MV in Transport", 
                "idCode": "19"
            }, 
            {
                "text": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle", 
                "idCode": "20"
            }, 
            {
                "text": "Bridge Overhead Structure", 
                "idCode": "21"
            }, 
            {
                "text": "Bridge Pier or Support", 
                "idCode": "22"
            }, 
            {
                "text": "Bridge Rail", 
                "idCode": "23"
            }, 
            {
                "text": "Cable Barrier", 
                "idCode": "24"
            }, 
            {
                "text": "Concrete Traffic Barrier", 
                "idCode": "25"
            }, 
            {
                "text": "Culvert", 
                "idCode": "26"
            }, 
            {
                "text": "Curb", 
                "idCode": "27"
            }, 
            {
                "text": "Ditch", 
                "idCode": "28"
            }, 
            {
                "text": "Embankment", 
                "idCode": "29"
            }, 
            {
                "text": "Fence", 
                "idCode": "30"
            }, 
            {
                "text": "Guardrail End Terminal", 
                "idCode": "31"
            }, 
            {
                "text": "Guardrail Face", 
                "idCode": "32"
            }, 
            {
                "text": "Impact Attenuator/Crash Cushion", 
                "idCode": "33"
            }, 
            {
                "text": "Mailbox", 
                "idCode": "34"
            }, 
            {
                "text": "Other Fixed Object (wall, building, tunnel, etc.)", 
                "idCode": "35"
            }, 
            {
                "text": "Other Post, Pole, or Support", 
                "idCode": "36"
            }, 
            {
                "text": "Other Traffic Barrier", 
                "idCode": "37"
            }, 
            {
                "text": "Traffic Sign Support", 
                "idCode": "38"
            }, 
            {
                "text": "Traffic Signal Support", 
                "idCode": "39"
            }, 
            {
                "text": "Tree (standing)", 
                "idCode": "40"
            }, 
            {
                "text": "Utility Pole/Light Support", 
                "idCode": "41"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "helperText": "Non-Collision Harmful Events; Collision With Person, Motor Vehicle, or Non-Fixed Object; Collision with Fixed Object", 
        "numOptionsAllowed": "1", 
        "question": "First Harmful Event", 
        "id": "C7", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Gore", 
                "idCode": "01"
            }, 
            {
                "text": "In Parking Lane or Zone", 
                "idCode": "02"
            }, 
            {
                "text": "Median", 
                "idCode": "03"
            }, 
            {
                "text": "Off-Roadway, Location Unknown", 
                "idCode": "04"
            }, 
            {
                "text": "On Roadway", 
                "idCode": "05"
            }, 
            {
                "text": "On Shoulder, Left Side", 
                "idCode": "06"
            }, 
            {
                "text": "On Shoulder, Right Side", 
                "idCode": "07"
            }, 
            {
                "text": "Outside Road/Right-of-Way", 
                "idCode": "08"
            }, 
            {
                "text": "Roadside", 
                "idCode": "09"
            }, 
            {
                "text": "Separator/Traffic Island", 
                "idCode": "10"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Location of First Harmful Event Relative to the Trafficway", 
        "id": "C8", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not a Collision Between Two Motor Vehicles", 
                "idCode": "00"
            }, 
            {
                "text": "Angle", 
                "idCode": "01"
            }, 
            {
                "text": "Front to Front", 
                "idCode": "02"
            }, 
            {
                "text": "Front to Rear", 
                "idCode": "03"
            }, 
            {
                "text": "Rear to Rear", 
                "idCode": "04"
            }, 
            {
                "text": "Rear to Side", 
                "idCode": "05"
            }, 
            {
                "text": "Sideswipe, Opposite Direction", 
                "idCode": "06"
            }, 
            {
                "text": "Sideswipe, Same Direction", 
                "idCode": "07"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Manner of Crash/ Collision Impact", 
        "id": "C9", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Source of Information", 
        "display": [
            "road"
        ], 
        "id": "C10"
    }, 
    {
        "answerOptions": [
            {
                "text": "Law Enforcement Agency", 
                "idCode": "01"
            }, 
            {
                "text": "Civilian", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Source of Information", 
        "id": "C10-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "9 character NCIC Originating Agency Identifier", 
        "question": "Law Enforcement Agency Identifier", 
        "display": [
            "road"
        ], 
        "id": "C10-S2"
    }, 
    {
        "autoMethod": "weather", 
        "answerOptions": [
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }, 
            {
                "text": "Blowing Sand, Soil, Dirt", 
                "idCode": "01"
            }, 
            {
                "text": "Blowing Snow", 
                "idCode": "02"
            }, 
            {
                "text": "Clear", 
                "idCode": "03"
            }, 
            {
                "text": "Cloudy", 
                "idCode": "04"
            }, 
            {
                "text": "Fog, Smog, Smoke", 
                "idCode": "05"
            }, 
            {
                "text": "Freezing Rain or Freezing Drizzle", 
                "idCode": "06"
            }, 
            {
                "text": "Rain", 
                "idCode": "07"
            }, 
            {
                "text": "Severe Crosswinds", 
                "idCode": "08"
            }, 
            {
                "text": "Sleet or Hail", 
                "idCode": "09"
            }, 
            {
                "text": "Snow", 
                "idCode": "10"
            }
        ], 
        "helperText": "(choose up to 2)", 
        "numOptionsAllowed": "2", 
        "question": "Weather Conditions", 
        "id": "C11", 
        "answerType": "advancedDropDown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Daylight", 
                "idCode": "01"
            }, 
            {
                "text": "Dawn/Dusk", 
                "idCode": "02"
            }, 
            {
                "text": "Dark - Lighted", 
                "idCode": "03"
            }, 
            {
                "text": "Dark - Not Lighted", 
                "idCode": "04"
            }, 
            {
                "text": "Dark - Unknown Lighting", 
                "idCode": "05"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Light Condition", 
        "id": "C12", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Dry", 
                "idCode": "01"
            }, 
            {
                "text": "Ice/Frost", 
                "idCode": "02"
            }, 
            {
                "text": "Mud, Dirt, Gravel", 
                "idCode": "03"
            }, 
            {
                "text": "Oil", 
                "idCode": "04"
            }, 
            {
                "text": "Sand", 
                "idCode": "05"
            }, 
            {
                "text": "Slush", 
                "idCode": "06"
            }, 
            {
                "text": "Snow", 
                "idCode": "07"
            }, 
            {
                "text": "Water (standing, moving)", 
                "idCode": "08"
            }, 
            {
                "text": "Wet", 
                "idCode": "09"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Roadway Surface Condition", 
        "id": "C13", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "None", 
                "idCode": "00"
            }, 
            {
                "text": "Animal(s)", 
                "idCode": "01"
            }, 
            {
                "text": "Debris", 
                "idCode": "02"
            }, 
            {
                "text": "Glare", 
                "idCode": "03"
            }, 
            {
                "text": "Non-Highway Work", 
                "idCode": "04"
            }, 
            {
                "text": "Obstructed Crosswalks", 
                "idCode": "05"
            }, 
            {
                "text": "Obstruction in Roadway", 
                "idCode": "06"
            }, 
            {
                "text": "Prior Crash", 
                "idCode": "07"
            }, 
            {
                "text": "Prior Non-Recurring Incident", 
                "idCode": "08"
            }, 
            {
                "text": "Regular Congestion", 
                "idCode": "09"
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
        ], 
        "helperText": "(choose up to 2)", 
        "numOptionsAllowed": "2", 
        "question": "Contributing Circumstances - Roadway Environment", 
        "id": "C14", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Relation to Junction", 
        "display": [
            "road"
        ], 
        "id": "C15"
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Within Interchange Area?", 
        "id": "C15-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not an Interchange Area", 
                "idCode": "00"
            }, 
            {
                "text": "Acceleration/Deceleration Lane", 
                "idCode": "01"
            }, 
            {
                "text": "Crossover-Related", 
                "idCode": "02"
            }, 
            {
                "text": "Driveway Access or Related", 
                "idCode": "03"
            }, 
            {
                "text": "Entrance/Exit Ramp or Related", 
                "idCode": "04"
            }, 
            {
                "text": "Intersection or Related", 
                "idCode": "05"
            }, 
            {
                "text": "Non-Junction", 
                "idCode": "06"
            }, 
            {
                "text": "Railway Grade Crossing", 
                "idCode": "07"
            }, 
            {
                "text": "Shared-Use Path or Trail", 
                "idCode": "08"
            }, 
            {
                "text": "Through Roadway", 
                "idCode": "09"
            }, 
            {
                "text": "Other Location Not Listed Above Within an Interchange Area (median, shoulder an", 
                "idCode": "10"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Specific Location", 
        "id": "C15-S2", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Type of Intersection", 
        "display": [
            "road"
        ], 
        "id": "C16"
    }, 
    {
        "answerOptions": [
            {
                "text": "Not an Intersection", 
                "idCode": "01"
            }, 
            {
                "text": "(2) Two", 
                "idCode": "02"
            }, 
            {
                "text": "(3) Three", 
                "idCode": "03"
            }, 
            {
                "text": "(4) Four", 
                "idCode": "04"
            }, 
            {
                "text": "(5+) Five or more", 
                "idCode": "05"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Number of Approaches", 
        "id": "C16-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Angled/Skewed", 
                "idCode": "01"
            }, 
            {
                "text": "Roundabout/Traffic Circle", 
                "idCode": "02"
            }, 
            {
                "text": "Perpendicular", 
                "idCode": "03"
            }, 
            {
                "text": "Not Applicable/Not an Intersection", 
                "idCode": "97"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Overall Intersection Geometry", 
        "id": "C16-S2", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Signalized", 
                "idCode": "01"
            }, 
            {
                "text": "Stop - All Way", 
                "idCode": "02"
            }, 
            {
                "text": "Stop - Partial", 
                "idCode": "03"
            }, 
            {
                "text": "Yield", 
                "idCode": "04"
            }, 
            {
                "text": "No Controls", 
                "idCode": "05"
            }, 
            {
                "text": "Not Applicable/Not an Intersection", 
                "idCode": "97"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Overall Traffic Control Device", 
        "id": "C16-S3", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes, School Bus Directly Involved", 
                "idCode": "02"
            }, 
            {
                "text": "Yes, School Bus Indirectly Involved", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "School Bus-Related", 
        "id": "C17", 
        "answerType": "multiButton", 
        "display": [
            "setup"
        ]
    }, 
    {
        "answerType": "header", 
        "helperText": "(Constrution/Maintenance/Utility)", 
        "question": "Work Zone-Related", 
        "display": [
            "construction"
        ], 
        "id": "C18"
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Was the crash in a construction, mainenance, or utility work zone or was it related to activity within a work zone?", 
        "id": "C18-S1", 
        "answerType": "multiButton", 
        "display": [
            "setup", 
            "construction"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Before the First Work Zone Warning Sign", 
                "idCode": "01"
            }, 
            {
                "text": "Advance Warning Area", 
                "idCode": "02"
            }, 
            {
                "text": "Transition Area", 
                "idCode": "03"
            }, 
            {
                "text": "Activity Area", 
                "idCode": "04"
            }, 
            {
                "text": "Termination Area", 
                "idCode": "05"
            }, 
            {
                "text": "Not Applicable/Not Within or Related to a Work Zone", 
                "idCode": "98"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Location of the Crash", 
        "id": "C18-S2", 
        "answerType": "dropdown", 
        "display": [
            "construction"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Lane Closure", 
                "idCode": "01"
            }, 
            {
                "text": "Lane Shift/Crossover", 
                "idCode": "02"
            }, 
            {
                "text": "Work on Shoulder or Median", 
                "idCode": "03"
            }, 
            {
                "text": "Intermittent or Moving Work", 
                "idCode": "04"
            }, 
            {
                "text": "Other Type of Work Zone", 
                "idCode": "05"
            }, 
            {
                "text": "Not Applicable/Not Within or Related to a Work Zone", 
                "idCode": "98"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Type of Work Zone", 
        "id": "C18-S3", 
        "answerType": "dropdown", 
        "display": [
            "construction"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Not Applicable/Not Within or Related to a Work Zone", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Workers Present", 
        "id": "C18-S4", 
        "answerType": "multiButton", 
        "display": [
            "construction"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Not Applicable/Not Within or Related to a Work Zone", 
                "idCode": "98"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Law Enforcement Present", 
        "id": "C18-S5", 
        "answerType": "multiButton", 
        "display": [
            "construction"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "(K) Fatal Injury**", 
                "idCode": "01"
            }, 
            {
                "text": "(A) Suspected Serious Injury", 
                "idCode": "02"
            }, 
            {
                "text": "(B) Suspected Minor Injury", 
                "idCode": "03"
            }, 
            {
                "text": "(C) Possible Injury", 
                "idCode": "04"
            }, 
            {
                "text": "(O) Property Damage-Only", 
                "idCode": "05"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Crash Severity", 
        "id": "C19", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Number of Motor Vehicles Involved", 
        "display": [
            "setup"
        ], 
        "id": "C20"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Number of Non-Motorists", 
        "display": [
            "setup"
        ], 
        "id": "C22"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Number of Non-Fatally Injured Persons", 
        "display": [
            "road"
        ], 
        "id": "C23"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Number of Fatalities", 
        "display": [
            "setup"
        ], 
        "id": "C24"
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Alcohol Involvement", 
        "id": "C25", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Drug Involvement", 
        "id": "C26", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Sunday", 
                "idCode": "01"
            }, 
            {
                "text": "Monday", 
                "idCode": "02"
            }, 
            {
                "text": "Tuesday", 
                "idCode": "03"
            }, 
            {
                "text": "Wednesday", 
                "idCode": "04"
            }, 
            {
                "text": "Thursday", 
                "idCode": "05"
            }, 
            {
                "text": "Friday", 
                "idCode": "06"
            }, 
            {
                "text": "Saturday", 
                "idCode": "07"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Day of Week", 
        "id": "C27", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "largeTextField", 
        "question": "Crash Description", 
        "display": [
            "road"
        ], 
        "id": "O1"
    }, 
    {
        "answerType": "largeTextField", 
        "question": "Crash Diagram", 
        "display": [
            "road"
        ], 
        "id": "O2"
    }, 
    {
        "autoMethod": "VINCamera", 
        "helperText": "(VIN)", 
        "question": "Vehicle Identification Number", 
        "id": "V1", 
        "answerType": "advancedOpenTextBox", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Motor Vehicle Unit Type and Number", 
        "display": [
            "vehicle"
        ], 
        "id": "V2"
    }, 
    {
        "answerOptions": [
            {
                "text": "Motor Vehicle in Transport", 
                "idCode": "01"
            }, 
            {
                "text": "Parked Motor Vehicle", 
                "idCode": "02"
            }, 
            {
                "text": "Working Vehicle/Equipment", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Type", 
        "id": "V2-S1", 
        "answerType": "multiButton", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Motor Vehicle Registration State and Year", 
        "display": [
            "vehicle"
        ], 
        "id": "V3"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Identifier", 
        "display": [
            "vehicle", 
            "info"
        ], 
        "id": "V3-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Year of Motor Vehicle Registration (YYYY)", 
        "question": "Motor Vehicle Registration", 
        "display": [
            "vehicle", 
            "info"
        ], 
        "id": "V3-S2"
    }, 
    {
        "autoMethod": "plateCamera", 
        "answerType": "advancedOpenTextBox", 
        "question": "Motor Vehicle License Plate Number", 
        "display": [
            "vehicle"
        ], 
        "id": "V4"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Motor Vehicle Make", 
        "display": [
            "vehicle", 
            "info"
        ], 
        "id": "V5"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(YYYY)", 
        "question": "Motor Vehicle Model Year", 
        "display": [
            "vehicle", 
            "info"
        ], 
        "id": "V6"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Motor Vehicle Model", 
        "display": [
            "vehicle", 
            "info"
        ], 
        "id": "V7"
    }, 
    {
        "answerType": "header", 
        "question": "Motor Vehicle Body Type Category", 
        "display": [
            "vehicle"
        ], 
        "id": "V8"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Body Type Category", 
        "display": [
            "vehicle"
        ], 
        "id": "V8-S1"
    }, 
    {
        "answerOptions": [
            {
                "text": "Not Applicable (vehicle with no trailing units)", 
                "idCode": "97"
            }
        ], 
        "helperText": "Note: GVWR is used for single-unit trucks and other body types. GCWR is used for combination trucks or any vehicle with a trailing unit", 
        "numOptionsAllowed": "1", 
        "question": "Number of Trailing Units", 
        "id": "V8-S2", 
        "answerType": "multiButton", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Light (Less than 10,000 lbs. GVWR/GCWR)", 
                "idCode": "01"
            }, 
            {
                "text": "Medium (10,001 - 26,000 lbs. GVWR/GCWR)**", 
                "idCode": "02"
            }, 
            {
                "text": "Heavy (Greater than 26,000 lbs. GVWR/GCWR)**", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Vehicle Size", 
        "id": "V8-S3", 
        "answerType": "multiButton", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes**", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Did this motor vehicle display a hazardous materials (HM) placard?", 
        "id": "V8-S4", 
        "answerType": "multiButton", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Total Occupants in Motor Vehicle", 
        "display": [
            "vehicle"
        ], 
        "id": "V9"
    }, 
    {
        "answerOptions": [
            {
                "text": "No Special Function", 
                "idCode": "00"
            }, 
            {
                "text": "Bus - School (Public or Private)", 
                "idCode": "01"
            }, 
            {
                "text": "Bus - Childcare/Daycare", 
                "idCode": "02"
            }, 
            {
                "text": "Bus - Transit/Commuter", 
                "idCode": "03"
            }, 
            {
                "text": "Bus - Charter/Tour", 
                "idCode": "04"
            }, 
            {
                "text": "Bus - Intercity", 
                "idCode": "05"
            }, 
            {
                "text": "Bus - Shuttle", 
                "idCode": "06"
            }, 
            {
                "text": "Bus - Other", 
                "idCode": "07"
            }, 
            {
                "text": "Farm Vehicle", 
                "idCode": "08"
            }, 
            {
                "text": "Fire Truck", 
                "idCode": "09"
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
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Special Function of Motor Vehicle in Transport", 
        "id": "V10", 
        "answerType": "dropdown", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Non-Emergency, Non-Transport", 
                "idCode": "01"
            }, 
            {
                "text": "Non-Emergency Transport", 
                "idCode": "02"
            }, 
            {
                "text": "Emergency Operation, Emergency Warning Equipment Not in Use", 
                "idCode": "03"
            }, 
            {
                "text": "Emergency Operation, Emergency Warning Equipment in Use", 
                "idCode": "04"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Emergency Motor Vehicle Use", 
        "id": "V11", 
        "answerType": "dropdown", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Motor Vehicle Posted/ Statutory Speed Limit", 
        "display": [
            "vehicle"
        ], 
        "id": "V12"
    }, 
    {
        "answerOptions": [
            {
                "text": "Not on Roadway", 
                "idCode": "00"
            }, 
            {
                "text": "Northbound", 
                "idCode": "01"
            }, 
            {
                "text": "Eastbound", 
                "idCode": "03"
            }, 
            {
                "text": "Southbound", 
                "idCode": "06"
            }, 
            {
                "text": "Westbound", 
                "idCode": "09"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Direction of Travel Before Crash", 
        "id": "V13", 
        "answerType": "multiButton", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Trafficway Description", 
        "display": [
            "road"
        ], 
        "id": "V14"
    }, 
    {
        "answerOptions": [
            {
                "text": "One-Way", 
                "idCode": "01"
            }, 
            {
                "text": "Two-Way", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Travel Directions", 
        "id": "V14-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not Divided", 
                "idCode": "00"
            }, 
            {
                "text": "Not Divided, With a Continuous Left-Turn Lane", 
                "idCode": "01"
            }, 
            {
                "text": "Divided, Flush Median (greater than 4ft wide)", 
                "idCode": "02"
            }, 
            {
                "text": "Divided, Raised Median (curbed)", 
                "idCode": "03"
            }, 
            {
                "text": "Divided, Depressed Median", 
                "idCode": "04"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Divided?", 
        "id": "V14-S2", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Barrier", 
                "idCode": "00"
            }, 
            {
                "text": "Cable Barrier", 
                "idCode": "01"
            }, 
            {
                "text": "Concrete Barrier (e.g. Jersey Barrier)", 
                "idCode": "02"
            }, 
            {
                "text": "Earth Embankment", 
                "idCode": "03"
            }, 
            {
                "text": "Guardrail", 
                "idCode": "04"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Barrier Type", 
        "id": "V14-S3", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "None present", 
                "idCode": "00"
            }, 
            {
                "text": "Separated, Barrier, Flush (greater than 4ft wide), Raised or Depressed Median", 
                "idCode": "01"
            }, 
            {
                "text": "Not Separated, Painted Pavement Markings, Post-Mounted Delineators", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "HOV/HOT Lanes", 
        "id": "V14-S4", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Crash Related to HOV/HOT Lane?", 
        "id": "V14-S5", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Total Lanes in Roadway", 
        "display": [
            "road"
        ], 
        "id": "V15"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(specify 2 values)", 
        "question": "Undivided Trafficways", 
        "display": [
            "road"
        ], 
        "id": "V15"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(specify 2 values)", 
        "question": "Divided Trafficways", 
        "display": [
            "road"
        ], 
        "id": "V15"
    }, 
    {
        "answerType": "header", 
        "question": "Roadway Alignment and Grade", 
        "display": [
            "road"
        ], 
        "id": "V16"
    }, 
    {
        "answerOptions": [
            {
                "text": "Straight", 
                "idCode": "01"
            }, 
            {
                "text": "Curve Left", 
                "idCode": "02"
            }, 
            {
                "text": "Curve Right", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Horizontal Alignment", 
        "id": "V16-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Level", 
                "idCode": "01"
            }, 
            {
                "text": "Uphill", 
                "idCode": "02"
            }, 
            {
                "text": "Hillcrest", 
                "idCode": "03"
            }, 
            {
                "text": "Downhill", 
                "idCode": "04"
            }, 
            {
                "text": "Sag (bottom)", 
                "idCode": "05"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Grade", 
        "id": "V16-S2", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Traffic Control Device Type", 
        "display": [
            "road"
        ], 
        "id": "V17"
    }, 
    {
        "answerOptions": [
            {
                "text": "No Controls", 
                "idCode": "00"
            }, 
            {
                "text": "Person (including flagger, law enforcement, crossing guard, etc)", 
                "idCode": "01"
            }, 
            {
                "text": "Bicycle Crossing Sign", 
                "idCode": "02"
            }, 
            {
                "text": "\"Curve Ahead\" Warning Sign", 
                "idCode": "03"
            }, 
            {
                "text": "\"Intersection Ahead\" Warning Sign", 
                "idCode": "04"
            }, 
            {
                "text": "Other Warning Sign", 
                "idCode": "05"
            }, 
            {
                "text": "Pedestrian Crossing Sign", 
                "idCode": "06"
            }, 
            {
                "text": "Railroad Crossing Sign", 
                "idCode": "07"
            }, 
            {
                "text": "\"Reduce Speed Ahead\" Warning Sign", 
                "idCode": "08"
            }, 
            {
                "text": "School Zone Sign", 
                "idCode": "09"
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
                "idCode": "00"
            }, 
            {
                "text": "Person (including flagger, law enforcement, crossing guard, etc.)", 
                "idCode": "01"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "helperText": "(choose up to 4)", 
        "numOptionsAllowed": "4", 
        "question": "TCD Type(s)", 
        "id": "V17-S1", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "None inoperative or missing", 
                "idCode": "00"
            }, 
            {
                "text": "Person (including flagger, law enforcement, crossing guard, etc)", 
                "idCode": "01"
            }, 
            {
                "text": "Bicycle Crossing Sign", 
                "idCode": "02"
            }, 
            {
                "text": "\"Curve Ahead\" Warning Sign", 
                "idCode": "03"
            }, 
            {
                "text": "\"Intersection Ahead\" Warning Sign", 
                "idCode": "04"
            }, 
            {
                "text": "Other Warning Sign", 
                "idCode": "05"
            }, 
            {
                "text": "Pedestrian Crossing Sign", 
                "idCode": "06"
            }, 
            {
                "text": "Railroad Crossing Sign", 
                "idCode": "07"
            }, 
            {
                "text": "\"Reduce Speed Ahead\" Warning Sign", 
                "idCode": "08"
            }, 
            {
                "text": "School Zone Sign", 
                "idCode": "09"
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
                "idCode": "00"
            }, 
            {
                "text": "Person (including flagger, law enforcement, crossing guard, etc.)", 
                "idCode": "01"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "helperText": "(choose up to 4)", 
        "numOptionsAllowed": "4", 
        "question": "Are any Inoperative or Missing?", 
        "id": "V17-S2", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Backing", 
                "idCode": "01"
            }, 
            {
                "text": "Changing Lanes", 
                "idCode": "02"
            }, 
            {
                "text": "Entering Traffic Lane", 
                "idCode": "03"
            }, 
            {
                "text": "Leaving Traffic Lane", 
                "idCode": "04"
            }, 
            {
                "text": "Making U-Turn", 
                "idCode": "05"
            }, 
            {
                "text": "Movements Essentially Straight Ahead", 
                "idCode": "06"
            }, 
            {
                "text": "Negotiating a Curve", 
                "idCode": "07"
            }, 
            {
                "text": "Overtaking/Passing", 
                "idCode": "08"
            }, 
            {
                "text": "Parked", 
                "idCode": "09"
            }, 
            {
                "text": "Slowing", 
                "idCode": "10"
            }, 
            {
                "text": "Stopped in Traffic", 
                "idCode": "11"
            }, 
            {
                "text": "Turning Left", 
                "idCode": "12"
            }, 
            {
                "text": "Turning Right", 
                "idCode": "13"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Motor Vehicle Maneuver/Action", 
        "id": "V18", 
        "answerType": "dropdown", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Vehicle Damage", 
        "display": [
            "vehicle"
        ], 
        "id": "V19"
    }, 
    {
        "answerOptions": [
            {
                "text": "Non-Collision", 
                "idCode": "00"
            }, 
            {
                "text": "(Clock Position) 1", 
                "idCode": "01"
            }, 
            {
                "text": "(Clock Position) 2", 
                "idCode": "02"
            }, 
            {
                "text": "(Clock Position) 3", 
                "idCode": "03"
            }, 
            {
                "text": "(Clock Position) 4", 
                "idCode": "04"
            }, 
            {
                "text": "(Clock Position) 5", 
                "idCode": "05"
            }, 
            {
                "text": "(Clock Position) 6", 
                "idCode": "06"
            }, 
            {
                "text": "(Clock Position) 7", 
                "idCode": "07"
            }, 
            {
                "text": "(Clock Position) 8", 
                "idCode": "08"
            }, 
            {
                "text": "(Clock Position) 9", 
                "idCode": "09"
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
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Initial Point of Contact", 
        "id": "V19-S1", 
        "answerType": "dropdown", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Damage", 
                "idCode": "00"
            }, 
            {
                "text": "(Clock Position) 1", 
                "idCode": "01"
            }, 
            {
                "text": "(Clock Position) 2", 
                "idCode": "02"
            }, 
            {
                "text": "(Clock Position) 3", 
                "idCode": "03"
            }, 
            {
                "text": "(Clock Position) 4", 
                "idCode": "04"
            }, 
            {
                "text": "(Clock Position) 5", 
                "idCode": "05"
            }, 
            {
                "text": "(Clock Position) 6", 
                "idCode": "06"
            }, 
            {
                "text": "(Clock Position) 7", 
                "idCode": "07"
            }, 
            {
                "text": "(Clock Position) 8", 
                "idCode": "08"
            }, 
            {
                "text": "(Clock Position) 9", 
                "idCode": "09"
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
                "text": "All Areas", 
                "idCode": "15"
            }, 
            {
                "text": "Vehicle Not at Scene", 
                "idCode": "16"
            }
        ], 
        "helperText": "(choose up to 13)", 
        "numOptionsAllowed": "13", 
        "question": "Location of Damage Area(s)", 
        "id": "V19-S2", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Damage", 
                "idCode": "00"
            }, 
            {
                "text": "Minor Damage", 
                "idCode": "01"
            }, 
            {
                "text": "Functional Damage", 
                "idCode": "02"
            }, 
            {
                "text": "Disabling Damage", 
                "idCode": "03"
            }, 
            {
                "text": "Vehicle Not at Scene", 
                "idCode": "04"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Resulting Extent of Damage", 
        "id": "V19-S3", 
        "answerType": "multiButton", 
        "display": [
            "vehicle", 
            "info"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Cross Centerline", 
                "idCode": "01"
            }, 
            {
                "text": "Cross Median", 
                "idCode": "02"
            }, 
            {
                "text": "End Departure (T-intersection, dead-end, etc.)", 
                "idCode": "03"
            }, 
            {
                "text": "Downhill Runaway", 
                "idCode": "04"
            }, 
            {
                "text": "Equipment Failure (blown tire, brake failure, etc.)", 
                "idCode": "05"
            }, 
            {
                "text": "Ran Off Roadway Left", 
                "idCode": "06"
            }, 
            {
                "text": "Ran Off Roadway Right", 
                "idCode": "07"
            }, 
            {
                "text": "Reentering Roadway", 
                "idCode": "08"
            }, 
            {
                "text": "Separation of Units", 
                "idCode": "09"
            }, 
            {
                "text": "Other Non-Harmful Event", 
                "idCode": "10"
            }, 
            {
                "text": "Cargo/Equipment Loss or Shift", 
                "idCode": "11"
            }, 
            {
                "text": "Fell/Jumped From Motor Vehicle", 
                "idCode": "12"
            }, 
            {
                "text": "Fire/Explosion", 
                "idCode": "13"
            }, 
            {
                "text": "Immersion, Full or Partial", 
                "idCode": "14"
            }, 
            {
                "text": "Jackknife", 
                "idCode": "15"
            }, 
            {
                "text": "Other Non-Collision Harmful Event", 
                "idCode": "16"
            }, 
            {
                "text": "Overturn/Rollover", 
                "idCode": "17"
            }, 
            {
                "text": "Thrown or Falling Object", 
                "idCode": "18"
            }, 
            {
                "text": "Animal (live)", 
                "idCode": "19"
            }, 
            {
                "text": "Motor Vehicle in Transport", 
                "idCode": "20"
            }, 
            {
                "text": "Other Non-Fixed Object", 
                "idCode": "21"
            }, 
            {
                "text": "Other Non-Motorist", 
                "idCode": "22"
            }, 
            {
                "text": "Parked Motor Vehicle", 
                "idCode": "23"
            }, 
            {
                "text": "Pedalcycle", 
                "idCode": "24"
            }, 
            {
                "text": "Pedestrian", 
                "idCode": "25"
            }, 
            {
                "text": "Railway Vehicle (train, engine)", 
                "idCode": "26"
            }, 
            {
                "text": "Strikes Object at Rest from MV in Transport", 
                "idCode": "27"
            }, 
            {
                "text": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle", 
                "idCode": "28"
            }, 
            {
                "text": "Work Zone/Maintenance Equipment", 
                "idCode": "29"
            }, 
            {
                "text": "Bridge Overhead Structure", 
                "idCode": "30"
            }, 
            {
                "text": "Bridge Pier or Support", 
                "idCode": "31"
            }, 
            {
                "text": "Bridge Rail", 
                "idCode": "32"
            }, 
            {
                "text": "Cable Barrier", 
                "idCode": "33"
            }, 
            {
                "text": "Concrete Traffic Barrier", 
                "idCode": "34"
            }, 
            {
                "text": "Culvert", 
                "idCode": "35"
            }, 
            {
                "text": "Curb", 
                "idCode": "36"
            }, 
            {
                "text": "Ditch", 
                "idCode": "37"
            }, 
            {
                "text": "Embankment", 
                "idCode": "38"
            }, 
            {
                "text": "Fence", 
                "idCode": "39"
            }, 
            {
                "text": "Guardrail End Terminal", 
                "idCode": "40"
            }, 
            {
                "text": "Guardrail Face", 
                "idCode": "41"
            }, 
            {
                "text": "Impact Attenuator/Crash Cushion", 
                "idCode": "42"
            }, 
            {
                "text": "Mailbox", 
                "idCode": "43"
            }, 
            {
                "text": "Other Fixed Object (wall, building, tunnel, etc.)", 
                "idCode": "44"
            }, 
            {
                "text": "Other Post, Pole or Support", 
                "idCode": "45"
            }, 
            {
                "text": "Other Traffic Barrier", 
                "idCode": "46"
            }, 
            {
                "text": "Traffic Sign Support", 
                "idCode": "47"
            }, 
            {
                "text": "Traffic Signal Support", 
                "idCode": "48"
            }, 
            {
                "text": "Tree (standing)", 
                "idCode": "49"
            }, 
            {
                "text": "Utility Pole/Light Support", 
                "idCode": "50"
            }, 
            {
                "text": "Unknown Fixed Object", 
                "idCode": "51"
            }
        ], 
        "helperText": "(choose up to 4)", 
        "numOptionsAllowed": "4", 
        "question": "Sequence of Events", 
        "id": "V20", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Cargo/Equipment Loss or Shift", 
                "idCode": "01"
            }, 
            {
                "text": "Fell/Jumped From Motor Vehicle", 
                "idCode": "02"
            }, 
            {
                "text": "Fire/Explosion", 
                "idCode": "03"
            }, 
            {
                "text": "Immersion, Full or Partial", 
                "idCode": "04"
            }, 
            {
                "text": "Jackknife", 
                "idCode": "05"
            }, 
            {
                "text": "Other Non-Collision Harmful Event", 
                "idCode": "06"
            }, 
            {
                "text": "Overturn/Rollover", 
                "idCode": "07"
            }, 
            {
                "text": "Thrown or Falling Object", 
                "idCode": "08"
            }, 
            {
                "text": "Animal (live)", 
                "idCode": "09"
            }, 
            {
                "text": "Motor Vehicle in Transport", 
                "idCode": "10"
            }, 
            {
                "text": "Other Non-Fixed Object", 
                "idCode": "11"
            }, 
            {
                "text": "Other Non-Motorist", 
                "idCode": "12"
            }, 
            {
                "text": "Parked Motor Vehicle", 
                "idCode": "13"
            }, 
            {
                "text": "Pedalcycle", 
                "idCode": "14"
            }, 
            {
                "text": "Pedestrian", 
                "idCode": "15"
            }, 
            {
                "text": "Railway Vehicle (train, engine)", 
                "idCode": "16"
            }, 
            {
                "text": "Strikes Object at Rest from MV in Transport", 
                "idCode": "17"
            }, 
            {
                "text": "Struck by Falling, Shifting Cargo or Anything Set in Motion by Motor Vehicle", 
                "idCode": "18"
            }, 
            {
                "text": "Work Zone / Maintenance Equipment", 
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
                "text": "Other Post, Pole or Support", 
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
                "text": "Unknown Collision With Fixed Object", 
                "idCode": "41"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Most Harmful Event for this Motor Vehicle", 
        "id": "V21", 
        "answerType": "dropdown", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No, Did Not Leave Scene", 
                "idCode": "01"
            }, 
            {
                "text": "Yes, Driver or Car and Driver Left Scene", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Hit and Run", 
        "id": "V22", 
        "answerType": "multiButton", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not towed", 
                "idCode": "00"
            }, 
            {
                "text": "Towed, But Not Due to Disabling Damage", 
                "idCode": "01"
            }, 
            {
                "text": "Towed Due to Disabling Damage", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Towed Due to Disabling Damage", 
        "id": "V23", 
        "answerType": "multiButton", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "None", 
                "idCode": "00"
            }, 
            {
                "text": "Brakes", 
                "idCode": "01"
            }, 
            {
                "text": "Exhaust System", 
                "idCode": "02"
            }, 
            {
                "text": "Body, Doors", 
                "idCode": "03"
            }, 
            {
                "text": "Steering", 
                "idCode": "04"
            }, 
            {
                "text": "Power Train", 
                "idCode": "05"
            }, 
            {
                "text": "Suspension", 
                "idCode": "06"
            }, 
            {
                "text": "Tires", 
                "idCode": "07"
            }, 
            {
                "text": "Wheels", 
                "idCode": "08"
            }, 
            {
                "text": "Lights (head, signal, tail)", 
                "idCode": "09"
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
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Contributing Circumstances, Motor Vehicle", 
        "id": "V24", 
        "answerType": "dropdown", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Name of Person Involved", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist", 
            "info"
        ], 
        "id": "P1"
    }, 
    {
        "answerType": "header", 
        "question": "Date of Birth", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist"
        ], 
        "id": "P2"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(YYYY/MM/DD)", 
        "question": "Date of Birth", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist"
        ], 
        "id": "P2-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Age", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist", 
            "setup"
        ], 
        "id": "P2-S2"
    }, 
    {
        "answerOptions": [
            {
                "text": "Female", 
                "idCode": "01"
            }, 
            {
                "text": "Male", 
                "idCode": "02"
            }, 
            {
                "text": "Nonbinary", 
                "idCode": "03"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Sex", 
        "id": "P3", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Person Type", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist"
        ], 
        "id": "P4"
    }, 
    {
        "answerOptions": [
            {
                "text": "Driver", 
                "idCode": "01"
            }, 
            {
                "text": "Passenger", 
                "idCode": "02"
            }, 
            {
                "text": "Occupant of MV Not in Transport", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Person Type", 
        "id": "P4-S1", 
        "answerType": "dropdown", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Bicyclist**", 
                "idCode": "04"
            }, 
            {
                "text": "Other Cyclist**", 
                "idCode": "05"
            }, 
            {
                "text": "Pedestrian**", 
                "idCode": "06"
            }, 
            {
                "text": "Other Pedestrian (wheelchair, person in a building, skater, personal convey.)**", 
                "idCode": "07"
            }, 
            {
                "text": "Occupant of a Non-Motor Vehicle Transportation Device**", 
                "idCode": "08"
            }, 
            {
                "text": "Unknown Type of Non-Motorist**", 
                "idCode": "09"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }, 
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }, 
            {
                "text": "EMS", 
                "idCode": "02"
            }, 
            {
                "text": "Fire", 
                "idCode": "03"
            }, 
            {
                "text": "Police", 
                "idCode": "04"
            }, 
            {
                "text": "Tow Operator", 
                "idCode": "05"
            }, 
            {
                "text": "Transportation (i.e. maintenance workers, safety service patrol operators, etc.", 
                "idCode": "06"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Incident Responder?", 
        "id": "P4-S2", 
        "answerType": "dropdown", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "(K) Fatal Injury**", 
                "idCode": "01"
            }, 
            {
                "text": "(A) Suspected Serious Injury", 
                "idCode": "02"
            }, 
            {
                "text": "(B) Suspected Minor Injury", 
                "idCode": "03"
            }, 
            {
                "text": "(C) Possible Injury", 
                "idCode": "04"
            }, 
            {
                "text": "(O) No Apparent Injury", 
                "idCode": "05"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Injury Status", 
        "id": "P5", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "passenger", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Front", 
                "idCode": "01"
            }, 
            {
                "text": "Second", 
                "idCode": "02"
            }, 
            {
                "text": "Third", 
                "idCode": "03"
            }, 
            {
                "text": "Fourth", 
                "idCode": "04"
            }, 
            {
                "text": "Other Row (bus, 15 passenger van, etc.)", 
                "idCode": "05"
            }, 
            {
                "text": "Unknown Row", 
                "idCode": "06"
            }, 
            {
                "text": "Left (usually the motor vehicle or motorcycle driver except for postal vehicles", 
                "idCode": "07"
            }, 
            {
                "text": "Middle", 
                "idCode": "08"
            }, 
            {
                "text": "Right", 
                "idCode": "09"
            }, 
            {
                "text": "Unknown Seat", 
                "idCode": "10"
            }, 
            {
                "text": "Other Enclosed Cargo Area", 
                "idCode": "11"
            }, 
            {
                "text": "Riding on Motor Vehicle Exterior (non-trailing unit)", 
                "idCode": "12"
            }, 
            {
                "text": "Sleeper Section of Cab (truck)", 
                "idCode": "13"
            }, 
            {
                "text": "Trailing Unit", 
                "idCode": "14"
            }, 
            {
                "text": "Unenclosed Cargo Area", 
                "idCode": "15"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "helperText": "(choose up to 2)", 
        "numOptionsAllowed": "2", 
        "question": "Seating Position", 
        "id": "P7", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "driver", 
            "passenger"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Booster Seat", 
                "idCode": "01"
            }, 
            {
                "text": "Child Restraint System - Forward Facing", 
                "idCode": "02"
            }, 
            {
                "text": "Child Restraint System - Rear Facing", 
                "idCode": "03"
            }, 
            {
                "text": "Child Restraint - Type Unknown", 
                "idCode": "04"
            }, 
            {
                "text": "Lap Belt Only Used", 
                "idCode": "05"
            }, 
            {
                "text": "None Used - Motor Vehicle Occupant", 
                "idCode": "06"
            }, 
            {
                "text": "Restraint Used - Type Unknown", 
                "idCode": "07"
            }, 
            {
                "text": "Shoulder and Lap Belt Used", 
                "idCode": "08"
            }, 
            {
                "text": "Shoulder Belt Only Used", 
                "idCode": "09"
            }, 
            {
                "text": "Stretcher", 
                "idCode": "10"
            }, 
            {
                "text": "Wheelchair", 
                "idCode": "11"
            }, 
            {
                "text": "DOT-Compliant Motorcycle Helmet", 
                "idCode": "12"
            }, 
            {
                "text": "Not DOT-Compliant Motorcycle Helmet", 
                "idCode": "13"
            }, 
            {
                "text": "Unknown If DOT-Compliant Motorcycle Helmet", 
                "idCode": "14"
            }, 
            {
                "text": "No Helmet", 
                "idCode": "15"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Restraint Systems / Motorcycle Helmet Use", 
        "id": "P8-S1", 
        "answerType": "dropdown", 
        "display": [
            "driver", 
            "passenger"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Any Indication of Improper Use?", 
        "id": "P8-S2", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "passenger"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not Deployed", 
                "idCode": "00"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Curtain", 
                "idCode": "01"
            }, 
            {
                "text": "Front", 
                "idCode": "02"
            }, 
            {
                "text": "Side", 
                "idCode": "03"
            }, 
            {
                "text": "Other (knee, air belt, etc.)", 
                "idCode": "04"
            }, 
            {
                "text": "Deployment Unknown", 
                "idCode": "05"
            }
        ], 
        "helperText": "(choose up to 4)", 
        "numOptionsAllowed": "4", 
        "question": "Air Bag Deployed", 
        "id": "P9", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "driver", 
            "passenger"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not Ejected", 
                "idCode": "00"
            }, 
            {
                "text": "Ejected, Partially", 
                "idCode": "01"
            }, 
            {
                "text": "Ejected, Totally", 
                "idCode": "02"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Ejection", 
        "id": "P10", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "passenger"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Driver License Jurisdiction", 
        "display": [
            "driver"
        ], 
        "id": "P11"
    }, 
    {
        "answerOptions": [
            {
                "text": "Not Licensed", 
                "idCode": "00"
            }, 
            {
                "text": "Canada", 
                "idCode": "01"
            }, 
            {
                "text": "Indian Nation", 
                "idCode": "02"
            }, 
            {
                "text": "International License (other than Mexico or Canada)", 
                "idCode": "03"
            }, 
            {
                "text": "Mexico", 
                "idCode": "04"
            }, 
            {
                "text": "State", 
                "idCode": "05"
            }, 
            {
                "text": "U.S. Government", 
                "idCode": "06"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Type", 
        "id": "P11-S1", 
        "answerType": "dropdown", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Provide the specific State, Province or Nation indicated on the Driver's License (see Appendix E: ANSI State FIPS and USPS Codes or Appendix F: ISO 3166-2 Codes for Canada and Mexico)", 
        "question": "Name of Jurisdiction (ANSI Code)", 
        "display": [
            "driver", 
            "info"
        ], 
        "id": "P11-S2"
    }, 
    {
        "answerType": "header", 
        "question": "Driver License Number, Class, CDL and Endorsements", 
        "display": [
            "driver"
        ], 
        "id": "P12"
    }, 
    {
        "autoMethod": "driverIDCamera", 
        "answerType": "advancedOpenTextBox", 
        "question": "License Number", 
        "display": [
            "driver", 
            "info"
        ], 
        "id": "P12-S1"
    }, 
    {
        "answerOptions": [
            {
                "text": "None", 
                "idCode": "00"
            }, 
            {
                "text": "Class A", 
                "idCode": "01"
            }, 
            {
                "text": "Class B", 
                "idCode": "02"
            }, 
            {
                "text": "Class C", 
                "idCode": "03"
            }, 
            {
                "text": "Class M", 
                "idCode": "04"
            }, 
            {
                "text": "Regular Driver License Class", 
                "idCode": "05"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Class", 
        "id": "P12-S2", 
        "answerType": "dropdown", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Commercial Driver License (CDL)", 
        "id": "P12-S3", 
        "answerType": "multiButton", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "None/Not Applicable", 
                "idCode": "00"
            }, 
            {
                "text": "H - Hazardous Materials", 
                "idCode": "01"
            }, 
            {
                "text": "N - Tank Vehicle", 
                "idCode": "02"
            }, 
            {
                "text": "P - Passenger", 
                "idCode": "03"
            }, 
            {
                "text": "S - School", 
                "idCode": "04"
            }, 
            {
                "text": "T - Double/Triple Trailers", 
                "idCode": "05"
            }, 
            {
                "text": "X - Combination of Tank Vehicle and Hazardous Materials", 
                "idCode": "06"
            }, 
            {
                "text": "Other non-commercial license endorsements (e.g., motorcycle, etc.)", 
                "idCode": "07"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Endorsements", 
        "id": "P12-S4", 
        "answerType": "dropdown", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Exceeded Speed Limit", 
                "idCode": "02"
            }, 
            {
                "text": "Racing", 
                "idCode": "03"
            }, 
            {
                "text": "Too Fast for Conditions", 
                "idCode": "04"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Speeding-Related", 
        "id": "P13", 
        "answerType": "multiButton", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Other Contributing Action", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }, 
            {
                "text": "No Contributing Action", 
                "idCode": "00"
            }, 
            {
                "text": "Disregarded Other Road Markings", 
                "idCode": "01"
            }, 
            {
                "text": "Disregarded Other Traffic Sign", 
                "idCode": "02"
            }, 
            {
                "text": "Failed to Keep in Proper Lane", 
                "idCode": "03"
            }, 
            {
                "text": "Failed to Yield Right-of-Way", 
                "idCode": "04"
            }, 
            {
                "text": "Followed Too Closely", 
                "idCode": "05"
            }, 
            {
                "text": "Improper Backing", 
                "idCode": "06"
            }, 
            {
                "text": "Improper Passing", 
                "idCode": "07"
            }, 
            {
                "text": "Improper Turn", 
                "idCode": "08"
            }, 
            {
                "text": "Operated Motor Vehicle in Inattentive, Careless, Negligent, or Erratic Manner", 
                "idCode": "09"
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
            }
        ], 
        "helperText": "(choose up to 4)", 
        "numOptionsAllowed": "4", 
        "question": "Driver Actions at Time of Crash", 
        "id": "P14", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(choose up to 2)", 
        "question": "Violation Codes", 
        "display": [
            "driver"
        ], 
        "id": "P15"
    }, 
    {
        "answerType": "header", 
        "question": "Driver License Restrictions", 
        "display": [
            "driver"
        ], 
        "id": "P16"
    }, 
    {
        "answerOptions": [
            {
                "text": "None", 
                "idCode": "00"
            }, 
            {
                "text": "Alcohol Interlock Device", 
                "idCode": "01"
            }, 
            {
                "text": "CDL Intrastate Only", 
                "idCode": "02"
            }, 
            {
                "text": "Corrective Lenses", 
                "idCode": "03"
            }, 
            {
                "text": "Farm Waiver", 
                "idCode": "04"
            }, 
            {
                "text": "Except Class A Bus", 
                "idCode": "05"
            }, 
            {
                "text": "Except Class A and Class B Bus", 
                "idCode": "06"
            }, 
            {
                "text": "Except Tractor-Trailer", 
                "idCode": "07"
            }, 
            {
                "text": "Intermediate License Restrictions", 
                "idCode": "08"
            }, 
            {
                "text": "Learner's Permit Restrictions", 
                "idCode": "09"
            }, 
            {
                "text": "Limited to Daylight Only", 
                "idCode": "10"
            }, 
            {
                "text": "Limited to Employment", 
                "idCode": "11"
            }, 
            {
                "text": "Limited-Other", 
                "idCode": "12"
            }, 
            {
                "text": "Mechanical Devices (special brakes, hand controls, or other adaptive devices)", 
                "idCode": "13"
            }, 
            {
                "text": "Military Vehicles Only", 
                "idCode": "14"
            }, 
            {
                "text": "Motor Vehicles Without Air Brakes", 
                "idCode": "15"
            }, 
            {
                "text": "Outside Mirror", 
                "idCode": "16"
            }, 
            {
                "text": "Prosthetic Aid", 
                "idCode": "17"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }
        ], 
        "helperText": "(choose up to 3)", 
        "numOptionsAllowed": "3", 
        "question": "Driver License Restrictions", 
        "id": "P16-S1", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Alcohol Interlock Present?", 
        "id": "P16-S2", 
        "answerType": "multiButton", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Driver License Status", 
        "display": [
            "driver"
        ], 
        "id": "P17"
    }, 
    {
        "answerOptions": [
            {
                "text": "Non-CDL Driver license", 
                "idCode": "01"
            }, 
            {
                "text": "Non-CDL Restricted Driver license (Learner\ufffds permit, Temporary/ Limited, Gradua", 
                "idCode": "02"
            }, 
            {
                "text": "Commercial Driver License (CDL)", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Type Applicable for This Person", 
        "id": "P17-S1", 
        "answerType": "dropdown", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not Licensed", 
                "idCode": "00"
            }, 
            {
                "text": "Canceled or Denied", 
                "idCode": "01"
            }, 
            {
                "text": "Disqualified (CDL)", 
                "idCode": "02"
            }, 
            {
                "text": "Expired", 
                "idCode": "03"
            }, 
            {
                "text": "Revoked", 
                "idCode": "04"
            }, 
            {
                "text": "Suspended", 
                "idCode": "05"
            }, 
            {
                "text": "Valid License", 
                "idCode": "06"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Status", 
        "id": "P17-S2", 
        "answerType": "dropdown", 
        "display": [
            "driver"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Distracted By", 
        "display": [
            "driver", 
            "nonmotorist"
        ], 
        "id": "P18"
    }, 
    {
        "answerOptions": [
            {
                "text": "Not Distracted", 
                "idCode": "00"
            }, 
            {
                "text": "Talking/listening", 
                "idCode": "01"
            }, 
            {
                "text": "Manually Operating (texting, dialing, playing game, etc.)", 
                "idCode": "02"
            }, 
            {
                "text": "Other Action (looking away from task, etc.)", 
                "idCode": "03"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Action", 
        "id": "P18-S1", 
        "answerType": "dropdown", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Hands-Free Mobile Phone", 
                "idCode": "01"
            }, 
            {
                "text": "Hand-Held Mobile Phone", 
                "idCode": "02"
            }, 
            {
                "text": "Other Electronic Device", 
                "idCode": "03"
            }, 
            {
                "text": "Vehicle-Integrated Device", 
                "idCode": "04"
            }, 
            {
                "text": "Passenger/Other Non-Motorist", 
                "idCode": "05"
            }, 
            {
                "text": "External (to vehicle/non-motorist area)", 
                "idCode": "06"
            }, 
            {
                "text": "Other Distraction (animal, food, grooming)", 
                "idCode": "07"
            }, 
            {
                "text": "Not Applicable (Not Distracted)", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Source", 
        "id": "P18-S2", 
        "answerType": "dropdown", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Asleep or Fatigued", 
                "idCode": "01"
            }, 
            {
                "text": "Emotional (depressed, angry, disturbed, etc.)", 
                "idCode": "02"
            }, 
            {
                "text": "Ill (sick), Fainted", 
                "idCode": "03"
            }, 
            {
                "text": "Physically Impaired", 
                "idCode": "04"
            }, 
            {
                "text": "Under the Influence of Medications/Drugs/Alcohol", 
                "idCode": "05"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }
        ], 
        "helperText": "(choose up to 2)", 
        "numOptionsAllowed": "2", 
        "question": "Condition at Time of the Crash", 
        "id": "P19", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Law Enforcement Suspects Alcohol Use", 
        "id": "P20", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Alcohol Test", 
        "display": [
            "driver", 
            "nonmotorist"
        ], 
        "id": "P21"
    }, 
    {
        "answerOptions": [
            {
                "text": "Test Not Given", 
                "idCode": "00"
            }, 
            {
                "text": "Test Given", 
                "idCode": "01"
            }, 
            {
                "text": "Test Refused", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown if Tested", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Test Status", 
        "id": "P21-S1", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Blood", 
                "idCode": "01"
            }, 
            {
                "text": "Breath", 
                "idCode": "02"
            }, 
            {
                "text": "Urine", 
                "idCode": "03"
            }, 
            {
                "text": "Not Applicable (Test Not Given)", 
                "idCode": "97"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Type of Test", 
        "id": "P21-S2", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "BAC Test Result", 
        "display": [
            "driver", 
            "nonmotorist"
        ], 
        "id": "P21-S3"
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Law Enforcement Suspects Drug Use", 
        "id": "P22", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Drug Test", 
        "display": [
            "driver", 
            "nonmotorist"
        ], 
        "id": "P23"
    }, 
    {
        "answerOptions": [
            {
                "text": "Test Not Given", 
                "idCode": "00"
            }, 
            {
                "text": "Test Given", 
                "idCode": "01"
            }, 
            {
                "text": "Test Refused", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown if Tested", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Test Status", 
        "id": "P23-S1", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Blood", 
                "idCode": "01"
            }, 
            {
                "text": "Saliva", 
                "idCode": "02"
            }, 
            {
                "text": "Urine", 
                "idCode": "03"
            }, 
            {
                "text": "Not Applicable (Test Not Given)", 
                "idCode": "97"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Type of Test", 
        "id": "P23-S2", 
        "answerType": "multiButton", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Negative", 
                "idCode": "01"
            }, 
            {
                "text": "Amphetamine", 
                "idCode": "02"
            }, 
            {
                "text": "Cocaine", 
                "idCode": "03"
            }, 
            {
                "text": "Marijuana", 
                "idCode": "04"
            }, 
            {
                "text": "Opiate", 
                "idCode": "05"
            }, 
            {
                "text": "Other Controlled Substance", 
                "idCode": "06"
            }, 
            {
                "text": "PCP", 
                "idCode": "07"
            }, 
            {
                "text": "Other Drug (excludes post-crash drugs)", 
                "idCode": "08"
            }, 
            {
                "text": "Not Applicable (Test Not Given)", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "helperText": "(choose up to 4)", 
        "numOptionsAllowed": "4", 
        "question": "Drug Test Result", 
        "id": "P23-S3", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "driver", 
            "nonmotorist"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Transported to First Medical Facility By", 
        "display": [
            "injured"
        ], 
        "id": "P24"
    }, 
    {
        "answerOptions": [
            {
                "text": "Not Transported", 
                "idCode": "00"
            }, 
            {
                "text": "EMS Air", 
                "idCode": "01"
            }, 
            {
                "text": "EMS Ground", 
                "idCode": "02"
            }, 
            {
                "text": "Law Enforcement", 
                "idCode": "03"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Source of Transport to First Medical Facility", 
        "id": "P24-S1", 
        "answerType": "multiButton", 
        "display": [
            "injured"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "EMS Response Agency Idenitifier", 
        "display": [
            "injured"
        ], 
        "id": "P24-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "EMS Response Run Number", 
        "display": [
            "injured"
        ], 
        "id": "P24-S3"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Medical Facility Recieving Patient", 
        "display": [
            "injured"
        ], 
        "id": "P24-S4"
    }, 
    {
        "answerOptions": [
            {
                "text": "Head", 
                "idCode": "01"
            }, 
            {
                "text": "Face", 
                "idCode": "02"
            }, 
            {
                "text": "Neck", 
                "idCode": "03"
            }, 
            {
                "text": "Upper Extremity", 
                "idCode": "04"
            }, 
            {
                "text": "Thorax (chest)", 
                "idCode": "05"
            }, 
            {
                "text": "Spine", 
                "idCode": "06"
            }, 
            {
                "text": "Abdomen and Pelvis", 
                "idCode": "07"
            }, 
            {
                "text": "Lower Extremity", 
                "idCode": "08"
            }, 
            {
                "text": "Unspecified", 
                "idCode": "09"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Injury Area", 
        "id": "P25", 
        "answerType": "dropdown", 
        "display": [
            "injured"
        ]
    }, 
    {
        "answerType": "largeTextField", 
        "helperText": "Description of the injury according to data elements included in teh files being linked such as the body areas and types of injuries listed on the crash and EMS records and/or the ICD-10 codes listed on the hospital discharge records.", 
        "question": "Injury Diagnosis", 
        "display": [
            "injured"
        ], 
        "id": "P26"
    }, 
    {
        "answerOptions": [
            {
                "text": "Fatal", 
                "idCode": "01"
            }, 
            {
                "text": "Serious", 
                "idCode": "02"
            }, 
            {
                "text": "Moderate", 
                "idCode": "03"
            }, 
            {
                "text": "Minor", 
                "idCode": "04"
            }, 
            {
                "text": "No Injury", 
                "idCode": "05"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Injury Severity", 
        "id": "P27", 
        "answerType": "multiButton", 
        "display": [
            "injured"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Bridge/Structure Identification Number", 
        "display": [
            "road"
        ], 
        "id": "R1"
    }, 
    {
        "answerType": "header", 
        "helperText": "(specify up to 3)", 
        "question": "Roadway Curvature", 
        "display": [
            "road"
        ], 
        "id": "R2"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Curve Radius", 
        "display": [
            "road"
        ], 
        "id": "R2"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Length", 
        "display": [
            "road"
        ], 
        "id": "R2"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Superelevation", 
        "display": [
            "road"
        ], 
        "id": "R2"
    }, 
    {
        "answerType": "header", 
        "question": "Grade", 
        "display": [
            "road"
        ], 
        "id": "R3"
    }, 
    {
        "answerOptions": [
            {
                "text": "Up (+)", 
                "idCode": "01"
            }, 
            {
                "text": "Down (-)", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "helperText": "Up (+) or Down (-)", 
        "numOptionsAllowed": "1", 
        "question": "Direction of Slope", 
        "id": "R3-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Nearest Percent of Slope", 
        "question": "Percent of Slope", 
        "display": [
            "road"
        ], 
        "id": "R3-S2"
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Part of National Highway System", 
        "id": "R4", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Unknown", 
                "idCode": "99"
            }, 
            {
                "text": "Interstate", 
                "idCode": "01"
            }, 
            {
                "text": "Principal Arterial - Other Freeway or Expressway", 
                "idCode": "02"
            }, 
            {
                "text": "Principal Arterial - Other", 
                "idCode": "03"
            }, 
            {
                "text": "Minor Arterial", 
                "idCode": "04"
            }, 
            {
                "text": "Major Collector", 
                "idCode": "05"
            }, 
            {
                "text": "Minor Collector", 
                "idCode": "06"
            }, 
            {
                "text": "Local", 
                "idCode": "07"
            }, 
            {
                "text": "Unknown Rural", 
                "idCode": "08"
            }, 
            {
                "text": "Interstate", 
                "idCode": "09"
            }, 
            {
                "text": "Principal Arterial - Other Freeway or Expressway", 
                "idCode": "10"
            }, 
            {
                "text": "Principal Arterial - Other", 
                "idCode": "11"
            }, 
            {
                "text": "Minor Arterial", 
                "idCode": "12"
            }, 
            {
                "text": "Collector", 
                "idCode": "13"
            }, 
            {
                "text": "Local", 
                "idCode": "14"
            }, 
            {
                "text": "Unknown Urban", 
                "idCode": "15"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Roadway Functional Class", 
        "id": "R5", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Annual Average Daily Traffic", 
        "display": [
            "road"
        ], 
        "id": "R6"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "AADT (Year)", 
        "display": [
            "road"
        ], 
        "id": "R6-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "AADT", 
        "display": [
            "road"
        ], 
        "id": "R6-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Truck (over 10,000 lbs.) Count or Percentage", 
        "display": [
            "road"
        ], 
        "id": "R6-S3"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Motorcycle Count or Percentage", 
        "display": [
            "road"
        ], 
        "id": "R6-S4"
    }, 
    {
        "answerType": "header", 
        "question": "Width of Lane(s) and SHoulder(s)", 
        "display": [
            "road"
        ], 
        "id": "R7"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(Width in feet)", 
        "question": "Lane Width", 
        "display": [
            "road"
        ], 
        "id": "R7-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(Width in feet)", 
        "question": "Left Shoulder Width", 
        "display": [
            "road"
        ], 
        "id": "R7-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(Width in feet)", 
        "question": "RIght Shoulder Width", 
        "display": [
            "road"
        ], 
        "id": "R7-S3"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(feet)", 
        "question": "Width of Median", 
        "display": [
            "road"
        ], 
        "id": "R8"
    }, 
    {
        "answerOptions": [
            {
                "text": "No Access Control", 
                "idCode": "01"
            }, 
            {
                "text": "Partial Access Control", 
                "idCode": "02"
            }, 
            {
                "text": "Full Access Control", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Access Control", 
        "id": "R9", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Railway Crossing ID", 
        "display": [
            "road"
        ], 
        "id": "R10"
    }, 
    {
        "answerOptions": [
            {
                "text": "Continuous Lighting on Both Sides", 
                "idCode": "01"
            }, 
            {
                "text": "Continuous Lighting on One Side", 
                "idCode": "02"
            }, 
            {
                "text": "No Lighting", 
                "idCode": "03"
            }, 
            {
                "text": "Spot Illumination on Both Sides", 
                "idCode": "04"
            }, 
            {
                "text": "Spot Illumination on One Side", 
                "idCode": "05"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Roadway Lighting", 
        "id": "R11", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Pavement Markings, Longitudinal", 
        "display": [
            "road"
        ], 
        "id": "R12"
    }, 
    {
        "answerOptions": [
            {
                "text": "No Marked Edgeline", 
                "idCode": "01"
            }, 
            {
                "text": "Standard Width Edgeline", 
                "idCode": "02"
            }, 
            {
                "text": "Wide Edgeline", 
                "idCode": "03"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Edgeline Presence/Type", 
        "id": "R12-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Marked Centerline", 
                "idCode": "01"
            }, 
            {
                "text": "Centerline With Centerline Rumble Strip", 
                "idCode": "02"
            }, 
            {
                "text": "Standard Centerline Markings", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Centerline Presence/Type", 
        "id": "R12-S2", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Lane Markings", 
                "idCode": "01"
            }, 
            {
                "text": "Standard Lane Line", 
                "idCode": "02"
            }, 
            {
                "text": "Wide Lane Line", 
                "idCode": "03"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Lane Line Markings", 
        "id": "R12-S3", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Presence/Type of Bicycle Facility", 
        "display": [
            "road"
        ], 
        "id": "R13"
    }, 
    {
        "answerOptions": [
            {
                "text": "None", 
                "idCode": "00"
            }, 
            {
                "text": "Marked Bicycle Lane", 
                "idCode": "01"
            }, 
            {
                "text": "Separate Bicycle Path/Trail", 
                "idCode": "02"
            }, 
            {
                "text": "Unmarked Paved Shoulder", 
                "idCode": "03"
            }, 
            {
                "text": "Wide Curb Lane", 
                "idCode": "04"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Facility", 
        "id": "R13-S1", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Signed Bicycle Route", 
        "id": "R13-S2", 
        "answerType": "multiButton", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not an Intersection or Interchange", 
                "idCode": "00"
            }, 
            {
                "text": "One Lane", 
                "idCode": "01"
            }, 
            {
                "text": "Two Lanes", 
                "idCode": "02"
            }, 
            {
                "text": "Three Lanes", 
                "idCode": "03"
            }, 
            {
                "text": "Four to Six Lanes", 
                "idCode": "04"
            }, 
            {
                "text": "Seven or More Lanes", 
                "idCode": "05"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Mainline Number of Lanes at Intersection", 
        "id": "R14", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Not an Intersection or Interchange", 
                "idCode": "00"
            }, 
            {
                "text": "One Lane", 
                "idCode": "01"
            }, 
            {
                "text": "Two Lanes", 
                "idCode": "02"
            }, 
            {
                "text": "Three Lanes", 
                "idCode": "03"
            }, 
            {
                "text": "Four to Six Lanes", 
                "idCode": "04"
            }, 
            {
                "text": "Seven or More Lanes", 
                "idCode": "05"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Cross-Street Number of Lanes at Intersection", 
        "id": "R15", 
        "answerType": "dropdown", 
        "display": [
            "road"
        ]
    }, 
    {
        "answerType": "header", 
        "helperText": "Total entering vehicles for all approaches of an intersection.", 
        "question": "Total Volume of Entering Vehicles", 
        "display": [
            "road"
        ], 
        "id": "R16"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "(Year)", 
        "question": "AADT", 
        "display": [
            "road"
        ], 
        "id": "R16-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "AADT", 
        "display": [
            "road"
        ], 
        "id": "R16-S2"
    }, 
    {
        "answerOptions": [
            {
                "text": "No Driver Present/Unknown if Driver Present", 
                "idCode": "00"
            }, 
            {
                "text": "Accelerating", 
                "idCode": "01"
            }, 
            {
                "text": "Accelerating and Steering Left", 
                "idCode": "02"
            }, 
            {
                "text": "Accelerating and Steering Right", 
                "idCode": "03"
            }, 
            {
                "text": "Braking and Steering Left", 
                "idCode": "04"
            }, 
            {
                "text": "Braking and Steering Right", 
                "idCode": "05"
            }, 
            {
                "text": "Braking (Lockup)", 
                "idCode": "06"
            }, 
            {
                "text": "Braking (Lockup Unknown)", 
                "idCode": "07"
            }, 
            {
                "text": "Braking (No Lockup)", 
                "idCode": "08"
            }, 
            {
                "text": "No Avoidance Maneuver", 
                "idCode": "09"
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
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Attempted Avoidance Maneuver", 
        "id": "F1", 
        "answerType": "dropdown", 
        "display": [
            "fatalityDriver"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Alcohol Test Type and Results", 
        "display": [
            "fatalityDriver", 
            "fatalityNonmotorist"
        ], 
        "id": "F2"
    }, 
    {
        "answerOptions": [
            {
                "text": "Test Not Given", 
                "idCode": "00"
            }, 
            {
                "text": "Breath Test (AC)", 
                "idCode": "01"
            }, 
            {
                "text": "Blood", 
                "idCode": "02"
            }, 
            {
                "text": "Blood Clot", 
                "idCode": "03"
            }, 
            {
                "text": "Blood Plasma/Serum", 
                "idCode": "04"
            }, 
            {
                "text": "Liver", 
                "idCode": "05"
            }, 
            {
                "text": "Preliminary Breath Test (PBT)", 
                "idCode": "06"
            }, 
            {
                "text": "Unknown if Tested", 
                "idCode": "07"
            }, 
            {
                "text": "Urine", 
                "idCode": "08"
            }, 
            {
                "text": "Vitreous", 
                "idCode": "09"
            }, 
            {
                "text": "Other Test Type", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown Test Type", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Test Type", 
        "id": "F2-S1", 
        "answerType": "dropdown", 
        "display": [
            "fatalityDriver", 
            "fatalityNonmotorist"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Test Result", 
        "display": [
            "fatalityDriver", 
            "fatalityNonmotorist"
        ], 
        "id": "F2-S2"
    }, 
    {
        "answerType": "header", 
        "question": "Drug Test Type and Results", 
        "display": [
            "fatalityDriver", 
            "fatalityNonmotorist"
        ], 
        "id": "F3"
    }, 
    {
        "answerOptions": [
            {
                "text": "Test Not Given", 
                "idCode": "00"
            }, 
            {
                "text": "Blood", 
                "idCode": "01"
            }, 
            {
                "text": "Both Blood and Urine", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown Test Type", 
                "idCode": "03"
            }, 
            {
                "text": "Urine", 
                "idCode": "04"
            }, 
            {
                "text": "Other Test Type", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown if Tested", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Test Type", 
        "id": "F3-S1", 
        "answerType": "dropdown", 
        "display": [
            "fatalityDriver", 
            "fatalityNonmotorist"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Test Result", 
        "display": [
            "fatalityDriver", 
            "fatalityNonmotorist"
        ], 
        "id": "F3-S2"
    }, 
    {
        "answerType": "header", 
        "question": "CMV License Status and Compliance with CDL Endorsements", 
        "display": [
            "lvhmDriver"
        ], 
        "id": "LV1"
    }, 
    {
        "answerOptions": [
            {
                "text": "No CDL", 
                "idCode": "00"
            }, 
            {
                "text": "Canceled or Denied", 
                "idCode": "01"
            }, 
            {
                "text": "Disqualified", 
                "idCode": "02"
            }, 
            {
                "text": "Expired", 
                "idCode": "03"
            }, 
            {
                "text": "Revoked", 
                "idCode": "04"
            }, 
            {
                "text": "Suspended", 
                "idCode": "05"
            }, 
            {
                "text": "Learner's Permit", 
                "idCode": "06"
            }, 
            {
                "text": "Valid", 
                "idCode": "07"
            }, 
            {
                "text": "Other - Not Valid", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown License Status", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "CMV License Status", 
        "id": "LV1-S1", 
        "answerType": "dropdown", 
        "display": [
            "lvhmDriver"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Endorsement(s) Required for the Vehicle", 
                "idCode": "00"
            }, 
            {
                "text": "Endorsement(s) Required, Complied With", 
                "idCode": "01"
            }, 
            {
                "text": "Endorsement(s) Required, Not Complied With", 
                "idCode": "02"
            }, 
            {
                "text": "Endorsement(s) Required, Compliance Unknown", 
                "idCode": "03"
            }, 
            {
                "text": "Unknown if Required", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Compliance with CDL Endorsement(s)", 
        "id": "LV1-S2", 
        "answerType": "dropdown", 
        "display": [
            "lvhmDriver"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Trailer License Plate Number", 
        "display": [
            "lvhm"
        ], 
        "id": "LV2"
    }, 
    {
        "autoMethod": "plateCamera", 
        "helperText": "License Plate 1", 
        "question": "First Trailer Behind Tractor", 
        "id": "LV2-S1", 
        "answerType": "advancedOpenTextBox", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "autoMethod": "plateCamera", 
        "helperText": "License Plate 2", 
        "question": "Second Trailer Behind Tractor", 
        "id": "LV2-S2", 
        "answerType": "advancedOpenTextBox", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "autoMethod": "plateCamera", 
        "helperText": "License Plate 3", 
        "question": "Third Trailer Behind Tractor", 
        "id": "LV2-S3", 
        "answerType": "advancedOpenTextBox", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Trailer VIN(s)", 
        "display": [
            "lvhm"
        ], 
        "id": "LV3"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "VIN 1", 
        "question": "First Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV3-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "VIN 2", 
        "question": "Second Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV3-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "VIN 3", 
        "question": "Third Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV3-S3"
    }, 
    {
        "answerType": "header", 
        "question": "Trailer Make(s)", 
        "display": [
            "lvhm"
        ], 
        "id": "LV4"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Make 1", 
        "question": "First Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV4-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Make 2", 
        "question": "Second Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV4-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Make 3", 
        "question": "Third Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV4-S3"
    }, 
    {
        "answerType": "header", 
        "question": "Trailer Model(s)", 
        "display": [
            "lvhm"
        ], 
        "id": "LV5"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Model 1", 
        "question": "First Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV5-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Model 2", 
        "question": "Second Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV5-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Model 3", 
        "question": "Third Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV5-S3"
    }, 
    {
        "answerType": "header", 
        "question": "Trailer Model Year(s)", 
        "display": [
            "lvhm"
        ], 
        "id": "LV6"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Year 1", 
        "question": "First Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV6-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Year 2", 
        "question": "Second Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV6-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Year 3", 
        "question": "Third Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV6-S3"
    }, 
    {
        "answerType": "header", 
        "question": "Motor Carrier Identification", 
        "display": [
            "lvhm"
        ], 
        "id": "LV7"
    }, 
    {
        "answerOptions": [
            {
                "text": "US DOT Number", 
                "idCode": "01"
            }, 
            {
                "text": "State Number", 
                "idCode": "02"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown/Unable to Determine", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Identification Type", 
        "id": "LV7-S1", 
        "answerType": "multiButton", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Non-US Country Code (e.g. Mexico or Canada) US State Code", 
        "question": "Country/State Code", 
        "display": [
            "lvhm"
        ], 
        "id": "LV7-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "US DOT Number - up to 7 digits          If not a US DOT Number, include State issued Identification Number and State", 
        "question": "Identification Number", 
        "display": [
            "lvhm"
        ], 
        "id": "LV7-S3"
    }, 
    {
        "answerType": "openTextBox", 
        "helperText": "Motor Carrier Name", 
        "question": "Name", 
        "display": [
            "lvhm"
        ], 
        "id": "LV7-S4"
    }, 
    {
        "answerType": "largeTextField", 
        "helperText": "Street Address 1; Street Address 2; City, State   Zip; Country", 
        "question": "Motor Carrier Address", 
        "display": [
            "lvhm"
        ], 
        "id": "LV7-S5"
    }, 
    {
        "answerOptions": [
            {
                "text": "Interstate Carrier", 
                "idCode": "01"
            }, 
            {
                "text": "Intrastate Carrier", 
                "idCode": "02"
            }, 
            {
                "text": "Not in Commerce/Government", 
                "idCode": "03"
            }, 
            {
                "text": "Not in Commerce/Other Truck or Bus", 
                "idCode": "04"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Type of Carrier", 
        "id": "LV7-S6", 
        "answerType": "multiButton", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Vehicle Configuration", 
        "display": [
            "lvhm"
        ], 
        "id": "LV8"
    }, 
    {
        "answerOptions": [
            {
                "text": "Vehicle 10,000 lbs. or less placarded for hazardous materials", 
                "idCode": "01"
            }, 
            {
                "text": "Bus/Large Van (seats for 9-15 occupants, including driver)", 
                "idCode": "02"
            }, 
            {
                "text": "Bus (seats more than 15 occupants, including driver)", 
                "idCode": "03"
            }, 
            {
                "text": "Single-Unit Truck (2-axle and GVWR > 10,000 lbs.)", 
                "idCode": "04"
            }, 
            {
                "text": "Single-Unit Truck (3 or more axles)", 
                "idCode": "05"
            }, 
            {
                "text": "Truck Pulling Trailer(s)", 
                "idCode": "06"
            }, 
            {
                "text": "Truck Tractor (Bobtail)", 
                "idCode": "07"
            }, 
            {
                "text": "Truck Tractor/Semi-Trailer", 
                "idCode": "08"
            }, 
            {
                "text": "Truck Tractor/Double", 
                "idCode": "09"
            }, 
            {
                "text": "Truck Tractor/Triple", 
                "idCode": "10"
            }, 
            {
                "text": "Truck More Than 10,000 lbs., cannot classify", 
                "idCode": "11"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Vehicle Configuration", 
        "id": "LV8-S1", 
        "answerType": "dropdown", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No special sizing", 
                "idCode": "00"
            }, 
            {
                "text": "Over-height", 
                "idCode": "01"
            }, 
            {
                "text": "Over-length", 
                "idCode": "02"
            }, 
            {
                "text": "Over-weight", 
                "idCode": "03"
            }, 
            {
                "text": "Over-width", 
                "idCode": "04"
            }
        ], 
        "helperText": "(choose up to 4)", 
        "numOptionsAllowed": "4", 
        "question": "Special Sizing", 
        "id": "LV8-S2", 
        "answerType": "multiButton", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Non-Permitted Load", 
                "idCode": "01"
            }, 
            {
                "text": "Permitted Load", 
                "idCode": "02"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Permitted?", 
        "id": "LV8-S3", 
        "answerType": "multiButton", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Cargo Body (bobtail, light MV with hazardous materials [HM] placard, etc.)", 
                "idCode": "00"
            }, 
            {
                "text": "Bus", 
                "idCode": "01"
            }, 
            {
                "text": "Auto Transporter", 
                "idCode": "02"
            }, 
            {
                "text": "Cargo Tank", 
                "idCode": "03"
            }, 
            {
                "text": "Concrete Mixer", 
                "idCode": "04"
            }, 
            {
                "text": "Dump", 
                "idCode": "05"
            }, 
            {
                "text": "Flatbed", 
                "idCode": "06"
            }, 
            {
                "text": "Garbage/Refuse", 
                "idCode": "07"
            }, 
            {
                "text": "Grain/Chips/Gravel", 
                "idCode": "08"
            }, 
            {
                "text": "Intermodal Container Chassis", 
                "idCode": "09"
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
                "idCode": "97"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Cargo Body Type", 
        "id": "LV9", 
        "answerType": "dropdown", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Hazardous Materials (Cargo Only)", 
        "display": [
            "lvhm"
        ], 
        "id": "LV10"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Hazardous Materials ID", 
        "display": [
            "lvhm"
        ], 
        "id": "LV10-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Hazardous Materials Class", 
        "display": [
            "lvhm"
        ], 
        "id": "LV10-S2"
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown if Released", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Release of hazardous materials from a cargo compartment (e.g. trailer), cargo container (e.g. tank) or from a package?", 
        "id": "LV10-S3", 
        "answerType": "multiButton", 
        "display": [
            "lvhm"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Total Number of Axles", 
        "display": [
            "lvhm"
        ], 
        "id": "LV11"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Truck Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV11-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "First Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV11-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Second Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV11-S3"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Third Trailer Behind Tractor", 
        "display": [
            "lvhm"
        ], 
        "id": "LV11-S4"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Unit Number of Motor Vehicle Striking Non-Motorist", 
        "display": [
            "nonmotorist"
        ], 
        "id": "NM-S1"
    }, 
    {
        "answerType": "header", 
        "question": "Non-Motorist Action/Circumstance Prior to Crash", 
        "display": [
            "nonmotorist"
        ], 
        "id": "NM2"
    }, 
    {
        "answerOptions": [
            {
                "text": "None", 
                "idCode": "00"
            }, 
            {
                "text": "Adjacent to Roadway (e.g., Shoulder, Median)", 
                "idCode": "01"
            }, 
            {
                "text": "Crossing Roadway", 
                "idCode": "02"
            }, 
            {
                "text": "In Roadway - Other", 
                "idCode": "03"
            }, 
            {
                "text": "Waiting to Cross Roadway", 
                "idCode": "04"
            }, 
            {
                "text": "Walking/Cycling Along Roadway Against Traffic (In or Adjacent to Travel Lane)", 
                "idCode": "05"
            }, 
            {
                "text": "Walking/Cycling Along Roadway with Traffic (In or Adjacent to Travel Lane)", 
                "idCode": "06"
            }, 
            {
                "text": "Walking/Cycling on Sidewalk", 
                "idCode": "07"
            }, 
            {
                "text": "Working in Trafficway (Incident Response)", 
                "idCode": "08"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Action/Circumstance", 
        "id": "NM2-S1", 
        "answerType": "dropdown", 
        "display": [
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Going to or from School (K-12)", 
                "idCode": "01"
            }, 
            {
                "text": "Going to or from Transit", 
                "idCode": "02"
            }, 
            {
                "text": "Not Applicable", 
                "idCode": "97"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Origin/Destination", 
        "id": "NM2-S2", 
        "answerType": "multiButton", 
        "display": [
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Dart/Dash", 
                "idCode": "01"
            }, 
            {
                "text": "Disabled Vehicle-Related (Working on, Pushing, Leaving/Approaching)", 
                "idCode": "02"
            }, 
            {
                "text": "Entering/Exiting Parked/Standing Vehicle", 
                "idCode": "03"
            }, 
            {
                "text": "Failure to Obey Traffic Signs, Signals, or Officer", 
                "idCode": "04"
            }, 
            {
                "text": "Failure to Yield Right-Of-Way", 
                "idCode": "05"
            }, 
            {
                "text": "Improper Passing", 
                "idCode": "06"
            }, 
            {
                "text": "Improper Turn/Merge", 
                "idCode": "07"
            }, 
            {
                "text": "Inattentive (Talking, Eating, etc.)", 
                "idCode": "08"
            }, 
            {
                "text": "In Roadway Improperly (Standing, Lying, Working, Playing)", 
                "idCode": "09"
            }, 
            {
                "text": "Not Visible (Dark Clothing, No Lighting, etc.)", 
                "idCode": "10"
            }, 
            {
                "text": "Wrong-Way Riding or Walking", 
                "idCode": "11"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "helperText": "(choose up to 2)", 
        "numOptionsAllowed": "2", 
        "question": "Non-Motorist Contributing Action(s)/Circumstance(s)", 
        "id": "NM3", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }, 
            {
                "text": "Intersection - Marked Crosswalk", 
                "idCode": "01"
            }, 
            {
                "text": "Intersection - Unmarked Crosswalk", 
                "idCode": "02"
            }, 
            {
                "text": "Intersection - Other", 
                "idCode": "03"
            }, 
            {
                "text": "Median/Crossing Island", 
                "idCode": "04"
            }, 
            {
                "text": "Midblock - Marked Crosswalk", 
                "idCode": "05"
            }, 
            {
                "text": "Shoulder/Roadside", 
                "idCode": "06"
            }, 
            {
                "text": "Travel Lane - Other Location", 
                "idCode": "07"
            }, 
            {
                "text": "Signed Route (no pavement marking)", 
                "idCode": "08"
            }, 
            {
                "text": "Shared Lane Markings", 
                "idCode": "09"
            }, 
            {
                "text": "On-Street Bike Lanes", 
                "idCode": "10"
            }, 
            {
                "text": "On-Street Buffered Bike Lanes", 
                "idCode": "11"
            }, 
            {
                "text": "Separated Bike Lanes", 
                "idCode": "12"
            }, 
            {
                "text": "Off-Street Trails/Sidepaths", 
                "idCode": "13"
            }, 
            {
                "text": "Driveway Access", 
                "idCode": "14"
            }, 
            {
                "text": "Non-Trafficway Area", 
                "idCode": "15"
            }, 
            {
                "text": "Shared-Use Path or Trail", 
                "idCode": "16"
            }, 
            {
                "text": "Sidewalk", 
                "idCode": "17"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Non-Motorist Location at Time of Crash", 
        "id": "NM4", 
        "answerType": "dropdown", 
        "display": [
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "None", 
                "idCode": "00"
            }, 
            {
                "text": "Helmet", 
                "idCode": "01"
            }, 
            {
                "text": "Protective Pads Used (elbows, knees, shins, etc.)", 
                "idCode": "02"
            }, 
            {
                "text": "Reflective Wear (backpack, triangles, etc.)", 
                "idCode": "03"
            }, 
            {
                "text": "Lighting", 
                "idCode": "04"
            }, 
            {
                "text": "Reflectors", 
                "idCode": "05"
            }, 
            {
                "text": "Other", 
                "idCode": "98"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "helperText": "(choose up to 5)", 
        "numOptionsAllowed": "5", 
        "question": "Non-Motorist Safety Equipment", 
        "id": "NM5", 
        "answerType": "dropdownMultiSelect", 
        "display": [
            "nonmotorist"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "Right", 
                "idCode": "03"
            }, 
            {
                "text": "Rear", 
                "idCode": "06"
            }, 
            {
                "text": "Left", 
                "idCode": "09"
            }, 
            {
                "text": "Front", 
                "idCode": "12"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Initial Contact Point on Non-Motorist", 
        "id": "NM6", 
        "answerType": "multiButton", 
        "display": [
            "nonmotorist"
        ]
    }, 
    {
        "answerType": "header", 
        "question": "Motor Vehicle Automated Driving System(s)", 
        "display": [
            "vehicle"
        ], 
        "id": "DV1"
    }, 
    {
        "answerOptions": [
            {
                "text": "No", 
                "idCode": "01"
            }, 
            {
                "text": "Yes", 
                "idCode": "02"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Automated System or Systems in Vehicle", 
        "id": "DV1-S1", 
        "answerType": "multiButton", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Automation", 
                "idCode": "00"
            }, 
            {
                "text": "Driver Assistance", 
                "idCode": "01"
            }, 
            {
                "text": "Partial Automation", 
                "idCode": "02"
            }, 
            {
                "text": "Conditional Automation", 
                "idCode": "03"
            }, 
            {
                "text": "High Automation", 
                "idCode": "04"
            }, 
            {
                "text": "Full Automation", 
                "idCode": "05"
            }, 
            {
                "text": "Automation Level Unknown", 
                "idCode": "06"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Automated System Levels In Vehicle", 
        "id": "DV1-S2", 
        "answerType": "dropdown", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerOptions": [
            {
                "text": "No Automation", 
                "idCode": "00"
            }, 
            {
                "text": "Driver Assistance", 
                "idCode": "01"
            }, 
            {
                "text": "Partial Automation", 
                "idCode": "02"
            }, 
            {
                "text": "Conditional Automation", 
                "idCode": "03"
            }, 
            {
                "text": "High Automation", 
                "idCode": "04"
            }, 
            {
                "text": "Full Automation", 
                "idCode": "05"
            }, 
            {
                "text": "Automation Level Unknown", 
                "idCode": "06"
            }, 
            {
                "text": "Unknown", 
                "idCode": "99"
            }
        ], 
        "numOptionsAllowed": "1", 
        "question": "Automated Systems Levels Engaged at Time of Crash", 
        "id": "DV1-S3", 
        "answerType": "dropdown", 
        "display": [
            "vehicle"
        ]
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Number of vehicles which are large, towing trailers, or carrying hazardous materials", 
        "display": [
            "setup"
        ], 
        "id": "numLvhm"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Address", 
        "display": [
            "info"
        ], 
        "id": "address"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Vehicle owner", 
        "display": [
            "info"
        ], 
        "id": "owner-S1"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Owner's address", 
        "display": [
            "info"
        ], 
        "id": "owner-S2"
    }, 
    {
        "answerType": "openTextBox", 
        "question": "Insurance company name", 
        "display": [
            "info"
        ], 
        "id": "insurance"
    }
]
}
