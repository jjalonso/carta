import * as yup from 'yup';

export default yup.object().shape({
  title: yup
    .string()
    .label(' ')
    .required(),
  name: yup
    .string()
    .label(' ')
    .trim()
    .required(),
  date: yup
    .string()
    .label(' ')
    .required()
    .ensure(),
  place: yup
    .string()
    .label(' ')
    .required(),
  companion: yup
    .string()
    .label(' ')
    .notRequired(),
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
