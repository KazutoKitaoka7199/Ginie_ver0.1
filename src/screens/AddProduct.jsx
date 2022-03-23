import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderGuide from '../components/HeaderGuide';
import Appbar from '../components/AppBar';

export default function AddProduct() {
  return (
    <View style={styles.container}>
      <View>
        <Appbar title="資産運用" />
        <HeaderGuide />
        <View style={styles.title}>
          <Text>銘柄名</Text>
          <Text>時価総額</Text>
        </View>
        <View>
          <Text>銘柄名</Text>
          <Text>時価総額</Text>
          <Text>⊕</Text>
        </View>
        <View>
          <Text>銘柄名</Text>
          <Text>時価総額</Text>
          <Text>⊕</Text>
        </View>
        <View>
          <Text>銘柄名</Text>
          <Text>時価総額</Text>
          <Text>⊕</Text>
        </View>
        <View>
          <Text>銘柄名</Text>
          <Text>時価総額</Text>
          <Text>⊕</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
