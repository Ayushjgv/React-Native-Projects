import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import react , {useState} from 'react';
import { ScreenType } from './Constants/Constants';
import AddNotes from './screens/AddNotes';
import AllNotesScreen from './screens/AllNotesScreen';
import BackButton from './components/BackButton';

export default function App() {
  const [Screen, setScreen] = useState(ScreenType.home);
  const [Notes, setNotes] = useState([]);
  let content;
  let backbutton;

  const updateScreen=(data)=>{
    setScreen(data);
  }


  if(Screen===ScreenType.addNote){
    content=<AddNotes 

    onExit={updateScreen}
    
    onSave={(data)=>{
      setNotes([...Notes,{id:Date.now(),note:data}]);
    }}/>
  }else if(Screen===ScreenType.allNotes){
    content=<AllNotesScreen notes={Notes}/>
  }else if(Screen===ScreenType.home){
    content= <HomeScreen onExit={updateScreen} />
  }

  if(Screen===ScreenType.home){
    backbutton=null;
  }else{
    backbutton=<BackButton onButtonClick={updateScreen} />;
  }


  return (
    <View style={styles.container}>
      <Header/>
      {backbutton}
      {content}
      <Text>Hello World !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
