import React, { useContext, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Formik } from 'formik';
import {
  Button, Input, Row, Typography, Col, Form,
} from 'antd';

import scheme from './scheme';
import { AuthContext } from '../App';
import Paper from '../Paper/Paper';
import Field from '../Field';
import styles from './FinishSignIn.module.css';

const FinishSignIn = ({ history }) => {
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    const email = window.localStorage.getItem('emailForSignIn');
    if (email) {
      signIn(email).then(() => {
        window.localStorage.removeItem('emailForSignIn');
        history.push('/');
      });
    }
  }, [signIn, history]);

  const handleSubmit = ({ email }) => {
    signIn(email).then(() => history.push('/'));
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
                    disabled={formikProps.isSubmitting}
                  >
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        />
      </Paper>
    </>
  );
};

FinishSignIn.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default FinishSignIn;
