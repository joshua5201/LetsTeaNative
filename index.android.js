import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator
} from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import ChooseScene from './scenes/Choose';

class LetsTeaNative extends Component {
  render() {
    return (
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: "Choose" }}
          renderScene={ this._renderScene.bind(this) }
          navigationBar={<MaterialToolbar title="Let's Tea" />}
        />
    );
  }
  _renderScene(route, navigator) {
      if (route.name == "Choose") {
          return <ChooseScene navigator={navigator} {...route.passProps} />
      } else if (route.name == 'PutTea') {
          return <PutTeaScene navigator={navigator} {...route.passProps} />
      }
  }
}

AppRegistry.registerComponent('LetsTeaNative', () => LetsTeaNative);
