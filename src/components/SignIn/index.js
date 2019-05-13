import React, { useContext } from 'react';
import { Formik } from 'formik';
import {
  Button, Input, Row, Typography, Col, Form,
} from 'antd';

import scheme from './scheme';
import { AuthContext } from '../App';
import Paper from '../Paper/Paper';
import Field from '../Field';
import styles from './SignIn.module.css';

const SignIn = () => {
  const { emailSent, sendLink } = useContext(AuthContext);

  const handleSubmit = ({ email }) => {
    window.localStorage.setItem('emailForSignIn', email);
    sendLink(email);
  };

  return (
    <>
      <Paper>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={scheme}
          initialValues={{ email: '' }}
          onSubmit={handleSubmit}
          render={formikProps => (
            <Form
              colon={false}
              onSubmit={formikProps.handleSubmit}
            >
              <Row>
                <img src="/images/email.png" alt="email" className={styles.image} />

                <Col span={24}>
                  <Typography.Title level={2}>
                    Sign In
                  </Typography.Title>

                  { emailSent ? (
                    <>
                      <Typography.Title level={4}>
                        Check your email
                      </Typography.Title>
                      <Typography.Paragraph>We just sent an email to you.</Typography.Paragraph>
                    </>
                  )
                    : (
                      <>
                        <Typography.Title level={4}>
                          No need to register!
                        </Typography.Title>
                        <Typography.Paragraph>
                          Get a magic link sent to your email that&#39;ll sign you in instantly.
                        </Typography.Paragraph>
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
                          disabled={formikProps.isSubmitting}
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
};

export default SignIn;
