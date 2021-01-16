import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import StatsScreen from './StatsScreen'

const StatsStack = createStackNavigator()

const StatsStackScreen = ({navigation}) => {
    return (
      <StatsStack.Navigator>
        <StatsStack.Screen 
          name="Stats" 
          component={StatsScreen} 
          options={{
            title:'Stats',
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
      </StatsStack.Navigator>
    )
  }

export default StatsStackScreen