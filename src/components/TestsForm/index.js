import React from 'react';
import { Row, Col, Form } from 'antd';
import Editor from '../Editor';
import RiskWidget from '../RiskWidget';
import FieldHelp from '../FieldHelp';
import CognitiveWidget from '../CognitiveWidget';
import styles from './TestsForm.module.css';
import Field from '../Field';

const TestForm = ({
  examination,
  cognitive,
  riskSelf,
  riskOthers,
  riskXtras,
}) => (
  <Form
    autoComplete="off"
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={13}>
        <Field
          name="examination"
          render={(field, error) => (
            <Form.Item
              label="Mental health examination"
              {...error}
            >
              <Editor
                contentClassName={styles.notepad}
                placeholder="Describe the patient mental health examination"
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col offset={1} span={10}>
        <Field
          name="cognitive"
          render={(field, error) => (
            <Form.Item
              label="Cognitive test result"
              extra="You can write a more extensive conclusion in the next step"
              {...error}
            >
              <CognitiveWidget {...field} />
            </Form.Item>
          )}
        />
      </Col>
    </Row>

    <Row>
      <Col span={10}>
        <Field
          name="risks"
          render={(field, error) => (
            <Form.Item
              labelCol={{ span: 7 }}
              label="Risk assestment"
              extra="You can write a more extensive conclusion in the next step"
              {...error}
            >
              <FieldHelp text="Drag the slider along the bar to set a risk level" />
              <Row>
                <RiskWidget {...field} />
              </Row>
            </Form.Item>
          )}
        />
      </Col>
    </Row>
  </Form>
);

export default TestForm;
