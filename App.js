import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import { Img } from './src/components/Img';
import Navbar from './src/components/Navbar';
import {style} from './src/style/'

export default function App() {
  let img = {uri: "https://instagram.fjdo1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/95705156_1350171608514241_8429011315699220480_n.jpg?_nc_ht=instagram.fjdo1-2.fna.fbcdn.net&_nc_ohc=Nvz8qr-vSCcAX_xP0dV&tp=1&oh=3ecb35d3a0098d9f26ba13f9cb5d65e5&oe=5FF7FF6D"}
  return (
    <View style={style.body}>
      <StatusBar backgroundColor={"#FFE59D"} translucent = {false}></StatusBar>
      <Navbar nome="Paróquia Jesus, Maria e José"></Navbar>
      <Img img={img}></Img>
      <Home></Home>
    </View>
  );
}