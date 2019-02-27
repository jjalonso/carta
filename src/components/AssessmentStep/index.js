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
    <Row>
      {children}
    </Row>

    <Row
      type="flex"
      justify="end"
      className={styles.buttons}
    >

      {
        currentStep !== 1
        && (
          <Col span={3}>
            <Button
              type="primary"
              onClick={previousStep}
            >
              <Icon type="left" />
              Back
            </Button>
          </Col>
        )
      }

      <Col span={3}>
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
  currentStep: 1,
  previousStep: () => {},
  nextStep: () => {},
  children: [],
};

export default AssessmentStep;
