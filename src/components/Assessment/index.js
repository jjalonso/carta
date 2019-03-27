import React, { useState, useEffect } from 'react';

import StepWizard from 'react-step-wizard';
import {
  Row,
  Col,
  Icon,
  notification,
} from 'antd';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import styles from './Assessment.module.css';
import NavSteps from '../NavSteps';
import IntroForm from '../IntroForm';
import PersonalForm from '../PersonalForm';
import TestsForm from '../TestsForm';
// import initialState from './initial-state';
import initialState from './empty-state';

const Assessment = () => {
  const [navStep, setNavStep] = useState(0);
  // TODO: Global Context/reducer mechamism
  const [state] = useState(initialState);

  useEffect(() => {
    const notificationContent = (
      <>
        <p>Carta could still contain errors.</p>
        <p>
          Please use the&nbsp;
          <strong>Get Help&nbsp;</strong>
          button to report an issue.
        </p>
      </>
    );

    setTimeout(() => notification.open({
      icon: <Icon type="rocket" />,
      duration: 12,
      message: 'We are under development',
      description: notificationContent,
      placement: 'bottomLeft',
      className: styles.betaNotification,
    }), 2000);
  }, []);

  const handleStepChange = ({ activeStep }) => {
    setNavStep(activeStep - 1);
  };

  const stepsOptions = [
    { title: 'Start', description: 'Patient introduction' },
    { title: 'Personal', description: 'Patient background' },
    { title: 'Tests', description: 'Tests results' },
    { title: 'Voila!', description: 'The final tweaks' },
  ];


  return (
    <>
      <MessengerCustomerChat
        pageId="2029102333853119"
        appId="163164767920929"
      />
      <Row>
        <Col span={24}>
          <NavSteps
            current={navStep}
            options={stepsOptions}
          />
        </Col>
        <Col span={24}>
          <StepWizard onStepChange={handleStepChange}>
            <IntroForm
              state={{
                title: state.title,
                name: state.name,
                companion: state.companion,
                date: state.date,
                place: state.place,
                conditions: state.conditions,
                medication: state.medication,
                problems: state.problems,
              }}
            />
            <PersonalForm
              state={{
                country: state.country,
                emigrationYear: state.emigrationYear,
                degree: state.degree,
                isDegreeIncompleted: state.isDegreeIncompleted,
                living: state.living,
                totalChildren: state.totalChildren,
                activities: state.activities,
              }}
            />
            <TestsForm
              state={{
                examination: state.examination,
                cognitive: state.cognitive,
                riskSelf: state.riskSelf,
                riskOthers: state.riskOthers,
                riskXtras: state.riskXtras,
              }}
            />
          </StepWizard>
        </Col>
      </Row>
    </>
  );
};

export default Assessment;
