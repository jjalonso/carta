import React, { useState, useRef, useEffect } from 'react';
import nop from 'nop';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { animateScroll } from 'react-scroll';

import { Formik } from 'formik';
import { Row, Col, Typography } from 'antd';
import { Wizard, Steps as WizardSteps, Step } from 'react-albus';

import schema from './schema';
import styles from './Assessment.module.css';
import WizardButtons from '../../components/WizardButtons';
import IntroForm from '../../components/IntroForm';
import BackgroundForm from '../../components/BackgroundForm';
import TestsForm from '../../components/TestsForm';
import ConclusionForm from '../../components/ConclusionForm';
import { filledValues as initialValues } from './initial-values';
import {
  fetchMedication as fetchMedicationApi,
  fetchFormOptions as fetchFormOptionsApi,
  fetchLetter as fetchLetterApi,
} from '../../lib/services/api';
import Paper from '../../components/Paper/Paper';
import PreviewForm from '../../components/PreviewForm';

const fetchMedDebounced = AwesomeDebouncePromise(fetchMedicationApi, 1000);

const AssessmentContainer = () => {
  const [formState, setFormState] = useState(initialValues);
  const [letterState, setLetterState] = useState({});
  const [formOptions, setFormOptions] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [medicationData, setMedicationData] = useState([]);
  const [isFetchingMedication, setFetchingMedication] = useState(false);
  const refForm = useRef({ current: {} });

  useEffect(() => {
    async function asyncFetch() {
      setFormOptions(await fetchFormOptionsApi());
    }
    asyncFetch();
  }, []);

  const clearMedication = () => {
    setMedicationData([]);
  };

  const fetchMedication = async (query) => {
    // TODO: Error handling
    setFetchingMedication(true);
    const data = await fetchMedDebounced(query);
    setFetchingMedication(false);
    setMedicationData(data);
  };

  const fetchLetter = async () => {
    // TODO: Error handling
    const letterJson = await fetchLetterApi(formState);
    setLetterState(letterJson);
  };

  const stepsOptions = [
    {
      title: 'Patient introduction',
      id: 'intro',
      schema: schema.intro,
      initialValues: formState.intro,
    },
    {
      title: 'Personal history',
      id: 'background',
      schema: schema.background,
      initialValues: formState.background,
    },
    {
      title: 'Tests results',
      id: 'tests',
      schema: schema.tests,
      initialValues: formState.tests,
    },
    {
      title: 'Final conclusion',
      id: 'conclusion',
      schema: schema.conclusion,
      initialValues: formState.conclusion,
    },
    {
      title: 'Congratulation!',
      id: 'preview',
    },
  ];

  const saveFormState = (values) => {
    setFormState({ ...formState, [stepsOptions[currentStep].id]: values });
  };

  const handleNextStep = async () => {
    const errors = await refForm.current.validateForm();
    const isValid = !Object.entries(errors).length;
    const isConclusionStep = stepsOptions[currentStep].id === 'conclusion';
    if (isValid) {
      const { values } = refForm.current.state;
      saveFormState(values);
      if (isConclusionStep) {
        fetchLetter();
      }
      setCurrentStep(currentStep + 1);
      animateScroll.scrollToTop();
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    animateScroll.scrollToTop();
  };

  // Use state rather initialValues
  const currentValues = stepsOptions[currentStep].initialValues
    || formState[stepsOptions[currentStep].id];

  return (
    <>
      <Row>
        <Col span={24} className={styles.assessmentContent}>
          <Paper>
            <Typography.Title
              level={4}
              className={styles.steps}
            >
              Step&nbsp;
              { currentStep + 1 }
              &nbsp;of&nbsp;
              { stepsOptions.length }
            </Typography.Title>
            <Typography.Title
              level={2}
              className={styles.formTitle}
            >
              { stepsOptions[currentStep].title }
            </Typography.Title>

            <Formik
              enableReinitialize
              validateOnBlur={false}
              validateOnChange={false}
              ref={refForm}
              validationSchema={stepsOptions[currentStep].schema}
              initialValues={currentValues}
              onSubmit={nop}
              render={props => (
                <Wizard render={() => (
                  <>
                    <WizardSteps step={{ id: stepsOptions[currentStep].id }}>
                      <Step id="intro">
                        <IntroForm
                          titleOptions={formOptions.title}
                          problemsOptions={formOptions.problems}
                          companionOptions={formOptions.companion}
                          isFetchingMedication={isFetchingMedication}
                          medicationData={medicationData}
                          fetchMedication={fetchMedication}
                          clearMedication={clearMedication}
                          {...props}
                        />
                      </Step>
                      <Step id="background">
                        <BackgroundForm
                          countriesOptions={formOptions.countries}
                          emigrationYearsOptions={formOptions.emigrationYears}
                          childrenOptions={formOptions.children}
                          smokingOptions={formOptions.smoking}
                          alcoholOptions={formOptions.alcohol}
                          livingOptions={formOptions.living}
                          {...props}
                        />
                      </Step>
                      <Step id="tests">
                        <TestsForm />
                      </Step>
                      <Step id="conclusion">
                        <ConclusionForm
                          {...props}
                        />
                      </Step>
                      <Step id="preview">
                        <PreviewForm
                          letterMarkup={letterState.markup}
                          {...props}
                        />
                      </Step>
                    </WizardSteps>
                    <WizardButtons
                      steps={stepsOptions.length}
                      step={currentStep}
                      onPrev={handlePrevStep}
                      onNext={handleNextStep}
                    />
                  </>

                )}
                />

              )}
            />
          </Paper>
        </Col>
      </Row>
    </>
  );
};

export default AssessmentContainer;
