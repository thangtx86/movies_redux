import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../theme';
import {Welcome, Auth, Register} from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="auth"
    screenOptions={{
      headerShown: false,
      headerTintColor: Colors.white,
      headerStyle: {borderBottomWidth: 0, backgroundColor: Colors.white},
    }}>
    <Stack.Screen name="welcome" component={Welcome} />
    <Stack.Screen name="auth" component={Auth} />
    <Stack.Screen name="register" component={Register} />
  </Stack.Navigator>
);

export default AuthStack;
