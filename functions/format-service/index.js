const Handlebars = require('handlebars');
require('handlebars-helpers')();

const cognitive = require('./formatters/cognitive');
const risks = require('./formatters/risks');
require('./helpers')();

module.exports = {
  format: (formatter, context) => {
    const [template, enhanceContext] = formatter;
    return Handlebars.compile(template)(enhanceContext(context));
  },
  formatters: {
    cognitive,
    risks,
  },
};
