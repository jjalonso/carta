import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import nop from 'nop';
import {
  Icon,
  Popover,
  Button,
} from 'antd';
import { signOut as signOutAction } from '../../store/actions/auth';

import styles from './TopBar.module.css';

const TopBar = ({ user, signOut }) => (user ? (
  <Popover
    // className={styles.popoverOverlay}
    placement="bottomRight"
    trigger="hover"
    content={(
      <ul className={styles.menuList}>
        <li>
          <Button type="link">
            Chat with us
          </Button>
        </li>
        <li>
          <Button type="link" onClick={signOut}>
            Log Out
          </Button>
        </li>
      </ul>
    )}
  >
    <div>
      <Button type="primary" shape="circle" size="large" icon="user" />
    </div>
  </Popover>
) : (
  null
));

TopBar.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  signOut: PropTypes.func,
};

TopBar.defaultProps = {
  user: null,
  signOut: nop,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  signOut: bindActionCreators(signOutAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);
