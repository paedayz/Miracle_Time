import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import PetScreen from './PetScreen'


const PetStack = createStackNavigator()

const PetStackScreen = ({navigation}) => {
    return (
      <PetStack.Navigator>
        <PetStack.Screen 
          name="Pet" 
          component={PetScreen} 
          options={{
            title:'Pet',
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
      </PetStack.Navigator>
    )
  }

export default PetStackScreen