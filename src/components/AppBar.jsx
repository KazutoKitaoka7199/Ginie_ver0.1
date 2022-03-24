import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Appbar(props) {
  const { title } = props;
  return (
    <View style={styles.appbar}>
      <View style={styles.appInner}>
        <Text style={styles.appbarItem}>{ title }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 80,
    justifyContent: 'flex-end',
  },
  appInner: {
    alignItems: 'center',
  },
  appbarItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    lineHeight: 32,
  },
});
