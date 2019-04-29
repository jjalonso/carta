import React, { useState, useRef } from 'react';
import nop from 'nop';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import worldCountries from 'world-countries';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import { Formik } from 'formik';
import { Row, Col, Typography } from 'antd';
import { Wizard, Steps as WizardSteps, Step } from 'react-albus';

import schema from './schema';
import styles from './Assessment.module.css';
import WizardButtons from '../../components/WizardButtons';
import IntroForm from '../../components/IntroForm';
import BackgroundForm from '../../components/BackgroundForm';
import TestsForm from '../../components/TestsForm';
import TweaksForm from '../../components/TweaksForm';
import { filledValues as initialValues } from './initial-values';
import {
  fetchMedication as fetchMedicationApi,
  fetchConclusion as fetchConclusionApi,
} from '../../lib/services/api';
import Paper from '../../components/Paper/Paper';

const fetchMedDebounced = AwesomeDebouncePromise(fetchMedicationApi, 1000);

const AssessmentContainer = () => {
  const [state, setState] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);
  const [medicationData, setMedicationData] = useState([]);
  const [isFetchingMedication, setFetchingMedication] = useState(false);
  const refForm = useRef({ current: {} });

  const countries = worldCountries
    .map(item => item.name.common)
    .sort();

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

  const fetchConclusion = async () => {
    // TODO: Error handling
    const conclusion = await fetchConclusionApi(
      state.intro.title,
      state.tests.cognitive,
      state.tests.risks,
    );
    setState({ ...state, tweaks: { ...state.tweaks, ...conclusion } });
  };

  const stepsOptions = [
    {
      title: 'Patient introduction',
      id: 'intro',
      schema: schema.intro,
      initialValues: state.intro,
    },
    {
      title: 'Personal history',
      id: 'background',
      schema: schema.background,
      initialValues: state.background,
    },
    {
      title: 'Tests results',
      id: 'tests',
      schema: schema.tests,
      initialValues: state.tests,
    },
    {
      title: 'Final tweaks',
      id: 'tweaks',
      schema: schema.tweaks,
      initialValues: state.tweaks,
    },
  ];

  const saveFormState = (values) => {
    setState({ ...state, [stepsOptions[currentStep].id]: values });
  };

  const handleNextStep = async () => {
    const errors = await refForm.current.validateForm();
    const isValid = !Object.entries(errors).length;
    const isTestsStep = stepsOptions[currentStep].id === 'tests';
    if (isValid) {
      const { values } = refForm.current.state;
      saveFormState(values);
      if (isTestsStep) {
        fetchConclusion();
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Use state rather initialValues
  const currentValues = stepsOptions[currentStep].initialValues
    || state[stepsOptions[currentStep].id];

  return (
    <>
      <MessengerCustomerChat
        pageId="2029102333853119"
        appId="163164767920929"
        themeColor="#5EC1A1"
        loggedInGreeting="Hello dear! We are here to chat in case you need help or wanted to say hi!"
        loggedOutGreeting="Hello dear! We are here to chat in case you need help or wanted to say hi!"
      />
      <Row>
        <Col span={24} className={styles.assessmentContent}>
          <Paper title={stepsOptions[currentStep].title}>
            <Typography.Title
              level={4}
              className={styles.steps}
            >
              Step&nbsp;
              { currentStep + 1 }
              &nbsp;of&nbsp;
              { stepsOptions.length }
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
                          isFetchingMedication={isFetchingMedication}
                          medicationData={medicationData}
                          fetchMedication={fetchMedication}
                          clearMedication={clearMedication}
                          {...props}
                        />
                      </Step>
                      <Step id="background">
                        <BackgroundForm
                          countries={countries}
                          {...props}
                        />
                      </Step>
                      <Step id="tests">
                        <TestsForm />
                      </Step>
                      <Step id="tweaks">
                        <TweaksForm
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
