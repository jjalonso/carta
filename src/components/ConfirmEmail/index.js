import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import nop from 'nop';

import { confirmEmail as confirmEmailAction } from '../../store/actions/auth';
import ConfirmEmail from './ConfirmEmail';

const ConfirmEmailContainer = ({ confirmEmail }) => {
  const handleSubmit = ({ email }) => {
    confirmEmail(email);
  };

  return (
    <ConfirmEmail
      onSubmit={handleSubmit}
    />
  );
};

ConfirmEmailContainer.propTypes = {
  confirmEmail: PropTypes.func,
};

ConfirmEmailContainer.defaultProps = {
  confirmEmail: nop,
};

const mapDispatchToProps = dispatch => ({
  confirmEmail: bindActionCreators(confirmEmailAction, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(ConfirmEmailContainer);
