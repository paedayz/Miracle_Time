import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Component
import NowEventUnToggle from './NowEventUnToggle'
import NowEventisToggle from './NowEventisToggle'
import NowEventnoneToggle from './NowEventnoneToggle'
import WillEventUnToggle from './WillEventUnToggle'
import WillEventisToggle from './WillEventisToggle'
import EndEventUnToggle from './EndEventUnToggle'
import EndEventisToggle from './EndEventisToggle'

export default function NowEvent({allEventData}) {

  const {data, createdAt, read, toggle, type, docId} = allEventData.item
  const {eventData, time, status} = data
  const {catagory, date, detail, end, event, key, rank, start} = eventData

  const navigation = useNavigation()

  if(status === "now" && toggle == false) {
    return(
      <NowEventUnToggle data={data} eventData={eventData} createdAt={createdAt} docId={docId}/>
    )
  } else if(status === "now" && toggle == true) {
    return (
      <NowEventisToggle data={data} eventData={eventData} createdAt={createdAt} docId={docId}/>
    )
  } else if(status === "will" && toggle == false) {
    return (
      <WillEventUnToggle data={data} eventData={eventData} createdAt={createdAt} docId={docId}/>
    )
  } else if(status === "will" && toggle == true) {
    return (
      <WillEventisToggle data={data} eventData={eventData} createdAt={createdAt} docId={docId}/>
    )
  } else if(status === "end" && toggle == false) {
    return (
      <EndEventUnToggle data={data} eventData={eventData} createdAt={createdAt} docId={docId}/>
    )
  } else if(status === "end" && toggle == true) {
    return (
      <EndEventisToggle data={data} eventData={eventData} createdAt={createdAt} docId={docId}/>
    )
  }

  return (
    <NowEventnoneToggle data={data} eventData={eventData} createdAt={createdAt} docId={docId}/>
  )
    
      
}

