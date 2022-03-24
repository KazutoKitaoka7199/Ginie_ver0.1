import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const Line = require('../../img/Line.png');
const Ellipse = require('../../img/Ellipse.png');

export default function HeaderGuide() {
  const lineImg = Image.resolveAssetSource(Line);
  const ellipseImg = Image.resolveAssetSource(Ellipse);
  return (
    <View style={styles.container}>
      <Image
        source={Line}
        style={[styles.line, {
          transform: [
            { translateX: -lineImg.width / 2 },
            { translateY: -lineImg.height / 2 },
          ],
        }]}
      />
      <View style={styles.dot}>
        <Image
          source={Ellipse}
          style={[styles.ellipse, {
            transform: [
              { translateX: -ellipseImg.width / 2 },
              { translateY: -ellipseImg.height / 2 },
            ],
          }]}
        />
        <Image
          source={Ellipse}
          style={[styles.ellipse, {
            transform: [
              { translateX: -ellipseImg.width / 2 },
              { translateY: -ellipseImg.height / 2 },
            ],
          }]}
        />
        <Image
          source={Ellipse}
          style={[styles.ellipse, {
            transform: [
              { translateX: -ellipseImg.width / 2 },
              { translateY: -ellipseImg.height / 2 },
            ],
          }]}
        />
      </View>
      <View style={styles.steps}>
        <Text style={styles.step1}>step1</Text>
        <Text style={styles.step2}>step2</Text>
        <Text style={styles.step3}>step3</Text>
      </View>
      <View style={styles.guide}>
        <Text style={styles.guide1}>基本設定</Text>
        <Text style={styles.guide2}>ポートフォリオ作成</Text>
        <Text style={styles.guide3}>入金設定</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  line: {
    position: 'absolute',
    left: '50%',
  },
  dot: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  steps: {
    flexDirection: 'row',
  },
  step1: {
    marginLeft: 45,
    lineHeight: 18,
  },
  step2: {
    marginLeft: 92.5,
    lineHeight: 18,
  },
  step3: {
    marginLeft: 95,
    lineHeight: 18,
  },
  guide: {
    flexDirection: 'row',
  },
  guide1: {
    marginLeft: 30,
    lineHeight: 18,
  },
  guide2: {
    marginLeft: 40,
    lineHeight: 18,
  },
  guide3: {
    marginLeft: 40,
    lineHeight: 18,
  },
});
