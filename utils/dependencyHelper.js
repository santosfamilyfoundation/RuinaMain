export function dependencyParser(response, data, formID) {
    console.log('dependencyId:', formID);
    var renderComponent = false;
    if (data.questionDependency == undefined) {
        renderComponent = true;
    } else if (response != null) {
        let tarQuesArr = data.questionDependency;
        for (let i = 0; i <tarQuesArr.length; i++) {
            let tarName = tarQuesArr[i].dependencyName;
            let tarOptionCode = tarQuesArr[i].dependencyOptionCode
            var findResponse;
            for (let j = response.length-1; j >= 0; j--) {
                if (formID != undefined && response[j].vehicleID != undefined) {
                    let tarVehicle = formID[1]
                    switch (formID.length) {
                        case 2:
                            if (response[j].question == tarName && response[j].vehicleID == tarVehicle){
                                findResponse = response[j]}
                            break;
                        case 3:
                            let tarPassenger = formID[2] 
                            if (response[j].question == tarName && response[j].vehicleID == tarVehicle && response[j].passengerID == tarPassenger){
                                findResponse = response[j]}
                            break;
                        case 4:
                            let tarNonmotorist = formID[3]
                            if (response[j].question == tarName && response[j].nonmotoristID == tarNonmotorist){
                                findResponse = response[j]}
                            break;
                        default:
                            break;
                    }
                    if (findResponse != undefined){
                        break
                    }
                }else{
                    if (response[j].question == tarName){
                        findResponse = response[j]
                        break
                    }
                }
            }
            if (findResponse){
                if (typeof findResponse.selection == "object"){
                    findResponse.selection.forEach(element => {
                        if (element == tarOptionCode){renderComponent = true}
                    });
                } else if (findResponse.selection == tarOptionCode) {
                    renderComponent = true
                }
            }
        }
    }
    return renderComponent
}