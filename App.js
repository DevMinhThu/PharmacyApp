import React, { Component } from 'react';
import { View, Text, Image, Button, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";

// import screens
import HomeScreen from '././Screens/Home/HomeScreen';
import SearchNameDrug from '././Screens/SearchName/SearchNameDrug';
import MedicineCabinet from '././Screens/Medicine/MedicineCabinet';
import Contact from '././Screens/Contact/Contact';


import Icon from 'react-native-vector-icons/Ionicons';

StatusBar.setHidden(true);

// TabNavigations
// const AppNavigator = createBottomTabNavigator({
//   MedicineCabinet: {
//     screen: MedicineCabinet,
//     navigationOptions : {
//       tabBarLabel: 'Tủ thuốc',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-medkit" color={tintColor} size={24} />
//       )
//     },
//   },
//   Home: {
//     screen: HomeScreen,
//     navigationOptions : {
//       tabBarLabel: 'Bảng tin',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-paper" color={tintColor} size={24} />
//       )
//     },
//   },
//   SearchNameDrug: {
//     screen: SearchNameDrug,
//     navigationOptions : {
//       tabBarLabel: 'Tìm kiếm',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-search" color={tintColor} size={24} />
//       )
//     },
//   },
//   Contact: {
//     screen: Contact,
//     navigationOptions : {
//       tabBarLabel: 'Liên hệ',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-call" color={tintColor} size={24} />
//       )
//     }
//   },
// },
// {
//   tabBarOptions: {
//     activeTintColor: '#388e3c',
//     inactiveTintColor: 'grey',
//     labelStyle: {
//       fontSize: 12,
//     },
//     style: {
//       backgroundColor: '#fff',
//     },
//   },
//   swipeEnabled: true,
// }
// );

// StackNavigations
const AppStackNavigator = createBottomTabNavigator({
  MedicineCabinet: {
    screen: MedicineCabinet,
    navigationOptions : {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" color={tintColor} size={24} />
      )
    },
  },
  HomeScreen: {
    screen: HomeScreen,//AppNavigator
    navigationOptions : {
      tabBarLabel: 'News',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-paper" color={tintColor} size={24} />
      )
    },
  },
  SearchNameDrug: {
    screen: SearchNameDrug,
    navigationOptions : {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-search" color={tintColor} size={24} />
      )
    },
  },
  Contact: {
    screen: Contact,
    navigationOptions : {
      tabBarLabel: 'More',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-information-circle-outline" color={tintColor} size={24} />
      )
    }
  },
},
{
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#0091ea',
    inactiveTintColor: 'grey',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#fff',
    },
  }
});
//createStackNavigator
export default createAppContainer(AppStackNavigator);
