import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

// Component
import Calendar from './Calendar'

// Redux
import {useSelector} from "react-redux"

export default function CalendarScreen({navigation}) {
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Calendar navigation={navigation}/>
        </SafeAreaView>
      );
}