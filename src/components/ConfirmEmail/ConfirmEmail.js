import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Button,
  Input,
  Row,
  Typography,
  Col,
  Form,
} from 'antd';
import nop from 'nop';

import scheme from './scheme';
import Paper from '../Paper';
import Field from '../Field';
import styles from './ConfirmEmail.module.css';

const ConfirmEmail = ({
  loading,
  onSubmit,
}) => (
  <>
    <Paper>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={scheme}
        initialValues={{ email: '' }}
        onSubmit={onSubmit}
        render={formikProps => (
          <Form
            colon={false}
            onSubmit={formikProps.handleSubmit}
          >
            <Row>
              <img src="/images/confetti.png" alt="email" className={styles.image} />

              <Col span={24}>
                <Typography.Title level={2}>
                  Great!
                </Typography.Title>

                <Typography.Title level={4}>
                  Confirm your email to continue
                </Typography.Title>

                <Col span={24}>
                  <Field
                    name="email"
                    render={(field, error) => (
                      <Form.Item
                        label="Email *"
                        {...error}
                      >
                        <Input
                          placeholder="Email address"
                          {...field}
                        />
                      </Form.Item>
                    )}
                  />
                </Col>

                <Button
                  className={styles.button}
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  Confirm email
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      />
    </Paper>
  </>
);

ConfirmEmail.propTypes = {
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

ConfirmEmail.defaultProps = {
  loading: false,
  onSubmit: nop,
};

export default ConfirmEmail;
