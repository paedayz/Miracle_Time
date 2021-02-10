import React from 'react';
import { SafeAreaView, Text, View, Button, FlatList } from 'react-native';

// Redux
import {useSelector} from 'react-redux'

// Component
import RequestList from './RequestList'

export default function FriendRequest({navigation}) {
    const friendList = useSelector(state => state.friend.request)
    console.log(friendList)

    const Item = ({data}) => {
        let allEventData = data
          console.log(data.item.nickname)
        return (
            <RequestList data={data.item} />
            )
    };
      
    const renderItem = (noti) => (
        <Item data={noti} />
    );

    return (
        <View>
            <FlatList
                data={friendList}
                renderItem={renderItem}
                keyExtractor={item => item.userId}
            />
        </View> 
    );
}