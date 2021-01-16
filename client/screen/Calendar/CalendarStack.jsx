import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import CalendarScreen from './CalendarScreen'

const CalendarStack = createStackNavigator()

const CalendarStackScreen = ({navigation}) => {
    return (
      <CalendarStack.Navigator>
        <CalendarStack.Screen 
          name="Calendar" 
          component={CalendarScreen} 
          options={{
            title:'Home',
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
      </CalendarStack.Navigator>
    )
  }

export default CalendarStackScreen