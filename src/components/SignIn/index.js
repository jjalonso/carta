import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import {
  Button, Input,
} from 'antd';

import useLinkAuth from '../../hooks/useLinkAuth';
import { useAuthState } from 'react-firebase-hooks/auth';

const SignIn = ({history}) => {
  const [email, setEmail] = useState('');
  const { user } = useAuthState(firebase.auth());
  const { sendLink, emailSent, signedIn } = useLinkAuth();
  
  useEffect(() => {
    user && history.push('/');
  }, [user, history]);

  const handleSignIn = () => sendLink(email, 'http://localhost:3000/signin');

  const handleSignOut = () => firebase.auth().signOut(); // DEV

  const handleChangeEmail = (e) => setEmail(e.target.value);

  return (
    <>
      { emailSent ? <span>Email sent!</span> : (
        <>
          <Input value={email} onChange={handleChangeEmail} placeholder="Email address" />
          <Button onClick={handleSignIn}>
            Sign in
          </Button>

          {/* DEV */}
          <Button onClick={handleSignOut}>SignOut (DEV)</Button>
        </>
      )
    }
    </>
  );
};

export default SignIn;
