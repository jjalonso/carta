import { combineReducers } from 'redux';

import auth from './auth';
import assessment from './assessment';

export default combineReducers({
  auth,
  assessment,
});
