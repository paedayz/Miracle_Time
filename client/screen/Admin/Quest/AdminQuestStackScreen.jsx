import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import QuestScreen from './QuestScreen'

const QuestArchieveStack = createStackNavigator()

const QuestArchieveStackScreen = ({navigation}) => {
    return (
      <QuestArchieveStack.Navigator>
        <QuestArchieveStack.Screen 
          name="AdminQuest" 
          component={QuestScreen} 
          options={{
            title:'Admin Quest',
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

export default QuestArchieveStackScreen