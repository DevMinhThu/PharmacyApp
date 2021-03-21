import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image 
} from 'react-native';
//import banner from '../../images/banner.jpg'
import banner from '../../images/pharmecy.jpg'

const { width, height } = Dimensions.get('window');

export default class Banner extends Component {
  render() {
    const { Banner, textStyle, TitleBanner, ImageStyle } = styles;
    return (
      <View style={Banner}>
        <View style={TitleBanner}>
          <Text style={textStyle}> BẢNG TIN SỨC KHỎE </Text>
        </View>
        <View style={{flex: 4}}>
          <Image source={banner} style={ImageStyle} />
        </View>
      </View>
    );
  }
}
// 626.375, 1300.560
const imageWidth = width - 40;
const imageHeight = (imageWidth / 1300) * 560;

const styles = StyleSheet.create({
  Banner: {
    height: height * 0.27,
    backgroundColor: '#b2ebf2',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5 // to palace shadow ioss
  },
  TitleBanner: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color:'#ff7876',
    marginTop: 5,
    fontWeight: 'bold',
    fontFamily: 'lucida grande'
  },
  ImageStyle: {
    height: imageHeight,
    width: imageWidth,
    borderRadius: 10
  }
});

