import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function AddProduct() {
  return (
    <View style={styles.container}>
      <View style={styles.searchTabs}>
        <Text style={{ fontSize: 12, color: '#8B8B94' }}>おすすめ順</Text>
        <Text style={{ fontSize: 12, color: '#8B8B94' }}>ETF</Text>
        <Text style={{ fontSize: 12, color: '#8B8B94' }}>時価総額順</Text>
        <Text style={{ fontSize: 12, color: '#8B8B94' }}>アルファベット順</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.blandTitle}>銘柄名</Text>
        <Text style={styles.blandMrkCap}>時価総額</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  searchTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    flexDirection: 'row',
    marginTop: 7,
  },
  blandTitle: {
    marginLeft: 85,
  },
  blandMrkCap: {
    marginLeft: 160,
  },
});
