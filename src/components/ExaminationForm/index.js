import React from 'react';
import {
  Row,
  Col,
  Form,
} from 'antd';

import styles from './ExaminationForm.module.css';
import { useFormPropType } from '../../hooks/useForm';
import SimpleEditor from '../SimpleEditor';

const ExaminationForm = ({
  examination,
}) => (
  <>
    <Row>
      <Col span={10}>
        <Form.Item label="Mental health examination">
          <SimpleEditor
            {...examination}
          >
            <div className={styles.examinationEdit} />
          </SimpleEditor>
        </Form.Item>
      </Col>

    </Row>

  </>

);

ExaminationForm.propTypes = {
  examination: useFormPropType.isRequired,
};

export default ExaminationForm;
