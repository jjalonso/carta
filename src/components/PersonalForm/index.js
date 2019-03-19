import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import PersonalForm from './PersonalForm';
import StepButtons from '../StepButtons';
import {
  useField,
  useFieldValue,
  useFieldCheckbox,
} from '../../hooks/useField';
import useValidation from '../../hooks/useValidation';
import schema from './schema';

const PersonalFormContainer = ({
  state,
  currentStep,
  totalSteps,
  nextStep,
  previousStep,
}) => {
  const country = useField(state.country);
  const emigrationYear = useField(state.emigrationYear);
  const degree = useFieldValue(state.degree);
  const isDegreeIncompleted = useFieldCheckbox(state.isDegreeIncompleted);
  const living = useField(state.living);
  const totalChildren = useField(state.totalChildren);
  const activities = useField(state.activities);

  const fields = {
    country,
    emigrationYear,
    degree,
    isDegreeIncompleted,
    living,
    totalChildren,
    activities,
  };

  const [fieldsState, validate] = useValidation(fields);

  const isFirstStep = currentStep !== 1;
  const isLastStep = currentStep === totalSteps;
  const maxEmigrationYear = moment().year();
  const minEmigrationYear = maxEmigrationYear - 100;
  const isEmigrationYearDisabled = country.value === 'United Kingdom' || !country.value;
  const isDegreeIncompletedDisabled = !degree.value;

  const handleSubmit = () => {
    // TODO: Update global state
    const validated = validate(schema);
    if (validated) {
      nextStep();
    }
  };

  return (
    <>
      <PersonalForm
        isDegreeIncompletedDisabled={isDegreeIncompletedDisabled}
        isEmigrationYearDisabled={isEmigrationYearDisabled}
        maxEmigrationYear={maxEmigrationYear}
        minEmigrationYear={minEmigrationYear}
        fieldsState={fieldsState}
        fields={fields}
      />
      <StepButtons
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        onNextStep={handleSubmit}
        onPreviousStep={previousStep}
      />
    </>
  );
};

PersonalFormContainer.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
};

PersonalFormContainer.defaultProps = {
  currentStep: 0,
  totalSteps: 0,
  nextStep: () => {},
  previousStep: () => {},
};

export default PersonalFormContainer;
