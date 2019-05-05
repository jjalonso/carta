module.exports = [
  'render-list',
  array => `<ul>${array.map(item => `<li>${item}</li>`).join(' ')}</ul>`,
];
