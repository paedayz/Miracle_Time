import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { useRoute }  from '@react-navigation/native'

export default function questDetail({navigation}) {
    const route = useRoute() 
    const { questAction, questDetail, questCoin, questExp, questName, questRequirement, questType, docId } = route.params
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Text>{questName}</Text>
        </SafeAreaView>
      );
}