import React, {Fragment, useState, useEffect} from 'react'
import { Avatar, Badge, withBadge, Image } from "react-native-elements";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native'

// Stack Screen
import CalendarStackScreen from '../screen/Calendar/CalendarStack'
import DailyStackScreen from '../screen/Daily/DailyStack'
import StatsStackScreen from '../screen/Stats/StatsStack'
import QuestArchieveStackScreen from '../screen/Quest_Archieve/QuestArchieveStack'
import PetStackScreen from '../screen/Pet/PetStack'

//Component
import {Theme, themes}from '../utils/Theme'

// Redux
import {useSelector} from 'react-redux'

const Tab = createMaterialBottomTabNavigator();

export default function TabFunction () {
  const unRead = useSelector(state => state.data.unreadNoti)
  const current_theme = useSelector(state => state.user.setting.current_theme)
  const navigation = useNavigation()

  const renderNotification = (
    <Fragment>
      {unRead !== 0 ? (
        <View>
          <Icon.Button
            name="notifications"
            size={25}
            backgroundColor="#fff"
            color="black"
            onPress={() => {navigation.navigate('Notifications')}}
          />

          <Badge
            value={unRead}
            containerStyle={{ position: "absolute", right: 9 }}
          />
        </View>
      ) : (
        <Icon.Button
          name="ios-notifications-outline"
          size={25}
          backgroundColor="#fff"
          color="black"
          onPress={() => {navigation.navigate('Notifications')}}
        />
      )}
    </Fragment>
  );

    return (
      <Fragment>
        <Tab.Navigator
          initialRouteName="Calendar"
          activeColor="#fff"
        >
          <Tab.Screen
            name="Calendar"
            component={CalendarStackScreen}
            options={{
              tabBarLabel: 'Calendar',
              tabBarColor: `${themes[current_theme].BUTTON_TAB_MENU_ONE}`,
              tabBarIcon: ({ color }) => (
                <Image source={{uri:themes[current_theme].BUTTON_TAB_MENU_ONE_IMG}} style={{width:25, height:25, tintColor:'white'}}/>
              ),
            }}
          />
          <Tab.Screen
            name="Social"
            component={DailyStackScreen}
            options={{
              tabBarLabel: 'Dairy',
              tabBarColor: `${themes[current_theme].BUTTON_TAB_MENU_TWO}`,
              tabBarIcon: ({ color }) => (
                <Image source={{uri:themes[current_theme].BUTTON_TAB_MENU_TWO_IMG}} style={{width:25, height:25, tintColor:'white'}}/>
              ),
            }}
          />
          <Tab.Screen
            name="Stats"
            component={StatsStackScreen}
            options={{
              tabBarLabel: 'Stats',
              tabBarColor: `${themes[current_theme].BUTTON_TAB_MENU_THREE}`,
              tabBarIcon: ({ color }) => (
                <Image source={{uri:themes[current_theme].BUTTON_TAB_MENU_THREE_IMG}} style={{width:25, height:25, tintColor:'white'}}/>
              ),
            }}
          />
          <Tab.Screen
            name="QuestArchieve"
            component={QuestArchieveStackScreen}
            options={{
              tabBarLabel: 'Q/A',
              tabBarColor: `${themes[current_theme].BUTTON_TAB_MENU_FOUR}`,
              tabBarIcon: ({ color }) => (
                <Image source={{uri:themes[current_theme].BUTTON_TAB_MENU_FOUR_IMG}} style={{width:25, height:25, tintColor:'white'}}/>
              ),
            }}
          />
          <Tab.Screen
            name="Pet"
            component={PetStackScreen}
            options={{
              tabBarLabel: 'Pet',
              tabBarColor: `${themes[current_theme].BUTTON_TAB_MENU_FIVE}`,
              tabBarIcon: ({ color }) => (
                <Image source={{uri:themes[current_theme].BUTTON_TAB_MENU_FIVE_IMG}} style={{width:25, height:25, tintColor:'white'}}/>
              ),
            }}
          />
        </Tab.Navigator>
        <View style={{position:'absolute', right:15, top:30}}>
          {renderNotification}
        </View>
      </Fragment>
    )
    
}

// const DetailStackScreen = ({navigation}) => {
//   return (
//     <DetailStack.Navigator>
//       <DetailStack.Screen 
//         name="Detail" 
//         component={Detail} 
//         options={{
//           title:'Detail',
//           headerLeft: () => (
//             <Icon.Button 
//               name="menu" 
//               size={20} 
//               backgroundColor="#fff"
//               color="black"
//               onPress={() => navigation.openDrawer()}
//             />
//           )
//         }}
//       />
//     </DetailStack.Navigator>
//   )
// }