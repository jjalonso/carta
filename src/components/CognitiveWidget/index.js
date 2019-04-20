import React from 'react';
import PropTypes from 'prop-types';
import nop from 'nop';
import { Row, Col, InputNumber } from 'antd';

import styles from './CognitiveWidget.module.css';

const CognitiveWidget = ({
  value,
  onChange,
}) => {
  const handleChange = (index, prop, v) => {
    const newValue = [...value];
    newValue[index][prop] = v;
    onChange(newValue);
  };

  return (
    <>
      {
        value.map((item, index) => (
          <Row key={item.name}>
            <Col span={7}>
              {item.name}
            </Col>
            <Col offset={1} span={7}>
              <InputNumber
                className={styles.scoreInput}
                min={0}
                max={100}
                placeholder="Score"
                value={item.score}
                onChange={v => handleChange(index, 'score', v)}
              />
            </Col>
            <Col span={2} className={styles.separator}>
            /
            </Col>
            <Col span={7}>
              <InputNumber
                className={styles.scoreInput}
                min={1}
                max={100}
                placeholder="Max Score"
                onChange={v => handleChange(index, 'maxScore', v)}
                value={item.maxScore}
              />
            </Col>
          </Row>
        ))
      }
    </>
  );
};

CognitiveWidget.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

CognitiveWidget.defaultProps = {
  value: [],
  onChange: nop,
};

export default CognitiveWidget;
