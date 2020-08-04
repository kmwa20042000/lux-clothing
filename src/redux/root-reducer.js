import { combineReducers } from 'redux';

//persist redux store
import { persistReducer } from 'redux-persist';
//using local storage, session storage is also an option
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';
import directoryReducer from './directory/directoryReducer';
import alertReducer from './alerts/alertReducer';

//configuring persist storage
const persistConfig = {
  key: 'root',
  storage,
  //select a reducer state
  whitelist: ['cart', 'alert'],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  alert: alertReducer,
});

export default persistReducer(persistConfig, rootReducer);
