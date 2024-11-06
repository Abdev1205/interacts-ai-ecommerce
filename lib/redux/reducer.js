import { combineReducers } from 'redux';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import wishlistReducer from "./slices/wishlistSlice"


export default combineReducers({
  cart: cartReducer,
  auth: authReducer,
  wishlist: wishlistReducer,
});
