import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
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
import Paper from '../../components/Paper/Paper';
import { AppContext } from '../../components/App';
import {
  fetchMedication as fetchMedicationApi,
  fetchFormOptions as fetchFormOptionsApi,
} from '../../lib/services/api';

const fetchMedDebounced = AwesomeDebouncePromise(fetchMedicationApi, 1000);

const AssessmentContainer = ({ history }) => {
  const { appState, setAppState } = useContext(AppContext);
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

  const stepsOptions = [
    {
      title: 'Patient introduction',
      id: 'intro',
      schema: schema.intro,
      initialValues: appState.assessment.intro,
    },
    {
      title: 'Personal history',
      id: 'background',
      schema: schema.background,
      initialValues: appState.assessment.background,
    },
    {
      title: 'Tests results',
      id: 'tests',
      schema: schema.tests,
      initialValues: appState.assessment.tests,
    },
    {
      title: 'Final conclusion',
      id: 'conclusion',
      schema: schema.conclusion,
      initialValues: appState.assessment.conclusion,
    },
  ];

  const updateAssessmentState = (values) => {
    setAppState({
      ...appState,
      assessment: {
        ...appState.assessment,
        [stepsOptions[currentStep].id]: values,
      },
    });
  };

  const validateAndSave = async () => {
    const errors = await refForm.current.validateForm();
    const isValid = !Object.entries(errors).length;
    if (isValid) {
      const { values } = refForm.current.state;
      updateAssessmentState(values);
      return true;
    }
    return false;
  };

  const handleLastStep = async () => {
    if (await validateAndSave()) {
      history.replace('/letter');
      animateScroll.scrollToTop();
    }
  };

  const handleNextStep = async () => {
    if (await validateAndSave()) {
      setCurrentStep(currentStep + 1);
      animateScroll.scrollToTop();
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    animateScroll.scrollToTop();
  };

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
              initialValues={stepsOptions[currentStep].initialValues}
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
                    </WizardSteps>
                    <WizardButtons
                      steps={stepsOptions.length}
                      step={currentStep}
                      onPrev={handlePrevStep}
                      onNext={handleNextStep}
                      onFinish={handleLastStep}
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

AssessmentContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default AssessmentContainer;
