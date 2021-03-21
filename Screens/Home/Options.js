import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image,
  TouchableOpacity 
} from 'react-native';

import banner from '../../images/pharmecy.jpg'
//import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class Banner extends Component {
  render() {
    const { container, StyleTitle } = styles;
    return (
        <TouchableOpacity>
          <View style={container}>
            <Text style={StyleTitle}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40c4ff',
    width: 100,
    height: 90,
    elevation: 5,
    borderRadius: 10,
    margin: 5,
  },
  StyleTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

