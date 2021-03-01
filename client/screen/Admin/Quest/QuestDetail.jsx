import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import { useRoute }  from '@react-navigation/native'

export default function questDetail({navigation}) {
    const route = useRoute() 
    const { questAction, questDetail, questCoin, questExp, questName, questRequirement, questType, docId } = route.params
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.questName}>{questName}  </Text>
            <Text style={styles.caption}>#{docId}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Type: </Text>
            <Text style={styles.detail}>{questType}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Detail: </Text>
            <Text style={styles.detail}>{questDetail}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Action: </Text>
            <Text style={styles.detail}>{questAction}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Requirement amount: </Text>
            <Text style={styles.detail}>{questRequirement}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Exp: </Text>
            <Text style={styles.detail}>{questExp}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Coin: </Text>
            <Text style={styles.detail}>{questCoin}</Text>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  row: {
    flexDirection: 'row',
  },
  questName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 16,
    color: 'grey',
    marginTop: 9
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 14,
    marginTop: 4
  },
});