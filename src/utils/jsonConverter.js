/*
	The JSONconverter is a class component that handles converting the report data to the appropriate export formats.
*/

import { Component } from "react";
import XLSX from "xlsx";
import {
   DRIVER_INJURY_STATUS,
   HAZARDOUS_MATERIALS,
   NONMOTORIST_INJURY_STATUS,
   NUM_TRAILING_UNITS,
   VEHICLE_SIZE,
   WORKZONE_RELATED,
} from "../constants";
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

   Question: How does this currently handle the crash diagram export?

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

   /*
   Converts report JSON into HTML Format. This function builds the HTML export by filling in 
   hard-coded HTML string templates with the answers for each question.
   */
   JSONtoHTML(jsondata) {
      /*
      Retrieves the answer for a specific question given a question ID and returns 
      either the answer or an empty line if there is no answer.
      */
      function getAnswer(answerSubsetData, id) {
         // checks if we're getting the crash diagram
         if ("photo" in answerSubsetData && id === "crashDiagram") {
            let source = answerSubsetData["photo"];
            return source;
         }
         // checks for an existing response
         if (
            "response" in answerSubsetData &&
            id in answerSubsetData["response"]
         ) {
            // if there are multiple answers to the question, combine them with a comma separator
            if (answerSubsetData["response"][id] instanceof Array) {
               return answerSubsetData["response"][id].join(", ");
            }
            // return the response for the question
            return answerSubsetData["response"][id];
         }
         // if there's no existing response, simply return an empty line
         return "<br>";
      }

      /*
      Calculates the number of sections of each type (driver, vehicle, passenger, nonmotorist).
      Returns a dictionary where the keys are the section type and the values are the number of
      sections.
      */
      function getNumSections(data) {
         return {
            driver: data["driver"].length,
            vehicle: data["vehicle"].length,
            passenger: data["passenger"].length,
            nonmotorist: data["nonmotorist"].length,
         };
      }

      /*
      Associates driver and passenger data with their corresponding vehicles. Returns an object
      with two keys: drivers and passengers. The drivers key maps to a dictionary whose keys are
      vehicle ids and the values are the data for the drivers associated with these vehicles.
      The passengers key maps to a dictionary whose keys are the vehicle ids are the values are the 
      data for the passengers associated with these vehicles.
      */
      function getVehicleSectionDict(data) {
         var vehicleSectionDict = {};
         // create object representing driver data - the keys are the vehicle ids for each driver
         // values are driver data
         var drivers = {};
         var driversData = data["driver"];
         for (var i = 0; i < driversData.length; i++) {
            var driverData = driversData[i];
            var vehicle = driverData["vehicle"];
            drivers[vehicle] = driverData;
         }
         // add driver data
         vehicleSectionDict["drivers"] = drivers;

         // create object representing passenger data
         // keys are vehicle ids for each passenger
         // values are a list with data for each passenger
         var passengers = {};
         var passengersData = data["passenger"];
         for (var i = 0; i < passengersData.length; i++) {
            var passengerData = passengersData[i];
            var vehicle = passengerData["vehicle"];
            // check if the vehicle already has passengers or if this is the first passenger for this vehicle
            if (vehicle in passengers) {
               passengers[vehicle].push(passengerData);
            } else {
               passengers[vehicle] = [passengerData];
            }
         }
         // add passengers data
         vehicleSectionDict["passengers"] = passengers;
         return vehicleSectionDict;
      }

      /*
      Given an HTML string (str), a dictionary object containing question answers (answers), and a fill in method,
      this function fills the HTML string with the answers to the questions and returns the filled in HTML string.
      The fill-in method is either "datasection" if filling in a data section or none if filling in a header page.
      If filling in a data section, the data should be filled in by splicing lines together, but if filling in a 
      header page, the data can simply replace a set of "####" characters.
      */
      function fillInHTMLString(str, answers, fillInMethod) {
         var lines = str.split("\n");
         var filledString = "";
         // iterate through each line in the HTML string and fill in this line
         for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            // check if line contains "id=" if so then get the id
            // there could be multiple ids in one line so process all of them
            var pos = line.indexOf("id=", 0);
            while (pos != -1) {
               // extract the next id
               var endPos = line.indexOf(">", pos) - 1;
               var id = line.slice(pos + 4, endPos);
               // get the answer for the question with the id
               var ans = getAnswer(answers, id);
               // put ans into line and replace
               // if filling in a data section, replace data differently (splice
               // lines together as opposed to just replacing text)
               if (fillInMethod == "datasection") {
                  // the crash diagram is a special case where the answer is itself an HTML string
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
            // add filled in line to the output string
            filledString += line + "\n";
         }
         return filledString;
      }

      /*
      Fills in cover page header. This header includes data on the number of vehicles, the number of nonmotorists,
      and other basic crash information. Returns the filled in HTML string for the cover page header.
      */
      function fillCoverPageHeader(answers, numSectionsDict) {
         // retrieve the cover page header
         str = htmlStrings.coverPageHeaderString;
         str = str.replace(
            "# Motor Vehicles",
            numSectionsDict["vehicle"] + " Motor Vehicles"
         );
         str = str.replace(
            "# Non-motorists",
            numSectionsDict["nonmotorist"] + " Non-motorists"
         );
         // fill in other ids
         return fillInHTMLString(str, answers, "header");
      }

      /*
      Fills in the header for a vehicle page. This header includes the vehicle number and some basic information 
      on the vehicle. Returns the filled in HTML string for the vehicle page header.
      */
      function fillVehiclePageHeader(answers, vehicleNum) {
         str = htmlStrings.vehicleHeaderString;
         str = str.replace("Motor Vehicle ###", "Motor Vehicle " + vehicleNum);
         // fill in other ids
         return fillInHTMLString(str, answers, "header");
      }

      /*
      Fills in the header for a driver page. The header includes the vehicle number and some basic information
      on the driver. Returns the filled in HTML string for the driver page header.
      */
      function fillDriverPageHeader(answers, vehicleNum) {
         str = htmlStrings.driverHeaderString;
         str = str.replace(
            "Driver of Motor Vehicle ###",
            "Driver of Motor Vehicle " + vehicleNum
         );
         // fill in other ids
         return fillInHTMLString(str, answers, "header");
      }

      /*
      Fills in the header for a passenger. The header includes the vehicle number, the occuptant number of the
      passenger, and some basic information on the passenger. Returns the filled in HTML String for the 
      passenger page header.
      */
      function fillPassengerPageHeader(
         answers,
         occupantNum,
         vehicleNum,
         hasDriver
      ) {
         str = htmlStrings.passengerHeaderString;
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
         return fillInHTMLString(str, answers, "header");
      }

      /*
      Fills in the header for a nonmotorist. The header includes the number of the nonmotorist and
      other basic information on the nonmotorist. Returns the filled in HTML string for the nonmotorist
      page header.
      */
      function fillNonMotoristPageHeader(answers, nonmotoristNum) {
         str = htmlStrings.nonmotoristHeaderString;
         str = str.replace(
            "Non-Motorist ###",
            "Non-Motorist " + nonmotoristNum
         );
         // fill in other ids
         return fillInHTMLString(str, answers, "header");
      }

      // construct the html outpt string
      // start with the header string for the whole report
      var htmlString = htmlStrings.headerString;
      const numSectionsDict = getNumSections(jsondata);
      // fill in cover page header
      htmlString += fillCoverPageHeader(jsondata["road"][0], numSectionsDict);

      // fill in cover page data sections
      let crashRoadData = jsondata["road"][0];
      // add crash diagram if there is a crash diagram
      if (jsondata["photo"]) {
         crashRoadData = { ...crashRoadData, photo: jsondata["photo"] };
      }
      // add crash data section
      htmlString += fillInHTMLString(
         htmlStrings.crashDataSectionString,
         crashRoadData,
         "datasection"
      );

      // if applicable, add in construction table
      var displayConstruction = false;
      if (getAnswer(jsondata["road"][0], WORKZONE_RELATED) == "Yes") {
         displayConstruction = true;
         htmlString += fillInHTMLString(
            htmlStrings.constructionDataSectionString,
            jsondata["road"][0],
            "datasection"
         );
      }

      // fill in vehicle section pages if applicable
      vehicleSectionDict = getVehicleSectionDict(jsondata);
      for (var i = 0; i < numSectionsDict["vehicle"]; i++) {
         let vehicleNum = i + 1;
         var vehicleAnswers = jsondata["vehicle"][i];

         // add vehicle page header
         if (displayConstruction) {
            htmlString += fillVehiclePageHeader(
               vehicleAnswers,
               vehicleNum
               // -1 used to be here but idk what its purpose is
            );
            displayConstruction = false;
         } else {
            htmlString += fillVehiclePageHeader(vehicleAnswers, vehicleNum);
         }

         // add vehicle data
         htmlString += fillInHTMLString(
            htmlStrings.vehicleDataSectionString1,
            vehicleAnswers,
            "datasection"
         );

         // fill out lvhm vehicle sections if applicable
         let numTrailingUnits = getAnswer(vehicleAnswers, NUM_TRAILING_UNITS);
         // if there is at least one trailer, add first trailer
         if (numTrailingUnits != "Not Applicable") {
            htmlString += fillInHTMLString(
               htmlStrings.firstTrailerDataSectionString,
               vehicleAnswers,
               "datasection"
            );

            // add additional trailers as needed
            if (numTrailingUnits == 2) {
               htmlString += fillInHTMLString(
                  htmlStrings.secondTrailerDataSectionString,
                  vehicleAnswers,
                  "datasection"
               );
            }
            if (numTrailingUnits == 3) {
               htmlString += fillInHTMLString(
                  htmlStrings.thirdTrailerDataSectionString,
                  vehicleAnswers,
                  "datasection"
               );
            }
         }

         let vehicleSize = getAnswer(vehicleAnswers, VEHICLE_SIZE);
         let hazardousMaterials = getAnswer(
            vehicleAnswers,
            HAZARDOUS_MATERIALS
         );
         // add large vehicle hazardous materials section if applicable
         if (
            numTrailingUnits != "Not Applicable" ||
            vehicleSize != "Light (10,000 lbs. or less GVWR/GCWR)" ||
            hazardousMaterials == "Yes"
         ) {
            htmlString += fillInHTMLString(
               htmlStrings.lvhmVehicleDataSectionString,
               vehicleAnswers,
               "datasection"
            );
         }

         // add hazardous data section if applicable
         if (hazardousMaterials == "Yes") {
            htmlString += fillInHTMLString(
               htmlStrings.hazardousDataSectionString,
               vehicleAnswers,
               "datasection"
            );
         }

         // add second vehicle data section
         htmlString += fillInHTMLString(
            htmlStrings.vehicleDataSectionString2,
            vehicleAnswers,
            "datasection"
         );

         // fill out driver page if applicable
         var hasDriver = vehicleAnswers["id"] in vehicleSectionDict["drivers"];
         if (hasDriver) {
            var driverAnswers =
               vehicleSectionDict["drivers"][vehicleAnswers["id"]];
            // add header and first data section
            htmlString += fillDriverPageHeader(driverAnswers, i + 1);
            htmlString += fillInHTMLString(
               htmlStrings.driverDataSectionString1,
               driverAnswers,
               "datasection"
            );

            // display lvhm driver section if applicable
            if (
               numTrailingUnits != "Not Applicable" ||
               vehicleSize != "Light (10,000 lbs. or less GVWR/GCWR)" ||
               hazardousMaterials == "Yes"
            ) {
               htmlString += fillInHTMLString(
                  htmlStrings.lvhmDriverDataSectionString,
                  driverAnswers,
                  "datasection"
               );
            }

            // display injury driver section if applicable
            if (
               getAnswer(driverAnswers, DRIVER_INJURY_STATUS) !=
               "No Apparent Injury"
            ) {
               htmlString += fillInHTMLString(
                  htmlStrings.injuryDriverDataSectionString,
                  driverAnswers,
                  "datasection"
               );
            }

            // add remaining driver data
            htmlString += fillInHTMLString(
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
                  passengerAnswers,
                  j + 1,
                  i + 1,
                  hasDriver
               );
               htmlString += fillInHTMLString(
                  htmlStrings.passengerDataSectionString,
                  passengerAnswers,
                  "datasection"
               );
               if (
                  getAnswer(passengerAnswers, "passenger-injuryStatus") !=
                  "No Apparent Injury"
               ) {
                  htmlString += fillInHTMLString(
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
         htmlString += fillNonMotoristPageHeader(nonmotoristAnswers, i + 1);
         htmlString += fillInHTMLString(
            htmlStrings.nonmotoristDataSectionString,
            nonmotoristAnswers,
            "datasection"
         );

         // add injury data if applicable
         if (
            getAnswer(nonmotoristAnswers, NONMOTORIST_INJURY_STATUS) !=
            "No Apparent Injury"
         ) {
            htmlString += fillInHTMLString(
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
