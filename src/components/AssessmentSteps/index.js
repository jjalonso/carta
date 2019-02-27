import PropTypes from 'prop-types';
import React from 'react';
import { Steps } from 'antd';
import styles from './AssessmentSteps.module.css';

const { Step } = Steps;

const AssessmentSteps = ({ current }) => (
  <Steps
    className={styles.assessmentSteps}
    size="small"
    current={current}
  >
    <Step title="Assessment" />
    <Step title="Health" />
    <Step title="Background" />
    <Step title="Tests" />
    <Step title="Conclusion" />
  </Steps>
);

AssessmentSteps.propTypes = {
  current: PropTypes.number.isRequired,
};

export default AssessmentSteps;
