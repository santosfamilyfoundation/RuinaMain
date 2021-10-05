import { Component } from 'react';

export class backgroundSave extends Component {
    constructor(props) {
        super(props);
        var date = new Date();
        var localDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        this.RNFS = require('react-native-fs');
        this.path = this.RNFS.DocumentDirectoryPath + '/CrashReport'+localDate+'.json';
        this.filePaths = [];
        this.getFilePaths();
    }

    async getFilePaths() {
        await this.RNFS.readdir(this.RNFS.DocumentDirectoryPath).then( files => {
            for (const file of files) {
                if (file.includes('CrashReport') && file.includes('.json')) {
                    this.filePaths.push(file);
                }
            }
        });
    }

    async captureCurrentState(data){
        // write the file
        //console.log("data: ", data);
        var savePath = this.getSavePath();
        this.RNFS.writeFile(savePath, data, 'utf8')
            .then((success) => {
                console.log('Current state saved to: ' + savePath);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    getSavePath() {
        var date = new Date();
        var localDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        var localTime = date.toLocaleTimeString().replace(/\W/g, '.');
        var randomString = Math.random().toString(36).substring(2, 15);
        var savePath = this.RNFS.DocumentDirectoryPath + '/CrashReport'+localDate+"-"+localTime+'.json';
        return savePath;
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