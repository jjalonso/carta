import { initializeApp } from 'firebase';

import auth from './auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJaQleAIw2Dr6l2maVmRpTZMkkV3Amjn0',
  authDomain: 'carta-ec41c.firebaseapp.com',
  databaseURL: 'https://carta-ec41c.firebaseio.com',
  projectId: 'carta-ec41c',
  storageBucket: 'carta-ec41c.appspot.com',
  messagingSenderId: '703300338986',
};

const init = () => initializeApp(firebaseConfig);

init();

export default {
  authService: auth,
};
