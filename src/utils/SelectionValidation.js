export class SelectionValidation {
    constructor(){
        this.status = null;
        this.validationData = null;
    }
//    debounceValidation(func, timeout){
//    console.log('debounceValidation')
//        let timer;
//          return (...args) => {
//            clearTimeout(timer);
//            timer = setTimeout(() => { func.apply(this, args); }, timeout);
//          };
//        }


    validateInput(selection){
          console.log('validateInput')
          if(!selection){
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