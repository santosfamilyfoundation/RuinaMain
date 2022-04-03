
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


    validateInput(text, type, constraint, msg){
          if (type == 'min_num'){
            let constraint = parseInt(constraint)
            if (text.length >= constraint){
                this.status = true
            }
            else {
                this.status = false
            }
          }

          if (type == 'max_num'){
              let constraint = parseInt(constraint)
              if (text.length <= constraint){
                  this.status = true
              }
              else {
                  this.status = false
              }
            }

          if (type == 'range'){
                        if (text.length <= constraint){
                            //TODO: take range and split into max and min
                            if (text.length >= constraint){
                                //TODO: return true if both if statements are satisfied
                            }
                            }
                        }
                        else {
                            this.status = false
                        }
                      }
    submitField(text){
        this.validateInput(text)
    }
}

export default (new TextFieldValidation);