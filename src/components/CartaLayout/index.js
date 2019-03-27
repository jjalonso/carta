/* eslint react/jsx-no-target-blank:  */

import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Icon, Button, Col, Row } from 'antd';

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
        {/* <Row>
          <img className={styles.footerLogo} alt="logo" src="/images/logo.png" />
        </Row> */}
        <Row>
          <Link className={styles.footerLink} to="/terms">Terms</Link>
          |
          <Link className={styles.footerLink} to="/privacy">Privacy</Link>
          |
          <Link className={styles.footerLink} to="/contact">Contact</Link>
        </Row>
        <Row>
          Made with
          <Icon className={styles.footerHeart} type="heart" theme="filled" />
          in London
        </Row>
      </div>
    </Layout.Footer>
  </Layout>
);

export default CartaLayout;
