import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Button() {
  // const { label, onPress, style } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>ボタン</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#0066ff',
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 24,
    position: 'absolute',
    width: 348,
    bottom: 76,
    left: 21,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});
