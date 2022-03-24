import React from 'react';
import { View } from 'react-native';
import Appbar from '../components/AppBar';
import HeaderGuide from '../components/HeaderGuide';

export default function PortfolioDeposit() {
  return (
    <View>
      <Appbar title="資産運用" />
      <HeaderGuide />
    </View>
  );
}
