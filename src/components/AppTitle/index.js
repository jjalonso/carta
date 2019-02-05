import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppTitle.module.css';

const AppTitle = ({ title }) => <h1 className={styles.title}>{title}</h1>;

AppTitle.propTypes = {
  title: PropTypes.string,
};

AppTitle.defaultProps = {
  title: 'Hello world',
};

export default AppTitle;

