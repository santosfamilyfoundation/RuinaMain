export class SelectionValidation {
    constructor(){
        this.status = null;
        this.validationData = null;
    }

    validateInput(selection){
          console.log('validateInput')
          console.log('trying this', selection.length)
          if(selection.length == 0){
            console.log('false')
            this.status = false;
          }
          else{
            console.log('true')
            this.status = true;
          }
     console.log(this.status)

    }
    validateField(selection){
        this.validateInput(selection)
        console.log("this.status: ", this.status)

    }
}

export default (new SelectionValidation);
