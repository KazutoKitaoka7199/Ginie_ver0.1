import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import IntroModal from './introModal';

export default function HomeScreen() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
  }, []);
  // eslint-disable-next-line no-underscore-dangle
  const dismissModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={{
      flex: 1,
      background: '#76dead',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <IntroModal isVisible={isVisible} dismissModal={dismissModal} />
      <Text>This is Home Screen</Text>
      <Button title="modal" onPress={() => { setIsVisible(true); }} />
    </View>
  );
}
