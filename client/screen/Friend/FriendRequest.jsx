import React, {useEffect} from 'react';
import { SafeAreaView, Text, View, Button, FlatList } from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getFriendRequest} from '../../redux/action/friendAction'

// Component
import RequestList from './RequestList'

export default function FriendRequest({navigation, setIsList}) {
    const dispatch = useDispatch()
    
    const friendRequest = useSelector(state => state.friend.request)

    const sortFriendRequest = friendRequest.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    useEffect(() => {
        dispatch(getFriendRequest())
    },[])

    const Item = ({data}) => {
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
                data={sortFriendRequest}
                renderItem={renderItem}
                keyExtractor={item => item.userId}
            />
        </View> 
    );
}