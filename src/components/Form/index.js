import React from 'react';
import {
  Grid,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Input,
  Checkbox,
  FormGroup,
} from '@material-ui/core';

import { useFormPropType } from '../../hooks/useForm';
import ProblemsSelect from '../ProblemsSelect';
import MedicationSelect from '../MedicationSelect';
import CountrySelect from '../CountrySelect';

const Form = ({
  name,
  gender,
  date,
  place,
  patientCompany,
  problems,
  medication,
}) => (
  <form noValidate autoComplete="off">

    <Grid container spacing={24}>

      { /* --- NAME --- */ }
      <Grid item xs={6}>
        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Patient Name</FormLabel>
          <Input
            type="text"
            {...name}
          />
        </FormControl>
      </Grid>

      { /* --- GENDER --- */ }
      <Grid item xs={6}>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            aria-label="Gender"
            {...gender}
          >
            <FormControlLabel
              value="female"
              label="Female"
              control={<Radio />}
            />
            <FormControlLabel
              value="male"
              label="Male"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

    </Grid>

    <Grid container spacing={24}>

      {/* --- DATE --- */}
      <Grid item xs={6}>
        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Assessment Date</FormLabel>
          <Input
            name="date"
            type="date"
            {...date}
          />
        </FormControl>
      </Grid>

      {/* --- PLACE --- */}
      <Grid item xs={6}>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Assessment Place</FormLabel>
          <RadioGroup
            row
            name="place"
            aria-label="Assessment Place"
            {...place}
          >
            <FormControlLabel
              value="home"
              label="Home"
              control={<Radio />}
            />
            <FormControlLabel
              value="clinic"
              label="Clinic"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

    </Grid>


    <Grid container spacing={24}>

      {/* --- PATIENT COMPANY --- */}
      <Grid container item xs={12}>

        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Patient Company</FormLabel>

          <FormGroup row>
            <Grid item xs={4}>
              <FormControlLabel
                label="Husband"
                control={<Checkbox {...patientCompany} checked={patientCompany.value.includes('husband')} value="husband" />}
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                label="Wife"
                control={<Checkbox {...patientCompany} checked={patientCompany.value.includes('wife')} value="wife" />}
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                label="Daughter"
                control={<Checkbox {...patientCompany} checked={patientCompany.value.includes('daughter')} value="daughter" />}
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                label="Son"
                control={<Checkbox {...patientCompany} checked={patientCompany.value.includes('son')} value="son" />}
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                label="Mother"
                control={<Checkbox {...patientCompany} checked={patientCompany.value.includes('mother')} value="mother" />}
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                label="Father"
                control={<Checkbox {...patientCompany} checked={patientCompany.value.includes('father')} value="father" />}
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                label="Friend"
                control={<Checkbox {...patientCompany} checked={patientCompany.value.includes('friend')} value="friend" />}
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                label="Partner"
                control={<Checkbox {...patientCompany} checked={patientCompany.value.includes('partner')} value="partner" />}
              />
            </Grid>

          </FormGroup>
        </FormControl>
      </Grid>

      {/* --- WORKER COMPANY --- */}
      {/* <Grid
        container
        item
        xs={4}
        direction="column"
      >
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Patient Company</FormLabel>

          <Input
            type="text"
          />
        </FormControl>
        <FormControl component="fieldset" margin="dense">
          <Input
            type="text"
          />
        </FormControl>
        <FormControl component="fieldset" margin="normal">
          <Input
            type="text"
          />
        </FormControl>
      </Grid> */}

    </Grid>

    <Grid container spacing={24}>
      {/* --- PATIENT PROBLEMS --- */}
      <Grid item xs={12}>
        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Presenting Problems</FormLabel>
          <ProblemsSelect
            {...problems}
          />
        </FormControl>
      </Grid>
    </Grid>


    <Grid container spacing={24}>
      {/* --- PATIENT MEDICATION --- */}
      <Grid item xs={12}>
        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Current Medication</FormLabel>
          <MedicationSelect
            {...medication}
          />
        </FormControl>
      </Grid>
    </Grid>

    <Grid container spacing={24}>
      {/* <Typography component="p" variant="h6">Patient Background</Typography> */}
      {/* --- PATIENT BACKGROUND --- */}
      <Grid item xs={5}>
        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Birth Place</FormLabel>
          <RadioGroup
            row
            // {...nationality}
          >
            <FormControlLabel value="true" control={<Radio />} label="UK" />
            <FormControlLabel value="false" control={<Radio />} label="Abroad" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={7}>
        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel component="legend">Birth country</FormLabel>
          <CountrySelect />
        </FormControl>
      </Grid>
    </Grid>

  </form>
);

Form.propTypes = {
  name: useFormPropType,
  gender: useFormPropType,
  date: useFormPropType,
  place: useFormPropType,
  patientCompany: useFormPropType,
  problems: useFormPropType,
  medication: useFormPropType,
};

Form.defaultProps = {
  name: {},
  gender: {},
  date: {},
  place: {},
  patientCompany: {},
  problems: {},
  medication: {},

};

export default Form;
