import React, { Component } from 'react';
import { ScrollView, View, Text, Alert, Image} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class ReadyScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const moveToNext = () => Actions.Choose();
        return ( 
            <View style={[{marginTop: 56}, {flex: 1}, {flexDirection: 'column'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                <View style={{height: 256}}>
                </View>
                <View>
                    <Text style={styles.description}>你的 { this.props.tea.name } 泡好摟（撒花）</Text>
                    <Text style={styles.description}>感謝您使用 {"Let's Tea 陸羽茶筆"}</Text>
                </View>
                <View>
                      <Button onPress={moveToNext} style={{fontSize: 20, padding: 8, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}>回到首頁</Button>
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
