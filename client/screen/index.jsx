import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
import {ThemeProvider} from 'styled-components'

// Themes
import {themes} from '../utils/Theme'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getAuthen} from '../redux/action/userAction'
import {getAdminQuestList, getAdminAchievementList} from '../redux/action/adminAction'

// Screen
import AuthScreen from './Auth/AuthScreen'

// Stack
import ProfileStackScreen from './Profile/ProfileStack'
import AdminStackScreen from './Admin/AdminStack'
import NotificationStackScreen from './Notifications/NotificationStack'
import FriendStackScreen from './Friend/FriendStackScreen'

//component
import TipsStack from './Tips/TipsStack'
import HowFeel from './HowFeel'
import SettingStack from './Setting/SettingStack'
import ShopStack from './Shop/ShopStack'

// Naviation
import BottomTabNavigator from '../navigator/BottomTabNavigator'
import AdminBottomTabNavigator from '../navigator/AdminBottomTabNavigator'
import {DrawerContent} from '../navigator/DrawerContent'
const Drawer = createDrawerNavigator()


export default function Screen({navigation}) {
    const userData = useSelector(state => state.user.userData)
    const loading = useSelector(state => state.system.loading)
    const userEventData = useSelector(state => state.data.events)
    const current_theme = useSelector(state => state.user.setting.current_theme)

    const select_mood = useSelector(state => state.user.setting.select_mood)
    const [clickMood, setclickMood] = useState(false)
    const [goToMain, setGoToMain] = useState(false)

    const clicked_Mood = () =>{
        setclickMood(true)
    }
    const isGetData = useSelector(state => state.data.isGetData)
    const dispatch = useDispatch()

    if(userData && isGetData === false){
        if(userData.status === 'admin') {
            dispatch(getAdminQuestList())
            dispatch(getAdminAchievementList())
        }
        dispatch(getAuthen())
    }

    if(loading) {
        return (
            <SafeAreaView style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
                <PacmanIndicator color='#738FD9' />
            </SafeAreaView>
        )
    }

    if(userData && ( clickMood === true || select_mood === false || goToMain || true )) {
        if(goToMain === false){
            setGoToMain(true)
        }
        return (
            <ThemeProvider theme={themes[current_theme]}>
                <Drawer.Navigator initialRouteName="Calendar" drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="Calendar" component={BottomTabNavigator} />
                    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
                    <Drawer.Screen name="Admin" component={AdminBottomTabNavigator} />
                    <Drawer.Screen name="Notifications" component={NotificationStackScreen} />
                    <Drawer.Screen name="Friend" component={FriendStackScreen} />
                    <Drawer.Screen name="Tips" component={TipsStack} />
                    <Drawer.Screen name="Setting" component={SettingStack} />
                    <Drawer.Screen name="Shop" component={ShopStack} />
                </Drawer.Navigator>
            </ThemeProvider>
        )

    } else if(userData && ( clickMood === false && select_mood === true && goToMain === false )){
        return (
            <HowFeel clickMood_func={clicked_Mood} />
        )
        
    } else {
        return (
            <SafeAreaView style={{ flex: 1 , marginTop: 20}}>
                <AuthScreen/>
            </SafeAreaView>
          );
    }
    
      
}