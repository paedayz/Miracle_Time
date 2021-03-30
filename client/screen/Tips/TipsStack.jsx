import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'


// Screen
import TipsScreen from './TipsScreen'
import Tip_1 from './TIp_info/Tip_#1'
import Tip_2 from './TIp_info/Tip_#2'
import Tip_3 from './TIp_info/Tip_#3'




const TipsStack = createStackNavigator()

const TipsStackScreen = ({navigation}) => {
    return (
      <TipsStack.Navigator>
        <TipsStack.Screen 
          name="Tips" 
          component={TipsScreen} 
          options={{
            title:'Tips',
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
        <TipsStack.Screen name='Tip #1' component={Tip_1} />
        <TipsStack.Screen name='Tip #2' component={Tip_2} />
        <TipsStack.Screen name='Tip #3' component={Tip_3} />




      </TipsStack.Navigator>
    )
  }

export default TipsStackScreen