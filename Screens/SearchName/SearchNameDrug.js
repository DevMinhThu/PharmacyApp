import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Header from '../Headers.js';

export default class SearchNameDrug extends Component {

  render() {
    return (
      <View style={styles.styleSeatch}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  styleSeatch: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
