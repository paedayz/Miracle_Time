import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TextInput,
  TouchableRipple,
} from 'react-native-paper'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Redux
import { useDispatch } from 'react-redux'
import {addAchievement, editAchievement} from '../../../redux/action/adminAction'

export default function EditachievementModal({setModalOpenEdit, achievementData}) {
  const [achievementName, setAchievementName] = useState(achievementData.achievementName)
  const [achievementDetail, setAchievementDetail] = useState(achievementData.achievementDetail)
  const [achievementAction, setAchievementAction] = useState()
  const [achievementRequirement, setAchievementRequirement] = useState(achievementData.achievementRequirement.toString())

  const dispatch = useDispatch()

  const onSubmit = () => {
    let updateAchievementData = {
      achievementName : achievementName,
      achievementDetail : achievementDetail,
      achievementRequirement : parseInt(achievementRequirement, 10),
    }

    let achievementId = achievementData.docId

    dispatch(editAchievement(updateAchievementData, achievementId))
    setModalOpenEdit(false)
  }
    return (
        <View style={styles.modal}>
              <Icon 
                      name="close"
                      size={20} 
                      style={styles.closeIcon}
                      onPress={() => setModalOpenEdit(false)}
                  />
                <KeyboardAvoidingView behavior={'height'} style={{flex:1}}> 
                <View style={styles.achievementBox}>
                  <Title style={styles.headerTitle}>Edit Archeivement</Title>
                  <Text>Archeivement name</Text>
                  <TextInput style={styles.input}
                    placeholder="Please enter your text"
                  />
                  <Text>Archeivement detail</Text>
                  <TextInput style={styles.input}
                    placeholder="Please enter your text"
                  />
                  <View style={styles.modalButton}>
                    <Button 
                        buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
                        title="Save"
                    />
                  </View>
                </View>
                </KeyboardAvoidingView> 
              </View>
    )
}

const styles = StyleSheet.create({
    closeIcon:
    {
        color: 'red',
        marginLeft: 265
    },
    modalButton: 
    {
      marginHorizontal: 80,
      marginVertical: 0,
      justifyContent: 'center'
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
    achievementBox: {
        justifyContent: 'flex-start',
        marginVertical: 5,
        marginLeft: 10
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
  });