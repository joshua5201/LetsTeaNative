import React, { Component } from 'react';
import { ScrollView, View, Text, ToastAndroid } from 'react-native';
import { Card, Button } from 'react-native-material-design';
import { v4 as uuid } from 'node-uuid';
import { Actions } from 'react-native-router-flux';
import BluetoothSerial from 'react-native-bluetooth-serial'
import { Buffer } from 'buffer'
global.Buffer = Buffer

export default class FindDeviceScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discovering: false,
            devices: [{name: 'test', id: 'stm32-5566'}],
            connected: false
        }
    }

    componentWillMount () {
        this.enable();
        this.discover();
    }

    enable() {
        BluetoothSerial.enable()
        .then((res) => this.setState({isEnabled: true}))
        .catch((err) => ToastAndroid.show(err, ToastAndroid.SHORT))
    }

    discover() {
        ToastAndroid.show(`掃描中`, ToastAndroid.SHORT);
        this.setState({ discovering: true });
        BluetoothSerial.discoverUnpairedDevices()
        .then((unpairedDevices) => {
            const devices = this.state.devices
            const deviceIds = devices.map((d) => d.id)
            unpairedDevices.forEach((device) => {
                if (deviceIds.indexOf(device.id) < 0) {
                    devices.push(device)
                }
            })
            this.setState({ devices, discovering: false })
        })
    }

    connect (device) {
        this.setState({ connecting: true })
        BluetoothSerial.connect(device.id)
        .then((res) => {
            ToastAndroid.show(`連線到 ${device.name}`, ToastAndroid.SHORT)
            this.setState({ device, connected: true, connecting: false })
        })
        .catch((err) => ToastAndroid.show(err, ToastAndroid.SHORT))
    }

    disconnect () {
        BluetoothSerial.disconnect()
        .then(() => this.setState({ connected: false }))
        .catch((err) => Toast.showLongBottom(err))
    }

    moveToNext(device) {
        Actions.PutTea({tea: this.props.tea, device: device})
    }

    render() {
        if (this.state.devices.length > 0) {
            return ( 
                <ScrollView style={styles.scene}>
                    { this.state.devices.map( (device, i) => {
                        return (
                            <Card key={uuid()} >
                                <Card.Body>
                                    <Text style={styles.deviceName}>{device.name}</Text>
                                    <Text>{device.id} </Text>
                                </Card.Body>
                                <Card.Actions position="right">
                                    <Button text="綁定裝置" onPress={ () => this.moveToNext(device) } />
                                </Card.Actions>
                            </Card>
                        )
                    })}
                </ScrollView>
            )
        } else {
             return (
                <ScrollView style={styles.scene}>
                    <Card>
                        <Card.Body>
                            <Text style={styles.deviceName}>找不到裝置</Text>
                        </Card.Body>
                        <Card.Actions position="right">
                            <Button text="重新掃描" onPress={ this.discover.bind(this) } />
                        </Card.Actions>
                    </Card>
                </ScrollView>
            )
        }
    }
}

const styles = {
    scene: {
        flex: 1,
        marginTop: 56,
    },
    deviceName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
}
