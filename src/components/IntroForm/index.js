import React from 'react';
import PropTypes from 'prop-types';

import IntroForm from './IntroForm';
import StepButtons from '../StepButtons';
import { useField, useFieldValue } from '../../hooks/useField';
import useValidation from '../../hooks/useValidation';
import schema from './schema';

const IntroFormContainer = ({
  state,
  currentStep,
  totalSteps,
  nextStep,
  previousStep,
}) => {
  const title = useField(state.title);
  const name = useFieldValue(state.name);
  const companion = useField(state.companion);
  const date = useField(state.date);
  const place = useFieldValue(state.place);

  const fields = {
    title,
    name,
    companion,
    date,
    place,
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
      <IntroForm
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

IntroFormContainer.propTypes = {
  // TODO: state
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
};

IntroFormContainer.defaultProps = {
  currentStep: 0,
  totalSteps: 0,
  nextStep: () => {},
  previousStep: () => {},
};

export default IntroFormContainer;
