import React from 'react';
import { Tooltip, Icon } from 'antd';

import styles from './FieldHelp.module.css';

const FieldHelp = ({
  text,
}) => (
  <Tooltip placement="top" title={text}>
    <Icon className={styles.icon} type="question-circle" />
  </Tooltip>
);

export default FieldHelp;
