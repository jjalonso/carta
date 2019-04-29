import React from 'react';
import { Typography } from 'antd';

import styles from './Paper.module.css';

const Paper = ({ children, title }) => (
  <>
    <Typography.Title className={styles.title}>
      { title }
    </Typography.Title>
    <div className={styles.paper}>
      {children}
    </div>
  </>
);

export default Paper;
