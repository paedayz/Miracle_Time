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

          <TouchableOpacity style={styles.button1}>
            <Button color="gray" title='ขอกำลังใจหน่อย' onPress={() => FirstBtnClick()} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} >
            <Button color="gray" title='ทำอะไรดีน้า' onPress={() => SecondBtnClick()}/>
          </TouchableOpacity>
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
    borderRadius:100,
    marginLeft: 223,
    marginTop: 20
  },
  button2: {
    marginTop: 10,
    marginLeft: 250
  }
});