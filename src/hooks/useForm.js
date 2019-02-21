import { useState } from 'react';
import PropTypes from 'prop-types';

export const useFormPropType = PropTypes.shape({
  value: PropTypes.any,
  onChange: PropTypes.func,
});

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange };
};

export const useFormCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(
      value.includes(e.target.value)
        ? value.filter(v => v !== e.target.value)
        : [...value, e.target.value],
    );
  }

  return { value, onChange };
};

export const useFormSelect = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function onChange(values) {
    setValue(values.map(v => v.value));
  }

  return { value, onChange };
};
