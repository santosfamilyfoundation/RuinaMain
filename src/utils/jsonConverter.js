/*
	The JSONconverter is a class component that handles converting the report data to the appropriate export formats.
*/

import { Component } from "react";
import XLSX from "xlsx";
import * as htmlStrings from "../utils/html_for_pdf_pages/htmlStrings";

export class JSONconverter extends Component {
   constructor(props) {
      super(props);
   }

   /*
   Takes in the format (represented as a string), the report data (represented as an object), and the questions 
   (represented as an object) and converts to the data to the expected format.
   */
   handleConverter(format, data, questions) {
      let file = "";
      switch (format) {
         case "json":
            return (file = JSON.stringify(data));
         case "xlsx":
            return (file = this.JSONtoXLS(data, questions));
         case "html":
         case "pdf":
            return (file = this.JSONtoHTML(data));
         default:
            console.log("Error+" + format);
      }
   }

   /*
   	Converts report JSON into XLS format. The Excel workbook returned contains one sheet for
   	the crahs/road, one sheet for all vehicles, one sheet for all drivers, one sheet for all
	passengers, and one sheet for all nonmotorists.

	We could consider if we want to restructure the vehicle/driver/passenger sheets so that there
	is a separate sheet for every vehicle (with that sheet containing the driver and passenger data
	for that vehicle as well), though this should depend on feedback from users on what is more helpful.

	Returns a string representation of the Excel workbook so that it can be written to a file.
   */
   async JSONtoXLS(jsondata, questions) {
      /*
	   Finds the question name for the question given the question id.
	   */
      function getQuestion(questionUid) {
         var questionName = "";
         // iterate through each section in the questions, and each question in each section
         questions.data.forEach((questionGroup) => {
            // noting that this currently assumes that every question is within a sub-section, which I think is correct,
            // but may want to double check that
            if (questionGroup.questions) {
               questionGroup.questions.forEach((question) => {
                  if (question.humanReadableId === questionUid) {
                     questionName = question.question;
                  }
               });
            }
         });
         return questionName;
      }

      /*
	  Populates the data for the crash sheet. The crash data sheet has two columns: question and answer.
	  The question column contains the text of the question and the answer column contains the answer
	  to the question. If there are multiple answers to the question, the answers are separated by commas. 
	  Returns the populated crash data Excel sheet.
	  */
      function populateCrashSheet(data) {
         // set up sheet with header row
         var ws = XLSX.utils.json_to_sheet([{ A: "question", B: "answer" }], {
            header: ["A", "B"],
            skipHeader: true,
         });

         // gather crash questions and answers
         var rows = [];
         // if there were no responses to the crash/road form, return an empty sheet with just the header
         if (!("response" in data["road"][0])) {
            return ws;
         }
         for (var key in data["road"][0]["response"]) {
            var question = getQuestion(key);
            var answer = data["road"][0]["response"][key];
            // if there are multiple answers, join all the answers
            if (answer instanceof Array) {
               answer = answer.join(", ");
            }
            rows.push({ A: question, B: answer });
         }

         // write data starting at A2
         XLSX.utils.sheet_add_json(ws, rows, {
            skipHeader: true,
            origin: "A2",
         });

         return ws;
      }

      /*
	  Populate data for vehicle sheet. Vehicle sheet contains data on all vehicles involved in the crash. 
	  The Vehicle sheet contains three columns: the vehicle number (an integer starting at 1 for the first 
	  vehicle), the question (contains the text of the question), and answer (contains the answer for the question;
	  if there are multiple answers, the answers are separated by commas).

	  Returns the vehicle sheet as well as a data dictionary correlating the vehicle ID to the vehicle number.
	  The data dictionary is then used when populating the data for the driver and passengers for each vehicle,
	  to ensure consistency and link the data for the driver and passengers to their respective vehicles.
	  */
      function populateVehicleSheet(data) {
         // create sheet with header row
         var ws = XLSX.utils.json_to_sheet(
            [{ A: "vehicle number", B: "question", C: "answer" }],
            { header: ["A", "B", "C"], skipHeader: true }
         );

         // gather vehicle questions and answers
         var rows = [];
         // key is vehicle id and value is vehicle number
         var vehicleNumDict = {};
         // iterate through each vehicle
         for (var i = 0; i < data["vehicle"].length; i++) {
            // get vehicle data for the current vehicle
            var vehicleData = data["vehicle"][i];
            vehicleNumDict[vehicleData["id"]] = i + 1;

            // populate the sheet with data for this vehicle, if there is any
            if ("response" in vehicleData) {
               for (var key in vehicleData["response"]) {
                  var question = getQuestion(key);
                  var answer = vehicleData["response"][key];
                  if (answer instanceof Array) {
                     answer = answer.join(", ");
                  }
                  rows.push({ A: i + 1, B: question, C: answer });
               }
            }
         }

         // write data starting at A2
         XLSX.utils.sheet_add_json(ws, rows, {
            skipHeader: true,
            origin: "A2",
         });

         return [ws, vehicleNumDict];
      }

      /*
	  Populates the driver sheet. Driver sheet contains data on all drivers across all vehicles 
	  involved in the crash. The Driver sheet contains three columns: vehicle number (integer
	  containing the number corresponding to the vehicle that the driver is associated with; starts
	  with 1 for the first vehicle), question (contains the text of the question), and answer
	  (contains the answer to the question; if there are multiple answers, then the answers are 
	  separated by commas).
	  
	  Returns the populated driver data Excel sheet.
	  */
      function populateDriverSheet(data, vehicleNumDict) {
         // set up sheet with header row
         var ws = XLSX.utils.json_to_sheet(
            [{ A: "vehicle number", B: "question", C: "answer" }],
            { header: ["A", "B", "C"], skipHeader: true }
         );

         // gather driver questions and answers
         var rows = [];

         // iterate through each driver
         for (var i = 0; i < data["driver"].length; i++) {
            var driverData = data["driver"][i];
            // find the corresponding vehicle num for this driver
            var vehicleNum = vehicleNumDict[driverData["vehicle"]];
            // add driver data to sheet
            if ("response" in driverData) {
               for (var key in driverData["response"]) {
                  var question = getQuestion(key);
                  var answer = driverData["response"][key];
                  if (answer instanceof Array) {
                     answer = answer.join(", ");
                  }
                  rows.push({ A: vehicleNum, B: question, C: answer });
               }
            }
         }

         // write data starting at A2
         XLSX.utils.sheet_add_json(ws, rows, {
            skipHeader: true,
            origin: "A2",
         });

         return ws;
      }

      /*
	  Populates the passenger sheet. Passenger sheet contains data on all passengers across all 
	  vehicles involved in the crash. The Passenger sheet contains four columns: vehicle number (contains
	  the number of the vehicle the passenger is associated with; starts with 1 for the first vehicle),
	  passenger number (contains the number of the passenger; starts with 1 for the first passenger),
	  question (contains the text of the question), and answer (contains the answer to the question; if there
	  were multiple answers, the answers are joined with commas).
	  
	  Returns the populated passenger data Excel sheet.
	  */
      function populatePassengerSheet(data, vehicleNumDict) {
         // set up sheet with header row
         var ws = XLSX.utils.json_to_sheet(
            [
               {
                  A: "vehicle number",
                  B: "passenger number",
                  C: "question",
                  D: "answer",
               },
            ],
            { header: ["A", "B", "C", "D"], skipHeader: true }
         );

         // gather passenger questions and answers
         var rows = [];
         // key is the vehicle id and value is all the passenger ids for this vehicle
         var passengerNumDict = {};

         // iterate through each passenger
         for (var i = 0; i < data["passenger"].length; i++) {
            // get the corresponding vehicle number for this passenger
            var passengerData = data["passenger"][i];
            var vehicleNum = vehicleNumDict[passengerData["vehicle"]];

            // adds passenger to the vehicle in the passenger dictionary
            if (passengerData["vehicle"] in passengerNumDict) {
               // increments passenger num by 1
               var passengerNum =
                  passengerNumDict[passengerData["vehicle"]].length + 1;
               // add passenger to the vehicle
               passengerNumDict[passengerData["vehicle"]].push(
                  passengerData["id"]
               );
            } else {
               // adding first passenger for this vehicle
               var passengerNum = 1;
               passengerNumDict[passengerData["vehicle"]] = [
                  passengerData["id"],
               ];
            }

            // add data for the passenger to the sheet
            if ("response" in passengerData) {
               for (var key in passengerData["response"]) {
                  var question = getQuestion(key);
                  var answer = passengerData["response"][key];
                  if (answer instanceof Array) {
                     answer = answer.join(", ");
                  }
                  rows.push({
                     A: vehicleNum,
                     B: passengerNum,
                     C: question,
                     D: answer,
                  });
               }
            }
         }

         // write data starting at A2
         XLSX.utils.sheet_add_json(ws, rows, {
            skipHeader: true,
            origin: "A2",
         });

         return ws;
      }

	  /*
	  Populates the Nonmotorist sheet. Nonmotorist sheet contains data on each nonmotorist involved in 
	  the crash. The Nonmotorist sheet has 3 columns: nonmotorist number (number for each nonmotorist;
	  starting at 1 for the first nonmotorist), question (contains the text of the question), and
	  answer (contains the answer for the question; if there are mulitple answers, they are separated
	  by commas).

	  Returns an Excel sheet with the populated nonmotorist data.
	  */
      function populateNonmotoristSheet(data) {
         // set up sheet with header row
         var ws = XLSX.utils.json_to_sheet(
            [{ A: "nonmotorist number", B: "question", C: "answer" }],
            { header: ["A", "B", "C"], skipHeader: true }
         );

         // gather nonmotorist questions and answers
         var rows = [];
         // iterate through each nonmotorist
         for (var i = 0; i < data["nonmotorist"].length; i++) {
            var nonmotoristData = data["nonmotorist"][i];
            if ("response" in nonmotoristData) {
               for (var key in nonmotoristData["response"]) {
                  var question = getQuestion(key);
                  var answer = nonmotoristData["response"][key];
                  if (answer instanceof Array) {
                     answer = answer.join(", ");
                  }
                  rows.push({ A: i + 1, B: question, C: answer });
               }
            }
         }

         // write data starting at A2
         XLSX.utils.sheet_add_json(ws, rows, {
            skipHeader: true,
            origin: "A2",
         });

         return ws;
      }

      // build new workbook
      const wb = XLSX.utils.book_new();
      // create the crash sheet
      const crashWS = populateCrashSheet(jsondata);
      XLSX.utils.book_append_sheet(wb, crashWS, "road");
      // create the vehicle sheet
      const [vehicleWS, vehicleNumDict] = populateVehicleSheet(jsondata);
      XLSX.utils.book_append_sheet(wb, vehicleWS, "vehicle");
      // create the driver sheet
      const driverWS = populateDriverSheet(jsondata, vehicleNumDict);
      XLSX.utils.book_append_sheet(wb, driverWS, "driver");
      // create the passenger sheet
      const passengerWS = populatePassengerSheet(jsondata, vehicleNumDict);
      XLSX.utils.book_append_sheet(wb, passengerWS, "passenger");
      // create the nonmotorist sheet
      const nonmotoristWS = populateNonmotoristSheet(jsondata);
      XLSX.utils.book_append_sheet(wb, nonmotoristWS, "nonmotorist");

      // output workbook so it can be written to a file
      const output = (str) => str;
      const wbout = XLSX.write(wb, { type: "base64", bookType: "xlsx" });
      return output(wbout);
   }

