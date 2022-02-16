export function dependencyParser(response, data, formID) {
    const startParserTime = performance.now()
    console.log('Starting to parse dependencies')
    var renderComponent = false;
    // if there is no dependency, then by default render the component
    if (data.questionDependency == undefined) {
        renderComponent = true;
    // there is a dependency
    } else if (response != null) {
        let dependentQuestions = data.questionDependency;
        for (let i = 0; i < dependentQuestions.length; i++) {
            // get question id and target option code
            let questionId = dependentQuestions[i].dependencyName;
            let targetOptionCode = dependentQuestions[i].dependencyOptionCode;

            // get response to dependent question
            var dependentResponse;
            for (let j = response.length-1; j >= 0; j--) {
                // check if the question belongs to a specific vehicle
                if (formID != undefined && response[j].vehicleID != undefined) {
                    let targetVehicle = formID[1];
                    switch (formID.length) {
                        // question belongs to driver or road
                        case 2:
                            if (response[j].question == questionId && response[j].vehicleID == targetVehicle) {
                                dependentResponse = response[j];
                            }
                            break;
                        // question belongs to passenger
                        case 3:
                            let targetPassenger = formID[2];
                            if (response[j].question == questionId && response[j].vehicleID == targetVehicle && response[j].passengerID == targetPassenger) {
                                dependentResponse = response[j];
                            }
                            break;
                        // question belongs to nonmotorist
                        case 4:
                            let targetNonmotorist = formID[3];
                            if (response[j].question == questionId && response[j].nonmotoristID == targetNonmotorist) {
                                dependentResponse = response[j];
                            }
                            break;
                        default:
                            break;
                    }
                }
                // question is part of the crash/road form
                else {
                    if (response[j].question == questionId) {
                        dependentResponse = response[j];
                        break;
                    }
                }
            }

            // if response was found, check that the response was correct
            if (dependentResponse) {
                // there were multiple selections
                if (typeof dependentResponse.selection == "object") {
                    dependentResponse.selection.forEach(element => {
                        if (parseInt(element) == parseInt(targetOptionCode)) {
                            renderComponent = true;
                        }
                    })
                }
                // there was only one selection
                else if (parseInt(dependentResponse.selection) == parseInt(targetOptionCode)) {
                    renderComponent = true;
                }
            }
        }
        if (findResponse){
            console.log(findResponse.selection);
            console.log('tarOptionCode:', tarOptionCode);
            console.log(typeof(tarOptionCode));
            if (typeof findResponse.selection == "object"){
                console.log('selection is object')
                findResponse.selection.forEach(element => {
                    if (element == tarOptionCode){renderComponent = true}
                });
            } else if (findResponse.selection === tarOptionCode) {
                console.log('selection is not an object, selection and target option code match')
                renderComponent = true
            }
        }
    }

    // console.log('value of render component:', renderComponent)
    return renderComponent
}