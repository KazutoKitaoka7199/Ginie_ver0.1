import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import Appbar from '../components/AppBar';
import HeaderGuide from '../components/HeaderGuide';

export default function BalanceProduct() {
  return (
    <View>
      <Appbar title="資産運用" />
      <HeaderGuide />
      <View style={{
        width: 380,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Text>チャート</Text>
      </View>
      <View style={styles.blandUnit}>
        <View style={styles.bland}>
          <Image
            source={require('../../img/Tesla.png')}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.blandTicker}>TSLA</Text>
            <Text style={styles.blandName}>Tesla Motors</Text>
          </View>
          <Text style={styles.ratio}>〇%</Text>
        </View>
        <View style={styles.setAsset}>
          <Text style={styles.addButtton}>+</Text>
          <Text style={styles.addButtton}>−</Text>
        </View>
      </View>
      <View style={styles.blandUnit}>
        <View style={styles.bland}>
          <Image
            source={require('../../img/Tesla.png')}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.blandTicker}>TSLA</Text>
            <Text style={styles.blandName}>Tesla Motors</Text>
          </View>
          <Text style={styles.ratio}>〇%</Text>
        </View>
        <View style={styles.setAsset}>
          <Text style={styles.addButtton}>+</Text>
          <Text style={styles.addButtton}>−</Text>
        </View>
      </View>
      <View style={styles.blandUnit}>
        <View style={styles.bland}>
          <Image
            source={require('../../img/Tesla.png')}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.blandTicker}>TSLA</Text>
            <Text style={styles.blandName}>Tesla Motors</Text>
          </View>
          <Text style={styles.ratio}>〇%</Text>
        </View>
        <View style={styles.setAsset}>
          <Text style={styles.addButtton}>+</Text>
          <Text style={styles.addButtton}>−</Text>
        </View>
      </View>
      <View style={styles.blandUnit}>
        <View style={styles.bland}>
          <Image
            source={require('../../img/Tesla.png')}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.blandTicker}>TSLA</Text>
            <Text style={styles.blandName}>Tesla Motors</Text>
          </View>
          <Text style={styles.ratio}>〇%</Text>
        </View>
        <View style={styles.setAsset}>
          <Text style={styles.addButtton}>+</Text>
          <Text style={styles.addButtton}>−</Text>
        </View>
      </View>
      <View style={styles.blandUnit}>
        <View style={styles.bland}>
          <Image
            source={require('../../img/Tesla.png')}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.blandTicker}>TSLA</Text>
            <Text style={styles.blandName}>Tesla Motors</Text>
          </View>
          <Text style={styles.ratio}>〇%</Text>
        </View>
        <View style={styles.setAsset}>
          <Text style={styles.addButtton}>+</Text>
          <Text style={styles.addButtton}>−</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blandUnit: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    paddingHorizontal: 12,
    paddingVertical: 6,
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
  bland: {
    flexDirection: 'row',
  },
  blandTicker: {
    color: '#8B8B94',
    fontSize: 12,
  },
  blandName: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratio: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 110,
  },
  addButtton: {
    marginLeft: 10,
    paddingHorizontal: 15,
  },
  setAsset: {
    alignSelf: 'center',
  },
});
