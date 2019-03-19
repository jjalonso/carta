import React, { useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';

import TagsSelect from '../TagsSelect';
import styles from './MedicationWidget.module.css';

const MedicationWidget = ({
  value,
  onChange,
}) => {
  const [medicationData, setMedicationData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const cleanup = () => {
    setMedicationData([]);
  };

  const fetchMedication = debounce((query) => {
    setIsFetching(true);
    fetch(
      `https://openprescribing.net/api/1.0/bnf_code/?format=json&q=${query}`,
    )
      .then(res => res.json())
      .then((json) => {
        setIsFetching(false);
        setMedicationData(
          json
            .filter(med => med.type === 'product format')
            .slice(0, 50)
            .map(med => med.name.replace(/_/g, ' '))
            // Duplication
            .filter((med, i, array) => array.indexOf(med) === i),
        );
      });
  }, 350);

  return (
    <TagsSelect
      inputStyle={styles.input}
      loading={isFetching}
      placeholder="Search for medication..."
      newLabel="Add Medication"
      value={value}
      onChange={onChange}
      onSelect={cleanup}
      onSearch={fetchMedication}
      choices={medicationData}
    />
  );
};

MedicationWidget.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

MedicationWidget.defaultProps = {
  value: [],
  onChange: () => {},
};


export default MedicationWidget;
