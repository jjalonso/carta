import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip, Icon } from 'antd';

const FieldHelp = ({
  text,
}) => (
  <Tooltip placement="top" title={text}>
    <Icon type="question-circle" />
  </Tooltip>
);

FieldHelp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FieldHelp;
