import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import ProfileScreen from './ProfileScreen'

const ProfileStack = createStackNavigator()

const ProfileStackScreen = ({navigation}) => {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            title:'Profile',
            headerLeft: () => (
              <Icon.Button 
                name="menu" 
                size={20} 
                backgroundColor="#fff"
                color="black"
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <Icon.Button 
                name="notifications-outline"
                size={25}
                backgroundColor="#fff"
                color="black"
                onPress={() => {}}
              />
            )
          }}
        />
      </ProfileStack.Navigator>
    )
  }

export default ProfileStackScreen