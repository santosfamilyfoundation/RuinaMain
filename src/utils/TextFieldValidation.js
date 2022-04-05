
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
             lowerUpperLim = constraint.split()
                        if (text.length >= parseInt(lowerUpperLim[0])){
                            if (text.length <= parseInt(lowerUpperLim[0])){
                                this.status = true
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