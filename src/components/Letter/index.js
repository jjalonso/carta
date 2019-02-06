import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import styles from './Letter.module.css';

const Letter = () => (
  <Paper className={styles.letter} elevation={4}>
    <Typography component="p">
      Work in progress <span role='img' aria-label='yo'>😎</span>
    </Typography>
  </Paper>
);

export default Letter;
