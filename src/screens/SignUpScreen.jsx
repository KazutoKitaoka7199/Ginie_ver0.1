import React from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import Button from '../components/Button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons
          name="md-chevron-back-circle"
          size={35}
          color="#F4F4F4"
          style={styles.backbutton}
        />
      </View>
      <View>
        <Text style={styles.text}>アカウント作成</Text>
      </View>
      <View style={styles.inputForm}>
        <Fontisto name="email" size={24} color="black" />
        <Text>Email Address</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <Text>Pssword</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
      />
      <Button label="新規アカウントを作成" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  backbutton: {
    marginTop: 56,
  },
  text: {
    fontSize: 32,
    marginTop: 50,
    marginBottom: 37.75,
  },
  button: {
    width: 350,
    alignItems: 'center',
    marginTop: 30,
  },
  inputForm: {
  },
  input: {
    borderBottomWidth: 1,
    height: 48,
    lineHeight: 32,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});
