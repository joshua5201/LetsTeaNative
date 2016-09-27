import React, { Component } from 'react';
import { View, Text, Navigator, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-material-design';

export default class ChooseScene extends Component {
    render() {
        tea = this.props.tea;
        return (
        <Card>
            <Card.Media image={<Image source={tea.image}/>} overlay> 
            </Card.Media>
            <Card.Body>
                <Text style={styles.teaName}>{tea.name}</Text>
                <Text>{tea.description}</Text>
            </Card.Body>
            <Card.Actions position="right">
                <Button text="開始泡茶" onPress={ this._navigate.bind(this) } />
            </Card.Actions>
        </Card>
        );
    }

    _navigate() {
        this.props.navigator.push({
            name: 'PutTea',
            passProps: {
                tea: this.props.tea
            }
        })
    }
}

const styles = StyleSheet.create({
    teaName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
});
