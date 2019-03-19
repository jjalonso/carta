import * as yup from 'yup';

export default yup.object().shape({
  title: yup
    .string()
    .label(' ')
    .required(),
  name: yup
    .string()
    .label(' ')
    .required(),
  date: yup.string()
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
});
