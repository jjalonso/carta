import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, NoSsr } from '@material-ui/core';
import ReactSelectAsyncCreatable from 'react-select/lib/AsyncCreatable';
import ReactSelectAsync from 'react-select/lib/Async';
import debounce from 'debounce-promise';

import components from './components';
import styles from './styles';

const AsyncSelect = ({
  classes,
  theme,
  canCreate,
  isMulti,
  debounceDelay,
  loadOptions,
  onChange,
  value,
}) => {
  const debouncedLoadOptions = debounce(loadOptions, debounceDelay);
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <NoSsr>
      {
        canCreate ? (
          <ReactSelectAsyncCreatable
            defaultOptions
            isMulti={isMulti}
            isClearable={false}
            noOptionsMessage={() => null}
            loadOptions={debouncedLoadOptions}
            onChange={onChange}
            // value={value}
            components={components}
            styles={selectStyles}
            classes={classes}

          />
        )
          : (
            <ReactSelectAsync
              defaultOptions
              isMulti={isMulti}
              isClearable={false}
              noOptionsMessage={() => null}
              loadOptions={debouncedLoadOptions}
              onChange={onChange}
              // value={value}
              components={components}
              styles={selectStyles}
              classes={classes}
            />
          )
      }
    </NoSsr>
  );
};

AsyncSelect.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
  classes: PropTypes.objectOf(PropTypes.any),
  canCreate: PropTypes.bool,
  isMulti: PropTypes.bool,
  // noOptionsMessage: PropTypes.func,
  debounceDelay: PropTypes.number,
  loadOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

AsyncSelect.defaultProps = {
  theme: {},
  classes: {},
  canCreate: false,
  isMulti: false,
  debounceDelay: 0,
  // noOptionsMessage: undefined,
  onChange: () => {},
  value: {},
};

export default withStyles(styles, { withTheme: true })(AsyncSelect);
