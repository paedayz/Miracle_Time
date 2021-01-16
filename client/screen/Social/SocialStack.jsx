import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import SocialScreen from './SocialScreen'

const SocialStack = createStackNavigator()

const SocialStackScreen = ({navigation}) => {
    return (
      <SocialStack.Navigator>
        <SocialStack.Screen 
          name="Social" 
          component={SocialScreen} 
          options={{
            title:'Social',
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
      </SocialStack.Navigator>
    )
  }

export default SocialStackScreen