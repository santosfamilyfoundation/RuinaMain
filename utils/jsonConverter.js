// import exportfromJSON from 'export-from-json';
// import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
//import RNFetchBlob from 'react-native-fetch-blob';
import {Component} from 'react';
// import ReactDOM from 'react-dom';
import XLSX from 'xlsx';

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
