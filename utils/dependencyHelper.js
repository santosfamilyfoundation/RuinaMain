export function dependencyParser(response, data, dependencyID) {
    var renderComponent = false
    if(data.questionDependency == undefined){
        renderComponent = true
    } else if(response != null){
        let tarQuesArr = data.questionDependency
        for(let i = 0; i <tarQuesArr.length; i++){
            let tarUid = tarQuesArr[i].dependencyUid
            let tarOptionCode = tarQuesArr[i].dependencyOptionCode
            var findResponse
            for (let j = response.length-1; j >= 0; j--){
                if (dependencyID!=undefined && response[j].vehicleID!=undefined){
                    let tarVehicle = dependencyID[1]
                    switch (dependencyID.length) {
                        case 2:
                            if (response[j].question == tarUid && response[j].vehicleID == tarVehicle){
                                findResponse = response[j]}
                            break;
                        case 3:
                            let tarPassenger = dependencyID[2] 
                            if (response[j].question == tarUid && response[j].vehicleID == tarVehicle && response[j].passengerID == tarPassenger){
                                findResponse = response[j]}
                            break;
                        case 4:
                            let tarNonmotorrist = dependencyID[3]
                            if (response[j].question == tarUid && response[j].nonmotoristID == tarNonmotorrist){
                                findResponse = response[j]}
                            break;
                        default:
                            break;
                    }
                    if (findResponse != undefined){
                        break
                    }
                }else{
                    if (response[j].question == tarUid){
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
                } else if (findResponse.selection == tarOptionCode){renderComponent = true}
            }
        }
    }
    return renderComponent
}