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
        data={noti}
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