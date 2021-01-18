import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

export default function PetScreen({navigation}) {
    
      return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
              <Image source={require('../../assets/madarao.png')} style={{ maxHeight: 330, maxWidth: '60%'}}/>
            </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Button color="black" title='ขอกำลังใจหน่อย' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <Button color="brown" title='ทำอะไรดีน้า' />
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