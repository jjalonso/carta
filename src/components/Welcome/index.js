import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Button,
} from 'antd';

import styles from './Welcome.module.css';
import Paper from '../Paper/Paper';

const Welcome = () => (
  <>
    <Typography.Title
      level={2}
      className={styles.pageTitle}
    >
      New Assessment
    </Typography.Title>
    <Paper className={styles.imagePaper}>

      <Typography.Title level={4}>
         Welcome to Carta!
      </Typography.Title>

      <Typography.Paragraph>
        We will help you to generate your assessment in a jiffy.
      </Typography.Paragraph>

      <Typography.Paragraph>
        We are pretty sure that after trying Carta you will never want
        to type endlessly letters again.
      </Typography.Paragraph>

      <Typography.Paragraph strong>
        We&apos;ll love to get feedback from you!
      </Typography.Paragraph>

      <Link to="/assessment">
        <Button
          type="primary"
          className={styles.button}
        >
          New Assessment
        </Button>
      </Link>
    </Paper>
  </>
);


export default Welcome;
