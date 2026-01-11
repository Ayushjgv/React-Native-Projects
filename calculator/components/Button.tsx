import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native'
import React from 'react'


type Props={
    title:String,
    onPress:()=>void,
    style?:any,
    textStyle?:any
}



const Button = ({title,onPress,style,textStyle}:Props) => {
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
        <Text style={[styles.buttonText,textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        flex:1,
        backgroundColor:'#f0f0f0',
        padding:10,
        margin:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#000'
    }
})