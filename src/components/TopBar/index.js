import React, { useEffect } from 'react';
import * as firebase from 'firebase/app';
import {
  Dropdown, Menu, Icon
} from 'antd';
import { useAuthState } from 'react-firebase-hooks/auth';
import classNames from 'classnames';


import styles from './TopBar.module.css';

const TopBar = () => {
  const { user } = useAuthState(firebase.auth());

  const handleSignOut = () => firebase.auth().signOut();

  return user ? (
    <Dropdown
      overlayClassName={styles.dropdownOverlay}
      overlay={
        <Menu>
        <Menu.Item>
          <span onClick={handleSignOut}>Chat with us</span>
        </Menu.Item>
        <Menu.Item>
          <span onClick={handleSignOut}>Log Out</span>
        </Menu.Item>
      </Menu>
      }>
        <a 
          classNames={classNames('ant-dropdown-link', styles.accountLink)}
          href="#"
        >
          Account <Icon type="down" />
        </a>
    </Dropdown>
  )
  : '';
};

export default TopBar;
