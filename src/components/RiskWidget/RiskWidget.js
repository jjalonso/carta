import React from 'react';
// import PropTypes from 'prop-types';
import { Slider, Col } from 'antd';
import styles from './RiskWidget.module.css';

const RiskWidget = ({
  value,
  onChange,
  tipFormatter,
}) => (
  <>
    <Col span={17}>
      <Slider
        dots
        tooltipVisible={false}
        min={1}
        max={3}
        value={value}
        onChange={onChange}
      />
    </Col>
    <Col offset={1} span={6} className={styles.value}>
      {tipFormatter(value)}
    </Col>
  </>
);

// RiskWidget.propTypes = {
//   value: PropTypes.number.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default RiskWidget;
