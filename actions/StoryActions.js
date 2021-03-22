export const writeStory = content => (
    {
      type: 'WRITE',
      payload: content,
    }
  );

export const updateResponse = (response) => {
  // console.log("Reach update Resposne = ", response) 
  return {
    type: 'UPDATERESPONSE',
    payload: response
  }
}