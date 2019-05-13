import { useState, useEffect } from 'react';
import firebase from 'firebase';

const useLinkAuth = (url) => {
  const [emailSent, setEmailSent] = useState(false);
  const [state, setState] = useState({initialising: true, user: undefined});

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleAuthStateChange);
    return () => unsubscribe();
  }, []);

  const handleAuthStateChange = (user) => {
    setState({ initializing: false, user });
  }

  const signIn = async (email) => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {

      return await firebase.auth()
        .signInWithEmailLink(email, window.location.href).then(
          () => window.localStorage.removeItem('emailForSignIn')
        );
    }
  };

  const sendLink = async (email) => {
    const actionCodeSettings = {
      url: `${url}/finish`,
      handleCodeInApp: true,
    };
    setEmailSent(firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings));
  }

  return { emailSent, sendLink, signIn, ...state };
};

export default useLinkAuth;
