import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Row,
  Form,
  Col,
} from 'antd';

import styles from './AssessmentStep.module.css';

const AssessmentStep = ({
  nextStep,
  previousStep,
  currentStep,
  children,
}) => (
  <Form
    className={styles.assessmentStep}
    layout="horizontal"
    onSubmit={() => {}}
  >
    <div className={styles.content}>
      {children}
    </div>

    <Row className={styles.buttons}>
      <Col
        span={12}
        className={styles.left}
      >
        {
          currentStep !== 1
          && (
          <Button
            type="primary"
            onClick={previousStep}
          >
            <Icon type="left" />
            Back
          </Button>
          )
        }
      </Col>

      <Col
        span={12}
        className={styles.right}
      >
        <Button
          type="primary"
          onClick={nextStep}
        >
          Next
          <Icon type="right" />
        </Button>
      </Col>
    </Row>

  </Form>

);

AssessmentStep.propTypes = {
  currentStep: PropTypes.number,
  previousStep: PropTypes.func,
  nextStep: PropTypes.func,
  children: PropTypes.node,
};

AssessmentStep.defaultProps = {
  currentStep: 0,
  previousStep: () => {},
  nextStep: () => {},
  children: [],
};

export default AssessmentStep;
