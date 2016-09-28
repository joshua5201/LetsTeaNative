import React, { Component } from 'react';
import { ScrollView, View, Text, Alert, Image} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class FillWaterScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const moveToNext = () => Actions.Wait({tea: this.props.tea});
        return ( 
            <View style={[{marginTop: 56}, {flex: 1}, {flexDirection: 'column'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                <View>
                    <Image source={require('./../img/ic_alert.png')} style={{height: 256, width: 256}} />
                </View>
                <View>
                    <Text style={styles.description}>熱水已至最佳溫度</Text>
                    <Text style={styles.description}>請加入茶壺中</Text>
                </View>
                <View>
                      <Button onPress={moveToNext} style={{fontSize: 20, padding: 8, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}>好了</Button>
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
