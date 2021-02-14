import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, Button, FlatList, StyleSheet } from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux'

// Component
import NowEvent from './event/EventNotifications'

export default function NotificationScreen({navigation}) {
  const dispatch = useDispatch()
  const allNotifications = useSelector(state => state.data.notifications)
  const [update, setUpdate] = useState(true)
  
  navigation.addListener('focus', () => {
    setUpdate(!update)
    allNotifications.map((noti) => {
      if(noti.read === false) {
        console.log(noti.docId)
      }
      
    })
    console.log('**********************')
    console.log(allNotifications.length)
});

  const Item = ({data}) => {
    let allEventData = data
      
    return (
        <NowEvent allEventData={allEventData}/>
    )
};
  

  const renderItem = (allNotifications) => (
    <Item data={allNotifications} />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <FlatList
        data={allNotifications}
        renderItem={renderItem}
        keyExtractor={item => item.docId}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});