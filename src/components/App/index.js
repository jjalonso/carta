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
import AssessmentStep from '../AssessmentStep';
import {
  useFormTarget,
  useFormValue,
  useFormCheckbox,
} from '../../hooks/useForm';

const App = () => {
  const [navSteps, setNavSteps] = useState(0);
  const title = useFormValue();
  const name = useFormTarget();
  const date = useFormValue();
  const company = useFormValue();
  const place = useFormTarget('clinic');
  const problems = useFormValue();
  const conditions = useFormValue();
  const medication = useFormValue();
  const country = useFormValue();
  const emigrationYear = useFormValue();
  const degree = useFormTarget();
  const isDegreeIncompleted = useFormCheckbox(true);
  const living = useFormValue();
  const totalChildren = useFormValue(0);
  const activities = useFormValue();
  const examinationNotes = useFormValue();
  const cognitive = useFormValue();
  const cognitiveNotes = useFormValue();


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
          <Col span={20} offset={2}>
            <NavSteps
              current={navSteps}
            />
          </Col>
          <Col span={24}>
            <StepWizard onStepChange={({ activeStep }) => setNavSteps(activeStep - 1)}>
              <AssessmentStep>
                <IntroForm
                  title={title}
                  name={name}
                  date={date}
                  company={company}
                  place={place}
                />
              </AssessmentStep>
              <AssessmentStep>
                <MedicalForm
                  problems={problems}
                  conditions={conditions}
                  medication={medication}
                />
              </AssessmentStep>
              <AssessmentStep>
                <PersonalForm
                  country={country}
                  emigrationYear={emigrationYear}
                  degree={degree}
                  isDegreeIncompleted={isDegreeIncompleted}
                  living={living}
                  totalChildren={totalChildren}
                  activities={activities}
                />
              </AssessmentStep>
              <AssessmentStep>
                <TestsForm
                  examinationNotes={examinationNotes}
                  cognitive={cognitive}
                  cognitiveNotes={cognitiveNotes}
                />
              </AssessmentStep>
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
