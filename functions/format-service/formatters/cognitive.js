const oneline = require('oneline');

module.exports = [
  oneline`
    <p>The patient scored {{scoring}} out of {{maxScoring}}, {{personalPronoun title}} got the following result:
    <ul>
    {{~#forEach cognitive}}
      <li>{{~this.score}}/{{this.maxScore}} on {{lowercase this.name}}.</li>
    {{~/forEach}}
    </ul></p>`,
  (values) => {
    const scoring = values.cognitive.reduce((acc, v) => acc + v.score, 0);
    const maxScoring = values.cognitive.reduce((acc, v) => acc + v.maxScore, 0);
    return {
      ...values,
      scoring,
      maxScoring,
    };
  },
];
