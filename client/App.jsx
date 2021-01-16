import React from 'react';
import { SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import config from './config'

// Redux
import store from './redux/store'
import {Provider} from 'react-redux'

// Screen
import IndexScreen from './screen'

let axiosDefaults = require("axios/lib/defaults");
axiosDefaults.baseURL =`http://${config.IPAddress}:3003`;

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView>
          <IndexScreen/>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
