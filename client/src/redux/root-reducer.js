import { combineReducers } from 'redux';

import { adminReducer } from './admin/admin.reducer';
import { alertReducer } from './alert/alert.reducer';
import { authReducer } from './auth/auth.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  admin: adminReducer,
  alert: alertReducer,
  auth: authReducer,
  cart: cartReducer,
});