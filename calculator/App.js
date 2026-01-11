import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,input,Switch,ImageBackground, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import react,{useState,useEffect} from 'react';
import Button from './components/Button';


export default function App() {
  const [Display, setDisplay] = useState('');
  const [Theme, setTheme] = useState('light');
  const [Background, setBackground] = useState(0);

  const backgrounds = {
    0:  require('./assets/Images/1.jpg'),
    1:  require('./assets/Images/2.jpg'),
    2:  require('./assets/Images/3.jpg'),
    3:  require('./assets/Images/4.jpg'),
    4:  require('./assets/Images/5.jpg'),
    5:  require('./assets/Images/6.jpg'),
    6:  null,
  };




  const handlePress=(value)=>{
    if(Display==='Error'){
      setDisplay(value);
    }
    else if(Display==='0'){
      setDisplay(value);
    }
    else setDisplay(Display+value);
  }

  const handleClear=()=>{
    setDisplay('');
  }

  const handleDelete=()=>{
    setDisplay(Display.slice(0,-1));
  }

  const handleCalculate=()=>{
    try {
      setDisplay(eval(Display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  }

  const handleBackground=()=>{
    if(Background<6){
      setBackground(Background+1);
      console.log(Background);
    }
    else{
      setBackground(0);
    }
  }




  return (
    <SafeAreaView style={Theme==='light'?styles.container:[styles.container,{backgroundColor:'#fff'}]}>
      <ImageBackground
          source={backgrounds[Background]}
          style={styles.card}>
        <View style={styles.top}>
          <Switch style={styles.switch} value={Theme==='light'} onValueChange={()=>{setTheme(Theme==='light'?'dark':'light')}}></Switch>
          <TouchableOpacity onPress={()=>{handleBackground()}} style={styles.button}>
            <View style={styles.backgroundbutton}>
              <Text style={styles.backgroundbuttonText} >Change Background</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.DisplayContainer}>
          <Text style={Theme==='light'?styles.DisplayText:[styles.DisplayText,{color:'#121212'}]}>{Display||'0'}</Text>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={styles.row}>
            <Button title="C" onPress={()=>handleClear()} style={styles.operator} textStyle={{color:'white'}} />
            <Button title="<-" onPress={()=>handleDelete()} style={styles.operator} textStyle={{color:'white'}} />
            <Button title="%" onPress={()=>handlePress('%')} style={styles.operator} textStyle={{color:'white'}} />
            <Button title="/" onPress={()=>handlePress('/')} style={styles.operator} textStyle={{color:'white'}} />
          </View>
          <View style={styles.row}>
            <Button title="7" onPress={()=>handlePress('7')} />
            <Button title="8" onPress={()=>handlePress('8')} />
            <Button title="9" onPress={()=>handlePress('9')} />
            <Button title="X" onPress={()=>handlePress('*')} style={styles.operator} textStyle={{color:'white'}} />
          </View>
          <View style={styles.row}>
            <Button title="4" onPress={()=>handlePress('4')} />
            <Button title="5" onPress={()=>handlePress('5')} />
            <Button title="6" onPress={()=>handlePress('6')} />
            <Button title="-" onPress={()=>handlePress('-')} style={styles.operator} textStyle={{color:'white'}} />
          </View>
          <View style={styles.row}>
            <Button title="1" onPress={()=>handlePress('1')} />
            <Button title="2" onPress={()=>handlePress('2')} />
            <Button title="3" onPress={()=>handlePress('3')} />
            <Button title="+" onPress={()=>handlePress('+')} style={styles.operator} textStyle={{color:'white'}} />
          </View>
          <View style={styles.row}>
            <Button title="0" onPress={()=>handlePress('0')} style={styles.ZeroButton} />
            <Button title="." onPress={()=>handlePress('.')} />
            <Button title="=" onPress={()=>handleCalculate()} style={styles.equal}/>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  top:{
    flex:1,
    flexDirection:'row',
    // backgroundColor:'red',
    width:'100%',
    margin:0,
    padding:0,
    justifyContent:'space-between',
    alignItems:'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#ff0000'
  },
  DisplayContainer:{
    flex:2,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding:2,
    // backgroundColor:'pink'
  },
  DisplayText:{
    fontSize:48,
    color:'#fff'
  },
  ButtonContainer:{
    flex:4,
    // backgroundColor:'#fff',
    width:'100%',
  },
  row:{
    flex:1,
    flexDirection:'row',

  },
  operator:{
    backgroundColor:'#2a2a2a',
  },
  equal:{
    backgroundColor:'#ff9500',
  },
  ZeroButton:{
    flex:2,
  },
  card:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  backgroundbutton:{
    backgroundColor:'rgba(67, 154, 255, 0.99)',
    margin:5,
    padding:5,
    elevation:5,
    borderRadius:5,
  },
  backgroundbuttonText:{
    color:'black',
  },
  switch:{
    // backgroundColor:'red',
  }
});
