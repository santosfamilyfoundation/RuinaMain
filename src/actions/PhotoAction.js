export const photoAction = data => (
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