   JSONtoHTML(jsondata) {
      function getAnswer(answerSubsetData, id) {
         if ("photo" in answerSubsetData && id === "crashDiagram") {
            let source = answerSubsetData["photo"];
            return source;
         }
         if (
            "response" in answerSubsetData &&
            id in answerSubsetData["response"]
         ) {
            if (answerSubsetData["response"][id] instanceof Array) {
               return answerSubsetData["response"][id].join(", ");
            }
            return answerSubsetData["response"][id];
         }
         return "<br>";
      }

      function getNumSections(data) {
         return {
            driver: data["driver"].length,
            vehicle: data["vehicle"].length,
            passenger: data["passenger"].length,
            nonmotorist: data["nonmotorist"].length,
         };
      }

      function getVehicleSectionDict(data) {
         var vehicleSectionDict = {};
         // add in drivers
         var drivers = {};
         for (var i = 0; i < data["driver"].length; i++) {
            drivers[data["driver"][i]["vehicle"]] = data["driver"][i];
         }
         vehicleSectionDict["drivers"] = drivers;
         // add in passengers
         var passengers = {};
         for (var i = 0; i < data["passenger"].length; i++) {
            var key = data["passenger"][i]["vehicle"];
            if (key in passengers) {
               passengers[key].push(data["passenger"][i]);
            } else {
               passengers[key] = [data["passenger"][i]];
            }
         }
         vehicleSectionDict["passengers"] = passengers;
         return vehicleSectionDict;
      }

      function processQuestionIds(str, answers, fillInMethod) {
         var lines = str.split("\n");
         var filledString = "";
         for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            // check if line contains "id=" if so then get the id
            // there could be multiple ids in one line so process all of them
            var pos = line.indexOf("id=", 0);
            while (pos != -1) {
               // extract the id
               var endPos = line.indexOf(">", pos) - 1;
               var id = line.slice(pos + 4, endPos);
               var ans = getAnswer(answers, id);
               // put ans into line and replace
               if (fillInMethod == "datasection") {
                  if (id === "crashDiagram") {
                     line = ans;
                  } else {
                     line =
                        line.slice(0, endPos + 2) +
                        ans +
                        line.slice(endPos + 2);
                  }
               } else {
                  line = line.replace("###", ans);
               }
               pos = line.indexOf("id=", pos + 1);
            }
            filledString += line + "\n";
         }
         return filledString;
      }

