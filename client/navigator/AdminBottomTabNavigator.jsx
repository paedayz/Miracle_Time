import React, {Fragment, useState, useEffect} from 'react'
import { Avatar, Badge, withBadge } from "react-native-elements";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";

// Stack Screen
import QuestBuff from '../screen/Quest_Archieve/Quest/QuestBuff'
import AchieveBuff from '../screen/Quest_Archieve/Achieve/AchieveBuff'
import StatsStackScreen from '../screen/Stats/StatsStack'
import QuestArchieveStackScreen from '../screen/Quest_Archieve/QuestArchieveStack'
import PetStackScreen from '../screen/Pet/PetStack'
import DashBoard from '../screen/Admin/DashBoard/DashBoard'
import AdminQuestStackScreen from '../screen/Admin/Quest/AdminQuestStackScreen'
import AdminAchieveStackScreen from '../screen/Admin/Archieve/AdminAchieveStackScreen'

// Redux
import {useSelector} from 'react-redux'

const Tab = createMaterialBottomTabNavigator();

export default function AdminBottomTabNavigator () {

    return (
      <Fragment>
        <Tab.Navigator
          initialRouteName="AdminQuest"
          activeColor="#fff"
        >
          <Tab.Screen
            name="AdminQuest"
            component={AdminQuestStackScreen}
            options={{
              tabBarLabel: 'Quest',
              tabBarColor: '#4A9FFF',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="crosshairs-question" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="AdminAchieve"
            component={AdminAchieveStackScreen}
            options={{
              tabBarLabel: 'Achieve',
              tabBarColor: '#6170D7',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="medal-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Dashboard"
            component={DashBoard}
            options={{
              tabBarLabel: 'Dashboard',
              tabBarColor: '#008891',
              tabBarIcon: ({ color }) => (
                <Octicons name="graph" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="QuestArchieve"
            component={QuestArchieveStackScreen}
            options={{
              tabBarLabel: 'Q/A',
              tabBarColor: '#20E1D4',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="medal-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
        <View style={{position:'absolute', right:15, top:30}}>
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