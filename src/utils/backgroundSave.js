export class backgroundSave {
    constructor(filePath, openOldFile) {
        // console.log("Instatiating a new background save object")
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

        // console.log("path initialized to:", this.path);

        this.filePaths = [];
        this.getFilePaths();

    }

    async getFilePaths() {
        // console.log(this.RNFS.DocumentDirectoryPath);
        await this.RNFS.readdir(this.RNFS.DocumentDirectoryPath).then( files => {
            for (const file of files) {
                if (file.includes('CrashReport') && file.includes('.json')) {
                    if (!this.filePaths.includes(file)) {
                        this.filePaths.unshift(file);
                    }
                }
            }
            this.filePaths.sort()
            this.filePaths.reverse()
        });
    }

    async captureCurrentState(data){
        // write the file
        this.getFilePaths();
        if (!this.filePaths.includes(this.path)) {
             this.RNFS.unlink(this.path)
             this.RNFS.writeFile(this.path, data, 'utf8')
                .then((success) => {
                    console.log('Current state saved to: ' + this.path);
                })
                .catch((err) => {
                    console.log('file write error')
                    console.log(err.message);
                });
        }
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