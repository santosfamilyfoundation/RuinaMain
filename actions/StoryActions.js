export const writeStory = content => (
    {
      type: 'WRITE',
      payload: content,
    }
  );

export const updateResponse = (response) => {
  return {
    type: 'UPDATERESPONSE',
    payload: response
  }
}

export const resetStory = () => {
  return {
    type: 'RESETSTORY'
  }
}