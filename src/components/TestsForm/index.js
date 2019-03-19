import React from 'react';
import PropTypes from 'prop-types';

import TestsForm from './TestsForm';
import StepButtons from '../StepButtons';
import { useField } from '../../hooks/useField';
import useValidation from '../../hooks/useValidation';
import schema from './schema';

const TestFormContainer = ({
  state,
  currentStep,
  totalSteps,
  nextStep,
  previousStep,
}) => {
  const examination = useField(state.examination);
  const cognitive = useField(state.cognitive);
  const cognitiveNotes = useField(state.cognitiveNotes);

  const fields = {
    examination,
    cognitive,
    cognitiveNotes,
  };

  const [fieldsState, validate] = useValidation(fields);

  const isFirstStep = currentStep !== 1;
  const isLastStep = currentStep === totalSteps;

  const handleSubmit = () => {
    const validated = validate(schema);
    if (validated) {
      nextStep();
    }
  };

  return (
    <>
      <TestsForm
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

TestFormContainer.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
};

TestFormContainer.defaultProps = {
  currentStep: 0,
  totalSteps: 0,
  nextStep: () => {},
  previousStep: () => {},
};

export default TestFormContainer;
