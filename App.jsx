import React from 'react';
import { View, LogBox } from 'react-native';
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
import News from './src/screens/News';

LogBox.ignoreLogs(['AsyncStorage']);

export default function App() {
  return (
    <View>
      <News />
    </View>
  );
}
