import * as yup from 'yup';
import moment from 'moment';

const maxEmigrationYear = moment().year();
const minEmigrationYear = maxEmigrationYear - 120;

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
      .nullable()
      .min(minEmigrationYear)
      .max(maxEmigrationYear)
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
    living: yup
      .array()
      .label(' ')
      .notRequired(),
    totalChildren: yup
      .number()
      .typeError('Invalid number')
      .label(' ')
      .max(50)
      .min(0)
      .nullable()
      .required(),
    activities: yup
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
        ].every(v => !(v === null)),
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
};
