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
  const [image, setImage] = useState(<Image source={require('../../assets/pet_pic/idle.gif')} style={{ maxHeight: 300, maxWidth: '78%'}}/>)
  const [currentPetImg, setCurrentPetImg] = useState(4)
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

  const togglePet = () => {
    let imageArray = [
      <Image source={require('../../assets/pet_pic/eat.gif')} style={{ maxHeight: 300, maxWidth: '78%'}}/>,
      <Image source={require('../../assets/pet_pic/hungry.gif')} style={{ maxHeight: 300, maxWidth: '78%'}}/>,
      <Image source={require('../../assets/pet_pic/play.gif')} style={{ maxHeight: 300, maxWidth: '78%'}}/>,
      <Image source={require('../../assets/pet_pic/sleep.gif')} style={{ maxHeight: 300, maxWidth: '78%'}}/>,
      <Image source={require('../../assets/pet_pic/idle.gif')} style={{ maxHeight: 300, maxWidth: '78%'}}/>
    ]

    let randNum

    do {
      randNum = Math.floor(Math.random() * 5)
    } while (randNum === currentPetImg);

    setCurrentPetImg(randNum)

    setImage(imageArray[randNum])
  }

  const CloseTextBox = () => {
    setTextBox(false)
    setIsFirsBtnClick(false)
    setIsSecondBtnClick(false)
  }
    
      return (
        <SafeAreaView style={styles.container}>
            {textBox && 
            <View>
               <TouchableOpacity onPress={() => {CloseTextBox()}}>
                  <Image source={require('../../assets/Pokemon-TextFrame.png')} style={{width:200, height:95, position: 'absolute', bottom:-15, right: -100}}/>
                </TouchableOpacity>
                </View>
            }
            
            {isFirsBtnClick &&
              <View style={{position:'absolute', top: 40}}>
                <Ask_Volitation/>
              </View>
            }

            {isSecondBtnClick &&
              <View style={{position:'absolute', top: 40}}>
                <Ask_Advice />
              </View>
            }
            <TouchableOpacity onPress={() => togglePet()}>
              {image}
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
  },
  button_text: {
    color:'white',
    fontSize: 18,
  }
});