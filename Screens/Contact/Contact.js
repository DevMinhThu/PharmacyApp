import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import Header from '../Headers.js';

export default class Contact extends Component {

  render() {

    // const { params } = this.props.navigation.state;
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.Contact}>
        <View>
          <Header />
        </View>
        
        {/* <Text>{ params.username }</Text> */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Contact: {
    flex: 1,
    backgroundColor: '#D5F5E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
