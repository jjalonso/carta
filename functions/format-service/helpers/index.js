const Handlebars = require('handlebars');

const possesivePronoun = require('./possesivePronoun');
const personalPronoun = require('./personalPronoun');

module.exports = () => {
  Handlebars.registerHelper(...possesivePronoun);
  Handlebars.registerHelper(...personalPronoun);
};
