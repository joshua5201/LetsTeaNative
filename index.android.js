import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import ChooseScene from './scenes/Choose';
import PutTeaScene from './scenes/PutTea';
import FindDeviceScene from './scenes/FindDevice';
/*
import FillWaterScene from './scenes/FillWater';
import BoilWaterScene from './scenes/BoilWater';
import ReadyScene from './scenes/Ready';
import WaitScene from './scenes/Wait';*/

          //navigationBar={<MaterialToolbar title="Let's Tea" />}
class LetsTeaNative extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Choose" component={ChooseScene} title="Let's Tea - 選擇你想要的茶葉" initial={true} />
                <Scene key="PutTea" component={PutTeaScene} title="Let's Tea - 依指示加入茶葉" />
                <Scene key="FindDevice" component={FindDeviceScene} title="Let's Tea - 尋找裝置" />
            </Scene>
        </Router>
    );
  }
}

AppRegistry.registerComponent('LetsTeaNative', () => LetsTeaNative);
