import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { style } from '../style'

export class Img extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={style.container}>
                <Image source={this.props.img} style={style.foto}  resizeMode="cover"/>
            </View>
        )
    }
}

export default Image
