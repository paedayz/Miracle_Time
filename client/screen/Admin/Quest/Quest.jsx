import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
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
import EditQuestModal from './EditQuestModal'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {deleteQuest} from '../../../redux/action/adminAction'

export default function Quest ({questData}) {
    const [modalOpenEdit, setModalOpenEdit] = useState(false)
    const [modalOpenDelete, setModalOpenDelete] = useState(false)
    const {questDetail, questName, questCoin, questExp, docId} = questData.item

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const onDeleteSubmit = () => {
      dispatch(deleteQuest(docId))
      setModalOpenDelete(false)
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.questBoxWrapper} onPress={() => navigation.navigate('adminQuestDetail', questData.item)}>
          <View style={styles.demo}>
            <Icon 
              name='trophy'
              size={50}
              color='gold'/>
          </View>
          <View style={styles.questBox}>
            <Title style={styles.headerTitle}>{questName}</Title>
            <View style={{maxWidth: 200}}>
              <Text>{questDetail}</Text>
              <View style={styles.textCoinAndExp}>
                <Text>Exp: {questExp} </Text>
                <Text>Coins: {questCoin}</Text>
              </View>
            </View>
            
          </View>
          <View style={styles.editButton}>
            <Button
              buttonStyle = {{backgroundColor: '#8C92AC', width: 70, height: 30, borderRadius: 10}}
              title='Edit'
              onPress={() => setModalOpenEdit(true)}/>
            <Modal transparent={true} visible={modalOpenEdit}>
              <EditQuestModal setModalOpenEdit={setModalOpenEdit} questData={questData.item} />
            </Modal>
          </View>
          <View style={styles.deleteButton}>
            <Button
              buttonStyle = {{backgroundColor: '#FC7C7C', width: 70, height: 30, borderRadius: 10}}
              title='Delete'
              onPress={() => setModalOpenDelete(true)}/>
              <Modal transparent={true} visible={modalOpenDelete}>
                <View style={styles.deleteModal}>
                  <View style={styles.questBox}>
                    <Title style={styles.headerTitle}>Are you sure to delete quest?</Title>
                    <View style={styles.deleteBox}>
                        <View style={{margin: 5, width: 70, height: 30}}>
                        <Button 
                            title="Yes"
                            buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
                            onPress={() => onDeleteSubmit()}
                        />
                        </View>
                        <View style={{margin: 5, width: 70, height: 30}}>
                        <Button 
                            title="No"
                            buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
                            onPress={() => setModalOpenDelete(false)}
                        />
                        </View>
                    </View>
                  </View>
                </View>
              </Modal>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
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
    },
    questBox: {
      justifyContent: 'flex-start',
      marginLeft: 10
    },
    textCoinAndExp: {
      flexDirection: 'row',
      position: 'absolute',
      top: 40
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