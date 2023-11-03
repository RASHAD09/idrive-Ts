import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import superheroesReducer from './superheroes/reducer';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  superheroesReducer,
);
