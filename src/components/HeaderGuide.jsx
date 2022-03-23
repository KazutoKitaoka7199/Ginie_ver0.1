import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const Line = require('../../img/Line.png');

export default function HeaderGuide() {
  const assetImg = Image.resolveAssetSource(Line);
  return (
    <View>
      <View>
        <Image
          source={Line}
          style={[styles.line, {
            transform: [
              { translateX: -assetImg.width / 2 },
              { translateY: -assetImg.height / 2 },
            ],
          }]}
        />
        <View style={styles.dot}>
          <Text>・</Text>
          <Text>・</Text>
          <Text>・</Text>
        </View>
        <Text>step1</Text>
        <Text>step2</Text>
        <Text>step3</Text>
      </View>
      <View>
        <Text>基本設定</Text>
        <Text>ポートフォリオ作成</Text>
        <Text>入金設定</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    position: 'absolute',
    left: '50%',
  },
  dot: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
