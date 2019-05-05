const functions = require('firebase-functions');
const oneline = require('oneline');
const Handlebars = require('handlebars');

const options = require('./options');
require('./helpers');

exports.formOptions = functions.https.onRequest((request, response) => {
  if (request.method === 'GET') {
    response.send(options);
  }
});

exports.generateLetter = functions.https.onRequest((request, response) => {
  if (request.method === 'POST') {
    const { values } = request.body;

    const template = oneline`
    <p>Thank you for referring {{title}} [{{name}}] for a memory assessment.</p>
    <p>
      {{title}} [{{name}}] was aware of the purpose of the assessment and consented for it to take place.
      {{render-personal title}} also reported that {{render-personal title}} would like to know the outcome of the assessment.
    </p>
    <p>
      I saw {{title}} [{{name}}] at {{render-place place}} on {{render-date date}},
      {{render-companion companion options.companion (render-possessive title)}}.
    </p>

    <strong>Presenting Problems</strong>
    <p>{{render-problems problems (render-personal title)}}</p>

    <strong>Relevant Medical and Psychiatric History</strong>
    <p>{{{render-list conditions}}}</p>

    <strong>Medication</strong>
    <p>{{{render-list medication}}}</p>

    <strong>Personal & Social History</strong>
    <p>
      Born in {{country}}{{render-emigration country emigrationYear}}, {{render-degree degree isDegreeIncompleted (render-personal title)}}
      and before retirement worked as {{occupation}}, {{render-personal}} had {{render-children totalChildren}} and currently live {{render-living living (render-possessive title)}}.
    </p>
    {{{other}}}

    <strong>Alcohol and Smoking</strong>
    <p>{{render-consumption alcohol smoking}}.</p>

    <strong>Mental state examination</strong>
    {{{examination}}}

    <strong>Cognitive Assessment</strong>
    <p>{{{render-cognitive cognitive (render-personal title)}}}</p>

    <strong>Risks</strong>
    <p>{{{render-risks risks}}}</p>

    <strong>Impression</strong>
    {{{impression}}}

    <strong>Care Plan</strong>
    {{{carePlan}}}
    `;

    const letter = Handlebars.compile(template)({
      ...values,
      options,
    });

    response.send({ markup: letter });
  }
});
