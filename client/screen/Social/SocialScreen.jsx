import React from 'react';
import { SafeAreaView, Text, View, Button, FlatList, StyleSheet } from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux'
import {addNotifications} from '../../redux/action/dataAction'

export default function SocialScreen({navigation}) {
  const dispatch = useDispatch()
  const noti = useSelector(state => state.data.notifications)

  const addNoti = () => {
    dispatch(addNotifications("event", {status : "now", time : "20 minute"}))
  }

  const Item = ({data}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{data.item.docId}</Text>
    </View>
  );
  

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
      <Text>Social Screen</Text>
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