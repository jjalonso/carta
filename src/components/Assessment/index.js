import React, {
  useState, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import nop from 'nop';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { animateScroll } from 'react-scroll';
import { Formik } from 'formik';
import { Row, Col, Typography } from 'antd';
import { Wizard, Steps as WizardSteps, Step } from 'react-albus';

import schema from './schema';
import styles from './Assessment.module.css';
import WizardButtons from '../WizardButtons';
import IntroForm from '../IntroForm';
import BackgroundForm from '../BackgroundForm';
import TestsForm from '../TestsForm';
import ConclusionForm from '../ConclusionForm';
import Paper from '../Paper';
import {
  fetchMedication as fetchMedicationApi,
  fetchAssessmentOptions as fetchAssessmentOptionsApi,
} from '../../lib/services/api';
import {
  save as saveAction,
} from '../../store/actions/assessment';

const fetchMedDebounced = AwesomeDebouncePromise(fetchMedicationApi, 1000);

const Assessment = ({
  history,
  save,
  assessmentData,
}) => {
  const [formOptions, setFormOptions] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [medicationData, setMedicationData] = useState([]);
  const [isFetchingMedication, setFetchingMedication] = useState(false);
  const refForm = useRef({ current: {} });

  useEffect(() => {
    async function asyncFetch() {
      setFormOptions(await fetchAssessmentOptionsApi());
    }
    asyncFetch();
  }, []);

  const stepsOptions = [
    {
      title: 'Patient introduction',
      id: 'intro',
      schema: schema.intro,
    },
    {
      title: 'Personal history',
      id: 'background',
      schema: schema.background,
    },
    {
      title: 'Tests results',
      id: 'tests',
      schema: schema.tests,
    },
    {
      title: 'Final conclusion',
      id: 'conclusion',
      schema: schema.conclusion,
    },
  ];

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

  const validateAndSave = async () => {
    const errors = await refForm.current.validateForm();
    const isValid = !Object.entries(errors).length;
    if (isValid) {
      const { values } = refForm.current.state;
      save(stepsOptions[currentStep].id, values);
      return true;
    }
    return false;
  };

  const handleLastStep = async () => {
    if (await validateAndSave()) {
      // finish();
      history.replace('/letter');
      // animateScroll.scrollToTop();
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
            initialValues={assessmentData[stepsOptions[currentStep].id]}
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
  );
};

Assessment.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  save: PropTypes.func,
};

Assessment.defaultProps = {
  save: nop,
};

const mapStateToProps = state => ({
  assessmentData: state.assessment.data,
});

const mapDispatchToProps = dispatch => ({
  save: bindActionCreators(saveAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Assessment);
