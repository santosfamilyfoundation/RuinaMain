
export class TextFieldValidation {
    constructor(){
        this.status = null;
        this.validationData = null;
    }
    debounceValidation(func, timeout){
        let timer;
          return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
          };
        }


    validateInput(text){
          console.log('validateInput')
          if(text.length === 0){
            this.status = false;
          }
          else if(text.length <= 500) {
              this.status = true;
          }
          else{
            this.status = false;
          }

    }
    submitField(text){
        this.validateInput(text)

    }
}

export default (new TextFieldValidation);
