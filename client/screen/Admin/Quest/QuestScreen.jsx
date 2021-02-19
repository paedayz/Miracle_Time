import React, { useState } from 'react';
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
import {useSelector} from 'react-redux'

export default function QuestScreen (){
    const [modalOpenAdd, setModalOpenAdd] = useState(false)
    const questList = useSelector(state => state.admin.questList)
    console.log(questList)

    const Item = ({data}) => {
      let questData = data
        
      return (
          <Quest questData={questData}/>
      )
    };
    
  
    const renderItem = (sortNoti) => (
      <Item data={sortNoti} />
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
              title='New Quest'
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
    container: {
      flex: 1,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderColor: '#dddddd',
      borderWidth: 1,
      flexDirection: 'row',
      height: 50,
    },
    headerBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    questBoxWrapper: {
      margin: 5,
      borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      height: 100,
      backgroundColor: '#dddddd'
    },
    questBox: {
      justifyContent: 'flex-start',
      marginVertical: 5,
      marginLeft: 10
    },
    deleteBox: {
      justifyContent: 'center',
      marginVertical: 10,
      flexDirection: 'row'
    },
    addButton: {
      margin: 15,
      color: 'white'
    },
    editButton: {
      justifyContent: 'center',
      position: 'absolute',
      top: 18,
      left: 300
    },
    deleteButton: {
      justifyContent: 'center',
      position: 'absolute',
      top: 52,
      left: 300
    },
    modalButton: 
    {
      marginHorizontal: 80,
      marginVertical: 15,
      justifyContent: 'center'
    },
    demo: {
      justifyContent: 'center',
      padding: 5,
    },
    modal:
    {
      backgroundColor: '#dddddd',
      marginHorizontal: 25,
      marginTop: 60,
      padding: 30,
      borderRadius: 10,
      height: 585
    },
    deleteModal:
    {
      backgroundColor: '#dddddd',
      marginVertical: 300,
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    closeIcon:
    {
      color: 'red',
      marginLeft: 265
    },
    input: 
    {
        marginBottom: 7,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#f2f2f2',
        height: 40
    },
  });