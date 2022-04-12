
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

    validateInput(text, type, constraint){
          console.log(text, ' | ', type, ' | ', constraint)
          if (type == 'min_num'){
            console.log('made it here', text.length)
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
    submitField(text, type, constraint){
        console.log('this is at least guaranteed')
        console.log(type, constraint)
        this.validateInput(text, type, constraint)
    }
}

export default (new TextFieldValidation);
