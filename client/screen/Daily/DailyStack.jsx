import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'

// Component
import Notifications from '../../component/Notifications'

// Screen
import DailyScreen from './DailyScreen'
import DailyDetail from "./DailyDetail"

const DailyStack = createStackNavigator()

const DailyStackScreen = ({navigation}) => {
    return (
      <DailyStack.Navigator>
        <DailyStack.Screen 
          name="Daily" 
          component={DailyScreen} 
          options={{
            title:'Dairy',
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
        <DailyStack.Screen
          name="DairyDetail"
          component={DailyDetail}
        />
      </DailyStack.Navigator>
    )
  }

export default DailyStackScreen