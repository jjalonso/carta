import React from 'react';
import { Col, Typography, Row } from 'antd';

import styles from './Paper.module.css';

const Paper = ({ children, title }) => (
  <>
    <Typography.Title className={styles.title}>
      { title }
    </Typography.Title>
    <div className={styles.paper}>
      {/* <Col offset={4} span={16}> */}
      {children}
      {/* </Col> */}
    </div>
  </>
);

export default Paper;
