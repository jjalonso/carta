import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, InputNumber } from 'antd';

import styles from './CognitiveWidget.module.css';

const CognitiveWidget = ({
  value,
  onChange,
}) => {
  const handleChange = (index, prop, v) => {
    const newState = [...value];
    newState[index][prop] = v;
    onChange(newState);
  };

  return (
    <>
      {
        value.map((item, index) => (
          <Row key={item.domain}>
            <Col span={7}>
              {item.domain}
            </Col>
            <Col offset={1} span={7}>
              <InputNumber
                className={styles.scoreInput}
                min={0}
                max={100}
                placeholder="Score"
                onChange={v => handleChange(index, 'score', v)}
                value={item.score}
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
  value: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.string,
      score: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      maxScore: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  ),
  onChange: PropTypes.func,
};

CognitiveWidget.defaultProps = {
  value: [
    { domain: 'Attention', score: null, maxScore: null },
    { domain: 'Memory', score: null, maxScore: null },
    { domain: 'Fluency', score: null, maxScore: null },
    { domain: 'Language', score: null, maxScore: null },
    { domain: 'Visuospatial', score: null, maxScore: null },
  ],
  onChange: () => {},
};

export default CognitiveWidget;
