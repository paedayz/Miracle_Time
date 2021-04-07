import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'


// Screen
import SettingScreen from './SettingScreen'


const SettingStack = createStackNavigator()

const SettingStackScreen = ({navigation}) => {
    return (
      <SettingStack.Navigator>
        <SettingStack.Screen 
          name="Tips" 
          component={SettingScreen} 
          options={{
            title:'Setting',
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

      </SettingStack.Navigator>
    )
  }

export default SettingStackScreen