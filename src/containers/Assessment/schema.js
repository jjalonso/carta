import * as yup from 'yup';

export default {

  intro: yup.object({
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
  }),

  background: yup.object({
    country: yup
      .string()
      .label(' ')
      .required(),
    emigrationYear: yup
      .number()
      .label(' ')
      .when('country', {
        is: val => val && (val !== 'United Kingdom'),
        then: yup
          .number()
          .label(' ')
          .required(),
        otherwise: yup
          .number()
          .label(' ')
          .notRequired(),
      }),
    degree: yup
      .string()
      .label(' ')
      .nullable()
      .notRequired(),
    isDegreeIncompleted: yup
      .bool()
      .label(' ')
      .notRequired(),
    occupation: yup
      .string()
      .label(' ')
      .nullable()
      .required(),
    living: yup
      .array()
      .label(' ')
      .notRequired(),
    totalChildren: yup
      .number()
      .label(' ')
      .required(),
    other: yup
      .object()
      .label(' ')
      .test(
        'required',
        'is a required field',
        value => !value.isEmpty(),
      ),
  }),

  tests: yup.object({
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
        ].every(v => !(v == null)),
      )
      .test(
        'in-range',
        'no score can be greater than the max score',
        value => value.every(item => item.score <= item.maxScore)
      ),
    risks: yup
      .array()
      .label(' ')
      .test(
        'required',
        'is a required field',
        value => [
          ...value.map(item => item.level),
        ].every(v => !(v === null)),
      ),
  }),

  tweaks: yup.object({
    cognitiveConclusion: yup
      .object()
      .label(' ')
      .test(
        'required',
        'is a required field',
        value => !value.isEmpty(),
      ),
    risksConclusion: yup
      .object()
      .label(' ')
      .test(
        'required',
        'is a required field',
        value => !value.isEmpty(),
      ),
    impression: yup
      .object()
      .label(' ')
      .test(
        'required',
        'is a required field',
        value => !value.isEmpty(),
      ),
    carePlan: yup
      .object()
      .label(' ')
      .test(
        'required',
        'is a required field',
        value => !value.isEmpty(),
      ),
  }),
};
