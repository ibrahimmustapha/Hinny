import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../assets/colors/colors';
import Settings from './mini-components/Settings';
import Home from './mini-components/Home';
import Account from './mini-components/Account';
import Notification from './mini-components/Notifications';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
      <Tab.Navigator screenOptions={{tabBarStyle: {position: 'absolute', height: 60}}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={Colors.dark} size={25} />
            ),
            tabBarLabelStyle: {fontSize: 13},
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="bell" color={Colors.dark} size={25} />
            ),
            tabBarLabelStyle: {fontSize: 13},
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="cog" color={Colors.dark} size={25} />
            ),
            tabBarLabelStyle: {fontSize: 13},
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={Colors.dark} size={25} />
            ),
            tabBarLabelStyle: {fontSize: 13},
          }}
        />
      </Tab.Navigator>
    );
}

const HomeScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    )
}

export default HomeScreen;