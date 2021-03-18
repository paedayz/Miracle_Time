import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

// Component
import Notifications from '../../component/Notifications'

// Screen
import DailyScreen from './DailyScreen'
import Dailydetail from "./Dailydetail";

const SocialStack = createStackNavigator()

const SocialStackScreen = ({navigation}) => {
    return (
      <SocialStack.Navigator>
        <SocialStack.Screen 
          name="Daily" 
          component={DailyScreen} 
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
        <SocialStack.Screen
        name="Dailydetail"
        component={Dailydetail}
      />
      </SocialStack.Navigator>
    )
  }

export default SocialStackScreen