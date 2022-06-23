/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../theme';
import {Icon, Container} from '../components';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const getTabIcon =
  name =>
  ({color}) =>
    <Icon name={name} color={color} />;

const MainTab = () => (
  <Tab.Navigator
    initialRouteName="homeStack"
    screenOptions={{
      showLabel: false,
      tabStyle: {
        borderTopColor: Colors.green,
        backgroundColor: Colors.black,
        borderTopWidth: StyleSheet.hairlineWidth,
      },
      keyboardHidesTabBar: true,
      activeTintColor: Colors.green,
      inactiveTintColor: Colors.lightGrey,
      style: {backgroundColor: Colors.black},
    }}>
    <Tab.Screen
      name="homeStack"
      component={HomeStack}
      options={{tabBarIcon: getTabIcon('home')}}
    />
    <Tab.Screen
      name="a"
      component={Container}
      options={{tabBarIcon: getTabIcon('search')}}
    />
    <Tab.Screen
      name="b"
      component={Container}
      options={{tabBarIcon: getTabIcon('grid')}}
    />
    <Tab.Screen
      name="c"
      component={Container}
      options={{tabBarIcon: getTabIcon('message-square')}}
    />
  </Tab.Navigator>
);

export default MainTab;
