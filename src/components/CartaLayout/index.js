/* eslint react/jsx-no-target-blank:  */

import React from 'react';
import { Layout, Icon, Button } from 'antd';

import styles from './CartaLayout.module.css';
import Assessment from '../Assessment';

const CartaLayout = () => (
  <Layout>
    <Layout.Header>
      <div className={styles.wrapper}>
        <img className={styles.logo} alt="logo" src="/images/logo_green.png" />
        <a
          target="_blank"
          href="http://m.me/2029102333853119"
        >
          <Button
            className={styles.requestHelp}
            type="primary"
          >
            <Icon type="message" />
            Get Help
          </Button>
        </a>
      </div>
    </Layout.Header>

    <Layout.Content className={styles.content}>
      <Assessment />
    </Layout.Content>

    <Layout.Footer className={styles.footer}>
      <div className={styles.wrapper}>
        Made with&nbsp;
        <Icon type="heart" />
        <br />
        Carta
      </div>
    </Layout.Footer>
  </Layout>
);

export default CartaLayout;
