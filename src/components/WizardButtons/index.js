import React from 'react';
import PropTypes from 'prop-types';
import nop from 'nop';
import {
  Icon,
  Button,
  Col,
  Row,
} from 'antd';

import styles from './WizardButtons.module.css';

const WizardButtons = ({
  steps,
  step,
  onPrev,
  onNext,
  onFinish,
}) => (
  <Row>
    <Col span={12} className={styles.prevCol}>
      {step > 0 && (
        <Button
          type="secondary"
          onClick={onPrev}
        >
          <Icon type="left" />
          Back
        </Button>
      )}
    </Col>
    <Col span={12} className={styles.nextCol}>
      <Button
        type="primary"
        onClick={step < steps - 1 ? onNext : onFinish}
      >
        Next
        <Icon type="right" />
      </Button>
    </Col>
  </Row>
);

WizardButtons.propTypes = {
  steps: PropTypes.number,
  step: PropTypes.number,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  onFinish: PropTypes.func,
};

WizardButtons.defaultProps = {
  steps: 0,
  step: 0,
  onPrev: nop,
  onNext: nop,
  onFinish: nop,
};

export default WizardButtons;
