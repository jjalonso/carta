import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TestInputPresentational from './TestInput';

const TestInput = ({
  value,
  onChange,
}) => {
  const [state, setState] = useState(value);

  const handleAdd = () => {
    const newState = [...state];
    newState.push({
      key: Date.now(),
      domain: '',
      score: '',
      maxScore: '',
    });
    setState(newState);
    onChange(state);
  };

  const handleRemove = (key) => {
    setState(state.filter(item => item.key !== key));
    onChange(state);
  };

  const handleChange = (key, name, v) => {
    const newState = [...state];
    const found = newState.find(item => item.key === key);
    found[name] = v;
    setState(newState);
    onChange(state);
  };

  return (
    <TestInputPresentational
      data={state}
      onChange={handleChange}
      onAdd={handleAdd}
      onRemove={handleRemove}
      isAddDisabled={state.length === 10}
      isRemoveDisabled={state.length === 1}
    />
  );
};

TestInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.string,
      score: PropTypes.number,
      maxScore: PropTypes.number,
    }),
  ),
};

TestInput.defaultProps = {
  onChange: () => {},
  value: [],
};

export default TestInput;
