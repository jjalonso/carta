import React from 'react';
import { Input as MaterialInput } from '@material-ui/core';
import styles from './Input.module.css';

const Input = props => <MaterialInput className={styles.input} {...props} />;

export default Input;
