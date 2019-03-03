import React from 'react';
import { Form, Row, Col } from 'antd';
import { useFormPropType } from '../../hooks/useForm';

// import styles from './CognitiveForm.module.css';
import TestInput from '../TestInput';

const CognitiveForm = ({
  cognitive,
}) => (
  <>
    <Row>
      <Col span={13}>
        <Form.Item label="Cognitive Test Result">
          <p>Record here the patient test result, you can add and remove domains to suit your test.</p>
          <TestInput {...cognitive} />
        </Form.Item>
      </Col>
    </Row>

  </>
);

CognitiveForm.propTypes = {
  cognitive: useFormPropType.isRequired,
};

export default CognitiveForm;
