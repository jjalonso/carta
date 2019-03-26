import * as yup from 'yup';

export default yup.object().shape({
  examination: yup
    .object()
    .label(' ')
    .test(
      'required',
      'is a required field',
      value => !value.isEmpty(),
    ),
  cognitive: yup
    .array()
    .label(' ')
    .test(
      'required',
      'is a required field',
      value => [
        ...value.map(item => item.score),
        ...value.map(item => item.maxScore),
      ].every(v => !(v === null)),
    ),
});
