import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Paper.module.css';

const Paper = ({ children, className }) => (
  <>
    <div className={classNames(styles.paper, className)}>
      {children}
    </div>
  </>
);

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Paper.defaultProps = {
  className: '',
};

export default Paper;
