import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

// Screen
import CalendarScreen from './CalendarScreen'
import TodayListsScreen from './TodayLists'

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
        <CalendarStack.Screen name='TodayList' component={TodayListsScreen} />
      </CalendarStack.Navigator>
    )
  }

export default CalendarStackScreen