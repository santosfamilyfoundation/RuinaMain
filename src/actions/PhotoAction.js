export const addPhoto = data => (
    {
      type: 'ADDPHOTO',
      data,
    }
  );

export const resetPhoto = () => {
  return {
    type: 'RESETPHOTO'
  }
}
