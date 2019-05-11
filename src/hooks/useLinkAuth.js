import { useEffect, useState } from 'react';
import * as queryParameters from 'query-parameters';
import firebase from 'firebase';

const useLinkAuth = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [emailSent, setSentEmail] = useState(false);

  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      const urlEmail = queryParameters(window.location.search).email;
      firebase.auth().signInWithEmailLink(urlEmail, window.location.href)
        .then((result) => setSignedIn(true))
        .catch((error) => console.log('ERROR', error)); // TODO: error handling
    }
  }, []);

  const sendLink = (email, url) => {
    const actionCodeSettings = {
      url: `${url}?email=${email}`,
      handleCodeInApp: true,
    };
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => setSentEmail(true));
  }

  return {sendLink, emailSent, signedIn};
};

export default useLinkAuth;
