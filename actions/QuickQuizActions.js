export const changeVehicle = numVehicle => {
    return {
      type: 'VEHICLE',
      numVehicle
    }
  }

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

export const changeFatality = fatality => {
  return {
    type: 'FATALITY',
    fatality
  }
};

export const changeConstruction = construction => {
  return {
    type: 'CONSTRUCTION',
    construction
  }
};

export const changeIntersection = intersection => {
  return {
    type: 'INTERSECTION',
    intersection
  }
};

export const changeSchoolbus = schoolbus => {
  return {
    type: 'SCHOOLBUS',
    schoolbus
  }
};

export const changeHazardous = hazardous => {
  return {
    type: 'HAZARDOUS',
    hazardous
  }
};