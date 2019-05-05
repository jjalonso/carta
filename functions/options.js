const worldCountries = require('world-countries');
const range = require('lodash.range');

module.exports.countries = worldCountries
  .map(item => item.name.common)
  .sort();

const currentYear = new Date().getFullYear();
module.exports.emigrationYears = range(currentYear - 120, currentYear + 1).reverse();

module.exports.children = ['No', ...range(1, 21).map(String)];

module.exports.living = [
  'Husband',
  'Wife',
  'Partner',
  'Children',
  'Friend',
  'Family',
  'Flatmate',
  'Parent',
];

module.exports.title = [
  'Miss',
  'Mrs',
  'Ms',
  'Mr',
];

module.exports.companion = [
  'Husband',
  'Wife',
  'Partner',
  'Daughter',
  'Son',
  'Mother',
  'Dather',
  'Friend',
  'Cousin',
  'Uncle',
  'Aunt',
];

module.exports.problems = [
  'Forgeting medication',
  'Forgeting to eat',
  'Getting confuse',
  'Getting muddled with Days/Dates',
  'Forgetful conversations',
  'Poor short-term memory',
  'Unable to retain information',
  'Cooking issues',
  'Loosing items',
];

const habits = ['No', 'Occasionally', 'Regularly'];
module.exports.smoking = habits;

module.exports.alcohol = habits;
