import { auth } from 'firebase';

const onAuthStateChanged = fn => auth().onAuthStateChanged(fn);

const isSignInWithEmailLink = url => auth().isSignInWithEmailLink(url);

const sendSignInLinkToEmail = email => auth().sendSignInLinkToEmail(email, {
  url: `${window.location.origin}/signin/`,
  handleCodeInApp: true,
});

const signInWithEmailLink = (email, link) => auth().signInWithEmailLink(email, link);

const signOut = () => auth().signOut();

export default {
  onAuthStateChanged,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
};
