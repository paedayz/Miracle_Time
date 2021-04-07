import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'


// Screen
import Shopscreen from './Shopscreen'


const ShopStack = createStackNavigator()

const ShopStackScreen = ({navigation}) => {
    return (
      <ShopStack.Navigator>
        <ShopStack.Screen 
          name="Shop" 
          component={Shopscreen} 
          options={{
            title:'Shop',
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
      </ShopStack.Navigator>
    )
  }

export default ShopStackScreen