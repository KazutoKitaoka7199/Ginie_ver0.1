import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BorrowingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => navigation.navigate('AddProduct')}
      >
        Borrowing

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
