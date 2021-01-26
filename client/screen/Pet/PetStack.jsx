import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import PetScreen from './PetScreen'
import GifpointScreen from './GifpointScreen'

const PetStack = createStackNavigator()

const PetStackScreen = ({navigation}) => {
    return (
      <PetStack.Navigator>
        <PetStack.Screen 
          name="Pet" 
          component={PetScreen} 
          options={{
            title:'Pet sugoi',
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
        <PetStack.Screen name="Gif-point" component={GifpointScreen} />
      </PetStack.Navigator>
    )
  }

export default PetStackScreen