export const changeVehicle = numVehicle => {
    return {
      type: 'VEHICLE',
      numVehicle
    }
  }

export const changePersons = numPerson => {
  return {
    type: 'PERSON',
    numPerson
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