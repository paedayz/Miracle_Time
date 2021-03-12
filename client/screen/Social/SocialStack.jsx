import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

// Component
import Notifications from '../../component/Notifications'

// Screen
import SocialScreen from './SocialScreen'

const SocialStack = createStackNavigator()

const SocialStackScreen = ({navigation}) => {
    return (
      <SocialStack.Navigator>
        <SocialStack.Screen 
          name="Daily" 
          component={SocialScreen} 
          options={{
            title:'Daily',
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