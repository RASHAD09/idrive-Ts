import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {persistedReducer} from './persist';

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export {store, persistor};
