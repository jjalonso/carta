import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import {
  Menu, Icon, Popover, Button
} from 'antd';

import { AuthContext } from '../App';
import styles from './TopBar.module.css';

const TopBar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => firebase.auth().signOut();

  const handleOpenChat = () => {};


  return user ? (
    <Popover
      placement="bottom"
      trigger="hover"
      content={(
        <Menu>
          <Menu.Item>
            <Button type="link" onClick={handleOpenChat}>Chat with us</Button>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>
            <Button type="link" onClick={handleSignOut}>Log Out</Button>
          </Menu.Item>
        </Menu>
      )}
    >
      <Button type="link">
        <Icon type="setting" theme="filled" className={styles.accountLink} />
      </Button>
    </Popover>
  )
    : '';
};

export default TopBar;
