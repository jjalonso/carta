module.exports = [
  'render-consumption',
  (alcohol, smoking) => {
    if (alcohol === 'No' && smoking === 'No') {
      return 'No smoking or alcohol reported';
    }
    const alcoholString = alcohol === 'No' ? 'Doesn\'t drink' : `drinks ${alcohol.toLowerCase()}`;
    const smokingString = smoking === 'No' ? 'doesn\'t smoke' : `smokes ${smoking.toLowerCase()}`;
    return `${alcoholString}, ${smokingString}`;
  },
];
