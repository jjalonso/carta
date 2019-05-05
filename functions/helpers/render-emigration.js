module.exports = [
  'render-emigration',
  (country, year) => (country !== 'United Kingdom' ? ` came to UK in ${year}` : ''),
];
