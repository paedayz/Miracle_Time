import React, {useEffect} from 'react';
import { SafeAreaView, Text, View, Button, FlatList } from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getFriendList} from '../../redux/action/friendAction'

// Component
import ShowList from './ShowList'

export default function FriendList({navigation}) {
    const friendList = useSelector(state => state.friend.list)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFriendList())
    },[])

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