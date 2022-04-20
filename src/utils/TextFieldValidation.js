
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
            if (!type || !constraint){
              this.status = true
              return
            }
          if (type == 'min_num'){
            let constraint2 = parseInt(constraint)
            if (text.length >= constraint2){
                this.status = true
            }
            else {
                this.status = false
            }
          }
          if (type == 'max_num'){
              let constraint2 = parseInt(constraint)
              if (text.length <= constraint2){
                  this.status = true
              }
              else {
                  this.status = false
              }
            }

          if (type == 'range'){
             let lowerUpperLim = constraint.split('-')
                        if (text.length >= parseInt(lowerUpperLim[0])){
                            if (text.length <= parseInt(lowerUpperLim[1])){
                                this.status = true
                            }
                            }

                        else {
                            this.status = false
                        }}
                      }
    submitField(text, type, constraint){
        this.validateInput(text, type, constraint)
    }
}

export default (new TextFieldValidation);
