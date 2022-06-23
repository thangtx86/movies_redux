import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="home" component={Home} />
  </Stack.Navigator>
);

export default HomeStack;
