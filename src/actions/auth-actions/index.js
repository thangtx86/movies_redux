import auth from '@react-native-firebase/auth';
import {
  AUTH_USER_CHANGE_EMAIL,
  AUTH_USER_CHANGE_PASSWORD,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_LOGIN_FAIL,
  AUTH_SET_USER,
  AUTH_USER_RESET_FIELD,
  AUTH_USER_SIGN_OUT,
} from './types';

export const onChangeEmail = email => ({
  type: AUTH_USER_CHANGE_EMAIL,
  payload: email,
});

export const onChangePassword = password => ({
  type: AUTH_USER_CHANGE_PASSWORD,
  payload: password,
});
export const login = () => (dispatch, getState) => {
  const {authReducer} = getState();
  const {email, password} = authReducer;
  dispatch({type: AUTH_USER_LOGIN});
  console.log('====' + JSON.stringify(authReducer));
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => {
      const userMinified = getUserMinified(user);
      console.log('====1: ' + JSON.stringify(userMinified));
      if (!userMinified.activated) {
        const error = {code: 'auth/account-not-activated'};
        throw error;
      }
      dispatch({type: AUTH_USER_LOGIN_SUCCESS, payload: userMinified});
    })
    .catch(({code}) => {
      console.log('====2: ' + JSON.stringify(code));
      let messageError = getMessageError(code);
      dispatch({type: AUTH_USER_LOGIN_FAIL, payload: messageError});
    });
};

export const logout = () => dispatch => {
  auth()
    .signOut()
    .then(() => dispatch({type: AUTH_USER_SIGN_OUT}));
};

export const setUser = data => ({
  type: AUTH_SET_USER,
  payload: getUserMinified(data),
});

export const resetField = () => ({type: AUTH_USER_RESET_FIELD});

const getUserMinified = user => {
  const {uid, email, displayName: name, emailVerified: activated} = user;
  return {
    uid,
    name,
    email,
    activated,
  };
};

const getMessageError = code => {
  let errorMessage = '';

  switch (code) {
    case 'auth/user-not-found':
      errorMessage = 'User not found.';
      break;
    case 'auth/wrong-password':
      errorMessage = 'Email and/or password are wrong.';
      break;
    case 'auth/invalid-email':
      errorMessage = 'Invalid Email.';
      break;
    case 'auth/account-not-activated':
      errorMessage = 'Verify your email to activate your account.';
      break;
    default:
      errorMessage = 'An error occurred, try again.';
  }
  return errorMessage;
};
