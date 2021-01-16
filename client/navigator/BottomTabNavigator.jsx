import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screen
import SocialScreen from '../screen/Social/SocialScreen'
import StatsScreen from '../screen/Stats/StatsScreen'
import QuestArchieveScreen from '../screen/Quest_Archieve/QuestArchieveScreen'
import PetScreen from '../screen/Pet/PetScreen'

// Stack Screen
import CalendarStackScreen from '../screen/Calendar/CalendarStack'

const Tab = createMaterialBottomTabNavigator();

export default function TabFunction () {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
        >
          <Tab.Screen
            name="Home"
            component={CalendarStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: 'red',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Social"
            component={SocialScreen}
            options={{
              tabBarLabel: 'Social',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Stats"
            component={StatsScreen}
            options={{
              tabBarLabel: 'Stats',
              tabBarColor: 'blue',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="QuestArchieve"
            component={QuestArchieveScreen}
            options={{
              tabBarLabel: 'Quest & Archieve',
              tabBarColor: 'black',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Pet"
            component={PetScreen}
            options={{
              tabBarLabel: 'Pet',
              tabBarColor: 'pink',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    )
    
}

// const DetailStackScreen = ({navigation}) => {
//   return (
//     <DetailStack.Navigator>
//       <DetailStack.Screen 
//         name="Detail" 
//         component={Detail} 
//         options={{
//           title:'Detail',
//           headerLeft: () => (
//             <Icon.Button 
//               name="menu" 
//               size={20} 
//               backgroundColor="#fff"
//               color="black"
//               onPress={() => navigation.openDrawer()}
//             />
//           )
//         }}
//       />
//     </DetailStack.Navigator>
//   )
// }