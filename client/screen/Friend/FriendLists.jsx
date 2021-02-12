import React from 'react';
import { SafeAreaView, Text, View, Button, FlatList } from 'react-native';

// Redux
import {useSelector} from 'react-redux'

// Component
import ShowList from './ShowList'

export default function FriendList({navigation}) {
    const friendList = useSelector(state => state.friend.list)

    const Item = ({data}) => {
        return (
            <ShowList data={data.item} />
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