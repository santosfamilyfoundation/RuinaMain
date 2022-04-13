export class SelectionValidation {
    constructor(){
        this.status = null;
        this.validationData = null;
    }

validateInput(selection, type, constraint){
          console.log(selection, type, constraint)
          if (type == 'min_num'){
            let constraint2 = parseInt(constraint)
            if (selection.length >= constraint2){
                this.status = true
            }
            else {
                this.status = false
            }
          }
          if (type == 'max_num'){
              let constraint2 = parseInt(constraint)
              if (selection.length <= constraint2){
                  this.status = true
              }
              else {
                  this.status = false
              }
            }

          if (type == 'range'){
             let lowerUpperLim = constraint.split('-')
             console.log(lowerUpperLim)
                        if (selection.length >= parseInt(lowerUpperLim[0])){
                            if (selection.length <= parseInt(lowerUpperLim[1])){
                                this.status = true
                            }
                            }
                        else {
                            this.status = false
                        }}
                        console.log("what is this", this.status)
                      }
    validateField(selection, type, constraint){
        this.validateInput(selection, type, constraint)
        console.log(selection, type, constraint)
    }

}

export default (new SelectionValidation);
