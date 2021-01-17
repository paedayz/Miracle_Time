import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

// Component
import Calendar from './Calendar'

export default function CalendarScreen({navigation}) {
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Calendar Test={[{date:'2021-01-17', name: 'one'},{date:'2021-01-17', name: 'two'},{date:'2021-01-18', name: '2021-01-18'}]} navigation={navigation} />
        </SafeAreaView>
      );
}