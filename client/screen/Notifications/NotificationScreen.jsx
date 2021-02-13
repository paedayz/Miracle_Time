import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, Button, FlatList, StyleSheet } from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux'
import {addNotifications} from '../../redux/action/dataAction'

// Component
import NowEvent from './event/EventNotifications'

export default function NotificationScreen({navigation}) {
  const dispatch = useDispatch()
  const noti = useSelector(state => state.data.notifications)
  const [update, setUpdate] = useState(true)
  const [notiData, setNotiData] = useState(
    [
      {
      "createdAt": "2/9/2021, 6:25:51 PM",
      "data":  {
        "eventData":  {
          "catagory": "ทั่วไป",
          "date": "2021-02-25",
          "detail": "with family",
          "end": "15:20",
          "event": "Eat lunch",
          "key": "0.5724287889047687",
          "rank": "3",
          "start": "20:52",
        },
        "status": "will",
        "time": "20 minute",
      },
      "docId": "qFYl7HhTABsSaTPylUUo",
      "read": false,
      "toggle": false,
      "type": "event",
    },
    {
      "createdAt": "2/4/2021, 6:25:51 PM",
      "data":  {
        "eventData":  {
          "catagory": "ทั่วไป",
          "date": "2021-02-25",
          "detail": "with family",
          "end": "15:20",
          "event": "Run for Mom",
          "key": "0.57242878890547687",
          "rank": "3",
          "start": "20:52",
        },
        "status": "now",
        "time": "5 minute",
      },
      "docId": "qFYl7HhTABsSaTPy5lUUo",
      "read": false,
      "toggle": true,
      "type": "event",
    },
    {
      "createdAt": "2/9/2021, 6:25:51 PM",
      "data":  {
        "eventData":  {
          "catagory": "ทั่วไป",
          "date": "2021-02-25",
          "detail": "with family",
          "end": "15:20",
          "event": "Swimmimg",
          "key": "0.572428789890547687",
          "rank": "3",
          "start": "20:52",
        },
        "status": "now",
        "time": "5 minute",
      },
      "docId": "qFYl7HhTzABsSaTPy5lUUo",
      "read": false,
      "toggle": false,
      "type": "event",
    },{
      "createdAt": "2/3/2021, 6:25:51 PM",
      "data":  {
        "eventData":  {
          "catagory": "ทั่วไป",
          "date": "2021-02-25",
          "detail": "with family",
          "end": "15:20",
          "event": "Eat lunch",
          "key": "0.57242878899047687",
          "rank": "3",
          "start": "20:52",
        },
        "status": "will",
        "time": "20 minute",
      },
      "docId": "qFYl7HhTABdsSaTPylUUo",
      "read": false,
      "toggle": true,
      "type": "event",
    },{
      "createdAt": "2/2/2021, 6:25:51 PM",
      "data":  {
        "eventData":  {
          "catagory": "ทั่วไป",
          "date": "2021-02-25",
          "detail": "with family",
          "end": "15:20",
          "event": "Eat lunch",
          "key": "0.57242817889047687",
          "rank": "3",
          "start": "20:52",
        },
        "status": "end",
        "time": "20 minute",
      },
      "docId": "qFYl7HhkTABsSaTPylUUo",
      "read": false,
      "toggle": false,
      "type": "event",
    },{
      "createdAt": "2/8/2021, 6:25:51 PM",
      "data":  {
        "eventData":  {
          "catagory": "ทั่วไป",
          "date": "2021-02-25",
          "detail": "with family",
          "end": "15:20",
          "event": "Eat lunch",
          "key": "0.57242878896047687",
          "rank": "3",
          "start": "20:52",
        },
        "status": "end",
        "time": "20 minute",
      },
      "docId": "qFYl7HhTxABsSaTPylUUo",
      "read": false,
      "toggle": true,
      "type": "event",
    },{
      "createdAt": "2/1/2021, 6:25:51 PM",
      "data":  {
        "eventData":  {
          "catagory": "ทั่วไป",
          "date": "2021-02-25",
          "detail": "with family",
          "end": "15:20",
          "event": "Eat lunch",
          "key": "0.572428788296047687",
          "rank": "3",
          "start": "20:52",
        },
        "status": "gg",
        "time": "20 minute",
      },
      "docId": "qFYl7HhTxrABsSaTPylUUo",
      "read": false,
      "toggle": true,
      "type": "event",
    },
  ]
  )
  
  useEffect(() => {
    navigation.addListener('focus', () => {
        setUpdate(!update)
    });

  }, [update]);

  const addNoti = () => {
    dispatch(addNotifications("event", {status : "now", time : "20 minute", eventData: {
        date: '2021-02-25',
        detail: 'with family',
        event: 'Eat lunch',
        key: '0.5724287889047687',
        rank: '3',
        start: '20:52',
        end: '15:20',
        catagory: 'ทั่วไป',
    }}))
  }

  const Item = ({data}) => {
    let allEventData = data
      
    return (
        <NowEvent allEventData={allEventData}/>
    )
};
  

  const renderItem = (noti) => (
    <Item data={noti} />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
    <View>
        <Button title="add" onPress={() => addNoti()}/>
    </View>
    <FlatList
        data={notiData}
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