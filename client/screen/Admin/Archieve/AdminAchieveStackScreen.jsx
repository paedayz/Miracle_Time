import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import ArcheivementScreen from './ArcheivementScreen'

const QuestArchieveStack = createStackNavigator()

const AdminArchieveStackScreen = ({navigation}) => {
    return (
      <QuestArchieveStack.Navigator>
        <QuestArchieveStack.Screen 
          name="AdminAcheivement" 
          component={ArcheivementScreen} 
          options={{
            title:'Admin Acheivement',
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