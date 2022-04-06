import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// screens
import AddProductScreen from '../screens/AddProductScreen';
import PaymentScreen from '../screens/PaymentScreen';
import BorrowingScreen from '../screens/BorrowingScreen';
import CheckingStatusScreen from '../screens/CheckingStatusScreen';

// Screen names
const AddProduct = '資産運用';
const Payment = '入金';
const Borrow = '借入';
const Checking = '決済口座';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    // BottomNavigation
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={AddProduct} component={AddProductScreen} />
        <Tab.Screen name={Payment} component={PaymentScreen} />
        <Tab.Screen name={Borrow} component={BorrowingScreen} />
        <Tab.Screen name={Checking} component={CheckingStatusScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
