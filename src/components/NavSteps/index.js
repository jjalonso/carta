import PropTypes from 'prop-types';
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

NavSteps.propTypes = {
  current: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    descriptipn: PropTypes.string,
  })).isRequired,
};

export default NavSteps;
