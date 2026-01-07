import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({notes}) => {
  return (
    <View style={styles.listItems}>
      <Text style={styles.Text} >{notes}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listItems:{
        borderWidth:4,
        borderBlockColor:'purple',
        backgroundColor:'#fff000',
        borderRadius:5,
        padding:10,
        marginTop:10,
        maxWidth:400,
    },
    Text:{
        fontSize:20,
        fontWeight:'400',
        textAlign:'center'
    }
})