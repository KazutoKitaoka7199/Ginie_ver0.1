import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, Image,
} from 'react-native';
import axios from 'axios';
// import clearbit from 'clearbit';

export default function StockApi() {
  const URL = 'http://api.marketstack.com/v1/tickers';
  const apiKey = '993976318f666a0f62393d1dfe71d4be';
  const [stockData, setStockData] = useState({});
  const [stockPrice, setStockPrice] = useState({});

  useEffect(() => {

  }, []);

  useEffect(() => {
    console.log('working');
    const getStockData = (symbol) => {
      axios.get(`${URL}/${symbol}?access_key=${apiKey}`)
        .then((response) => {
          console.log(response.data);
          setStockData(response.data);
        });
      axios.get(`${URL}/${symbol}/eod/latest?access_key=${apiKey}`)
        .then((response) => {
          console.log(response.data);
          setStockPrice(response.data);
        });
    };
    getStockData('TSLA');
  }, []);
  return (
    <View style={styles.container}>
      <Image source={{ url: 'https://logo.clearbit.com/segment.com?size=200&greyscale=true' }} />
      <Text style={styles.name}>{stockData.name}</Text>
      <Text style={styles.price}>
        $
        {stockPrice.close}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 30,
  },
  name: {

  },
  price: {

  },
});
