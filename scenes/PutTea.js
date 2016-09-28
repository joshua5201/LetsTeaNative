import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, Button } from 'react-native-material-design';
import { v4 as uuid } from 'node-uuid';
import { Actions } from 'react-native-router-flux';

export default class PutTeaScene extends Component {
    render() {
        return ( 
            <ScrollView style={styles.scene}>
                <Text>請放茶葉</Text>
            </ScrollView>
        );
    }
}

const styles = {
    scene: {
        flex: 1,
        marginTop: 56,
    }
}
