import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, Button, FlatList, StyleSheet } from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux'
import {readNotifications} from '../../redux/action/dataAction'

// Component
import NowEvent from './event/EventNotifications'

export default function NotificationScreen({navigation}) {
  const dispatch = useDispatch()
  const allNotifications = useSelector(state => state.data.notifications)
  const [update, setUpdate] = useState(true)

  let sortNoti = allNotifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  
  navigation.addListener('focus', () => {
    setUpdate(!update)
    let notiNotRead = []
    sortNoti.map((noti) => {
      if(noti.read === false) {
        notiNotRead.push(noti.docId)
      }
      
    })
    dispatch(readNotifications(notiNotRead))
});

  const Item = ({data}) => {
    let allEventData = data
      
    return (
        <NowEvent allEventData={allEventData}/>
    )
};
  

  const renderItem = (sortNoti) => (
    <Item data={sortNoti} />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <FlatList
        data={sortNoti}
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