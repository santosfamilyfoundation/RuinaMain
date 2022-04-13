export class SelectionValidation {
    constructor(){
        this.status = null;
        this.validationData = null;
    }

validateInput(selection, type, constraint){
          if (type == 'min_num'){
            let constraint = parseInt(constraint)
            if (selection.length >= constraint){
                this.status = true
            }
            else {
                this.status = false
            }
          }
          if (type == 'max_num'){
              let constraint = parseInt(constraint)
              if (selection.length <= constraint){
                  this.status = true
              }
              else {
                  this.status = false
              }
            }

          if (type == 'range'){
             lowerUpperLim = constraint.split('-')
                        if (selection.length >= parseInt(lowerUpperLim[0])){
                            if (selection.length <= parseInt(lowerUpperLim[1])){
                                this.status = true
                            }
                            }
                        }
                        else {
                            this.status = false
                        }
                      }
    validateField(selection, type, constraint){
        this.validateInput(selection, type, constraint)
    }
}

export default (new SelectionValidation);
