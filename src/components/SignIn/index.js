import React, { useState, useContext } from 'react';
import {
  Button, Input,
} from 'antd';
import { AuthContext } from '../App';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const { emailSent, sendLink } = useContext(AuthContext);

  const handleSendLink = () => sendLink(email);
  const handleChangeEmail = e => setEmail(e.target.value);

  return (
    <>
      { emailSent ? <span>Email sent!</span> : (
        <>
          <Input value={email} onChange={handleChangeEmail} placeholder="Email address" />
          <Button onClick={handleSendLink}>
            Sign in
          </Button>
        </>
      )
    }
    </>
  );
};

export default SignIn;
