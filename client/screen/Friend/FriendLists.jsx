import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

// Redux
import {useSelector} from 'react-redux'

export default function SocialScreen({navigation}) {
    const friendList = useSelector(state => state.friend.list)
    console.log(friendList)
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Text>Friend List</Text>
        </SafeAreaView>
      );
}