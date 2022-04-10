import {updateDriver} from '../actions/DriverAction';
import {updateNonmotorist} from '../actions/NonmotoristAction';
import {updatePassenger} from '../actions/PassengerAction';
import {updateRoad} from '../actions/RoadAction';
import {updateVehicle} from '../actions/VehicleAction';

const filterQuestionsData = (questions, questionType) => {
    return questions.data.filter(question => question.display.includes(questionType));
}

export const driverQuestions = (questions) => {return filterQuestionsData(questions, 'driver')};
export const nonmotoristQuestions = (questions) => {return filterQuestionsData(questions, 'nonmotorist')}
export const passengerQuestions = (questions) => {return filterQuestionsData(questions, 'passenger')}
export const vehicleQuestions = (questions) => {return filterQuestionsData(questions, 'vehicle')}
export const roadQuestions = (questions) => {return filterQuestionsData(questions, 'road')}
export const setupQuestions = (questions) => {return filterQuestionsData(questions, 'setup')}

export const questionData = (questionsObject, type) => {
    const obj = {
        Driver: {
            reducer: "driverReducer",
            submitFunction: updateDriver,
            actionType: "UPDATEDRIVER",
            questionsData: driverQuestions(questionsObject),
        },
        Nonmotorist: {
            reducer: 'nonmotoristReducer',
            submitFunction: updateNonmotorist,
            actionType: "UPDATENONMOTORIST",
            questionsData: nonmotoristQuestions(questionsObject),
        },
        Passenger: {
            reducer: "passengerReducer",
            submitFunction: updatePassenger,
            actionType: "UPDATEPASSENGER",
            questionsData: passengerQuestions(questionsObject),
        },
        Vehicle: {
            reducer: "vehicleReducer",
            submitFunction: updateVehicle,
            actionType: "UPDATEVEHICLE",
            questionsData: vehicleQuestions(questionsObject),
        },
        Road: {
            reducer: "roadReducer",
            submitFunction: updateRoad,
            actionType: "UPDATEROAD",
            questionsData: roadQuestions(questionsObject),
        }
    }
    return type?obj[type]:obj
}
