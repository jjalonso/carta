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
    placement="bottom"
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
    <Button type="link">
      <Icon type="smile" theme="filled" className={styles.accountLink} />
      {/* <Icon type="setting" theme="filled" className={styles.accountLink} /> */}
    </Button>
  </Popover>
) : (
  ''
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
