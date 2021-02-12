import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Component
import NowEventUnToggle from './NowEventUnToggle'
import NowEventisToggle from './NowEventisToggle'
import NowEventnoneToggle from './NowEventnoneToggle'

export default function NowEvent({allEventData}) {

  const {data, createdAt, docId, read, toggle, type} = allEventData.item
  const {eventData, time, status} = data
  const {catagory, date, detail, end, event, key, rank, start} = eventData

  const navigation = useNavigation()

  if(status === "now" && toggle == false) {
    return(
      <NowEventUnToggle data={data} eventData={eventData}/>
    )
  } else if(status === "now" && toggle == true) {
    return (
      <NowEventisToggle data={data} eventData={eventData}/>
    )
  }

  return (
    <NowEventnoneToggle data={data} eventData={eventData}/>
  )
    
      
}

