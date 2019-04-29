module.exports = [
  'personalPronoun',
  title => (['Miss', 'Mrs', 'Ms'].includes(title) ? 'she' : 'he'),
];
