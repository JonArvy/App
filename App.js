import React from 'react';
import { View, } from 'react-native';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Home />
  );
}
