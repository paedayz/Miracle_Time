import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import NotificationScreen from './NotificationScreen'

const NotificationStack = createStackNavigator()

const NotificationStackScreen = ({navigation}) => {
    return (
      <NotificationStack.Navigator>
        <NotificationStack.Screen 
          name="Notification" 
          component={NotificationScreen} 
          options={{
            title:'Notification',
            headerLeft: () => (
              <Icon.Button 
                name="arrow-back" 
                size={20} 
                backgroundColor="#fff"
                color="black"
                onPress={() => navigation.navigate('Calendar')}
              />
            )
          }}
        />
      </NotificationStack.Navigator>
    )
  }

export default NotificationStackScreen