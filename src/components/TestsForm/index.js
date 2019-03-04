import React from 'react';
import { Form, Row, Col } from 'antd';
import { useFormPropType } from '../../hooks/useForm';

import styles from './TestsForm.module.css';
import SimpleEditor from '../SimpleEditor';
import CognitiveWidget from '../CognitiveWidget';

const TestsForm = ({
  examinationNotes,
  cognitive,
  cognitiveNotes,
}) => (
  <>
    <Row className={styles.section}>
      <Col span={24}>
        <Form.Item label="Mental health examination">
          <SimpleEditor
            contentClassName={styles.notepad}
            placeholder="Describe the patient mental health examination"
            {...examinationNotes}
          />
        </Form.Item>
      </Col>
    </Row>
    <Row className={styles.section}>
      <Col span={8}>
        <Form.Item label="Cognitive Test Result">
          <CognitiveWidget {...cognitive} />
        </Form.Item>
      </Col>
      <Col offset={1} span={15}>
        <Form.Item label="Aditional notes">
          <SimpleEditor
            contentClassName={styles.notepad}
            placeholder="Describe other cognitive test observations"
            {...cognitiveNotes}
          />
        </Form.Item>
      </Col>
    </Row>
  </>
);

TestsForm.propTypes = {
  examinationNotes: useFormPropType.isRequired,
  cognitive: useFormPropType.isRequired,
  cognitiveNotes: useFormPropType.isRequired,
};

export default TestsForm;
