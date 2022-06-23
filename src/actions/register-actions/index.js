import auth from '@react-native-firebase/auth';
import {
  REGISTER_USER_CHANGE_EMAIL,
  REGISTER_USER_CHANGE_NAME,
  REGISTER_USER_CHANGE_PASSWORD,
  REGISTER_USER_CREATE_ACCOUNT,
  REGISTER_USER_CREATE_SUCCESS,
  REGISTER_USER_CREATE_FAIL,
  REGISTER_USER_RESET_FIELD,
} from './types';

export const onChangeName = name => ({
  type: REGISTER_USER_CHANGE_NAME,
  payload: name,
});

export const onChangeEmail = email => ({
  type: REGISTER_USER_CHANGE_EMAIL,
  payload: email,
});

export const onChangePassword = password => ({
  type: REGISTER_USER_CHANGE_PASSWORD,
  payload: password,
});

export const registerUser =
  ({navigate}) =>
  (dispatch, getState) => {
    const {registerReducer} = getState();
    const {name, email, password} = registerReducer;

    dispatch({type: REGISTER_USER_CREATE_ACCOUNT});
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        await user.updateProfile({displayName: name});
        await user.sendEmailVerification();
        await auth().signOut();
        dispatch({type: REGISTER_USER_CREATE_SUCCESS});
        navigate('auth');
      })
      .catch(({userInfo} = {}) => {
        const {message} = userInfo;
        console.log('=====' + JSON.stringify(userInfo));
        dispatch({type: REGISTER_USER_CREATE_FAIL, payload: message});
      });
    // navigate('auth');
  };

export const resetField = () => ({type: REGISTER_USER_RESET_FIELD});
