import React from 'react';
import { fetch } from 'whatwg-fetch';
import Select from '../Select';


const fetchMedication = () => {
  let timeoutId;

  return (query) => {
    clearTimeout(timeoutId);

    return new Promise((resolve) => {
      timeoutId = setTimeout(() => {
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
      }, 600);
    });
  };
};

const MedicationSelect = props => (
  <Select
    {...props}
    canCreate
    isMulti
    loadOptions={fetchMedication()}
  />
);

export default MedicationSelect;
