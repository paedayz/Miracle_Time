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
        <SafeAreaView style={styles.HF_box}>
          <View style={styles.headerBox}>
            <Text style={styles.title}>ตอนนี้คูณรู้สึกอย่างไร</Text> 
          </View>

          <View style={styles.button_box}>
              <TouchableOpacity style={styles.button1} onPress={() => Feel_good()}>


                <Image source={require('../assets/Mood_pic/happy.png')} style={styles.mood_img}/>

                <View style={styles.text_box}>
                  <Text style={styles.button_text}>มีความสุข</Text>
                </View>    

              </TouchableOpacity>
              <TouchableOpacity style={styles.button2} onPress={() => Feel_ok()}>

                <Image source={require('../assets/Mood_pic/soso.png')} style={styles.mood_img}/>
    
                <View style={styles.text_box}>
                  <Text style={styles.button_text}>เฉยๆ</Text>
                </View>
  
              </TouchableOpacity>
          </View>
          <View style={styles.button_box}>
              <TouchableOpacity style={styles.button3} onPress={() => Feel_sad()}>

                <Image source={require('../assets/Mood_pic/sad.png')} style={styles.mood_img}/>
    
                <View style={styles.text_box}>
                  <Text style={styles.button_text}>เศร้า</Text>
                </View>
  
              </TouchableOpacity>
              <TouchableOpacity style={styles.button4} onPress={() => Feel_angry()}>

                <Image source={require('../assets/Mood_pic/angry.png')} style={styles.mood_img}/>
    
                <View style={styles.text_box}>
                  <Text style={styles.button_text}>โกรธ</Text>
                </View>
  
              </TouchableOpacity>
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  button_box:{
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  button_text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 2,
    textShadowColor: 'gray',
  },
  text_box: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'2%',
  },
  mood_img:{
    height:'60%',
    width:'100%',
    // borderWidth:2,
    // borderColor:'black',
    // borderRadius: 100,
  },
  title: {
    color: '#404040',
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },
  HF_box:{
    backgroundColor:'#fff',
    alignItems: 'center',
    width:'99%',
    height:'99%',
    maxWidth: '100%',
    maxHeight: '100%',
    padding:10,
    marginTop:'2%',
  },
  headerBox:{
    alignItems: 'center',
    margin:'2%',
  },
  button1:{
    backgroundColor:'#FF33FF',
    height:'100%',
    width:'48%',
    borderTopStartRadius:10,
    justifyContent: 'center',
  },
  button2: {
    backgroundColor:'#FFFF66',
    height:'100%',
    width:'48%',
    borderTopEndRadius:10,
    justifyContent: 'center',
  },
  button3: {
    backgroundColor:'#3366FF',
    height:'100%',
    width:'48%',
    borderBottomLeftRadius:10,
    justifyContent: 'center',
  },
  button4: {
    backgroundColor:'#FF6600',
    height:'100%',
    width:'48%',
    borderBottomRightRadius:10,
    justifyContent: 'center',
  }
   
});
