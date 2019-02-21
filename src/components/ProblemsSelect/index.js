import React from 'react';
import Select from '../Select';

const data = [
  { value: 'forgeting medication', label: 'Forgeting medication' },
  { value: 'forgeting to eat', label: 'Forgeting to eat' },
  { value: 'getting confuse', label: 'Getting confuse' },
  { value: 'getting muddled with Days/Dates', label: 'Getting muddled with Days/Dates' },
  { value: 'forgetful conversations', label: 'Forgetful conversations' },
  { value: 'poor short-term memory', label: 'Poor short-term memory' },
  { value: 'unable to retain information', label: 'Unable to retain information' },
  { value: 'cooking issues', label: 'Cooking issues' },
  { value: 'loosing items', label: 'Loosing items' },
];

const getProblems = query => new Promise((resolve) => {
  resolve(data.filter(symptom => symptom.value.includes(query.toLowerCase())));
});

const ProblemsSelect = props => (
  <Select
    {...props}
    canCreate
    isMulti
    loadOptions={getProblems}
  />
);

export default ProblemsSelect;
