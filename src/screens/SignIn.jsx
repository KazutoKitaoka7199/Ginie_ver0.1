/* eslint-disable no-dupe-keys */
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../components/Firebase';
import Button from '../components/Button';
import { translateErrors } from '../utilities';

export default function SignIn(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handlePress = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MemoList' }],
      });
    } catch (error) {
      const errormsg = translateErrors(error.code);
      Alert.alert(errormsg.title, errormsg.description);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={pass}
          onChangeText={(text) => { setPass(text); }}
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry
        />
        <Button
          label="submit"
          // eslint-disable-next-line react/jsx-no-bind
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registerd?</Text>
          <TouchableOpacity>
            <Text
              style={styles.footerLink}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'LogIn' }],
                });
              }}
            >
              Log In.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    height: 48,
    lineHeight: 32,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#467FD3',
  },
});
