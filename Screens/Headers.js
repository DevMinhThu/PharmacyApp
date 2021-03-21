import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import logo from '../images/heart.png';
import menu from '../images/menu.png';

const {height} = Dimensions.get('window');

export default class Headers extends Component {
  render() {
    const {wrapper, row, title, textInput, iconStyle} = styles;
    return (
      <View style={wrapper}>
        <View style={row}>
          <TouchableOpacity>
            <Image source={logo} style={iconStyle} />
          </TouchableOpacity>
          <Text style={title}>Pharmacy Store</Text>
          <TouchableOpacity>
            <Image source={menu} style={iconStyle} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={textInput}
          //placeholder="Search medicin..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 9,
    backgroundColor: '#0091ea',
    padding: 10,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  textInput: {
    height: height / 26, 
    backgroundColor: '#fff', 
    padding: 10
  },
  iconStyle: {
    width: 30, 
    height: 30
  },
  title: {
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold', 
    fontFamily: 'serif'
  },
});
