import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TextInput,
  TouchableRipple
} from 'react-native-paper'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Component
import Archeivement from './Archeivement';
import AddArchievementModal from './AddArchievementModal'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getAdminAchievementList} from '../../../redux/action/adminAction'

export default function QuestScreen (){
    const [modalOpenAdd, setModalOpenAdd] = useState(false)
    const achievementList = useSelector(state => state.admin.achievementList)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAdminAchievementList())
    },[modalOpenAdd])

    const Item = ({data}) => {
      let achievementData = data
        
      return (
          <Archeivement achievementData={achievementData}/>
      )
    };
  
    const renderItem = (achievementData) => (
      <Item data={achievementData} />
    );
    
    return (
        <View style={{marginBottom:60}}>
          <View style={styles.addButton}>
            <Button
              icon={
                <Icon
                  name="plus"
                  size={20}
                  color='white'
                />
              }
              title='Add Archeivement'
              buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
              onPress={() => setModalOpenAdd(true)}/>
              <Modal transparent={true} visible={modalOpenAdd}>
                <AddArchievementModal setModalOpenAdd={setModalOpenAdd}/>
              </Modal>
          </View>
          <FlatList
            data={achievementList}
            renderItem={renderItem}
            keyExtractor={item => item.docId}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    addButton: {
      margin: 15,
      color: 'white',
    }
  });