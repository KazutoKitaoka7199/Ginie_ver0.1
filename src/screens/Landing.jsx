import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import IntroModal from './introModal';
import Button from '../components/Button';

export default function HomeScreen() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
  }, []);
  // eslint-disable-next-line no-underscore-dangle
  const dismissModal = () => {
    setIsVisible(false);
  };

  return (
    <View>
      <IntroModal isVisible={isVisible} dismissModal={dismissModal} />
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../img/LogoLogo.png')} />
        <Text style={styles.title}>
          長期資産運用・管理を
          {'\n'}
          もっと便利で自由に
        </Text>
      </View>
      <View style={styles.button}>
        <Button label="はじめる" onPress={() => { setIsVisible(true); }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 166,
    height: 251,
  },
  button: {
    position: 'absolute',
    bottom: -450,
  },
});
