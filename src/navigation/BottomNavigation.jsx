import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// screens
import AddProduct from '../screens/AddProduct';
import Payment from '../screens/Payment';
import Borrowing from '../screens/Borrowing';
import CheckingStatus from '../screens/CheckingStatus';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Adds"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size } => {
          let iconName;
          let rn = route.name;
          if (rn === Adds) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === )
          })
        })}
      />
    </NavigationContainer>
  );
}
