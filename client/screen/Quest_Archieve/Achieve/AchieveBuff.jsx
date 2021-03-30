import React, {useEffect} from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Component
import Achieve from './Achieve'

// Redux
import {useDispatch, useSelector} from 'react-redux'

export default function AchieveBuff ({navigation}) {
    const achievementList = useSelector(state => state.data.achievementList)
    
    const AchievementItem = ({data}) => {
        let achievementData = data
          
        return (
            <Achieve achievementData={achievementData.item}/>
        )
      };
    
      const renderQuestItem = (achievementList) => (
        <AchievementItem data={achievementList} />
      );

    return (
        <FlatList
            data={achievementList}
            renderItem={renderQuestItem}
            keyExtractor={item => item.docId}
          />
    )
}