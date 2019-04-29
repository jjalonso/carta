module.exports = [
  'posessivePronoun',
  title => (['Miss', 'Mrs', 'Ms'].includes(title) ? 'her' : 'his'),
];
