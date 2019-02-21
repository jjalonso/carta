import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, NoSsr } from '@material-ui/core';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import AsyncSelect from 'react-select/lib/Async';
import debounce from 'debounce';

import components from './components';
import styles from './styles';

const Select = ({
  classes,
  theme,
  canCreate,
  isMulti,
  placeholder,
  loadOptions,
  noOptionsMessage,
  onChange,
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

  const debouncedLoadOptions = debounce(loadOptions, 500);

  return (
    <NoSsr>
      {
        canCreate ? (
          <AsyncCreatableSelect
            defaultOptions
            noOptionsMessage={() => null}
            isMulti={isMulti}
            isClearable={false}
            components={components}
            loadOptions={debouncedLoadOptions}
            classes={classes}
            styles={selectStyles}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
          : (
            <AsyncSelect
              defaultOptions
              isMulti={isMulti}
              isClearable={false}
              noOptionsMessage={noOptionsMessage}
              components={components}
              loadOptions={debouncedLoadOptions}
              classes={classes}
              styles={selectStyles}
              placeholder={placeholder}
              onChange={onChange}
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
  placeholder: PropTypes.string,
  noOptionsMessage: PropTypes.func,
  loadOptions: PropTypes.func,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  theme: {},
  classes: {},
  canCreate: false,
  isMulti: false,
  placeholder: '',
  noOptionsMessage: undefined,
  loadOptions: () => ({}),
  onChange: () => ({}),
};

export default withStyles(styles, { withTheme: true })(Select);
