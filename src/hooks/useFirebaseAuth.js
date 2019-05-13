import { useState, useEffect } from 'react';
import * as queryParameters from 'query-parameters';
import firebase from 'firebase';

const useLinkAuth = (url) => {
  const [emailSent, setEmailSent] = useState(false);
  const [state, setState] = useState({initialising: true, user: undefined});

  useEffect(() => {
    console.log(firebase.auth());
    const unsubscribe = firebase.auth().onAuthStateChanged(handleAuthStateChange);
    return () => unsubscribe();
  }, []);

  const handleAuthStateChange = (user) => {
    setState({ initializing: false, user });
  }

  const signIn = async () => {
    console.log('SIGNING!')
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      console.log('link!', window.location.href)
      const paramEmail = queryParameters(window.location.search).email;
      return await firebase.auth()
        .signInWithEmailLink(paramEmail, window.location.href);
    }
  };

  const sendLink = async (email) => {
    const actionCodeSettings = {
      url: `${url}?email=${email}`,
      handleCodeInApp: true,
    };
    setEmailSent(firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings));
  }

  return { emailSent, sendLink, signIn, ...state };
};

export default useLinkAuth;
