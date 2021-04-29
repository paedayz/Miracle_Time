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

// Redux
import {useDispatch} from 'react-redux'
import {deleteAchievement} from '../../../redux/action/adminAction'

// Component
import EditAchievementModal from './EditAchievementModal'

export default function Acheivement ({achievementData}) {
    const [modalOpenEdit, setModalOpenEdit] = useState(false)
    const [modalOpenDelete, setModalOpenDelete] = useState(false)
    const {achievementDetail, achievementName, docId} = achievementData.item

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const onDeleteSubmit = () => {
      dispatch(deleteAchievement(docId))
      setModalOpenDelete(false)
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('adminAchievementDetail', achievementData.item)}>
        <View style={styles.questBoxWrapper}>
          <View style={styles.demo}>
            <Icon 
              name='medal'
              size={50}
              color='gold'/>
          </View>
          <View style={styles.questBox}>
            <Title style={styles.headerTitle}>{achievementName}</Title>
            <View style={{maxWidth: 160}}>
              <Text>{achievementDetail}</Text>
            </View>
          </View>
          <View style={styles.editButton}>
            <Button
              buttonStyle = {{backgroundColor: '#8C92AC', width: 70, height: 30, borderRadius: 10}}
              title='Edit'
              onPress={() => setModalOpenEdit(true)}/>
            <Modal transparent={true} visible={modalOpenEdit}>
              <EditAchievementModal setModalOpenEdit={setModalOpenEdit} achievementData={achievementData.item}/>
            </Modal>
          </View>
          <View style={styles.deleteButton}>
            <Button
              buttonStyle = {{backgroundColor: '#FC7C7C', width: 70, height: 30, borderRadius: 10}}
              title='Delete'
              onPress={() => setModalOpenDelete(true)}/>
              
          </View>
        </View>
        </TouchableOpacity>

        <Modal transparent={true} visible={modalOpenDelete}>
              <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', width:"100%", height: "600%", position:"absolute"}}></View>
                <View style={styles.deleteModal}>
                  <View style={styles.questBox}>
                    <Title style={styles.headerTitle}>Are you sure to delete archeivement?</Title>
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
      left: '75%'
    },
    deleteButton: {
      justifyContent: 'center',
      position: 'absolute',
      top: 52,
      left: '75%'
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
      marginTop: '50%',
      backgroundColor: '#dddddd',
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