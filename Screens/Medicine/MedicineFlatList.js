import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FlatListData from '../../Data/FlatListData';

class FlatListItem extends Component {
    render() {
        const { flatListNameDrug, flatListUsesDrug, styleContent } = styles;
        return (
            <View style={{
                flex: 1,
                borderRadius: 15,
                elevation: 2,
                margin: 5,
                // flexDirection: 'column',
                backgroundColor: '#fff'
            }}>

                {/* Image */}
                {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={{uri: this.props.item.imageUrl}}
                        style={{flex: 1, width: 100, height: 50, margin: 10, borderRadius: 50}}
                    >
                    </Image>
                </View> */}

                {/* content */}
                <TouchableOpacity onPress={()=>{
                    alert(" Welcome back to the App ! ");
                }}>
                    <View style={styleContent}>
                        <Text style={flatListNameDrug}>{this.props.item.name}</Text>
                        <Text style={flatListUsesDrug}>{this.props.item.medicineDescription}</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListNameDrug: {
        color: 'black',
        padding: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    flatListUsesDrug: {
        color: '#616161',
        padding: 10,
        fontSize: 12,
    },
    styleContent: {
        flex: 1,
        flexDirection: 'column',
    }
});

export default class MedicineFlatList extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: 22}}>
                <FlatList 
                    data={FlatListData}
                    renderItem={({item, index})=>{
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>);
                    }}
                >
                </FlatList>
            </View>
        );
    }
}


