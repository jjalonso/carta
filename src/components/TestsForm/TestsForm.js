import React from 'react';
import { Form, Row, Col } from 'antd';

import Editor from '../Editor';
import CognitiveWidget from '../CognitiveWidget';
import styles from './TestsForm.module.css';
import RiskWidget from '../RiskWidget';
import FieldHelp from '../FieldHelp';

const TestsForm = ({
  fields,
  fieldsState,
}) => (
  <Form
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={13}>
        <Form.Item
          label="Mental health examination"
          {...fieldsState.examination}
        >
          <Editor
            contentClassName={styles.notepad}
            placeholder="Describe the patient mental health examination"
            {...fields.examination}
          />
        </Form.Item>
      </Col>

      <Col offset={1} span={10}>
        <Form.Item
          label="Cognitive test result"
          extra="You can add a longer description at the end of the assessment"
          {...fieldsState.cognitive}
        >
          <CognitiveWidget {...fields.cognitive} />
        </Form.Item>
      </Col>

    </Row>

    <Row>


      <Col span={10}>

        <Form.Item
          labelCol={{ span: 7 }}
          label="Risk assestment"
          extra="You can add a longer description at the end of the assessment"
          {...fields.riskSelf}
        >
          <FieldHelp text="You can move/drag the slider along the bar to set a risk level" />
          <Row>
            <Col span={9}>
              Risk to self
            </Col>
            <Col span={15}>
              <RiskWidget
                {...fields.riskSelf}
              />
            </Col>
          </Row>

          <Row>
            <Col span={9}>
              Risk to others
            </Col>
            <Col span={15}>
              <RiskWidget
                {...fields.riskOthers}
              />
            </Col>
          </Row>

          <Row>
            <Col span={9}>
              Other risk behaviours
            </Col>
            <Col span={15}>
              <RiskWidget
                {...fields.riskXtras}
              />
            </Col>
          </Row>
        </Form.Item>
      </Col>
    </Row>

  </Form>
);

TestsForm.propTypes = {
  // TODO: state
  // TODO: fieldsState
};

export default TestsForm;
