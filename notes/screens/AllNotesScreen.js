import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

const AllNotesScreen = ({notes}) => {


  const renderItem=(itemData)=>{
    return <ListItem notes={itemData.item.note} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>All Notes</Text>
      <FlatList data={notes} renderItem={renderItem} />
    </View>
  )
}

export default AllNotesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    padding:10,

  },
  Text:{
    fontSize:25,
    fontWeight:'bold',
        
  }
})