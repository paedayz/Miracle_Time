import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

// Redux
import {useSelector} from 'react-redux'

export default function SocialScreen({navigation}) {
    const friendRequest = useSelector(state => state.friend.request)
    console.log(friendRequest)
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Text>Friend Request</Text>
        </SafeAreaView>
      );
}