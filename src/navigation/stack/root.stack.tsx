import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TRootStackParamList} from '../types';
import {HomeScreen, MovieScreen, SuperHeroesScreen} from '@iDRIVE/views';

const {Navigator, Screen} = createNativeStackNavigator<TRootStackParamList>();

export default function RootStack(): JSX.Element {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Movie" component={MovieScreen} />
      <Screen name="SuperHeroes" component={SuperHeroesScreen} />
    </Navigator>
  );
}
