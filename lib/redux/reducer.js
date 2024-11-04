import { combineReducers } from 'redux';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';


export default combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
