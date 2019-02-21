import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AppTitle from '../AppTitle';
import Form from '../Form';
import Letter from '../Letter';

import styles from './App.module.css';
import { useFormInput, useFormCheckbox, useFormSelect } from '../../hooks/useForm';

const App = () => {
  const name = useFormInput('');
  const gender = useFormInput('male');
  const date = useFormInput('');
  const place = useFormInput('clinic');
  const patientCompany = useFormCheckbox([]);
  const problems = useFormSelect([]);
  const medication = useFormSelect([]);

  const formFields = {
    name,
    gender,
    date,
    place,
    patientCompany,
    problems,
    medication,
  };

  const getTheme = () => (
    createMuiTheme({
      typography: {
        useNextVariants: true,
      },
      palette: {
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#4fc3f7',
          contrastText: '#fff',
        },
      },
    })
  );

  return (
    <MuiThemeProvider theme={getTheme()}>
      <div className={styles.app}>
        <Grid container spacing={24}>
          <Grid item xs={5}>
            <AppTitle title="Angular debugger" />
            <Form
              {...formFields}
            />
          </Grid>

          <Grid item xs={1} />

          <Grid item xs={6}>
            <Letter
              {...formFields}
            />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
