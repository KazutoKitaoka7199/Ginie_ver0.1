import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  // 分割代入
  const { label } = props;
  // const { label, onPress, style } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  children: string,
}.isRequired;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#0066ff',
    borderRadius: 16,
    alignSelf: 'flex-start',
    position: 'absolute',
    width: 348,
    height: 56,
    bottom: 76,
    left: 21,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 36,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});
