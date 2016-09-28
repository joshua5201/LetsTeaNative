import React, { Component } from 'react';
import { ScrollView, View, Text, ActivityIndicator, ToastAndroid, Alert, Image} from 'react-native';
import { Card } from 'react-native-material-design';
import Button from 'react-native-button';
import { v4 as uuid } from 'node-uuid';
import { Actions } from 'react-native-router-flux';
import TimerMixin from 'react-timer-mixin';

export default class PutTeaScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true
        }
    }

    componentDidMount() {
        this.timer = TimerMixin.setTimeout( () => {
            this.setState({animating: false})
            Alert.alert("Let's Tea", "好摟！")
        }, 5000)
    }

    componentWillUnmount() {
          TimerMixin.clearTimeout(this.timer);
    }

    render() {
        let tea = this.props.tea;
        const moveToNext = () => Actions.BoilWater({tea: tea});
        return ( 
            <View style={[{marginTop: 56}, {flex: 1}, {flexDirection: 'column'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                <View>
                    <Image source={require('./../img/ic_leaf.png')} style={{height: 256, width: 256}} />
                </View>
                <View>
                    <Text style={styles.description}>請放茶葉至壺身的 { this.props.tea.amount } %</Text>
                    <Text style={styles.description}>完成時會自動通知</Text>
                </View>
                <View>
                { ( () => {
                    if (this.state.animating) { 
                        return (<ActivityIndicator animating={this.state.animating} style={[styles.centering, {height: 80}]} size="large" />);
                    } else {
                        return (<Button onPress={moveToNext} style={{fontSize: 20, padding: 8, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}>下一步</Button>)
                    }
                })()}
                </View>
            </View>
        );
    }
}

const styles = {
    scene: {
        flex: 1,
        marginTop: 56,
    },
    centering: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 8 
    },
    description: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
}
