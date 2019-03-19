import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Button,
  Col,
  Row,
} from 'antd';

import styles from './StepButtons.module.css';

const StepButtons = ({
  isFirstStep,
  isLastStep,
  onPreviousStep,
  onNextStep,
}) => (
  <>
    <Row className={styles.StepButtons}>
      <Col span={12} className={styles.backCol}>
        {
          isFirstStep
          && (
          <Button
            type="primary"
            onClick={onPreviousStep}
          >
            <Icon type="left" />
            Back
          </Button>
          )
        }
      </Col>

      <Col span={12} className={styles.nextCol}>
        <Button
          type="primary"
          onClick={onNextStep}
        >
          {isLastStep ? 'Finish' : 'Next'}
          <Icon type="right" />
        </Button>
      </Col>
    </Row>
  </>
);

StepButtons.propTypes = {
  isFirstStep: PropTypes.bool,
  isLastStep: PropTypes.bool,
  onPreviousStep: PropTypes.func,
  onNextStep: PropTypes.func,
};

StepButtons.defaultProps = {
  isFirstStep: true,
  isLastStep: false,
  onPreviousStep: () => {},
  onNextStep: () => {},
};

export default StepButtons;
