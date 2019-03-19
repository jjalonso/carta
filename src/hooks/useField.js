import { useState } from 'react';

export const useFieldValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return { value, onChange };
};

export const useField = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function onChange(v) {
    setValue(v);
  }
  return { value, onChange };
};

export const useFieldCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function onChange(e) {
    setValue(e.target.checked);
  }
  return { checked: value, onChange };
};
