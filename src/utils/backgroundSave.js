export class backgroundSave {
    constructor(filePath, openOldFile) {
        console.log('filePath given to backgroundSave object:', filePath);
        console.log("Value of openOldFile:", openOldFile);

        this.RNFS = require('react-native-fs');

        this.openOldFile = openOldFile;
        this.path = "";
        if (openOldFile) {
            if (filePath.includes(this.RNFS.DocumentDirectoryPath)) {
                this.path = filePath;
            } else {
                this.path = this.RNFS.DocumentDirectoryPath + "/" + filePath;
            }
        } else {
            this.path = this.getSavePath();
        }
        console.log("this.path in backgroundSave object:", this.path);

        this.filePaths = [];
        this.getFilePaths();

    }

    async getFilePaths() {
        await this.RNFS.readdir(this.RNFS.DocumentDirectoryPath).then( files => {
            for (const file of files) {
                if (file.includes('CrashReport') && file.includes('.json')) {
                    this.filePaths.unshift(file);
                }
            }
        });
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
                        this.filePaths.delete(this.path);
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