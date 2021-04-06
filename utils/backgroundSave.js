import { Component } from 'react';

export class backgroundSave extends Component {
    constructor(props) {
        super(props);
        this.RNFS = require('react-native-fs'); 
        this.path = this.RNFS.DocumentDirectoryPath + '/unfinished_report.json';
    }

    async captureCurrentState(data){
        // write the file
        //console.log("data: ", data);
        this.RNFS.writeFile(this.path, data, 'utf8')
            .then((success) => {
                console.log('Current state saved to: ' + this.path);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    async deleteCapturedState(){
        await this.RNFS.exists(this.path).then((exists) => {
            if(exists){
                this.RNFS.unlink(this.path)
                    .then(() => {
                        console.log('DELETED: ' + this.path);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            } else {
                console.log('WARNING: background saved file already deleted.')
            }
        })
    }
}

export default backgroundSave;