// generate html and convert it into a PDF
export const createPDF = async (data) => {
    var converter = new JSONconverter();
    // const htmlString = converter.handleConverter('pdftest', "");
    const htmlString = converter.handleConverter('pdf', data);
    let options = {
      html: htmlString,
      base64: true,
      fileName: 'crash_report',
    };
    try {
      const data = await RNHTMLtoPDF.convert(options);
      console.log("got PDF data");
      this.setState({uri: data.filePath, data: data.base64, isPDF:true});
    } catch (error) {
      console.log('error->', error);
    }
}

// generate default filename
export const getDefaultFilename = () => {
    var date = new Date();
    var localTime = date.toLocaleTimeString().replace(/\W/g, '_');
    var localDate = date.getFullYear() + "_" + (date.getMonth()+1) + "_" + date.getDate();
    return "Crash_Report_" + localDate + "_at_" + localTime;
}

// save photos to app files
export class photoSave {
    constructor(filePath) {
        console.log("Instatiating a new background save object")
        this.RNFS = require('react-native-fs');
        this.path = "";
        this.crashDate = filePath.slice(29, -5)
        this.filename = this.crashDate + '-CrashDiagram.jpg'
        this.path = this.RNFS.DocumentDirectoryPath + "/" + this.filename;

        console.log("path initialized to:", this.path);
    }
    async addPhoto(data) {
        this.RNFS.copyFile(data, this.path)
            .then((success) => {
                console.log('Current photo state saved to: ' + this.path);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

}
