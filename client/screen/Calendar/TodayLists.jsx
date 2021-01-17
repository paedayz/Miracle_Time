import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

export default function CalendarScreen({route, navigation}) {
    const {date} = route.params
      return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>{date}</Text>
        </SafeAreaView>
      );
}