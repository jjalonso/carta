import React from 'react';
import PropTypes from 'prop-types';

import TestInputPresentational from './TestInput';
import { valueType } from './types';

const TestInput = ({
  value,
  onChange,
}) => {
  const handleAdd = () => {
    const newState = [...value];
    newState.push({
      key: Date.now(),
      domain: '',
      score: '',
      maxScore: '',
    });
    onChange(newState);
  };

  const handleRemove = (key) => {
    const newState = value.filter(item => item.key !== key);
    onChange(newState);
  };

  const handleChange = (key, name, v) => {
    const newState = [...value];
    const changedIndex = newState.findIndex(item => item.key === key);
    newState[changedIndex][name] = v;
    onChange(newState);
  };

  return (
    <TestInputPresentational
      value={value}
      onChange={handleChange}
      onAdd={handleAdd}
      onRemove={handleRemove}
      isAddDisabled={value.length === 10}
      isRemoveDisabled={value.length === 1}
    />
  );
};

TestInput.propTypes = {
  value: valueType,
  onChange: PropTypes.func,
};

TestInput.defaultProps = {
  value: [],
  onChange: () => {},
};

export default TestInput;
