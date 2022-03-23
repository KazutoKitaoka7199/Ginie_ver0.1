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
    <View>
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
      <View>
        <Text style={styles.guide1}>基本設定</Text>
        <Text style={styles.guide2}>ポートフォリオ作成</Text>
        <Text style={styles.guide3}>入金設定</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  steps: {
    position: 'absolute',
  },
  step1: {
    left: 45,
  },
  step2: {
    position: 'absolute',
    left: 177.5,
  },
  step3: {
    position: 'absolute',
    left: 305,
  },
  guide1: {
    left: 30,
    position: 'absolute',
    lineHeight: 30,
  },
  guide2: {
    left: 130,
    position: 'absolute',
    lineHeight: 30,
  },
  guide3: {
    left: 300,
    position: 'absolute',
    lineHeight: 30,
  },
});
