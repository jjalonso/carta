import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import nop from 'nop';

import { sendEmailLink as sendEmailLinkAction } from '../../store/actions/auth';
import SignIn from './SignIn';

const SignInContainer = ({ emailSent, sendEmailLink }) => {
  const handleSubmit = ({ email }) => {
    sendEmailLink(email);
  };

  return (
    <SignIn
      emailSent={emailSent}
      onSubmit={handleSubmit}
    />
  );
};

SignInContainer.propTypes = {
  emailSent: PropTypes.bool,
  sendEmailLink: PropTypes.func,
};

SignInContainer.defaultProps = {
  emailSent: false,
  sendEmailLink: nop,
};

const mapStateToProps = state => ({
  emailSent: state.auth.emailSent,
});

const mapDispatchToProps = dispatch => ({
  sendEmailLink: bindActionCreators(sendEmailLinkAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);
