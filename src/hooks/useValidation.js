import { useState } from 'react';

export default (schema) => {
  const [help, setHelp] = useState();
  const [validateStatus, setValidateStatus] = useState();

  const setError = (message) => {
    setHelp(message);
    setValidateStatus('error');
  };

  const setSuccess = () => {
    setHelp(undefined);
    setValidateStatus('success');
  };

  const validate = (value) => {
    debugger;
    try {
      schema.validateSync(value);
      setSuccess();
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  return [validate, { help, validateStatus }];
};
