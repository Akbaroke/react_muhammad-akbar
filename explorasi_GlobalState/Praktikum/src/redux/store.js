import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from './slices/productSlice';
import usersSlice from './slices/usersSlice';
import authSlice from './slices/authSlice';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'my-app',
  storage,
  whitelist: ['products'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authSlice,
    products: productSlice,
    users: usersSlice,
    middleware: [thunk],
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
