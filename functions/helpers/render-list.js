module.exports = [
  'render-list',
  array => (array.length ? `<ul>${array.map(item => `<li>${item}</li>`).join(' ')}</ul>` : 'None reported.'),
];
