import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text } from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getAuthen} from '../redux/action/userAction'

// Screen
import CalendarScreen from './Calendar/CalendarScreen'
import AuthScreen from './Auth/AuthScreen'

export default function Screen({navigation}) {
    const userData = useSelector(state => state.user.userData)
    const loading = useSelector(state => state.system.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthen())
    }, [])

    if(loading) {
        return (
            <SafeAreaView style={{ flex: 1 , marginTop: 20}}>
                <Text>Loading</Text>
            </SafeAreaView>
        )
    }

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