import React from 'react';
import classNames from 'classnames';
// import { Typography } from 'antd';

import styles from './Paper.module.css';

const Paper = ({ children, className }) => (
  <>
    {/* <Typography.Title className={styles.title}>
      { title }
    </Typography.Title> */}
    <div className={classNames(styles.paper, className)}>
      {children}
    </div>
  </>
);

export default Paper;
