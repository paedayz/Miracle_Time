import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

export default function CalendarScreen({navigation}) {
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Text>Calendar Screen</Text>
          <Button title="click" onPress={() => console.log('wowwza')} />
        </SafeAreaView>
      );
}