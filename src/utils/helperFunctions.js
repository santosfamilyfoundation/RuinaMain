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
    var localTime = date.toLocaleTimeString().replace(/\W/g, '.');
    var localDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    return "Crash Report " + localDate + " at " + localTime;
}

// save photos to app files
export class photoSave {
    constructor(filePath) {
        console.log("Instatiating a new background save object")
        this.RNFS = require('react-native-fs');
        this.path = "";
        this.path = this.RNFS.DocumentDirectoryPath + "/" + filePath;

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
//        this.filePaths = [];
//        this.getFilePaths();

}
