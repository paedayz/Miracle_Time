import React, {useEffect} from 'react';
import { SafeAreaView, Text, View, Button, FlatList } from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getFriendRequest} from '../../redux/action/friendAction'

// Component
import RequestList from './RequestList'

export default function FriendRequest({navigation, setIsList}) {
    const dispatch = useDispatch()
    
    const friendList = useSelector(state => state.friend.request)

    useEffect(() => {
        dispatch(getFriendRequest())
    },[])

    const Item = ({data}) => {
        let allEventData = data
        console.log('friend request')
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