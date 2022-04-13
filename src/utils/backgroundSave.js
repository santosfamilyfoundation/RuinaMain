/*
The backgroundSave object serves as a continuous record of the in-progress reports on the device. 
It is used to save the current in-progress state of a report and retrieves in-progress reports.
The object uses the react-native-fs library to interact with the device document directory.

The backgroundSave object is instantiated in every screen, and passes the correct filepath from screen
to screen so that the report is saved to the same file rather than having multiple saved copies of the
same report. For more details on how the backgroundSave object is used, refer to the Welcome, Quick Survey, 
Home screens.
*/

export class backgroundSave {
   /*
    Relevant arguments:
    
    filePath: a string representing the filepath where the current report should be saved. 
    The filepath is either an empty string (if this is a new report and not an in-progress report),
    or the filepath of an in progress report (which may or may not contain the document directory path, 
    depending on how the report was saved.)

    openOldFile: a boolean indicating whether an old in-progress report is being re-opened.
    */
   constructor(filePath, openOldFile) {
      this.RNFS = require("react-native-fs");
      this.openOldFile = openOldFile;
      // keeps track of the filepath that the report should be saved to
      this.path = "";
      // if opening an old file, update the path accordingly (depending on whether the file path already
      // includes the document directory path)
      if (openOldFile) {
         if (filePath.includes(this.RNFS.DocumentDirectoryPath)) {
            this.path = filePath;
         } else {
            this.path = this.RNFS.DocumentDirectoryPath + "/" + filePath;
         }
         // if new file, set path to the save path
      } else {
         this.path = this.getSavePath();
      }

      // retrieves list of in-progress reports
      this.filePaths = [];
      this.getFilePaths();
   }

   /*
    Retrieves list of in-progress reports by searching document directory. All in progress reports
    are saved as JSON files and contain "CrashReport" in the filename.
    */
   async getFilePaths() {
      // looks for in-progress reports
      await this.RNFS.readdir(this.RNFS.DocumentDirectoryPath).then((files) => {
         for (const file of files) {
            if (file.includes("CrashReport") && file.includes(".json")) {
               // remove duplicates from the array - this does not actually delete duplicate reports
               if (!this.filePaths.includes(file)) {
                  this.filePaths.unshift(file);
               }
            }
         }
         // sort reports from newest to oldest
         this.filePaths.sort();
         this.filePaths.reverse();
      });
   }

   /*
    Write the current report state to the path.

    data: object representing the current state of the report.
    */
   async captureCurrentState(data) {
      // double check list of files - not sure if this is necessary
      this.getFilePaths();
      if (!this.filePaths.includes(this.path)) {
         // remove the currently saved report
         this.RNFS.unlink(this.path);
         // writes new state to the path
         this.RNFS.writeFile(this.path, data, "utf8")
            .then((success) => {
               console.log("Current state saved to: " + this.path);
            })
            .catch((err) => {
               console.log("file write error");
               console.log(err.message);
            });
      }
   }

   /*
    Puts together the correctly formatted filepath that the in-progress report should be saved to. 
    This path starts with CrashReport, then the date (YYYY-MM-DD) and time (HHMMSS) at which the 
    report was created.
    */
   getSavePath() {
      var date = new Date();
      var localDate =
         date.getFullYear() +
         "-" +
         (date.getMonth() + 1) +
         "-" +
         date.getDate();
      var localTime = date.toLocaleTimeString().replace(/\W/g, ".");
      var savePath =
         this.RNFS.DocumentDirectoryPath +
         "/CrashReport" +
         localDate +
         "-" +
         localTime +
         ".json";
      return savePath;
   }

   /*
   Delete the file at the current path.
   */
   async deleteCapturedState() {
      // check if there is a file at this path
      await this.RNFS.exists(this.path).then((exists) => {
         if (exists) {
            // delete the file and remove from filepaths array
            this.RNFS.unlink(this.path)
               .then(() => {
                  console.log("DELETED: " + this.path);
                  this.filePaths.delete(this.path);
               })
               .catch((err) => {
                  console.log(err.message);
               });
         } else {
            console.log("WARNING: background saved file already deleted.");
         }
      });
   }
}

export default backgroundSave;
