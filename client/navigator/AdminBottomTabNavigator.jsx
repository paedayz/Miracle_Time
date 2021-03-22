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
              tabBarColor: '#4A9FFF',
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
              tabBarColor: '#6170D7',
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
              tabBarLabel: '?',
              tabBarColor: '#20E1D4',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cloud-question" color={color} size={22} />
              ),
            }}
          />
        </Tab.Navigator>
    )
    
}