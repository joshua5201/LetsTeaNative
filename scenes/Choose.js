import React, { Component } from 'react';
import { ScrollView, View, Text, Navigator } from 'react-native';
import { Card, Button } from 'react-native-material-design';
import TeaElement from '../components/TeaElement';
import { v4 as uuid } from 'node-uuid';

export default class ChooseScene extends Component {
    static get defaultProps() {
        return {
            title: "Let's Tea"
        };
    }

    render() {
        return ( 
            <ScrollView style={styles.scene}>
                { teas.map(function(tea) {
                    return (<TeaElement key={uuid()} tea={tea} navigator={navigator} />)
                })}
            </ScrollView>
        );
    }
}

const teas = [
    { name: '綠茶', description: '綠茶！綠色的茶！Green tea is so green', temperature: 89.2, time: 123, amount: 32.1, image: require("./../img/green_tea.jpg") },
    { name: '紅茶', description: '紅茶！紅紅的茶！Black tea is not so black', temperature: 87.2, time: 103, amount: 22.1, image: require('./../img/black_tea.jpg') }
]

const styles = {
    scene: {
        flex: 1,
        marginTop: 56,
    }
}