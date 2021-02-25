import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { useRoute }  from '@react-navigation/native'

export default function achievementDetail({navigation}) {
    const route = useRoute() 
    const { achievementAction, achievementDetail, achievementCoin, achievementExp, achievementName, achievementRequirement, achievementType, docId } = route.params
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Text>{achievementName}</Text>
        </SafeAreaView>
      );
}