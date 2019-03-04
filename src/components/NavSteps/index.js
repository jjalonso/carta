import PropTypes from 'prop-types';
import React from 'react';
import { Steps } from 'antd';
import styles from './NavSteps.module.css';

const NavSteps = ({ current }) => (
  <Steps
    progressDot
    current={current}
    className={styles.navSteps}
  >
    <Steps.Step title="Assessment" description="Patient introduction." />
    <Steps.Step title="Health" description="Medical information." />
    <Steps.Step title="Personal" description="Patient background." />
    <Steps.Step title="Tests" description="Tests results." />

    <Steps.Step title="Conclusion" description="Design your plan." />
    <Steps.Step title="Letter" description="Magic happens" />
  </Steps>
);

NavSteps.propTypes = {
  current: PropTypes.number.isRequired,
};

export default NavSteps;
