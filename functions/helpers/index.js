
const Handlebars = require('handlebars');

const renderCapitalise = require('./render-capitalise');
const renderPersonal = require('./render-personal');
const renderPossessive = require('./render-possessive');
const renderPlace = require('./render-place');
const renderDate = require('./render-date');
const renderCompanion = require('./render-companion');
const renderEmigration = require('./render-emigration');
const renderDegree = require('./render-degree');
const renderChildren = require('./render-children');
const renderConsumption = require('./render-consumption');
const renderProblems = require('./render-problems');
const renderList = require('./render-list');
const renderCognitive = require('./render-cognitive');
const renderRisks = require('./render-risks');
const renderLiving = require('./render-living');

Handlebars.registerHelper(...renderCapitalise);
Handlebars.registerHelper(...renderPersonal);
Handlebars.registerHelper(...renderPossessive);
Handlebars.registerHelper(...renderPlace);
Handlebars.registerHelper(...renderDate);
Handlebars.registerHelper(...renderCompanion);
Handlebars.registerHelper(...renderEmigration);
Handlebars.registerHelper(...renderDegree);
Handlebars.registerHelper(...renderChildren);
Handlebars.registerHelper(...renderConsumption);
Handlebars.registerHelper(...renderProblems);
Handlebars.registerHelper(...renderList);
Handlebars.registerHelper(...renderCognitive);
Handlebars.registerHelper(...renderRisks);
Handlebars.registerHelper(...renderLiving);
