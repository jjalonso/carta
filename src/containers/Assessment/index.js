/* eslint-disable no-bitwise */
import React, { useState, useRef } from 'react';
import { Formik } from 'formik';
import nop from 'nop';
import debounce from 'debounce';
import worldCountries from 'world-countries';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import { Row, Col, Steps } from 'antd';
import { Wizard, Steps as WizardSteps, Step } from 'react-albus';
// import posed from 'react-pose';

import schema from './schema';
import { emptyValues as initialValues } from './initial-values';
import styles from './Assessment.module.css';
import WizardButtons from '../../components/WizardButtons';
import IntroForm from '../../components/IntroForm';
import BackgroundForm from '../../components/BackgroundForm';
import TestsForm from '../../components/TestsForm';
// import LetterPreview from '../../components/LetterPreview';

// const RouteContainer = posed.div({
//   enter: { opacity: 1, delay: 280 },
//   exit: { opacity: 0 },
// });

const AssessmentContainer = () => {
  const [state, setState] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);
  const [medicationData, setMedicationData] = useState([]);
  const [isFetchingMedication, setFetchingMedication] = useState([]);

  const refForm = useRef({ current: {} });

  // let isFetchingMedication = false;
  // let medicationData = [];

  const countries = worldCountries
    .map(item => item.name.common)
    .sort();


  const clearMedication = () => {
    setMedicationData([]);
  };

  const fetchMedication = debounce((query) => {
    setFetchingMedication(true);
    fetch(
      `https://openprescribing.net/api/1.0/bnf_code/?format=json&q=${query}`,
    )
      .then(res => res.json())
      .then((json) => {
        setFetchingMedication(false);
        setMedicationData(
          json
            .filter(med => med.type === 'product format')
            .slice(0, 50)
            .map(med => med.name.replace(/_/g, ' '))
            // Filter Duplication
            .filter((med, i, array) => array.indexOf(med) === i),
        );
      });
  }, 350);

  const stepsOptions = [
    {
      title: 'Hola',
      description: 'Patient introduction',
      id: 'intro',
      schema: schema.intro,
      initialValues: state.intro,
    },
    {
      title: 'Background',
      description: 'Patient life',
      id: 'background',
      schema: schema.background,
      initialValues: state.background,
    },
    {
      title: 'Tests',
      description: 'Tests result',
      id: 'tests',
      schema: schema.tests,
      initialValues: state.tests,
    },
    {
      title: 'Voila!',
      description: 'The final tweaks',
      id: 'preview',
    },
  ];

  const handleNextStep = async () => {
    const errors = await refForm.current.validateForm();
    const isValid = !Object.entries(errors).length;
    if (isValid) {
      const { values } = refForm.current.state;
      setState({ ...state, [stepsOptions[currentStep].id]: values });
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

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
        <Col span={24}>
          <Steps
            key="Steps"
            progressDot
            current={currentStep}
            className={styles.navSteps}
          >
            {
              stepsOptions.map(item => (
                <Steps.Step
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))
            }
          </Steps>
        </Col>

        <Col span={24} className={styles.assessmentContent}>

          <Formik
            enableReinitialize
            validateOnBlur={false}
            validateOnChange={false}
            ref={refForm}
            validationSchema={stepsOptions[currentStep].schema}
            initialValues={stepsOptions[currentStep].initialValues}
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
          {/* <PoseGroup>
          <RouteContainer key={location.pathname}>
          </RouteContainer>
          </PoseGroup> */}
        </Col>
      </Row>
    </>
  );
};

export default AssessmentContainer;
