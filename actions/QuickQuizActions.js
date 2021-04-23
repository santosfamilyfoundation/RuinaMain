export const changeVehicle = numVehicle => {
  return {
    type: 'VEHICLE',
    numVehicle
  }
};

export const changeDrivers = numDriver => {
  return {
    type: 'DRIVER',
    numDriver
  }
};

export const changeNonmotorists = numNonmotorist => {
  return {
    type: 'NONMOTORIST',
    numNonmotorist
  }
};

export const changePassengers = numPassenger => {
  return {
    type: 'PASSENGER',
    numPassenger
  }
};

// might not need
export const changeFatality = fatality => {
  return {
    type: 'FATALITY',
    fatality
  }
};

// might not need
export const changeNonFatalInjury = nonFatalInjury => {
  return {
    type: 'NONFATALINJURY',
    nonFatalInjury
  }
}

export const changePhotos = photos => {
  return {
    type: 'PHOTOS',
    photos
  }
}

export const updateSetup = setupData => {
    return {
        type: 'UPDATESETUP',
        payload: setupData
    }
}

export const changeRespond = () => {
  return {
    type: 'RESPOND'
  }
}

export const resetQuiz = () => {
  return {
    type: 'RESETQUIZ'
  }
}
