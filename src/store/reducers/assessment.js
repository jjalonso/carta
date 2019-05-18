import {
  AUTH_INIT,
} from '../actions/assessment';

const initialState = {
  isAuthReady: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return {
        ...state,
        isInitialised: true,
      };
    default:
      return state;
  }
};

export default reducer;
