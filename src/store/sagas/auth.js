import { eventChannel } from 'redux-saga';
import {
  call,
  put,
  take,
  takeLatest,
  race,
  spawn,
  delay,
} from 'redux-saga/effects';

import actions from '../actions/auth';
import history from '../../lib/services/history';
import firebase from '../../lib/services/firebase';

const { authService } = firebase;

const {
  init,
  setUser,
  noUserFound,
  getUser,
  getUserSuccess,
  getUserError,
  sendEmailLinkSuccess,
  sendEmailLinkError,
  checkEmailLink,
  checkEmailLinkSuccess,
  checkEmailLinkError,
  requireConfirm,
  signIn,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
} = actions;

export function* emailLinkCheckSaga() {
  try {
    const isEmailLink = yield call(
      authService.isSignInWithEmailLink,
      window.location.href,
    );
    if (isEmailLink) {
      const email = localStorage.getItem('email');
      const link = history.location.search;

      if (email && link) {
        yield put(checkEmailLinkSuccess());
        yield put(signIn(email, link));
      } else {
        // We have to go to another view
        // to confirm user email for
        // security reasons
        yield call(history.push, `/signin/confirm${link}`);
        yield put(requireConfirm());
      }
    } else {
      yield put(checkEmailLinkError());

      yield call(history.push, '/signin');
    }
  } catch (e) {
    console.log(e);
    // Handle this generic error
    // Perhaps it should re-try
    // TODO
  }
}

export function* sendEmailLinkSaga(action) {
  const { email } = action;

  try {
    yield call(authService.sendSignInLinkToEmail, email);
    yield put(sendEmailLinkSuccess());
    yield localStorage.setItem('email', email);
  } catch (e) {
    console.log(e);
    yield put(sendEmailLinkError(e));
  }
}
function* trySignInSaga(email) {
  yield call(authService.signInWithEmailLink, email, window.location.href);
  yield put(signInSuccess());
  if (localStorage.getItem('email')) {
    yield localStorage.removeItem('email');
  }
  yield call(history.push, '/');
}

export function* confirmEmailSaga(action) {
  const { email } = action;

  try {
    yield call(trySignInSaga, email);
  } catch (e) {
    console.log(e);
    yield put(signInError(e));
  }
}

export function* signInSaga(action) {
  const { email } = action;

  try {
    yield call(trySignInSaga, email);
  } catch (e) {
    console.log(e);
    yield put(signInError(e));
    yield call(history.push, '/signin');
  }
}

export function* signOutSaga() {
  console.log('signing out');
  try {
    yield call(authService.signOut);
    yield put(signOutSuccess());
    yield call(history.push, '/signin');
  } catch (e) {
    console.log(e);
    yield put(signOutError(e));
  }
}

export function* checkUserSaga() {
  yield put(getUser());
  const user = yield call(authService.getAuthUser);
  if (user) {
    yield put(getUserSuccess(user));
  } else {
    yield put(getUserError());
  }
}

function* initSaga() {
  yield delay(500);
  yield put(init());
}

// Watchers
export function* initAuthWatch() {
  const { user, noUser } = yield race({
    user: take(actions.AUTH_SET_USER),
    noUser: take(actions.AUTH_NO_USER_FOUND),
  });
  // There was no user signed in
  if (noUser) {
    yield put(checkEmailLink());
  }
  // User was already signed in
  if (user) {
    yield spawn(initSaga);
  }
  // This covers any use case after we go
  // to checkEmailLink/SignIn/Confirm
  const isReadyToInit = yield race({
    userAfterSignIn: take(actions.AUTH_SET_USER),
    signInError: take(actions.AUTH_SIGN_IN_ERROR),
    checkEmailLinkError: take(actions.AUTH_CHECK_EMAIL_LINK_ERROR),
    requireConfirm: take(actions.AUTH_REQUIRE_CONFIRM),
  });
  if (isReadyToInit) {
    yield spawn(initSaga);
  }
}

export function* userStateWatch() {
  function authStateChannel() {
    return eventChannel((emitter) => {
      const unsubscribe = authService.onAuthStateChanged((user) => {
        if (user) {
          emitter(setUser(user));
        } else {
          emitter(noUserFound());
        }
      });

      return () => unsubscribe();
    });
  }
  const channel = yield call(authStateChannel);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* emailLinkCheckWatch() {
  yield takeLatest(actions.AUTH_CHECK_EMAIL_LINK, emailLinkCheckSaga);
}

export function* sendEmailLinkWatch() {
  yield takeLatest(actions.AUTH_SEND_EMAIL_LINK, sendEmailLinkSaga);
}

export function* confirmEmailWatch() {
  yield takeLatest(actions.AUTH_CONFIRM_EMAIL, confirmEmailSaga);
}

export function* signInWatch() {
  yield takeLatest(actions.AUTH_SIGN_IN, signInSaga);
}

export function* signOutWatch() {
  yield takeLatest(actions.AUTH_SIGN_OUT, signOutSaga);
}
