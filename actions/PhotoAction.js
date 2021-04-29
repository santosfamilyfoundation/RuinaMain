export const photoAction = data => (
    {
      type: 'ADDPHOTOS',
      data,
    }
  );

export const resetPhoto = () => {
  return {
    type: 'RESETPHOTO'
  }
}
