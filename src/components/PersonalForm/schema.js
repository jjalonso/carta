import * as yup from 'yup';

export default yup.object().shape({
  country: yup
    .string()
    .label(' ')
    .required(),
  emigrationYear: yup
    .string()
    .label(' ')
    .when('country', {
      is: val => (val && val !== 'United Kingdom'),
      then: yup
        .string()
        .label(' ')
        .required(),
      otherwise: yup
        .string()
        .label(' ')
        .notRequired(),
    }),
  degree: yup
    .string()
    .label(' ')
    .notRequired(),
  isDegreeIncompleted: yup
    .bool()
    .label(' ')
    .notRequired(),
  living: yup
    .array()
    .label(' ')
    .notRequired(),
  totalChildren: yup
    .string()
    .label(' ')
    .notRequired(),
  activities: yup
    .object()
    .label(' ')
    .test(
      'required',
      'is a required field',
      value => !value.isEmpty(),
    ),
});