      function fillCoverPageHeader(str, answers, numSectionsDict) {
         str = str.replace(
            "# Motor Vehicles",
            numSectionsDict["vehicle"] + " Motor Vehicles"
         );
         str = str.replace(
            "# Non-motorists",
            numSectionsDict["nonmotorist"] + " Non-motorists"
         );
         // fill in other ids
         return processQuestionIds(str, answers, "header");
      }

      function fillVehiclePageHeader(str, answers, vehicleNum) {
         str = str.replace("Motor Vehicle ###", "Motor Vehicle " + vehicleNum);
         // fill in other ids
         return processQuestionIds(str, answers, "header");
      }

      function fillDriverPageHeader(str, answers, vehicleNum) {
         str = str.replace(
            "Driver of Motor Vehicle ###",
            "Driver of Motor Vehicle " + vehicleNum
         );
         // fill in other ids
         return processQuestionIds(str, answers, "header");
      }

      function fillPassengerPageHeader(
         str,
         answers,
         occupantNum,
         vehicleNum,
         hasDriver
      ) {
         str = str.replace(
            "Occupant ### of Motor Vehicle ###",
            "Occupant " + occupantNum + " of Motor Vehicle " + vehicleNum
         );
         if (hasDriver) {
            str = str.replace("Type: ###", "Type: " + "Passenger");
         } else {
            str = str.replace(
               "Type: ###",
               "Type: " + "Occupant of MV Not in Transport"
            );
         }
         // fill in other ids
         return processQuestionIds(str, answers, "header");
      }

