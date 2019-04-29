import React from 'react';
import PropTypes from 'prop-types';
import nop from 'nop';
import {
  Slider,
  Col,
  Tag,
  Row,
} from 'antd';

import styles from './RiskWidget.module.css';

const RiskWidget = ({
  value,
  onChange,
}) => {
  const handleChange = (index, prop, v) => {
    const newValue = [...value];
    newValue[index][prop] = v;
    onChange(newValue);
  };

  const formatter = (v) => {
    switch (v) {
      case 1:
        return 'Low';
      case 2:
        return 'Medium';
      default:
        return 'High';
    }
  };

  return (
    <>
      {
        value.map((item, index) => (
          <Row key={item.name}>
            <Col span={6}>
              {item.name}
            </Col>
            <Col span={10}>
              <Slider
                dots
                tooltipVisible={false}
                min={1}
                max={3}
                value={item.level}
                onChange={v => handleChange(index, 'level', v)}
              />
            </Col>
            <Col offset={2} span={6}>
              <Tag className={styles.level}>{formatter(item.level)}</Tag>
            </Col>
          </Row>
        ))
      }
    </>
  );
};

RiskWidget.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

RiskWidget.defaultProps = {
  value: [],
  onChange: nop,
};

export default RiskWidget;
