module.exports = [
  'render-possessive',
  title => (['Miss', 'Mrs', 'Ms'].includes(title) ? 'her' : 'his'),
];
