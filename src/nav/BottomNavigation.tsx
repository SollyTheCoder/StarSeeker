import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Coster from 'starseeker-screens/Coster';
import Home from 'starseeker-screens/Home';
import Router from 'starseeker-screens/Router';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <AntDesign size={25} name="home" />,
        }}
      />
      <Tab.Screen
        name="Coster"
        component={Coster}
        options={{
          tabBarIcon: () => <AntDesign size={25} name="wallet" />,
        }}
      />
      <Tab.Screen
        name="Router"
        component={Router}
        options={{
          tabBarIcon: () => <AntDesign size={25} name="fork" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
