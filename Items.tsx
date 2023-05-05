import React, { useState, useEffect, BlockquoteHTMLAttributes } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Platform,
    NativeEventEmitter,
    NativeModules,
    StyleSheet,
    SafeAreaView,
  } from 'react-native';

interface Props {
    name: string;
    id: string;
    connect: (id:string) => void;
}
export default function Items(props: Props) {
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text style = {styles.textLeft}>{props.name}</Text>
                <TouchableOpacity
                    onPress={() => {props.connect(props.id)}}>
                    <Text style={styles.textRight}>connect</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    textLeft: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'left',
        marginLeft: 30,
      },
    textRight: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'right',
    marginEnd: 30,
    },
    textCenter:
    {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

});
