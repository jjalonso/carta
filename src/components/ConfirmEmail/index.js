import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import nop from 'nop';

import { confirmEmail as confirmEmailAction } from '../../store/actions/auth';
import ConfirmEmail from './ConfirmEmail';

const ConfirmEmailContainer = ({ loading, confirmEmail }) => {
  const handleSubmit = ({ email }) => {
    confirmEmail(email);
  };

  return (
    <ConfirmEmail
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};

ConfirmEmailContainer.propTypes = {
  loading: PropTypes.bool,
  confirmEmail: PropTypes.func,
};

ConfirmEmailContainer.defaultProps = {
  loading: false,
  confirmEmail: nop,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  confirmEmail: bindActionCreators(confirmEmailAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmEmailContainer);
