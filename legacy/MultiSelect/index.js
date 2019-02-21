import React from 'react';
import PropTypes from 'prop-types';

import {
  Select,
  Input,
  Chip,
  withStyles,
} from '@material-ui/core';
import styles from './styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiSelect = ({
  name,
  value,
  classes,
  onChange,
  children,
}) => (
  <Select
    multiple
    name={name}
    value={value}
    onChange={onChange}
    className={classes.input}
    input={<Input />}
    renderValue={selected => (
      <div className={classes.chips}>
        {selected.map(v => (
          <Chip
            key={v}
            label={v}
            className={classes.chip}
          />
        ))}
      </div>
    )}
    MenuProps={MenuProps}
  >
    {children}
  </Select>
);

MultiSelect.propTypes = {
  name: PropTypes.string,
  value: PropTypes.arrayOf(String),
  // classes: PropTypes.object,
  // children: React.PropTypes.node
};

MultiSelect.defaultProps = {
  name: '',
  value: [],
  // classes: {},
};

export default withStyles(styles, { withTheme: true })(MultiSelect);
