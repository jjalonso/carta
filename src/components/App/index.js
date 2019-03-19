import 'antd/dist/antd.css';
import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import {
  Row,
  Col,
  Layout,
  Menu,
  Icon,
} from 'antd';

import styles from './App.module.css';
import NavSteps from '../NavSteps';
import IntroForm from '../IntroForm';
import MedicalForm from '../MedicalForm';
import PersonalForm from '../PersonalForm';
import TestsForm from '../TestsForm';
import initialState from './initial-state';

const App = () => {
  const [navSteps, setNavSteps] = useState(0);
  // TODO: Global Context/reducer mechamism
  const [state] = useState(initialState); // Initial state is only for development purpose

  const handleStepChange = ({ activeStep }) => {
    setNavSteps(activeStep - 1);
  };

  return (
    <Layout className="layout">
      <Layout.Header>
        <div className="logo" />
        <Menu
          className={styles.menu}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">Assessments</Menu.Item>
        </Menu>
      </Layout.Header>

      <Layout.Content className={styles.content}>
        <Row>
          <Col span={24}>
            <NavSteps
              current={navSteps}
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
                }}
              />
              <MedicalForm
                state={{
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
                  cognitiveNotes: state.cognitiveNotes,
                }}
              />
            </StepWizard>
          </Col>
        </Row>
      </Layout.Content>

      <Layout.Footer className={styles.footer}>
        Made with&nbsp;
        <Icon type="heart" />
        <br />
        Rocktaps Limited.
      </Layout.Footer>

    </Layout>
  );
};

export default App;
