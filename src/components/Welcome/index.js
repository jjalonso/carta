import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Typography,
  Button,
} from 'antd';

import styles from './Welcome.module.css';

const Welcome = () => (
  <Row>
    <Col offset={2} span={12} className={styles.text}>
      <Typography.Title
        level={2}
      >
        Welcome to Carta!
      </Typography.Title>
      <Typography.Paragraph>
        As promised, we will help you to generate your assessment in a jiffy.
        <br />
        We are pretty sure that after trying Carta you will never want
        to type endlessly letters again.
      </Typography.Paragraph>
      <Typography.Paragraph>
        We are still BETA and we could still contains errors, please chat with us in case you
        find some problems or if you fancy to say hi.
      </Typography.Paragraph>
      <Typography.Paragraph
        strong
      >
        We&apos;ll love to get feedback from you!
      </Typography.Paragraph>

      <Link to="/assessment">
        <Button
          type="primary"
        >
          Start Assessment!
        </Button>
      </Link>


    </Col>
    <Col span={8}>
      <img className={styles.image} alt="welcome" src="/images/welcome.svg" />
    </Col>
  </Row>
);


export default Welcome;
