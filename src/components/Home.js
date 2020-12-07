import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {style} from '../style/'
import Links from './Links'

export class Home extends Component {
    render() {
        return (
            <View>
                <Links nome="Instagram" icon="instagram" link="https://www.instagram.com/paroquia_jmj/"></Links>
                <Links nome="Facebook" icon="facebook-square" link="https://www.facebook.com/CatedralJMJ/"></Links>
                <Links nome="SouDizimista Android" link="https://play.google.com/store/apps/details?id=br.com.dizimofiel.soudizimista.mobile"></Links>
                <Links nome="SouDizimista IOS" link="https://apps.apple.com/br/app/soudizimista/id1378421772"></Links>
            </View>
        )
    }
}

export default Home
