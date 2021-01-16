import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getAuthen} from '../redux/action/userAction'

// Screen
import AuthScreen from './Auth/AuthScreen'

// Naviation
import BottomTabNavigator from '../navigator/BottomTabNavigator'
const Drawer = createDrawerNavigator()


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
            <Drawer.Navigator>
                <Drawer.Screen name="Calendar" component={BottomTabNavigator}/>
            </Drawer.Navigator>
        )
        
    } else {
        return (
            <SafeAreaView style={{ flex: 1 , marginTop: 20}}>
                <AuthScreen/>
            </SafeAreaView>
          );
    }
    
      
}