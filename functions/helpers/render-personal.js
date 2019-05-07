module.exports = [
  'render-personal',
  title => (['Miss', 'Mrs', 'Ms'].includes(title) ? 'she' : 'he'),
];
