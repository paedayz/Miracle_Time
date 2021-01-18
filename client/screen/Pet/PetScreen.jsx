import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

export default function PetScreen({navigation}) {
  const [textBox, setTextBox] = useState(false)
  const [isFirsBtnClick, setIsFirsBtnClick] = useState(false)
  const [isSecondBtnClick, setIsSecondBtnClick] = useState(false)

  const FirstBtnClick = () => {
    setTextBox(true)
    setIsFirsBtnClick(true)
    setIsSecondBtnClick(false)
  }

  const SecondBtnClick = () => {
    setTextBox(true)
    setIsSecondBtnClick(true)
    setIsFirsBtnClick(false)
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
                <Text style={{fontSize:25}}>สู้ๆนะมนุษย์</Text>
              </View>
            }

            {isSecondBtnClick &&
              <View style={{position:'absolute', top: 60}}>
                <Text style={{fontSize:25}}>อ่านหนังสือดีมั้ย</Text>
              </View>
            }
            <TouchableOpacity>
              <Image source={require('../../assets/madarao.png')} style={{ maxHeight: 330, maxWidth: '60%'}}/>
            </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Button color="black" title='ขอกำลังใจหน่อย' onPress={() => FirstBtnClick()} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} >
            <Button color="brown" title='ทำอะไรดีน้า' onPress={() => SecondBtnClick()} />
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