import React, {useState}from 'react';
import { View, SafeAreaView, Text,  Button, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function HowFeel({clickMood_func}) {
  
    const [Useser_Emotions, setUseser_Emotions] = useState()

    const Feel_good = () => {
        setUseser_Emotions("good")
        clickMood_func()
    }
    const Feel_ok = () => {
        setUseser_Emotions("ok")
        clickMood_func()
    }
    const Feel_sad = () => {
        setUseser_Emotions("sad")
        clickMood_func()
    }
    const Feel_angry = () => {
        setUseser_Emotions("angry")
        clickMood_func()
    }
    
    return (
        <View style={styles.HF_box}>
          <View style={styles.headerBox}>
            <Text style={styles.title}>ตอนนี้คูณรู้สึกอย่างไร</Text> 
          </View>
          <Text>{Useser_Emotions}</Text>
          <View style={styles.button_box}>
              <TouchableOpacity style={styles.button1} onPress={() => Feel_good()}>
    
                <Text style={styles.button_text}>รู้สึกดี</Text>
  
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2} onPress={() => Feel_ok()}>
    
                <Text style={styles.button_text}>รู้สึกเฉยๆ</Text>
  
              </TouchableOpacity>
          </View>
          <View style={styles.button_box}>
              <TouchableOpacity style={styles.button3} onPress={() => Feel_sad()}>
    
                <Text style={styles.button_text}>รู้สึกเศร้า</Text>
  
              </TouchableOpacity>
              <TouchableOpacity style={styles.button4} onPress={() => Feel_angry()}>
    
                <Text style={styles.button_text}>รู้สึกโกรธ</Text>
  
              </TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  button_box:{
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  button_text: {
    color:'white',
    fontSize: 18,
  },
  title: {
    color:'black',
    fontSize: 18,
  },
  HF_box:{
    backgroundColor:'#fff',
    maxWidth:'98%',
    maxHeight:'95%',
    alignItems: 'center',
  },
  headerBox:{
    alignItems: 'center',
    padding:15,
  },
  button1:{
    backgroundColor:'#FF33FF',
    borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 30,
      shadowOffset: { width: 1 , height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
    marginHorizontal:'2%',
    padding:20,
  },
  button2: {
    backgroundColor:'#FFFF66',
    borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 30,
      shadowOffset: { width: 1 , height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
    marginHorizontal:'2%',
    padding:20,
  },
  button3: {
    backgroundColor:'#3366FF',
    borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 30,
      shadowOffset: { width: 1 , height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
    marginHorizontal:'2%',
    padding:20,
  },
  button4: {
    backgroundColor:'#FF6600',
    borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 30,
      shadowOffset: { width: 1 , height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
    marginHorizontal:'2%',
    padding:20,
  }
   
});
