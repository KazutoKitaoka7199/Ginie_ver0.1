import React from 'react';
import { LogBox, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignIn from './src/screens/SignIn';
// import Landing from './src/screens/Landing';
// import StockApi from './src/screens/StockApi';
// import AddProduct from './src/screens/AddProduct';
// import BalanceProduct from './src/screens/BalanceProduct';
// import InvestmentSettingExpTheme from './src/screens/InvestmentSettingExpTheme';
// import InvestmentSettingExpPie from './src/screens/InvestmentSettingExpPie';
// import SignIn from './src/screens/SignIn';
// import InvestmentStatus from './src/screens/InvestmentStatus';
// import SignInScreen from './src/screens/SignUpScreen';
// import Login from './src/screens/Login';
// import News from './src/screens/News';
import News from './src/screens/screen-components/NewsScreen';
import Article from './src/screens/screen-components/ArticleScreen';
import BottomNavigation from './src/navigation/BottomNavigation';
import Navigation from './src/navigation/Navigation';

LogBox.ignoreLogs(['AsyncStorage']);

export default function App() {
  // const Stack = createNativeStackNavigator();

  return (
    <View>
      <BottomNavigation />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="News" component={News} />
    //     <Stack.Screen name="Article" component={Article} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
