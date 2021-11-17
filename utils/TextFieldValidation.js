export class TextFieldValidation {
    constructor(){
        this.status = null;
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
//            return false
          }
          else if(text.length <= 500) {
              console.log('true')
              this.status = true;
//            return true
          }
          else{
            console.log('false')
            this.status = false;
//            return false
          }
     console.log(this.status)

    }
    submitField(text){
        console.log('submitField')
        this.validateInput(text)
//        const processChange = this.debounceValidation((text) => this.validateInput(text), 0);
//        if(!text) {
//            return;
//        }
//        processChange(text);
        console.log("this.status: ", this.status)

    }
}

export default (new TextFieldValidation);