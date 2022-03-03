import React from 'react';
import { View, Image } from 'react-native';
import Button from '../components/Button';

export default function Onboarding2() {
  return (
    <View>
      <Image style={{ width: 334.97, height: 302.72 }} source={require('../../img/IllustrationOnboarding2.png')} />
      <Button label="次へ" />
    </View>
  );
}
