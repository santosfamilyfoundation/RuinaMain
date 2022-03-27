import {questions} from '../data/questions';
import {updateDriver} from '../actions/DriverAction';
import {updateNonmotorist} from '../actions/NonmotoristAction';
import {updatePassenger} from '../actions/PassengerAction';
import {updateRoad} from '../actions/RoadAction';
import {updateVehicle} from '../actions/VehicleAction';

const filterQuestionsData = (questionType) => {
    return questions.data.filter(question => question.display.includes(questionType));
}

export const driverQuestions = filterQuestionsData('driver');
export const nonmotoristQuestions = filterQuestionsData('nonmotorist');
export const passengerQuestions = filterQuestionsData('passenger');
export const vehicleQuestions = filterQuestionsData('vehicle');
export const roadQuestions = filterQuestionsData('road');
export const setupQuestions = filterQuestionsData('setup');

export const questionData = (type) => {
    const obj = {
        Driver: {
            reducer: "driverReducer",
            submitFunction: updateDriver,
            actionType: "UPDATEDRIVER",
            questionsData: driverQuestions,
        },
        Nonmotorist: {
            reducer: 'nonmotoristReducer',
            submitFunction: updateNonmotorist,
            actionType: "UPDATENONMOTORIST",
            questionsData: nonmotoristQuestions,
        },
        Passenger: {
            reducer: "passengerReducer",
            submitFunction: updatePassenger,
            actionType: "UPDATEPASSENGER",
            questionsData: passengerQuestions,
        },
        Vehicle: {
            reducer: "vehicleReducer",
            submitFunction: updateVehicle,
            actionType: "UPDATEVEHICLE",
            questionsData: vehicleQuestions,
        },
        Road: {
            reducer: "roadReducer",
            submitFunction: updateRoad,
            actionType: "UPDATEROAD",
            questionsData: roadQuestions,
        }
    }
    return type?obj[type]:obj
}
