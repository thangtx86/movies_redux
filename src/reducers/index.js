import {combineReducers} from 'redux';
import appReducer from './app-reducer';
import themeReducer from './theme-reducer';
import authReducer from './auth-reducer';
import registerReducer from './register-reducer';
import firebaseReducer from './firebase-reducer';

// root reducer
export default combineReducers({
  themeReducer,
  appReducer,
  authReducer,
  registerReducer,
  firebaseReducer,
});
