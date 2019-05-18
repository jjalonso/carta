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
import styles from './SignIn.module.css';

const SignIn = ({ emailSent, loading, onSubmit }) => (
  <>
    <Paper>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={scheme}
        initialValues={{ email: '' }}
        onSubmit={onSubmit}
        render={formikProps => (
          <Form colon={false} onSubmit={formikProps.handleSubmit}>
            <Row>
              <img src="/images/email.png" alt="email" className={styles.image} />

              <Col span={24}>
                <Typography.Title level={2}>Sign In</Typography.Title>

                { emailSent ? (
                  <>
                    <Typography.Title level={4}>Check your email</Typography.Title>
                    <Typography.Paragraph>We just sent an email to you.</Typography.Paragraph>
                  </>
                ) : (
                  <>
                    <Typography.Title level={4}>No need to register!</Typography.Title>
                    <Typography.Paragraph>
                      Get a magic link sent to your email that&#39;ll sign you in instantly.
                    </Typography.Paragraph>
                    <Col span={24}>
                      <Field
                        name="email"
                        render={(field, error) => (
                          <Form.Item label="Email *" {...error}>
                            <Input placeholder="Email address" {...field} />
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
                      Send Magic Link
                    </Button>
                  </>
                )}
              </Col>
            </Row>
          </Form>
        )}
      />
    </Paper>
  </>
);

SignIn.propTypes = {
  emailSent: PropTypes.bool,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

SignIn.defaultProps = {
  emailSent: false,
  loading: false,
  onSubmit: nop,
};

export default SignIn;
