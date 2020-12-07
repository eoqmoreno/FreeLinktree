import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { style } from '../style'

export class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={style.navbar}>
                <Text style={style.title}>
                    {this.props.nome}
                </Text>
            </View>
        )
    }
}

export default Navbar
