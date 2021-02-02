import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

export default function NowEvent({navigation, allEventData}) {

  const {data, createdAt, docId, read, toggle, type} = allEventData.item
  const {eventData, time, status} = data

  if(status === "now") {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.item}>
          <Text style={styles.title}>It is time to {data.eventData.event} now !</Text>
        </View>
      </SafeAreaView>
    )
  }
    
      
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#ABDBFD',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    },
  });