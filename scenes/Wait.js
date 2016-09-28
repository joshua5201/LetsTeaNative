import React, { Component } from 'react';
import { ScrollView, View, Text, ActivityIndicator, ToastAndroid, Alert, Image} from 'react-native';
import { Card } from 'react-native-material-design';
import Button from 'react-native-button';
import { v4 as uuid } from 'node-uuid';
import { Actions } from 'react-native-router-flux';
import TimerMixin from 'react-timer-mixin';

export default class WaitScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true,
            timeRemaining: this.props.tea.time
        }
    }

    componentDidMount() {
        this.timer = TimerMixin.setTimeout( () => {
            this.setState({animating: false});
            this.moveToNext();
        }, this.props.tea.time * 1000)

        this.interval = TimerMixin.setInterval( () => {
            if (this.state.timeRemaining > 0) {
                this.setState({timeRemaining: this.state.timeRemaining - 1})
            } 
        }, 1000)
    }

    componentWillUnmount() {
          TimerMixin.clearTimeout(this.timer);
          TimerMixin.clearInterval(this.interval);
    }

    moveToNext() {
        Actions.Ready({tea: this.props.tea})
    }

    render() {
        let tea = this.props.tea;
        const moveToNext = () => Actions.Ready({tea: tea});
        return ( 
            <View style={[{marginTop: 56}, {flex: 1}, {flexDirection: 'column'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                <View>
                    <Image source={require('./../img/pic_wait.jpeg')} style={{height: 256}} />
                </View>
                <View>
                    <Text style={styles.description}>請稍待 {this.state.timeRemaining} 秒</Text>
                    <Text style={styles.description}>完成時會自動通知</Text>
                </View>
                <View>
                    <ActivityIndicator animating={this.state.animating} style={[styles.centering, {height: 80}]} size="large" />
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
