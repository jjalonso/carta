import React from 'react';
import {
  Col,
  Row,
  Form,
} from 'antd';

import Field from '../Field';
import Editor from '../Editor';
import styles from './ConclusionForm.module.css';

const ConclusionForm = () => (
  <Form
    autoComplete="off"
    colon={false}
  >
    <Row>
      <Col span={24}>
        <Field
          name="impression"
          render={(field, error) => (
            <Form.Item
              color={false}
              label="Impression *"
              {...error}
            >
              <Editor
                contentClassName={styles.impressionEditor}
                placeholder="Describe final impression."
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="carePlan"
          render={(field, error) => (
            <Form.Item
              color={false}
              label="Care plan *"
              {...error}
            >
              <Editor
                contentClassName={styles.careEditor}
                placeholder="Describe care plan."
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>
    </Row>
  </Form>
);

export default ConclusionForm;
