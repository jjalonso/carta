import React from 'react';
import PropTypes from 'prop-types';

import MedicalForm from './MedicalForm';
import StepButtons from '../StepButtons';
import { useField } from '../../hooks/useField';
import useValidation from '../../hooks/useValidation';
import schema from './schema';

const MedicalFormContainer = ({
  state,
  currentStep,
  totalSteps,
  nextStep,
  previousStep,
}) => {
  const conditions = useField(state.conditions);
  const medication = useField(state.medication);
  const problems = useField(state.problems);

  const fields = {
    conditions,
    medication,
    problems,
  };

  const [fieldsState, validate] = useValidation(fields);

  const handleSubmit = () => {
    // TODO: Update global state
    const validated = validate(schema);
    if (validated) {
      nextStep();
    }
  };

  const isFirstStep = currentStep !== 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <>
      <MedicalForm
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

MedicalFormContainer.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
};

MedicalFormContainer.defaultProps = {
  currentStep: 0,
  totalSteps: 0,
  nextStep: () => {},
  previousStep: () => {},
};

export default MedicalFormContainer;
