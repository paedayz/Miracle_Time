import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

// Screen
import ProfileScreen from './ProfileScreen'
import EditProfileScreen from './EditProfileScreen'

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
              <AntDesign.Button 
                name="edit"
                size={25}
                backgroundColor="#fff"
                color="black"
                onPress={() => navigation.navigate('Edit Profile')}
              />
            )
          }}
        />
        <ProfileStack.Screen name="Edit Profile" component={EditProfileScreen} />
      </ProfileStack.Navigator>
    )
  }

export default ProfileStackScreen