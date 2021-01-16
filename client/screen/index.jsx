import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getAuthen} from '../redux/action/userAction'

// Screen
import AuthScreen from './Auth/AuthScreen'
import PetScreen from './Pet/PetScreen'

// Naviation
import BottomTabNavigator from '../navigator/BottomTabNavigator'
import {DrawerContent} from '../navigator/DrawerContent'
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
            <Drawer.Navigator initialRouteName="Calendar" drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Calendar" component={BottomTabNavigator} />
                <Drawer.Screen name="Pet" component={PetScreen} />
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