import React, {Fragment} from 'react'
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

// Stack Screen
import QuestArchieveStackScreen from '../screen/Quest_Archieve/QuestArchieveStack'
import DashBoardStackScreen from '../screen/Admin/DashBoard/DashBoardStackScreen'
import AdminQuestStackScreen from '../screen/Admin/Quest/AdminQuestStackScreen'
import AdminAchieveStackScreen from '../screen/Admin/Archieve/AdminAchieveStackScreen'

const Tab = createMaterialBottomTabNavigator();

export default function AdminBottomTabNavigator () {

    return (
        <Tab.Navigator
          initialRouteName="AdminQuest"
          activeColor="#fff"
        >
          <Tab.Screen
            name="AdminQuest"
            component={AdminQuestStackScreen}
            options={{
              tabBarLabel: 'Quest',
              tabBarColor: '#373737',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="target" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="AdminAchieve"
            component={AdminAchieveStackScreen}
            options={{
              tabBarLabel: 'Achieve',
              tabBarColor: '#686868',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="medal-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Dashboard"
            component={DashBoardStackScreen}
            options={{
              tabBarLabel: 'Dashboard',
              tabBarColor: '#909090',
              tabBarIcon: ({ color }) => (
                <Octicons name="graph" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="QuestArchieve"
            component={QuestArchieveStackScreen}
            options={{
              tabBarLabel: '?',
              tabBarColor: '#B5B3B3',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cloud-question" color={color} size={22} />
              ),
            }}
          />
        </Tab.Navigator>
    )
    
}