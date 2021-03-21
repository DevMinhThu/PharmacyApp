import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

import MedicineFlatList from './MedicineFlatList';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Headers.js';

export default class MedicineCabinet extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        {/* Drawer_Menu */}
        <Header />

        {/* flatlist_medicin */}
        <View style={styles.MedicineCabinet}>
          <MedicineFlatList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MedicineCabinet: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
