import React, { Component } from 'react';
import { ScrollView, View, Text, Alert, Image, ActivityIndicator} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import TimerMixin from 'react-timer-mixin';

export default class BoilWaterScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true
        }
    }

    componentDidMount() {
        this.timer = TimerMixin.setTimeout( () => {
            this.setState({animating: false});
            this.moveToNext();
        }, 5000)
    }

    componentWillUnmount() {
          TimerMixin.clearTimeout(this.timer);
    }

    moveToNext() {
        Actions.FillWater({tea: this.props.tea})
    }

    render() {
        let tea = this.props.tea
        return ( 
            <View style={[{marginTop: 56}, {flex: 1}, {flexDirection: 'column'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                <View>
                    <Image source={require('./../img/ic_boil.png')} style={{height: 256, width: 256}} />
                </View>
                <View>
                    <Text style={styles.description}>請將裝置的溫度計對準水面</Text>
                    <Text style={styles.description}>溫度到達 {tea.temperature} 度時會自動通知</Text>
                </View>
                <View>
                { ( () => {
                    if (this.state.animating) { 
                        return (<ActivityIndicator animating={this.state.animating} style={[styles.centering, {height: 80}]} size="large" />);
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
