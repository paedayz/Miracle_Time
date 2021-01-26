import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import QuestArchieveScreen from './QuestArchieveScreen'

const QuestArchieveStack = createStackNavigator()

const QuestArchieveStackScreen = ({navigation}) => {
    return (
      <QuestArchieveStack.Navigator>
        <QuestArchieveStack.Screen 
          name="QuestArchieve" 
          component={QuestArchieveScreen} 
          options={{
            title:'Quest & Archieve',
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