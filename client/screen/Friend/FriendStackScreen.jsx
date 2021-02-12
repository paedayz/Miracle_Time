import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

// Screen
import FriendScreen from './FriendScreen'
import FriendProfileScreen from './FriendProfileScreen'

const FriendStack = createStackNavigator()

const FriendStackScreen = ({navigation}) => {
    return (
      <FriendStack.Navigator>
        <FriendStack.Screen 
          name="Friend" 
          component={FriendScreen} 
          options={{
            title:'Friend',
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
        <FriendStack.Screen name='FriendProfile' component={FriendProfileScreen}/>
      </FriendStack.Navigator>
    )
  }

export default FriendStackScreen