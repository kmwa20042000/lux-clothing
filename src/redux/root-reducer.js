import { combineReducers } from 'redux';

//persist redux store
import { persistReducer } from 'redux-persist';
//using local storage, session storage is also an option
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';
import directoryReducer from './directory/directoryReducer';

//configuring persist storage
const persistConfig = {
  key: 'root',
  storage,
  //select a reducer state
  whitelist: ['cart'],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
