export const roadQuestions = {
    "data": [
      {
          id: "C4",
          question: "Crash County",
          helperText: "",
          subquestions: null,
          answerType: "openTextbox",
          answerOptions: null,
          maxLength: 30,
          reducer: "roadReducer",
          advanvedType: "Map",
      },
      {
          id: "C11",
          question: "Weather Conditions",
          helperText: "(choose up to 2)",
          subquestions: null,
          answerType: "advancedDropDown",
          answerOptions: [
              {
                  text: "Other",
                  idCode: "98"
              },
              {
                  text: "Unknown",
                  idCode: "99"
              },
              {
                  text: "Blowing Sand, Soil, Dirt",
                  idCode: "01"
              },
              {
                  text: "Blowing Snow",
                  idCode: "02"
              },
              {
                  text: "Clear",
                  idCode: "03"
              },
              {
                  text: "Cloudy",
                  idCode: "04"
              },
              {
                  text: "Fog, Smog, Smoke",
                  idCode: "05"
              },
              {
                  text: "Freezing Rain or Freezing Drizzle",
                  idCode: "06"
              },
              {
                  text: "Rain",
                  idCode: "07"
              },
              {
                  text: "Severe Crosswinds",
                  idCode: "08"
              },
              {
                  text: "Sleet or Hail",
                  idCode: "09"
              },
              {
                  text: "Snow",
                  idCode: "10"
              }
          ],
          maxLength: 30,
          reducer: "roadReducer",
          advanvedType: "Weather",
      },
      {
          id: "C5",
          question: "Crash City/Place",
          helperText: "(Political Jurisdiction)",
          subquestions: null,
          answerType: "openTextbox",
          answerOptions: null,
          maxLength: 30,
          reducer: "roadReducer",
          advanvedType: "Map",
      },
      {
          id: "C6",
          question: "Crash Location",
          helperText: "",
          subquestions: null,
          answerType: "openTextbox",
          answerOptions: null,
          maxLength: 30,
          reducer: "roadReducer",
          advanvedType: "Map",
      },
      {
          id: "C7",
          question: "Latitude",
          helperText: "(degrees.minutes.seconds + compass direction)",
          subquestions: null,
          answerType: "advancedOpenTextbox",
          answerOptions: null,
          maxLength: 30,
          reducer: "roadReducer",
          advanvedType: "Map",
      },
      {
        id: "C8",
        question: "Longitude",
        helperText: "(degrees.minutes.seconds + compass direction)",
        subquestions: null,
        answerType: "advancedOpenTextbox",
        answerOptions: null,
        maxLength: 30,
        reducer: "roadReducer",
        advanvedType: "Map",
      }
    ]
}
