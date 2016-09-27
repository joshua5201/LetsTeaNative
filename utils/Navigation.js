import React, { Component } from 'react';
import { Navigator } from 'react-native';

export default class Navigation extends Component {
    render() {
        return (
            <Navigator
            style={styles.container}
            initialRoute=\{\{id: 'first'}}
            renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 'first':
                return (<First navigator={navigator} title="first"/>);
            case 'second':
                return (<Second navigator={navigator} title="second" />);
        }
    }
}

