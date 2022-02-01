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

// locate the questions spreadsheet file in the mobile downloads folder.
export const getMobileSpreadsheet = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Android External Storage Permission",
          message:
            "Ruina needs access to your external storage to find your customized questions. ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use external storage");
        this.setState({ filePermissionsGranted: true });
      } else {
        console.log("external permission denied");
        this.setState({ filePermissionsGranted: false });
        this.setState({ filePermissionsErrorMessageVisible: true });
      }
    } catch (err) {
      console.warn(err);
    }

}
