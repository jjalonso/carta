import * as yup from 'yup';

export default yup.object().shape({
  conditions: yup
    .array()
    .label(' ')
    .notRequired(),
  medication: yup
    .array()
    .label(' ')
    .notRequired(),
  problems: yup
    .array()
    .label(' ')
    .required(),
});
