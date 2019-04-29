const oneline = require('oneline');

module.exports = [
  oneline`
    <p>The patient present
    {{~#forEach risks}}
      {{~#if isLast}} and{{/if}}
      {{lookup ../levelWording this.level}} {{lookup ../riskWording this.name}}
      {{~#if isFirst}},{{/if}}
    {{~/forEach}}.</p>`,
  values => ({
    ...values,
    levelWording: { 1: 'no', 2: 'medium', 3: 'high' },
    riskWording: {
      'Risk to self': 'risk to self',
      'Risk to others': 'risk to others',
      'Others risks': 'other risk behaviours were identified',
    },
  }),
];
