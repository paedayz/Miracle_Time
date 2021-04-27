import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import config from './config'
import firebase from 'firebase'

// Redux
import store from './redux/store'
import {Provider} from 'react-redux'

// Screen
import IndexScreen from './screen'

// Component
import RefreshGetData from './screen/RefreshGetData'


let axiosDefaults = require("axios/lib/defaults");
axiosDefaults.baseURL =`https://miracle-time.herokuapp.com`;

const Stack = createStackNavigator()

if (firebase.apps.length === 0) {
  firebase.initializeApp(config.firebaseConfig)
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <IndexScreen/>
          <RefreshGetData/>
      </NavigationContainer>
    </Provider>
  );
}
