import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import { useRoute }  from '@react-navigation/native'

export default function achievementDetail({navigation}) {
    const route = useRoute() 
    const { achievementAction, achievementDetail, achievementCoin, achievementExp, achievementName, achievementRequirement, achievementType, docId } = route.params
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.archeivementName}>{achievementName}  </Text>
            <Text style={styles.caption}>#{docId}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Type: </Text>
            <Text style={styles.detail}>{achievementType}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Detail: </Text>
            <Text style={styles.detail}>{achievementDetail}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Action: </Text>
            <Text style={styles.detail}>{achievementAction}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Requirement amount: </Text>
            <Text style={styles.detail}>{achievementRequirement}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Exp: </Text>
            <Text style={styles.detail}>{achievementExp}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Coin: </Text>
            <Text style={styles.detail}>{achievementCoin}</Text>
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
  archeivementName: {
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