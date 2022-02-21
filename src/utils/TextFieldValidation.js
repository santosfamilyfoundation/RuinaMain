
export class TextFieldValidation {
    constructor(){
        this.status = null;
        this.validationData = null;
    }
    debounceValidation(func, timeout){
    console.log('debounceValidation')
        let timer;
          return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
          };
        }


    validateInput(text){
          console.log('validateInput')
          if(text.length === 0){
            console.log('false')
            this.status = false;
          }
          else if(text.length <= 500) {
              console.log('true')
              this.status = true;
          }
          else{
            console.log('false')
            this.status = false;
          }
     console.log(this.status)

    }
    submitField(text){
        console.log('submitField')
        this.validateInput(text)
        console.log("this.status: ", this.status)

    }
}

export default (new TextFieldValidation);