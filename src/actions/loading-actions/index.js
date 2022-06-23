import * as AppTypes from '../../actions/app-actions/types';
import {LOADING_SET_CONFIG} from './types';

export const dummyLoading = () => async dispatch => {
  dispatch({type: AppTypes.APP_INIT});
  try {
    await setLoadingConfigValue(dispatch);
  } catch {
    dispatch({type: AppTypes.APP_INIT_FAILURE});
  }
};

const setRemoteConfigValues = async dispatch => {
  setTimeout(function () {
    dispatch({type: AppTypes.APP_INIT_SUCCESS});
  }, 1000);
  dispatch({type: LOADING_SET_CONFIG, payload: 'LOADING...'});
};
