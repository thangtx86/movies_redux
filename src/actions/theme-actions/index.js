import {THEME_CHANGE_THEME} from './types';

export const changeTheme = theme => ({
  type: THEME_CHANGE_THEME,
  payload: theme,
});
