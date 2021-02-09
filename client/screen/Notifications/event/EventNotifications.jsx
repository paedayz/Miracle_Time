import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function NowEvent({allEventData}) {

  const {data, createdAt, docId, read, toggle, type} = allEventData.item
  const {eventData, time, status} = data
  const {catagory, date, detail, end, event, key, rank, start} = eventData

  const navigation = useNavigation()

  if(status === "now") {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => {navigation.navigate('TodayListDetail', eventData) }}>
          <View style={styles.item}>
            <Image 
              style={{width: 60, height: 60, borderRadius: 60/ 2}} 
              source={{
                uri:'https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png'
              }}
            />
            <View style={styles.text}>
              <Text style={styles.title}>It is time to {data.eventData.event} now !</Text>
            </View>
          </View>
        </TouchableOpacity>
        
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
      flexDirection: 'row'
    },
    title: {
      fontSize: 20,
    },
    text : {
      marginLeft: 15
    }
  });