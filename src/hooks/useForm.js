import { useState } from 'react';
import PropTypes from 'prop-types';

export const useFormPropType = PropTypes.shape({
  value: PropTypes.any,
  onChange: PropTypes.func,
});

export const useFormTarget = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange };
};

export const useFormValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function onChange(v) {
    setValue(v);
  }

  return { value, onChange };
};

export const useFormCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function onChange(e) {
    setValue(e.target.checked);
  }

  return { value, onChange };
};
