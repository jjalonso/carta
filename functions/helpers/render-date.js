const moment = require('moment');

module.exports = [
  'render-date',
  date => moment(date).format('D/M/Y'),
];
