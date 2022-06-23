import {
  AUTH_SET_USER,
  AUTH_USER_CHANGE_EMAIL,
  AUTH_USER_CHANGE_PASSWORD,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGIN_FAIL,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_RESET_FIELD,
  AUTH_USER_SIGN_OUT,
} from '../actions/auth-actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  errorMessage: '',
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case AUTH_USER_LOGIN:
      return {...state, loading: true, errorMessage: ''};
    case AUTH_USER_LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        errorMessage: '',
        user: payload,
      };
    case AUTH_USER_CHANGE_EMAIL:
      return {...state, email: payload};
    case AUTH_USER_CHANGE_PASSWORD:
      return {...state, password: payload};

    case AUTH_USER_LOGIN_FAIL:
      return {...state, password: '', loading: false, errorMessage: payload};

    case AUTH_USER_RESET_FIELD:
      return {...INITIAL_STATE, user: state.user};
    case AUTH_SET_USER:
      return {...INITIAL_STATE, user: payload};
    case AUTH_USER_SIGN_OUT:
      return {...INITIAL_STATE};
    default:
      return state;
  }
};
