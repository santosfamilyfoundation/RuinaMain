import {Component} from 'react';
import XLSX from 'xlsx';
import * as htmlStrings from '../utils/html_for_pdf_pages/htmlStrings'
import {testAnswers} from '../data/testAnswers';

export class JSONconverter extends Component {
	constructor(props) {
		super(props);
	}
	handleConverter(format, data) {
		let file;
		switch (format) {
			case 'json':
				return file = JSON.stringify(data);
			case 'xlsx':
				return file = this.JSONtoXLS(data);
			case 'html': case 'pdf':
				return file = this.JSONtoHTML(data);
			case 'pdftest':
				return this.JSONtoHTML(testAnswers);
			default:
				console.log("Error+"+format)
		}
	}

	JSONtoXLS(jsondata) {
		// Requires node # Don't use this library because https://stackoverflow.com/questions/39046429/react-native-unable-to-resolve-module-fs, require manually change files in node_modules
		// let json2xls = require('json2xls');
		// var xlsfile = json2xls(xlsdata);

		let flatten = require('flat');

		console.log("json data: ", jsondata);

		// build new workbook
		const wb = XLSX.utils.book_new();
		// create worksheet
		for (var key in jsondata){
			var data = jsondata[key];
			// flatten nested JSON into one layer
			var flatData = flatten(
				data,
				{
			    transformKey: function(key){
						// if the key is a number, then get remove
						if (key.match(/^[0-9]+$/) != null) {
							return '';
						}
			      return key.charAt(0) + key.substring(1, key.length);
			    }
				}
				);
			console.log("data: ", data);
			console.log("flattened data: ", flatData);
			let ws = XLSX.utils.json_to_sheet([flatData]);
			console.log("key: ", key, ", work sheet: ", ws);
			XLSX.utils.book_append_sheet(wb, ws, key);
		}
		console.log("workbook: ", wb);

		// output workbook so it can be written to a file
		const output = str => str;
		const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });
		return output(wbout);
	}

	JSONtoHTML(jsondata) {
		function getAnswer(answerSubsetData, id) {
			if (("response" in answerSubsetData) && (id in answerSubsetData["response"])) {
				if (answerSubsetData["response"][id] instanceof Array) {
					return answerSubsetData["response"][id].join(", ")
				}
				return answerSubsetData["response"][id];
			}
			return "<br>";
		};

		function getNumSections(data) {
		  return {
		    "driver": data["driver"].length,
		    "vehicle": data["vehicle"].length,
		    "passenger": data["passenger"].length,
		    "nonmotorist": data["nonmotorist"].length
		  };
		};

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
		};

		function processQuestionIds(str, answers, fillInMethod) {
			var lines = str.split("\n");
			var filledString = "";
			for (var i = 0; i < lines.length; i++){
			  // console.log(crashDataSectionLines[i]);
			  var line = lines[i];
			  // check if line contains "id=" if so then get the id
				// there could be multiple ids in one line so process all of them
				var pos = line.indexOf("id=", 0);
				// var j = pos;
				while (pos != -1) {
					// extract the id
			    var id = line.slice(pos+4, pos+12);
					var ans = getAnswer(answers, id);
					// put ans into line and replace
					if (fillInMethod == "datasection") {
						line = line.slice(0, pos+14) + ans + line.slice(pos+14);
					} else {
						line = line.replace("###", ans);
					}
					pos = line.indexOf("id=", pos+1);
					// j = pos;
				}
				filledString += line + "\n";
			}
			return filledString;
		};

		function fillCoverPageHeader(str, answers, numSectionsDict) {
			str = str.replace("# Motor Vehicles", numSectionsDict["vehicle"]+" Motor Vehicles");
			str = str.replace("# Non-motorists", numSectionsDict["nonmotorist"]+" Non-motorists");
			// fill in other ids
			return processQuestionIds(str, answers, "header");
		};

		function fillVehiclePageHeader(str, answers, vehicleNum) {
			str = str.replace("Motor Vehicle ###", "Motor Vehicle "+vehicleNum);
			// fill in other ids
			return processQuestionIds(str, answers, "header");
		};

		function fillDriverPageHeader(str, answers, vehicleNum) {
			str = str.replace("Driver of Motor Vehicle ###", "Driver of Motor Vehicle "+vehicleNum);
			// fill in other ids
			return processQuestionIds(str, answers, "header");
		};

		function fillPassengerPageHeader(str, answers, occupantNum, vehicleNum, hasDriver) {
			str = str.replace("Occupant ### of Motor Vehicle ###", "Occupant "+occupantNum+" of Motor Vehicle "+vehicleNum);
			if (hasDriver) {
				str = str.replace("Type: ###", "Type: "+"Passenger");
			} else {
				str = str.replace("Type: ###", "Type: "+"Occupant of MV Not in Transport");
			}
			// fill in other ids
			return processQuestionIds(str, answers, "header");
		};

		function fillNonMotoristPageHeader(str, answers, nonmotoristNum) {
			str = str.replace("Non-Motorist ###", "Non-Motorist "+nonmotoristNum);
			// fill in other ids
			return processQuestionIds(str, answers, "header");
		}
		var htmlString = htmlStrings.headerString;
		const numSectionsDict = getNumSections(jsondata);
		// fill in cover page header
		htmlString += fillCoverPageHeader(htmlStrings.coverPageHeaderString, jsondata["road"][0], numSectionsDict);
		// fill in cover page data sections
		htmlString += processQuestionIds(htmlStrings.crashDataSectionString, jsondata["road"][0], "datasection");
		// if applicable, add in construction table
		var displayConstruction = false;
		if (getAnswer(jsondata["road"][0], "34oHCyQs") == "Yes") {
			displayConstruction = true;
			htmlString += processQuestionIds(htmlStrings.constructionDataSectionString, jsondata["road"][0], "datasection");
		}
		// fill in vehicle section pages if applicable
		vehicleSectionDict = getVehicleSectionDict(jsondata);
		for (var i = 0; i < numSectionsDict["vehicle"]; i++) {
			// fill out vehicle page
			var vehicleAnswers = jsondata["vehicle"][i];
			if (displayConstruction) {
				htmlString += fillVehiclePageHeader(htmlStrings.vehicleHeaderString, vehicleAnswers, i+1, -1);
				displayConstruction = false;
			} else {
				htmlString += fillVehiclePageHeader(htmlStrings.vehicleHeaderString, vehicleAnswers, i+1);
			}
			htmlString += processQuestionIds(htmlStrings.vehicleDataSectionString1, vehicleAnswers, "datasection");
			// fill out lvhm vehicle sections if applicable
			if (getAnswer(vehicleAnswers, "ovVntlnU") != "Not Applicable") {
				htmlString += processQuestionIds(htmlStrings.firstTrailerDataSectionString, vehicleAnswers, "datasection");
			}
			if ((getAnswer(vehicleAnswers, "ovVntlnU") == "2") || (getAnswer(vehicleAnswers, "ovVntlnU") == "3")) {
				htmlString += processQuestionIds(htmlStrings.secondTrailerDataSectionString, vehicleAnswers, "datasection");
			}
			if (getAnswer(vehicleAnswers, "ovVntlnU") == "3") {
				htmlString += processQuestionIds(htmlStrings.thirdTrailerDataSectionString, vehicleAnswers, "datasection");
			}
			if ((getAnswer(vehicleAnswers, "ovVntlnU") != "Not Applicable") || (getAnswer(vehicleAnswers, "CynWHwxP") != "Light (10,000 lbs. or less GVWR/GCWR)") || (getAnswer(vehicleAnswers, "sM5HGjcV") == "Yes")) {
				htmlString += processQuestionIds(htmlStrings.lvhmVehicleDataSectionString, vehicleAnswers, "datasection");
			}
			if (getAnswer(vehicleAnswers, "sM5HGjcV") == "Yes") {
				htmlString += processQuestionIds(htmlStrings.hazardousDataSectionString, vehicleAnswers, "datasection");
			}
			htmlString += processQuestionIds(htmlStrings.vehicleDataSectionString2, vehicleAnswers, "datasection");
			// fill out driver page if applicable
			var hasDriver;
			(vehicleAnswers["id"] in vehicleSectionDict["drivers"]) ? hasDriver = true : hasDriver = false;
			if (hasDriver) {
				var driverAnswers = vehicleSectionDict["drivers"][vehicleAnswers["id"]];
				htmlString += fillDriverPageHeader(htmlStrings.driverHeaderString, driverAnswers, i+1);
				htmlString += processQuestionIds(htmlStrings.driverDataSectionString1, driverAnswers, "datasection");
				if ((getAnswer(vehicleAnswers, "ovVntlnU") != "Not Applicable") || (getAnswer(vehicleAnswers, "CynWHwxP") != "Light (10,000 lbs. or less GVWR/GCWR)") || (getAnswer(vehicleAnswers, "sM5HGjcV") == "Yes")) {
					// display lvhm driver section
					htmlString += processQuestionIds(htmlStrings.lvhmDriverDataSectionString, driverAnswers, "datasection");
				}
				if (getAnswer(driverAnswers, "TNNilZo2") != "No Apparent Injury") {
					// display injury driver section
					htmlString += processQuestionIds(htmlStrings.injuryDriverDataSectionString, driverAnswers, "datasection");
				}
				htmlString += processQuestionIds(htmlStrings.driverDataSectionString2, driverAnswers, "datasection");
			}
			// fill out passenger pages if applicable
			if (vehicleAnswers["id"] in vehicleSectionDict["passengers"]) {
				var passengers = vehicleSectionDict["passengers"][vehicleAnswers["id"]];
				for (var j = 0; j < passengers.length; j++) {
					var passengerAnswers = passengers[j];
					htmlString += fillPassengerPageHeader(htmlStrings.passengerHeaderString, passengerAnswers, j+1, i+1, hasDriver);
					htmlString += processQuestionIds(htmlStrings.passengerDataSectionString, passengerAnswers, "datasection");
					if (getAnswer(passengerAnswers, "NJqVP8AH") != "No Apparent Injury") {
						htmlString += processQuestionIds(htmlStrings.injuryPassengerDataSectionString, passengerAnswers, "datasection");
					}
				}
			}
		}
		// fill out non motorist pages if applicable
		for (var i = 0; i < numSectionsDict["nonmotorist"]; i++) {
			var nonmotoristAnswers = jsondata["nonmotorist"][i];
			htmlString += fillNonMotoristPageHeader(htmlStrings.nonmotoristHeaderString, nonmotoristAnswers, i+1);
			htmlString += processQuestionIds(htmlStrings.nonmotoristDataSectionString, nonmotoristAnswers, "datasection");
			if (getAnswer(nonmotoristAnswers, "WRishqwU") != "No Apparent Injury") {
				htmlString += processQuestionIds(htmlStrings.injuryNonmotoristDataSectionString, nonmotoristAnswers, "datasection");
			}
		}
		// concatenate strings to form complete HTML
		htmlString += htmlStrings.tailString;
		return htmlString;
	}

}
export default JSONconverter;
