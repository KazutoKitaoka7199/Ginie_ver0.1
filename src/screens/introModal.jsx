import React, { useState, useRef } from 'react';
import {
  View, Text, Modal, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions,
} from 'react-native';

// eslint-disable-next-line react/prop-types
export default function IntroModal({ isVisible, dismissModal }) {
  const [viewableItemIndex, setViewableItemIndex] = useState(0);
  const [buttonText, setButtonText] = useState('Next');

  function renderItem(page) {
    const { item } = page;
    return (
      <View style={styles.slideInner}>
        <Image style={styles.img} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  const keyExtractor = (page) => page.key;

  const flatListRef = useRef(null);

  const onViewRef = useRef(({ viewableItems }) => {
    setViewableItemIndex(viewableItems[0].index);
    if (viewableItems[0].index === SLIDES.length - 1) {
      setButtonText('Done');
    } else {
      setButtonText('Next');
    }
  });

  const onBottomButton = () => {
    if (viewableItemIndex < SLIDES.length - 1) {
      flatListRef.current.scrollToIndex({ animated: true, index: viewableItemIndex + 1 });
    } else {
      dismissModal();
    }
  };

  const onDot = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
  };

  function dotColor(index) {
    return index === viewableItemIndex ? styles.colorDot : styles.whiteDot;
  }

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={styles.container}>
        <FlatList
          data={SLIDES}
          horizontal
          // eslint-disable-next-line react/jsx-no-bind
          renderItem={renderItem}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ref={flatListRef}
          onViewableItemsChanged={onViewRef.current}
        />

        <View style={styles.bottomWrapper}>
          <View style={styles.dotWrapper}>
            {SLIDES.map((listItem, index) => (
              <TouchableOpacity
                onPress={() => onDot(index)}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                style={[styles.dot, dotColor(index)]}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={onBottomButton}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 117, 108, 0.9)',
  },
  space: {
    paddingTop: 40,
  },
  slideInner: {
    width,
    justifyContent: 'center',
    paddingBottom: 80,
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 8,
    marginBottom: 12,
  },
  text: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 70,
    alignItems: 'center',
  },
  dotWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  colorDot: {
    backgroundColor: '#FFA700',
  },
  whiteDot: {
    backgroundColor: '#F2AB90',
  },
  button: {
    marginTop: 18,
  },
  buttonText: {
    fontSize: 19,
    color: '#fff',
  },
});

const SLIDES = [
  {
    key: '1',
    title: 'This is first Slide',
    text: 'This is first Slide This is first Slide This is first Slide This is first Slide',
    image: require('../../img/IllustrationOnboarding.png'),
  },
  {
    key: '2',
    title: 'This is second Slide',
    text: 'This is first Slide This is first Slide This is first Slide This is first Slide This is first Slide',
    image: require('../../img/IllustrationOnboarding2.png'),
  },
  {
    key: '3',
    title: 'This is Third Slide',
    text: 'This is Third Slide This is Third Slide This is Third Slide',
    image: require('../../img/IllustrationOnboarding3.png'),
  },
  {
    key: '4',
    title: 'This is forth Slide',
    text: 'This is forth Slide This is forth Slide This is forth Slide This is forth Slide This is forth Slide',
    image: require('../../img/IllustrationOnboarding.png'),
  },
];
