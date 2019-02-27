import React from 'react';

// import styles from './Letter.module.css';
import { useFormPropType } from '../../hooks/useForm';

const Letter = ({
  name,
  gender,
  date,
  place,
  patientCompany,
  problems,
  medication,
  country,
}) => (
<div></div>
)


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
