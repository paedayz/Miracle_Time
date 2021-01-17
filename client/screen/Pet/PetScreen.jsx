import React from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';

export default function PetScreen({navigation}) {
    
      return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Image source={require('../../assets/madarao.png')} style={{maxHeight: 330, maxWidth: '60%'}}/>
          </TouchableOpacity>
        </SafeAreaView>
      );
}