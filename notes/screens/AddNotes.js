import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Button, TextInput } from 'react-native-web'
import { ScreenType } from '../Constants/Constants';

const AddNotes = ({onSave,onExit}) => {

  const [EnteredText, setEnteredText] = useState("");




  const handleChange=(val)=>{
    setEnteredText(val);
  };

  const handleClick=()=>{
    if(EnteredText.trim().length>0){
      onSave(EnteredText);
      onExit(ScreenType.allNotes);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Add Note</Text>
        <View>
          <TextInput onChangeText={handleChange} style={styles.input}/>
        </View>
        <Button onPress={handleClick} title='Create' style={styles.button} />
      </View>
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  formContainer:{
    backgroundColor:'#f5f5f5',
    padding:10,
    margin:10,

  },
  input:{
    margin:10,
    // backgroundColor:'grey',
    borderBottomWidth:2,
    fontSize:16,
    padding:10,

  },
  button:{

  },
  text:{
    fontSize:'larger',
    fontWeight:'bold',

  }
})