import { Dimensions, StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import { ScreenType } from '../Constants/Constants'

const HomeScreen = ({onExit}) => {
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>onExit(ScreenType.addNote)}>
            <View style={styles.itembutton}>
                <Text style={styles.Text}>Add Note</Text>
            </View>
        </Pressable>
        <Pressable onPress={()=>onExit(ScreenType.allNotes)}>
            <View style={styles.itembutton}>
                <Text style={styles.Text}>View All Notes</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-evenly",
        alignItems:"center",
        marginTop:40,
        backgroundColor:"yellow",
        overflow:'hidden'
    },
    itembutton:{
        backgroundColor:'red',
        width:Dimensions.get('window').width-100,
        height:'100%',
        marginVertical:30,
        cursor:'pointer',
        justifyContent:'center',
        alignContent:'center',
        shadowColor:'black',
        shadowOffset:{
            width:10,
            height:10
        },
        shadowOpacity:0.4,
        shadowRadius:5,

    },
    Text:{
        fontFamily:'Arial',
        fontSize:20,
        backgroundColor:'pink',
        textAlign:'center',
        
    }
})