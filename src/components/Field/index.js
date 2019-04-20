import React from 'react';
import { Field as FormikField } from 'formik';

const Field = ({
  name,
  render,
}) => {
  const getValue = (v) => {
    if (!!v && v.target) {
      if (v.target.type === 'checkbox') return v.target.checked;
      return v.target.value;
    }
    return v;
  };


  return (
    <FormikField
      name={name}
      render={({
        field,
        form,
      }) => {
        const onChange = v => form.setFieldValue(field.name, getValue(v));
        const onBlur = () => field.onBlur(field.name);
        const hasError = form.errors[field.name];
        const error = { help: hasError, validateStatus: hasError ? 'error' : '' };
        return render({ ...field, onChange, onBlur }, error);
      }}
    />
  );
};

export default Field;
