import worldCountries from 'world-countries';
import React from 'react';
import Select from '../Select';

const countries = worldCountries
  .sort()
  .map(country => ({ label: country.name.common, value: country.name.common }));

const getCountries = query => new Promise((resolve) => {
  resolve(
    countries
      .filter(country => country.value.toLowerCase().includes(query.toLowerCase())),
  );
});

const CountrySelect = props => <Select {...props} loadOptions={getCountries} />;

export default CountrySelect;
