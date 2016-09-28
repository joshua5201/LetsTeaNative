import React, { Component } from 'react';
import { View, Text, Navigator, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-material-design';
import { Actions } from 'react-native-router-flux';

export default class ChooseScene extends Component {
    render() {
        let tea = this.props.tea;
        const moveToNext = () => Actions.FindDevice({tea: tea});
        return (
        <Card>
            <Card.Media image={<Image source={tea.image}/>} overlay> 
            </Card.Media>
            <Card.Body>
                <Text style={styles.teaName}>{tea.name}</Text>
                <Text>{tea.description}</Text>
            </Card.Body>
            <Card.Actions position="right">
                <Button text="開始泡茶" onPress={ moveToNext } />
            </Card.Actions>
        </Card>
        );
    }
}

const styles = StyleSheet.create({
    teaName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
});
