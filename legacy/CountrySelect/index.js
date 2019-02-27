import worldCountries from 'world-countries';
import React from 'react';
import Select from '../Select';

const countriesData = worldCountries
  .sort()
  .map(country => ({ label: country.name.common, value: country.name.common }));

const CountrySelect = props => (
  <Select
    {...props}
    canCreate={false}
    isSearchable={false}
    options={countriesData}
  />
);

export default CountrySelect;
