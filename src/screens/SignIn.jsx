import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';
import Button from '../components/Button';

export default function SignIn(props) {
  const { navigation } = props;
  return (
    <View>
      <Text>ログイン</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email Address"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <Button
        label="ログイン"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Landing' }],
          });
        }}
      />
      <Text>新規ユーザーの方は</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

});
