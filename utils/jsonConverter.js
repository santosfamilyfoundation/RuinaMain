// import exportfromJSON from 'export-from-json';
// import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
//import RNFetchBlob from 'react-native-fetch-blob';
import {Component} from 'react';
// import ReactDOM from 'react-dom';
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
			case 'pdf':
				return file = this.JSONtoPDF(data);
			case 'csv':
				return file = this.JSONtoCSV(data);
			case 'xlsx':
				return file = this.JSONtoXLS(data);
			case 'html':
				return file = this.JSONtoHTML(data);
			case 'htmlforpdf':
				return this.JSONtoHTML2(testAnswers);
			default:
				console.log("Error+"+format)
		}
	}

	async JSONtoPDF(jsondata) {

		return('PDF conversion goes here');

	// 	// console.log(jsondata.Driver)
 //        const driver = jsondata.Driver


	// 	//const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

	// 	// const pageDrive = PDFPage.create()
	// 	const pdfDoc = await PDFDocument.create()

	// 	const driverPage = pdfDoc.addPage()


	// 	for (let key in driver) {
	// 		driverPage.drawText(JSON.stringify(driver[key]))
	// 		then((success) => {
	// 	    	console.log('text added')
	// 		})
	// 		.catch((err) => {
 //    			console.log('text not added' + err.message)
	// 		})
	// }


 //        const pdfBytes = await pdfDoc.save()
 //        var buff = new Buffer(pdfBytes, 'base64');

		// console.log("Converter reached");
	}

	JSONtoCSV(jsondata) {

		/*
		table nicer with just driver,
		reformat jsondata?
		add processer?
		*/
        const driver = jsondata.Driver

		//let converter = require('json2csv');

		// let jsontocsvCallback = function (err, csv) {
    	// 	if (err) throw err;
    	// 	// replace with return csv
    	// 	var pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`;
		//     RNFetchBlob.fs.writeFile(pathToWrite, csv, 'utf8')
		// 	.then(() => {
		// 	   console.log(`wrote file ${pathToWrite}`);
		// 	})
		// 	.catch(err => console.error(err));
		// }

		//let convertedJson = converter.parse(jsondata);
		console.log("Converted json in csv: ");
		return 'convertedJson';

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

	JSONtoHTML2(jsondata) {
		function getAnswer(answerSubsetData, id) {
			if (id in answerSubsetData["response"]) {
				return answerSubsetData["response"][id];
			}
			return "  ";
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

		function processQuestionIds(str, answers, fillInMethod, pageNum=null, totalNumPages=null) {
			if (pageNum) {
				var str = str.replace("Page ### of ###", "Page "+pageNum+" of "+totalNumPages);
			}
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

		function fillCoverPageHeader(str, answers, numSectionsDict, pageNum, totalNumPages) {
			var str = str.replace("Page ### of ###", "Page "+pageNum+" of "+totalNumPages);
			var str = str.replace("# Motor Vehicles", numSectionsDict["vehicle"]+" Motor Vehicles");
			var str = str.replace("# Non-motorists", numSectionsDict["nonmotorist"]+" Non-motorists");
			// fill in other ids
			return processQuestionIds(str, answers, "header");
		};

		function fillVehiclePageHeader(str, answers, vehicleNum, pageNum, totalNumPages) {
			if (pageNum == -1) {
				var str = str.replace("Page ### of ###", "");
			} else {
				var str = str.replace("Page ### of ###", "Page "+pageNum+" of "+totalNumPages);
			}
			var str = str.replace("Motor Vehicle ###", "Motor Vehicle  "+vehicleNum);
			// fill in other ids
			return processQuestionIds(str, answers, "header");
		};

		var htmlString = htmlStrings.headerString;
		var pageNum = 1;
		const numSectionsDict = getNumSections(jsondata);
		const totalNumPages = 1 + numSectionsDict["vehicle"]*2;
		// fill in cover page header
		htmlString += fillCoverPageHeader(htmlStrings.coverPageHeaderString, jsondata["road"][0], numSectionsDict, pageNum, totalNumPages);
		// fill in cover page data sections
		htmlString += processQuestionIds(htmlStrings.crashDataSectionString, jsondata["road"][0], "datasection");
		// if applicable, add in construction table
		var displayConstruction = false;
		if (getAnswer(jsondata["road"][0], "34oHCyQs") == "Yes") {
			pageNum += 1;
			displayConstruction = true;
			htmlString += processQuestionIds(htmlStrings.constructionDataSectionString, jsondata["road"][0], "datasection", pageNum, totalNumPages);
		}
		if (!displayConstruction) {
			pageNum += 1;
		}
		// fill in vehicle section pages
		vehicleSectionDict = getVehicleSectionDict(jsondata);
		for (var i = 0; i < numSectionsDict["vehicle"]; i++) {
			// fill out vehicle page
			var vehicleAnswers = jsondata["vehicle"][i];
			if (displayConstruction) {
				htmlString += fillVehiclePageHeader(htmlStrings.vehicleHeaderString, vehicleAnswers, i+1, -1, totalNumPages);
				displayConstruction = false;
			} else {
				htmlString += fillVehiclePageHeader(htmlStrings.vehicleHeaderString, vehicleAnswers, i+1, pageNum, totalNumPages);
			}
			pageNum += 1
			htmlString += processQuestionIds(htmlStrings.vehicleDataSectionString, vehicleAnswers, "datasection", pageNum, totalNumPages);
			// pageNum += 1;
			// TODO: fill out lvhm vehicle section if applicable
			// fill out driver page if applicable
			var hasDriver;
			(vehicleAnswers["id"] in vehicleSectionDict["drivers"]) ? hasDriver = true : hasDriver = false;
			if (hasDriver) {
				var driverAnswers = vehicleSectionDict["drivers"][vehicleAnswers["id"]];
				htmlString += fillDriverPageHeader(htmlStrings.driverHeaderString, driverAnswers, i+1, pageNum, totalNumPages);
				htmlString += processQuestionIds(htmlStrings.driverDataSectionString, driverAnswers, "datasection", pageNum, totalNumPages);
				if ((getAnswer(vehicleAnswers, "ovVntlnU") != "Not Applicable") || (getAnswer(vehicleAnswers, "CynWHwxP") != "Light (10,000 lbs. or less GVWR/GCWR)") || (getAnswer(vehicleAnswers, "sM5HGjcV") != "Yes")) {
					// display lvhm driver section
					htmlString += processQuestionIds(htmlStrings.lvhmDriverDataSectionString, driverAnswers, "datasection", pageNum, totalNumPages);
				}
				if (getAnswer(driverAnswers, "TNNilZo2") != "No Apparent Injury") {
					// display injury driver section
					htmlString += processQuestionIds(htmlStrings.injuryDriverDataSectionString, driverAnswers, "datasection", pageNum, totalNumPages);
				}
			}
			// fill out passenger pages if applicable
			if (vehicleAnswers["id"] in vehicleSectionDict["passengers"]) {
				var passengers = vehicleSectionDict["passengers"][vehicleAnswers["id"]];
				for (var j = 0; j < passengers.length; j++) {
					var passengerAnswers = passengers[j];
					htmlString += fillPassengerPageHeader(htmlStrings.passengerHeaderString, passengerAnswers, j+1, i+1, hasDriver, pageNum, totalNumPages);
					htmlString += processQuestionIds(htmlStrings.passengerDataSectionString, passengerAnswers, "datasection", pageNum, totalNumPages);
					if (getAnswer(passengerAnswers, "NJqVP8AH") != "No Apparent Injury") {
						htmlString += processQuestionIds(htmlStrings.injuryPassengerDataSectionString, passengerAnswers, "datasection", pageNum, totalNumPages);
					}
				}
			}
		}
		// fill out non motorist pages if applicable
		for (var i = 0; i < numSectionsDict["nonmotorist"]; i++) {
			var nonmotoristAnswers = jsondata["nonmotorist"][i];
			htmlString += fillNonMotoristPageHeader(htmlStrings.nonmotoristHeaderString, nonmotoristAnswers, i+1, pageNum, totalNumPages);
			htmlString += processQuestionIds(htmlStrings.nonmotoristDataSectionString, nonmotoristAnswers, "datasection", pageNum, totalNumPages);
			if (getAnswer(nonmotoristAnswers, "WRishqwU") != "No Apparent Injury") {
				htmlString += processQuestionIds(htmlStrings.injuryNonmotoristDataSectionString, nonmotoristAnswers, "datasection", pageNum, totalNumPages);
			}
		}
		// concatenate strings to form complete HTML
		htmlString += htmlStrings.tailString;
		return htmlString;
	}

	JSONtoHTML(jsondata) {

		let reportHTML = '<!doctype html> <html lang="en"> <head> <meta charset="utf8"> <title> </title> </head> <body>'

		for (let section in jsondata) {
			reportHTML += ('<div style="float:left;padding: 1em;"><h1>' + section + '</h1>')
			writeSection(jsondata[section])
		}

		function writeSection(category) {
			for (let key in category) {
				reportHTML += ('<h2>' + category[key] + ' ' + key + '</h2>')
				let subset = category[key]
				for (let data in subset) {
					reportHTML += ('<h3>' + data + '</h3> <p>' + subset[data] + '</p>')
				}
				reportHTML += ('</div>')
			}
		}
		reportHTML += '</body> </html>'
		console.log("Converted json in html: " + reportHTML);
		return reportHTML
	}
}
export default JSONconverter;
