/* eslint react/jsx-no-target-blank:  */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Layout,
  Icon,
  Row,
} from 'antd';

import styles from './CartaLayout.module.css';
import Assessment from '../../containers/Assessment';
import Welcome from '../Welcome';

const CartaLayout = () => (
  <Layout>
    <Layout.Header>
      <div className={styles.wrapper}>
        <img className={styles.logo} alt="logo" src="/images/logo_green.png" />
      </div>
    </Layout.Header>

    <Layout.Content className={styles.content}>
      <Route path="/assessment" component={Assessment} />
      <Route path="/" exact component={Welcome} />
    </Layout.Content>

    <Layout.Footer className={styles.footer}>
      <div className={styles.wrapper}>
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
        <Row>
          <img className={styles.footerLondon} src="/images/london.svg" alt="London" />
        </Row>
      </div>
    </Layout.Footer>
  </Layout>
);

export default CartaLayout;
