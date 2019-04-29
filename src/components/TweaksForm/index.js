import React from 'react';
import {
  Col,
  Row,
  Form,
} from 'antd';

import Field from '../Field';
import Editor from '../Editor';
import styles from './TweaksForm.module.css';

const TweaksForm = () => (
  <>
    <Row className={styles.centerAligned}>
      <Col span={24}>
        <Field
          name="cognitiveConclusion"
          render={(field, error) => (
            <Form.Item
              label="Cognitive comments"
              extra="We have written this for you, you can add your conclusion."
              {...error}
            >
              <Editor
                contentClassName={styles.conclusionEditor}
                placeholder="Enter cognitive conclusion"
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>
    </Row>

    <Row className={styles.centerAligned}>
      <Col span={24}>
        <Field
          name="risksConclusion"
          render={(field, error) => (
            <Form.Item
              label="Risks comments"
              extra="We have written this for you, you can add your conclusion."
              {...error}
            >
              <Editor
                contentClassName={styles.conclusionEditor}
                placeholder="Enter risks conclusion"
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

    </Row>

    {/* <Row>
      <Field
        name="risksConclusion"
        render={(field, error) => (
          <Form.Item
            {...error}
          >
            <Editor
              contentClassName={styles.notesEditorContent}
              placeholder="Describe risks conclusion"
              {...field}
            />
          </Form.Item>
        )}
      />
    </Row> */}

    <Row>
      <Col span={24}>
        <Field
          name="impression"
          render={(field, error) => (
            <Form.Item
              color={false}
              label="Impression"
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
              label="Care plan"
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
  </>
);

export default TweaksForm;
