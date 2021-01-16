import React, {useState} from 'react';
import { SafeAreaView, Text } from 'react-native';

// Redux
import {useSelector} from 'react-redux'

// Screen
import CalendarScreen from './Calendar/CalendarScreen'
import AuthScreen from './Auth/AuthScreen'

export default function Screen({navigation}) {
    const userData = useSelector(state => state.user.userData)

    if(userData) {
        return (
            <SafeAreaView style={{ flex: 1 , marginTop: 20}}>
                <CalendarScreen/>
            </SafeAreaView>
        )
        
    } else {
        return (
            <SafeAreaView style={{ flex: 1 , marginTop: 20}}>
                <AuthScreen/>
            </SafeAreaView>
          );
    }
    
      
}