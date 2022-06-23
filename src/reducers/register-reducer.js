import {
  REGISTER_USER_CHANGE_NAME,
  REGISTER_USER_CHANGE_EMAIL,
  REGISTER_USER_CHANGE_PASSWORD,
  REGISTER_USER_CREATE_ACCOUNT,
  REGISTER_USER_CREATE_FAIL,
  REGISTER_USER_RESET_FIELD,
} from '../actions/register-actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errorMessage: '',
  loading: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case REGISTER_USER_CHANGE_NAME:
      return {...state, name: payload, errorMessage: ''};
    case REGISTER_USER_CHANGE_EMAIL:
      return {...state, email: payload, errorMessage: ''};
    case REGISTER_USER_CHANGE_PASSWORD:
      return {...state, password: payload, errorMessage: ''};
    case REGISTER_USER_CREATE_ACCOUNT:
      return {...state, loading: true, errorMessage: ''};
    case REGISTER_USER_CREATE_FAIL:
      return {...state, errorMessage: payload, loading: false};
    case REGISTER_USER_RESET_FIELD:
      return {...INITIAL_STATE};

    default:
      return state;
  }
};
