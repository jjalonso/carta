import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import styles from './Letter.module.css';
import { useFormPropType } from '../../hooks/useForm';

const Letter = ({
  name,
  gender,
  date,
  place,
  patientCompany,
  problems,
  medication,
}) => (
  <Paper className={styles.letter} elevation={3}>
    <Typography component="p" paragraph>
      Have a look at what you have chosen
      <span role="img" aria-label="yo">😎</span>
    </Typography>
    <Typography component="p" variant="caption">
      <strong>Name: </strong>
      {name.value}
    </Typography>
    <Typography component="p" variant="caption">
      <strong>Gender: </strong>
      {gender.value}
    </Typography>
    <Typography component="p" variant="caption">
      <strong>Assessment Date: </strong>
      {date.value}
    </Typography>
    <Typography component="p" variant="caption">
      <strong>Assessment Place: </strong>
      {place.value}
    </Typography>
    <Typography component="p" variant="caption">
      <strong>Patient Company: </strong>
      {patientCompany.value.join(', ')}
    </Typography>
    <Typography component="p" variant="caption">
      <strong>Presenting Problems: </strong>
      {problems.value.join(', ')}
    </Typography>
    <Typography component="p" variant="caption">
      <strong>Current Medication: </strong>
      {medication.value.join(', ')}
    </Typography>
  </Paper>
);

Letter.propTypes = {
  name: useFormPropType,
  gender: useFormPropType,
  date: useFormPropType,
  place: useFormPropType,
  patientCompany: useFormPropType,
  problems: useFormPropType,
  medication: useFormPropType,
};

Letter.defaultProps = {
  name: {},
  gender: {},
  date: {},
  place: {},
  patientCompany: {},
  problems: {},
  medication: {},
};

export default Letter;
