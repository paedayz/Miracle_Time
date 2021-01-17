import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

// Component
import Calendar from './Calendar'

export default function CalendarScreen({navigation}) {

  const mockData = [
    {date:'2021-01-17', name: 'one', time: '13.00-14.00'},
    {date:'2021-01-17', name: 'two', time: '20.00-21.00'},
    {date:'2021-01-18', name: 'ไปกินข้าว', time: '20.00-21.00'}
  ]
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Calendar Test={mockData} navigation={navigation} />
        </SafeAreaView>
      );
}