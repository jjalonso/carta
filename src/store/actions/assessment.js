export const ASSESSMENT_SAVE = 'ASSESSMENT/SAVE';

export const save = (formName, values) => ({
  type: ASSESSMENT_SAVE,
  formName,
  values,
});

export default {
  ASSESSMENT_SAVE,
  save,
};
