import { LOGIN } from "../actions";

const initialState = {
  loggedIn: false,
};

const AuthReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
