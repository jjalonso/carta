import React from 'react';
import { fetch } from 'whatwg-fetch';
import AsyncSelect from '../AsyncSelect';


const fetchMedication = query => new Promise((resolve) => {
  fetch(
    `https://openprescribing.net/api/1.0/bnf_code/?format=json&q=${query}`,
  )
    .then(res => res.json())
    .then((json) => {
      resolve(
        json
          .filter(medication => medication.type === 'product format')
          .slice(0, 50)
          .map(med => ({
            value: med.name.replace(/_/g, ' '),
            label: med.name.replace(/_/g, ' '),
          })),
      );
    });
});

const MedicationSelect = props => (
  <AsyncSelect
    {...props}
    canCreate
    isMulti
    debounceDelay={500}
    loadOptions={fetchMedication}
  />
);

export default MedicationSelect;
