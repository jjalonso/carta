import React from 'react';
import { Form, Row, Col } from 'antd';

import Editor from '../Editor';
import CognitiveWidget from '../CognitiveWidget';
import styles from './TestsForm.module.css';

const TestsForm = ({
  fields,
  fieldsState,
}) => (
  <Form
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={24}>
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
      <Col span={8}>
        <Form.Item
          label="Cognitive test result"
          {...fieldsState.cognitive}
        >
          <CognitiveWidget {...fields.cognitive} />
        </Form.Item>
      </Col>
      <Col offset={1} span={15}>
        <Form.Item
          label="Cognitive test notes"
          {...fieldsState.cognitiveNotes}
        >
          <Editor
            contentClassName={styles.notepad}
            placeholder="Describe other cognitive test observations"
            {...fields.cognitiveNotes}
          />
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