      function fillNonMotoristPageHeader(str, answers, nonmotoristNum) {
         str = str.replace(
            "Non-Motorist ###",
            "Non-Motorist " + nonmotoristNum
         );
         // fill in other ids
         return processQuestionIds(str, answers, "header");
      }

      var htmlString = htmlStrings.headerString;
      const numSectionsDict = getNumSections(jsondata);
      // fill in cover page header
      htmlString += fillCoverPageHeader(
         htmlStrings.coverPageHeaderString,
         jsondata["road"][0],
         numSectionsDict
      );
      // fill in cover page data sections
      let crashRoadData = jsondata["road"][0];
      if (jsondata["photo"]) {
         crashRoadData = { ...crashRoadData, photo: jsondata["photo"] };
      }
      htmlString += processQuestionIds(
         htmlStrings.crashDataSectionString,
         crashRoadData,
         "datasection"
      );
      // if applicable, add in construction table
      var displayConstruction = false;
      if (getAnswer(jsondata["road"][0], "road-workZoneRelated") == "Yes") {
         displayConstruction = true;
         htmlString += processQuestionIds(
            htmlStrings.constructionDataSectionString,
            jsondata["road"][0],
            "datasection"
         );
      }
      // fill in vehicle section pages if applicable
      vehicleSectionDict = getVehicleSectionDict(jsondata);
      for (var i = 0; i < numSectionsDict["vehicle"]; i++) {
         // fill out vehicle page
         var vehicleAnswers = jsondata["vehicle"][i];
         if (displayConstruction) {
            htmlString += fillVehiclePageHeader(
               htmlStrings.vehicleHeaderString,
               vehicleAnswers,
               i + 1,
               -1
            );
            displayConstruction = false;
         } else {
            htmlString += fillVehiclePageHeader(
               htmlStrings.vehicleHeaderString,
               vehicleAnswers,
               i + 1
            );
         }
         htmlString += processQuestionIds(
            htmlStrings.vehicleDataSectionString1,
            vehicleAnswers,
            "datasection"
         );
         // fill out lvhm vehicle sections if applicable
         if (
            getAnswer(vehicleAnswers, "vehicle-numTrailingUnits") !=
            "Not Applicable"
         ) {
            htmlString += processQuestionIds(
               htmlStrings.firstTrailerDataSectionString,
               vehicleAnswers,
               "datasection"
            );
         }
         if (
            getAnswer(vehicleAnswers, "vehicle-numTrailingUnits") == "2" ||
            getAnswer(vehicleAnswers, "vehicle-numTrailingUnits") == "3"
         ) {
            htmlString += processQuestionIds(
               htmlStrings.secondTrailerDataSectionString,
               vehicleAnswers,
               "datasection"
            );
         }
         if (getAnswer(vehicleAnswers, "vehicle-numTrailingUnits") == "3") {
            htmlString += processQuestionIds(
               htmlStrings.thirdTrailerDataSectionString,
               vehicleAnswers,
               "datasection"
            );
         }
         if (
            getAnswer(vehicleAnswers, "vehicle-numTrailingUnits") !=
               "Not Applicable" ||
            getAnswer(vehicleAnswers, "vehicle-size") !=
               "Light (10,000 lbs. or less GVWR/GCWR)" ||
            getAnswer(vehicleAnswers, "vehicle-hazardousMaterials") == "Yes"
         ) {
            htmlString += processQuestionIds(
               htmlStrings.lvhmVehicleDataSectionString,
               vehicleAnswers,
               "datasection"
            );
         }
         if (getAnswer(vehicleAnswers, "vehicle-hazardousMaterials") == "Yes") {
            htmlString += processQuestionIds(
               htmlStrings.hazardousDataSectionString,
               vehicleAnswers,
               "datasection"
            );
         }
         htmlString += processQuestionIds(
            htmlStrings.vehicleDataSectionString2,
            vehicleAnswers,
            "datasection"
         );
         // fill out driver page if applicable
         var hasDriver;
         vehicleAnswers["id"] in vehicleSectionDict["drivers"]
            ? (hasDriver = true)
            : (hasDriver = false);
         if (hasDriver) {
            var driverAnswers =
               vehicleSectionDict["drivers"][vehicleAnswers["id"]];
            htmlString += fillDriverPageHeader(
               htmlStrings.driverHeaderString,
               driverAnswers,
               i + 1
            );
            htmlString += processQuestionIds(
               htmlStrings.driverDataSectionString1,
               driverAnswers,
               "datasection"
            );
            if (
               getAnswer(vehicleAnswers, "vehicle-numTrailingUnits") !=
                  "Not Applicable" ||
               getAnswer(vehicleAnswers, "vehicle-size") !=
                  "Light (10,000 lbs. or less GVWR/GCWR)" ||
               getAnswer(vehicleAnswers, "vehicle-hazardousMaterials") == "Yes"
            ) {
               // display lvhm driver section
               htmlString += processQuestionIds(
                  htmlStrings.lvhmDriverDataSectionString,
                  driverAnswers,
                  "datasection"
               );
            }
            if (
               getAnswer(driverAnswers, "driver-injuryStatus") !=
               "No Apparent Injury"
            ) {
               // display injury driver section
               htmlString += processQuestionIds(
                  htmlStrings.injuryDriverDataSectionString,
                  driverAnswers,
                  "datasection"
               );
            }
            htmlString += processQuestionIds(
               htmlStrings.driverDataSectionString2,
               driverAnswers,
               "datasection"
            );
         }
         // fill out passenger pages if applicable
         if (vehicleAnswers["id"] in vehicleSectionDict["passengers"]) {
            var passengers =
               vehicleSectionDict["passengers"][vehicleAnswers["id"]];
            for (var j = 0; j < passengers.length; j++) {
               var passengerAnswers = passengers[j];
               htmlString += fillPassengerPageHeader(
                  htmlStrings.passengerHeaderString,
                  passengerAnswers,
                  j + 1,
                  i + 1,
                  hasDriver
               );
               htmlString += processQuestionIds(
                  htmlStrings.passengerDataSectionString,
                  passengerAnswers,
                  "datasection"
               );
               if (
                  getAnswer(passengerAnswers, "passenger-injuryStatus") !=
                  "No Apparent Injury"
               ) {
                  htmlString += processQuestionIds(
                     htmlStrings.injuryPassengerDataSectionString,
                     passengerAnswers,
                     "datasection"
                  );
               }
            }
         }
      }
      // fill out non motorist pages if applicable
      for (var i = 0; i < numSectionsDict["nonmotorist"]; i++) {
         var nonmotoristAnswers = jsondata["nonmotorist"][i];
         htmlString += fillNonMotoristPageHeader(
            htmlStrings.nonmotoristHeaderString,
            nonmotoristAnswers,
            i + 1
         );
         htmlString += processQuestionIds(
            htmlStrings.nonmotoristDataSectionString,
            nonmotoristAnswers,
            "datasection"
         );
         if (
            getAnswer(nonmotoristAnswers, "nonmotorist-injuryStatus") !=
            "No Apparent Injury"
         ) {
            htmlString += processQuestionIds(
               htmlStrings.injuryNonmotoristDataSectionString,
               nonmotoristAnswers,
               "datasection"
            );
         }
      }
      // concatenate strings to form complete HTML
      htmlString += htmlStrings.tailString;
      return htmlString;
   }
}
export default JSONconverter;
