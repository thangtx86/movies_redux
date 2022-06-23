import auth from '@react-native-firebase/auth';
import remoteConfig from '@react-native-firebase/remote-config';
import {setUser} from '../../actions/auth-actions';
import * as AppTypes from '../../actions/app-actions/types';

import {FIREBASE_CONFIG} from './types';

export const initFirebase = () => async dispatch => {
  dispatch({type: AppTypes.APP_INIT});
  try {
    await setRemoteConfigValues(dispatch);
    dispatch(setUser(auth().currentUser));
    dispatch({type: AppTypes.APP_INIT_SUCCESS});
  } catch ({error}) {
    dispatch({type: AppTypes.APP_INIT_FAILURE});
  }
};

const setRemoteConfigValues = async dispatch => {
  try {
    await remoteConfig().fetchAndActivate();
    const configs = await remoteConfig().getAll();
    dispatch({type: FIREBASE_CONFIG, payload: configs});
  } catch ({error}) {
    console.log('FAILLLLLLLLLL:' + JSON.stringify(error));
  }
};
