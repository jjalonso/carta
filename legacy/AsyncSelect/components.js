/* eslint-disable react/prop-types */

import React from 'react';
import classNames from 'classnames';
import CancelIcon from '@material-ui/icons/Cancel';
import {
  Typography,
  TextField,
  MenuItem,
  Paper,
  Chip,
} from '@material-ui/core';

const NoOptionsMessage = ({ children, selectProps, innerProps }) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.noOptionsMessage}
    {...innerProps}
  >
    {children}
  </Typography>
);

const inputComponent = ({ inputRef, ...props }) => <div ref={inputRef} {...props} />;

const Control = ({
  children,
  selectProps,
  innerRef,
  innerProps,
}) => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: selectProps.classes.input,
        inputRef: innerRef,
        children,
        ...innerProps,
      },
    }}
    {...selectProps.textFieldProps}
  />
);

const Option = ({
  children,
  innerRef,
  isFocused,
  isSelected,
  innerProps,
}) => (
  <MenuItem
    buttonRef={innerRef}
    selected={isFocused}
    component="div"
    style={{
      fontWeight: isSelected ? 500 : 400,
    }}
    {...innerProps}
  >
    {children}
  </MenuItem>
);

const Placeholder = ({ children, selectProps, innerProps }) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.placeholder}
    {...innerProps}
  >
    {children}
  </Typography>
);

const SingleValue = ({ children, selectProps, innerProps }) => (
  <Typography
    className={selectProps.classes.singleValue}
    {...innerProps}
  >
    {children}
  </Typography>
);

const ValueContainer = ({ children, selectProps }) => (
  <div className={selectProps.classes.valueContainer}>
    {children}
  </div>
);

const MultiValue = ({
  children,
  selectProps,
  isFocused,
  removeProps,
}) => (

  <Chip
    tabIndex={-1}
    label={children}
    color="primary"
    className={classNames(selectProps.classes.chip, {
      [selectProps.classes.chipFocused]: isFocused,
    })}
    onDelete={removeProps.onClick}
    deleteIcon={<CancelIcon {...removeProps} />}
  />
);

const Menu = ({ children, selectProps, innerProps }) => (
  <Paper
    square
    className={selectProps.classes.paper}
    {...innerProps}
  >
    {children}
  </Paper>
);

export default {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};
