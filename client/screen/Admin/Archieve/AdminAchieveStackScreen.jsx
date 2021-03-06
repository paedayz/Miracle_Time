import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import ArcheivementScreen from './ArcheivementScreen'
import AchievementDetail from './AchievementDetail'

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
        <QuestArchieveStack.Screen 
          name="adminAchievementDetail"
          component={AchievementDetail}
        />
      </QuestArchieveStack.Navigator>
    )
  }

export default AdminArchieveStackScreen