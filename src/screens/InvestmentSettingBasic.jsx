import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function InvensmentSettingBasic() {
  return (
    <View style={styles.container}>
      <Text>画面</Text>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
