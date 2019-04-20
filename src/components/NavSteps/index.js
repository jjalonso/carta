import React from 'react';
import { Steps } from 'antd';
import styles from './NavSteps.module.css';

const NavSteps = ({
  current,
  options,
}) => (
  <Steps
    progressDot
    current={current}
    className={styles.navSteps}
  >
    { options.map(opt => (
      <Steps.Step
        key={opt.title}
        title={opt.title}
        description={opt.description}
      />
    ))}

  </Steps>
);

export default NavSteps;
