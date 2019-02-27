import React from 'react';
import Select from '../Select';

const problemsData = [
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


const ProblemsSelect = props => (
  <Select
    {...props}
    canCreate
    isMulti
    options={problemsData}
  />
);

export default ProblemsSelect;
