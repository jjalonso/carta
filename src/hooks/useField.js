import { useState, useEffect } from 'react';

export default (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (dirty) validator(value);
  }, [value]);

  const getValue = (v) => {
    if (v && v.target) return v.target.value || v.target.checked;
    return v;
  };

  const onChange = (v) => {
    setDirty(true);
    setValue(getValue(v));
  };

  return { value, onChange };
};
