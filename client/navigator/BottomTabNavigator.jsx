import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

// Screen
import SocialScreen from '../screen/Social/SocialScreen'
import StatsScreen from '../screen/Stats/StatsScreen'
import QuestArchieveScreen from '../screen/Quest_Archieve/QuestArchieveScreen'
import PetScreen from '../screen/Pet/PetScreen'

// Stack Screen
import CalendarStackScreen from '../screen/Calendar/CalendarStack'
import SocialStackScreen from '../screen/Social/SocialStack'
import StatsStackScreen from '../screen/Stats/StatsStack'
import QuestArchieveStackScreen from '../screen/Quest_Archieve/QuestArchieveStack'
import PetStackScreen from '../screen/Pet/PetStack'

const Tab = createMaterialBottomTabNavigator();

export default function TabFunction () {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
        >
          <Tab.Screen
            name="Calendar"
            component={CalendarStackScreen}
            options={{
              tabBarLabel: 'Calendar',
              tabBarColor: 'red',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="calendar" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Social"
            component={SocialStackScreen}
            options={{
              tabBarLabel: 'Social',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="earth" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Stats"
            component={StatsStackScreen}
            options={{
              tabBarLabel: 'Stats',
              tabBarColor: 'blue',
              tabBarIcon: ({ color }) => (
                <Octicons name="graph" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="QuestArchieve"
            component={QuestArchieveStackScreen}
            options={{
              tabBarLabel: 'Q & A',
              tabBarColor: 'black',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="medal-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Pet"
            component={PetStackScreen}
            options={{
              tabBarLabel: 'Pet',
              tabBarColor: 'pink',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="dog" color={color} size={26} />
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