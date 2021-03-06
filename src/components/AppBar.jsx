import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Appbar(props) {
  const { title } = props;
  return (
    <View style={styles.appbar}>
      <View style={styles.appInner}>
        <FontAwesome5
          name="filter"
          size={20}
          color="black"
          style={styles.appbarLeft}
        />
        <Text style={styles.appbarItem}>{title}</Text>
        <View style={styles.appbarRight}>
          <FontAwesome5
            name="bell"
            size={20}
            color="black"
            style={styles.bell}
          />
          <FontAwesome5
            name="user"
            size={20}
            color="black"
            style={styles.user}
          />
        </View>
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
  appbarLeft: {
    position: 'absolute',
    left: 10,
  },
  appbarRight: {
    position: 'absolute',
    flexDirection: 'row',
  },
  bell: {
    left: 150,
  },
  user: {
    left: 170,
  },
});
