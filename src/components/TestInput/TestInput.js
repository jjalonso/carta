import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  InputNumber,
  Input,
  Row,
  Col,
} from 'antd';

import styles from './TestInput.module.css';

const TestInput = ({
  data,
  onChange,
  onAdd,
  onRemove,
  isAddDisabled,
  isRemoveDisabled,
}) => (
  <div className={styles.testInput}>
    <Row
      type="flex"
      justify="end"
      className={styles.top}
    >
      <Col
        span={7}
        className={styles.add}
      >
        <Button
          type="dashed"
          onClick={onAdd}
          disabled={isAddDisabled}
        >
          <Icon type="plus" />
          Add domain
        </Button>
      </Col>
    </Row>
    {
      data.map(item => (
        <Row key={item.key}>
          <Col span={8}>
            <Input
              name="domain"
              placeholder="Domain name"
              onChange={e => onChange(item.key, 'domain', e.target.value)}
              value={item.domain}
            />
          </Col>
          <Col offset={1} span={5}>
            <InputNumber
              className={styles.scoreInput}
              min={0}
              max={100}
              placeholder="Score"
              onChange={v => onChange(item.key, 'score', v)}
              value={item.score}
            />
          </Col>
          <Col span={1} className={styles.separator}>
          /
          </Col>
          <Col span={5}>
            <InputNumber
              className={styles.scoreInput}
              min={0}
              max={100}
              placeholder="Max Score"
              onChange={v => onChange(item.key, 'maxScore', v)}
              value={item.maxScore}
            />
          </Col>
          <Col
            offset={1}
            span={3}
            className={styles.remove}
          >
            <Button
              type="dashed"
              disabled={isRemoveDisabled}
              onClick={() => onRemove(item.key)}
            >
              <Icon type="delete" />
            </Button>
          </Col>
        </Row>

      ))
    }
  </div>
);


TestInput.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.number,
    domain: PropTypes.string,
    score: PropTypes.number,
    maxScore: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isAddDisabled: PropTypes.bool.isRequired,
  isRemoveDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TestInput;
