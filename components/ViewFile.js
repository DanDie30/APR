import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Pdf from "react-native-pdf";

export default function ViewFile() {
const onlineSource = { uri: "https://ibimone.com/PMBOK%207th%20Edition%20(iBIMOne.com).pdf", cache: true }

  return (
<SafeAreaView style={styles.container}>

<Pdf
source={onlineSource}
onLoadComplete={(numberOfPages, filepath) =>{
  console.log(`Number of pages: ${numberOfPages}`);
}}
onPageChanged={(page, number) =>{
  console.log(`Current page: ${page}`);
}}
onError={(error) =>{
  console.log(error);
}}
onPressLink={(uri) =>{
console.log(`Link presses ${uri}`);
}}

/>

<StatusBar style="auto"/>
</SafeAreaView> 

  )
}

const styles = StyleSheet.create({
container:{
flex: 1, backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center',
margin: 32
},
pdf:{
  flex: 1,
  alignSelf: 'stretch'
}


})
