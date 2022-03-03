import React from 'react';
import { View, Image } from 'react-native';
import Button from '../components/Button';

export default function OnBoarding1() {
  return (
    <View>
      <Image style={{ width: 335, height: 266 }} source={require('../../img/IllustrationOnboarding.png')} />
      <Button label="次へ" />
    </View>
  );
}
