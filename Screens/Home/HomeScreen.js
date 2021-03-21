import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput} from 'react-native';

import Banner from './Banner';
import Options from './Options';
import Header from '../Headers.js';

import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
  render() {
    const {StyleHome, ContainerOptions, styleOption} = styles;
    return (
      <View style={StyleHome}>
        <Header />
        <View>
          {/* Banner */}
          <Banner />
        </View>

        {/* Options */}
        <View style={ContainerOptions}>
          <View style={styleOption}>
            <Options title="Sống khỏe" />
            <Options title="Dinh dưỡng" />
            <Options title="Lối sống" />
          </View>
          <View style={styleOption}>
            <Options title="Trẻ em" />
            <Options title="Tim mạch" />
            <Options title="Tiểu đường" />
          </View>
          <View style={styleOption}>
          <Options title="Dân gian"/>
          <Options title="Kiêng kị"/>
          <Options title="Mẹo vặt"/>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  StyleHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ContainerOptions: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
