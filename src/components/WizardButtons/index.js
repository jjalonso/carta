import React from 'react';
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
      {step < steps - 1 && (
        <Button
          type="primary"
          onClick={onNext}
        >
          Next
          <Icon type="right" />
        </Button>
      )}
    </Col>
  </Row>
);

export default WizardButtons;
