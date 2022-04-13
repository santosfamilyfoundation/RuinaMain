
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
             console.log('constraint: ', constraint, parseInt(constraint.split('-')[0]))
             let lowerUpperLim = constraint.split('-')
             console.log(lowerUpperLim)
                        if (text.length >= parseInt(lowerUpperLim[0])){
                            if (text.length <= parseInt(lowerUpperLim[1])){
                                this.status = true
                            }
                            }

                        else {
                            this.status = false
                        }}
                       console.log("what is this text", this.status)

                      }
    submitField(text, type, constraint){
        this.validateInput(text, type, constraint)
    }
}

export default (new TextFieldValidation);
