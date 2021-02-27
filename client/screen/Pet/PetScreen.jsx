import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

// Component
import Ask_Volitation from './Ask_Volitation'
import Ask_Advice from './Ask_Advice'

//Redux
import {doAchievement} from '../../redux/action/dataAction'
import {useDispatch} from 'react-redux'

export default function PetScreen({navigation}) {
  const [textBox, setTextBox] = useState(false)
  const [isFirsBtnClick, setIsFirsBtnClick] = useState(false)
  const [isSecondBtnClick, setIsSecondBtnClick] = useState(false)
  const dispatch = useDispatch()

  const FirstBtnClick = () => {
    if(isFirsBtnClick) {
      dispatch(doAchievement('getHealing'))
      setIsFirsBtnClick(false)
      setTimeout(() => {
        setIsFirsBtnClick(true)
      }, 500);
      
    } else {
      dispatch(doAchievement('getHealing'))
      setTextBox(true)
      setIsFirsBtnClick(true)
      setIsSecondBtnClick(false)
    }
    
  }

  const SecondBtnClick = () => {
    if(isSecondBtnClick) {
      setIsSecondBtnClick(false)
      setTimeout(() => {
        setIsSecondBtnClick(true)
      }, 500);
      
    } else {
      setTextBox(true)
      setIsSecondBtnClick(true)
      setIsFirsBtnClick(false)
    }
    
  }

  const CloseTextBox = () => {
    setTextBox(false)
    setIsFirsBtnClick(false)
    setIsSecondBtnClick(false)
  }
    
      return (
        <SafeAreaView style={styles.container}>
            {textBox && 
                <TouchableOpacity onPress={() => {CloseTextBox()}}>
                  <Image source={require('../../assets/Pokemon-TextFrame.png')} style={{ maxHeight: 120, maxWidth: '65%', marginBottom: 30}}/>
                </TouchableOpacity>
            }
            
            {isFirsBtnClick &&
              <View style={{position:'absolute', top: 60}}>
                <Ask_Volitation/>
              </View>
            }

            {isSecondBtnClick &&
              <View style={{position:'absolute', top: 60}}>
                <Ask_Advice />
              </View>
            }
            <TouchableOpacity>
              <Image source={require('../../assets/madarao.png')} style={{ maxHeight: 330, maxWidth: '60%'}}/>
            </TouchableOpacity>

          <View style={styles.button_box}>
            <TouchableOpacity style={styles.button1} onPress={() => FirstBtnClick()}>
              
                <Text style={styles.button_text}>ขอกำลังใจ</Text>
              
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => SecondBtnClick()}>
              
                <Text style={styles.button_text}>ขอคำเเนะนำ</Text>
              
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor:'#FF82CC',
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
    backgroundColor:'#61dafb',
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
  button_box:{
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  button_text: {
    color:'white',
    fontSize: 18,
  }
});