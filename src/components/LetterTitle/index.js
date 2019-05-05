import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

import styles from './LetterTitle.module.css';

const LetterTitle = ({
  children,
}) => (
  <Typography.Title className={styles.letterTitle}>
    {children}
  </Typography.Title>
);

LetterTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
};

LetterTitle.defaultProps = {
  children: undefined,
};

export default LetterTitle;
