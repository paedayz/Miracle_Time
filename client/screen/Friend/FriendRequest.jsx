import React from 'react';
import { SafeAreaView, Text, View, Button, FlatList } from 'react-native';

// Redux
import {useSelector} from 'react-redux'

// Component
import RequestList from './RequestList'

export default function FriendRequest({navigation, setIsList}) {
    const friendList = useSelector(state => state.friend.request)

    const Item = ({data}) => {
        let allEventData = data
          console.log(data.item.docId)
        return (
            <RequestList data={data.item} setIsList={setIsList} />
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