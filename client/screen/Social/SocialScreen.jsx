import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux'
import {addNotifications} from '../../redux/action/dataAction'

export default function SocialScreen({navigation}) {
  const dispatch = useDispatch()
  const noti = useSelector(state => state.data.notifications)
  console.log(noti)

  const addNoti = () => {
    dispatch(addNotifications("event", {status : "now", time : "20 minute"}))
  }
      return (
        <SafeAreaView style={{ flex: 1 }}>
          
        <View>
            <Button title="add" onPress={() => addNoti()}/>
        </View>
          <Text>Social Screen</Text>
        </SafeAreaView>
      );
}