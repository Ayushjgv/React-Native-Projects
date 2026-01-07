import { Platform, StyleSheet, Text, View } from 'react-native'
import { ImageBackground, SafeAreaView } from 'react-native-web'
// import { SafeAreaView } from 'react-native/types_generated/index'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer} > 
        <Text style={styles.headerTitle}>
            Hello World !
        </Text>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:Platform.OS=='android'?"purple":"pink",
        width:"100%",
        height:"15%",
        paddingTop:30
    },
    headerTitle:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        padding:10,
        marginTop:10
    }
});