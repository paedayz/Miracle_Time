import React, {useEffect} from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Component
import Quest from './Quest'

// Redux
import {getUserQuest} from '../../../redux/action/dataAction'
import {useDispatch, useSelector} from 'react-redux'

export default function QuestBuff ({navigation}) {
    const questList = useSelector(state => state.data.questList)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getUserQuest())
    },[])
    
    const QuestItem = ({data}) => {
        let questData = data
          
        return (
            <Quest questData={questData.item}/>
        )
      };
    
      const renderQuestItem = (questList) => (
        <QuestItem data={questList} />
      );

    return (
        <FlatList
            data={questList}
            renderItem={renderQuestItem}
            keyExtractor={item => item.docId}
          />
    )
}