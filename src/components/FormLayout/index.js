/* eslint react/jsx-no-target-blank:  */
import React from 'react';
import { Switch, Link } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import {
  Layout,
  Icon,
  Row,
} from 'antd';

import Route from '../Route';
import Assessment from '../Assessment';
import Welcome from '../Welcome';
import PreviewLetter from '../PreviewLetter';
import SignIn from '../SignIn';
import styles from './FormLayout.module.css';
import TopBar from '../TopBar';
import FinishSignIn from '../FinishSignIn';

const FormLayout = () => (
  <>
    <MessengerCustomerChat
      pageId="2029102333853119"
      appId="163164767920929"
      themeColor="#5EC1A1"
      loggedInGreeting="Hello dear! We are here to chat in case you need help or wanted to say hi!"
      loggedOutGreeting="Hello dear! We are here to chat in case you need help or wanted to say hi!"
    />
    <Layout className={styles.layout}>
      <Layout.Header>

        <div className={styles.header}>
          <img alt="logo" src="/images/logo-green.png" className={styles.logo} />
          <TopBar />
        </div>
      </Layout.Header>

      <Layout.Content className={styles.content}>
        <Switch>
          <Route auth exact path="/" component={Welcome} />
          <Route auth exact path="/assessment" component={Assessment} />
          <Route auth exact path="/letter" component={PreviewLetter} />
          <Route exact path="/signin/" component={SignIn} />
          <Route exact path="/signin/finish" component={FinishSignIn} />
        </Switch>
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
  </>
);

export default FormLayout;
