import React from 'react';
import PropTypes from 'prop-types';
import TagsSelect from '../TagsSelect';

const CompanionWidget = ({
  value,
  onChange,
}) => (
  // TODO: prefix with (Clinic Worker) when a value is not in list.
  <TagsSelect
    placeholder="Enter companion..."
    newLabel="Add Companion"
    choices={[
      'Husband',
      'Wife',
      'Partner',
      'Daughter',
      'Son',
      'Mother',
      'Father',
      'Friend',
      'Cousin',
      'Uncle',
      'Aunt',
    ]}
    onChange={onChange}
    value={value}
  />
);

CompanionWidget.propTypes = {
  value: PropTypes.arrayOf(String),
  onChange: PropTypes.func,
};

CompanionWidget.defaultProps = {
  value: [],
  onChange: () => {},
};

export default CompanionWidget;
