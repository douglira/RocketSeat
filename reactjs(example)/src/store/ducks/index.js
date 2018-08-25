import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';

import toastify from './toastify';

import user from './user';
import admin from './admin';

const resettableLogout = resettableReducer('SIGNOUT');

export default combineReducers({
  toastify,
  user: resettableLogout(user),
  admin: resettableLogout(admin),
});
