import { Component } from 'react';

export class backgroundSave extends Component {
    constructor(props) {
        super(props);
        this.RNFS = require('react-native-fs'); 
        this.path = this.RNFS.DocumentDirectoryPath + '/unfinished_report.json';
    }

    captureCurrentState(data){
        // write the file
        this.RNFS.writeFile(this.path, data, 'utf8')
            .then((success) => {
                console.log('Current state saved to: ' + this.path);
                console.log('Background save file exist: ', this.backgroundFileExist);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    async deleteCapturedState(){
        return this.RNFS.unlink(this.path)
            .then(() => {
                console.log('DELETED: ' + this.path);
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
                console.log("WARNING: background saved file already deleted! Message: " + err.message);
            });
    }
}

export default backgroundSave;