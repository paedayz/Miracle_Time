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
import AddQuestModal from './AddQuestModal';
import Quest from './Quest'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getAdminQuestList} from '../../../redux/action/adminAction'

export default function QuestScreen (){
    const [modalOpenAdd, setModalOpenAdd] = useState(false)
    const questList = useSelector(state => state.admin.questList)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAdminQuestList())
    },[modalOpenAdd])

    const Item = ({data}) => {
      let questData = data
        
      return (
          <Quest questData={questData}/>
      )
    };
  
    const renderItem = (questList) => (
      <Item data={questList} />
    );

    return (
        <View>
          <View style={styles.addButton}>
            <Button
              icon={
                <Icon
                  name="plus"
                  size={20}
                  color='white'
                />
              }
              title='Add Quest'
              buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
              onPress={() => setModalOpenAdd(true)}/>
              <Modal transparent={true} visible={modalOpenAdd} >
                <AddQuestModal setModalOpenAdd={setModalOpenAdd} />
              </Modal>
          </View>
          <FlatList
            data={questList}
            renderItem={renderItem}
            keyExtractor={item => item.docId}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    addButton: {
      margin: 15,
      color: 'white'
    }
  });