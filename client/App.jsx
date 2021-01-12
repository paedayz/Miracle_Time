import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import config from './config'

// Redux
import store from './redux/store'
import {Provider} from 'react-redux'

// Screen
import Home from './screen/Home'
import Detail from './screen/Detail'

let axiosDefaults = require("axios/lib/defaults");
axiosDefaults.baseURL =`http://${config.IPAddress}:3003`;

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Details' component={Detail} options={{ title: 'Detail Page' }}/>
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
