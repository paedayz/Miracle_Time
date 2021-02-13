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