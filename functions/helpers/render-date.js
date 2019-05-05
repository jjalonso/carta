const moment = require('moment');

module.exports = [
  'render-date',
  date => moment(date).format('l'),
];
