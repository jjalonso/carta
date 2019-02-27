import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, NoSsr } from '@material-ui/core';
import ReactSelect from 'react-select';
import ReactSelectCreatable from 'react-select/lib/Creatable';

import components from './components';
import styles from './styles';

const Select = ({
  classes,
  theme,
  canCreate,
  isMulti,
  isClearable,
  isSearchable,
  options,
  onChange,
  // value,
}) => {
  // TODO: Move this styles out
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  // const debouncedoptions = debounce(options, debounceDelay);
  return (
    <NoSsr>
      {
        canCreate ? (
          <ReactSelectCreatable
            defaultOptions
            isMulti={isMulti}
            isClearable={isClearable}
            isSearchable={isSearchable}
            noOptionsMessage={() => null}
            options={options}
            onChange={onChange}
            // value={value}
            components={components}
            styles={selectStyles}
            classes={classes}
          />
        )
          : (
            <ReactSelect
              defaultOptions
              isMulti={isMulti}
              isClearable={isClearable}
              isSearchable={isSearchable}
              noOptionsMessage={() => null}
              options={options}
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

Select.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
  classes: PropTypes.objectOf(PropTypes.any),
  canCreate: PropTypes.bool,
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  // noOptionsMessage: PropTypes.func,
  options: PropTypes.array,
  onChange: PropTypes.func,
  // value: PropTypes.oneOfType([
  //   PropTypes.array,
  //   PropTypes.object,
  // ]),
};

Select.defaultProps = {
  theme: {},
  classes: {},
  canCreate: false,
  isMulti: false,
  isClearable: false,
  isSearchable: true,
  // noOptionsMessage: undefined,
  onChange: () => {},
  // value: {},
};

export default withStyles(styles, { withTheme: true })(Select);
