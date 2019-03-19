import { useState } from 'react';

export default (fields) => {
  const [fieldState, setFieldState] = useState({});

  const extractFromFields = (fieldsObject) => {
    const values = {};
    Object
      .keys(fieldsObject)
      .forEach((fieldName) => {
        values[fieldName] = fieldsObject[fieldName].value || fieldsObject[fieldName].checked;
      });
    return values;
  };

  const updateErrors = (err) => {
    const state = {};
    if (err) {
      err.inner.forEach((errorItem) => {
        state[errorItem.path] = {
          // Antd interface
          help: errorItem.message,
          validateStatus: 'error',
        };
      });
    }
    setFieldState(state);
  };

  const validate = (schema) => {
    try {
      updateErrors();
      return schema.validateSync(extractFromFields(fields), { abortEarly: false });
    } catch (err) {
      updateErrors(err);
      return false;
    }
  };
  return [fieldState, validate];
};
