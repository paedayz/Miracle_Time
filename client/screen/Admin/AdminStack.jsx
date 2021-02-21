import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

// Componete
import AdminScreen from './AdminScreen'
import AdminQuestDetail from './Quest/QuestDetail'
import AdminAchievementDetail from './Archieve/AchievementDetail'

const AdminStack = createStackNavigator()

const AdminStackScreen = ({navigation}) => {
    return (
      <AdminStack.Navigator>
        <AdminStack.Screen 
          name="Admin" 
          component={AdminScreen} 
          options={{
            title:'Admin',
            headerLeft: () => (
              <Icon.Button 
                name="menu" 
                size={20} 
                backgroundColor="#fff"
                color="black"
                onPress={() => navigation.openDrawer()}
              />
            )
          }}
        />
        <AdminStack.Screen name="adminQuestDetail" component={AdminQuestDetail} />
        <AdminStack.Screen name="adminAchievementDetail" component={AdminAchievementDetail} />
      </AdminStack.Navigator>
    )
  }

export default AdminStackScreen