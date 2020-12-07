import React, { Component } from 'react'
import { Linking, Text, View } from 'react-native'
import { style } from '../style';
import { FontAwesome } from '@expo/vector-icons';

export class Links extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <View style={style.links}>
                <Text onPress={() => Linking.openURL(this.props.link)} style={style.linkText}>
                <FontAwesome name={this.props.icon} style={{marginRight:5, fontSize:17}}/>
                    {this.props.nome}
                </Text>
            </View>
        )
    }
}

export default Links
