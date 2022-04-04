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
      <Tab.Navigator
        initialRouteName={AddProduct}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            const rn = route.name;

            if (rn === AddProduct) {
              iconName = focused
                ? 'pie-chart'
                : 'pie-chart-outline';
            } else if (rn === Payment) {
              iconName = focused
                ? 'wallet'
                : 'wallet-outline';
            } else if (rn === Borrow) {
              iconName = focused
                ? 'download'
                : 'download-outline';
            } else if (rn === Checking) {
              iconName = focused
                ? 'cash'
                : 'cash-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="資産運用" component={AddProductScreen} />
        <Tab.Screen name="入金" component={PaymentScreen} />
        <Tab.Screen name="借入" component={BorrowingScreen} />
        <Tab.Screen name="決済口座" component={CheckingStatusScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
