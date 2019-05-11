/* eslint-disable react/no-danger */
import React from 'react';
import {
  Button, Input, Typography,
} from 'antd';

import styles from './FinishSignIn.module.css';

const FinishSignIn = ({ onSignIn, onChangeEmail }) => (
  <>
    <Typography.Paragraph>We almost there, please, confirm your email address</Typography.Paragraph>
    <Input onChange={onChangeEmail} placeholder="Email address" />
    <Button onClick={onSignIn}>
      Sign in
    </Button>
  </>
);

export default FinishSignIn;
