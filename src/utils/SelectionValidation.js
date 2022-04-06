export class SelectionValidation {
    constructor(){
        this.status = null;
        this.validationData = null;
    }

    validateInput(selection){
          if(selection.length == 0){
            this.status = false;
            return selection
          }
          else{
            this.status = true;
            return selection
          }

    }
    validateField(selection){
        this.validateInput(selection)
    }
}

export default (new SelectionValidation);
