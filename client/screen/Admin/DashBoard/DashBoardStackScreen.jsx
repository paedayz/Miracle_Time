import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

// Screen
import DashBoardScreen from './DashBoardScreen'

const QuestArchieveStack = createStackNavigator()

const AdminArchieveStackScreen = ({navigation}) => {
    return (
      <QuestArchieveStack.Navigator>
        <QuestArchieveStack.Screen 
          name="AdminDashboard" 
          component={DashBoardScreen} 
          options={{
            title:'Admin Dashboard',
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
      </QuestArchieveStack.Navigator>
    )
  }

export default AdminArchieveStackScreen