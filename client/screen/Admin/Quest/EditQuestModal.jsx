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
import {addQuest, editQuest} from '../../../redux/action/adminAction'

export default function EditQuestModal({setModalOpenEdit, questData}) {
  const [questName, setQuestName] = useState(questData.questName)
  const [questDetail, setqQuestDetail] = useState(questData.questDetail)
  const [questType, setQuestType] = useState()
  const [questAction, setQuestAction] = useState()
  const [questRequirement, setQuestRequirement] = useState(questData.questRequirement.toString())
  const [questCoin, setQuestCoin] = useState(questData.questCoin.toString())
  const [questExp, setQuestExp] = useState(questData.questExp.toString())

  const dispatch = useDispatch()

  const onSubmit = () => {
    let updateQuestData = {
      questName : questName,
      questDetail : questDetail,
      questRequirement : parseInt(questRequirement, 10),
      questCoin : parseInt(questCoin, 10),
      questExp : parseInt(questExp, 10)
    }

    let questId = questData.docId

    dispatch(editQuest(updateQuestData, questId))
    setModalOpenEdit(false)
  }
    return (
        <ScrollView style={styles.modal}>
              <Icon 
                      name="close"
                      size={20} 
                      style={styles.closeIcon}
                      onPress={() => setModalOpenEdit(false)}
                  />
                <View style={styles.questBox}>
                  <Title style={styles.headerTitle}>Edit Quest</Title>
                  <Text>Quest name</Text>
                  <TextInput style={styles.input}
                    placeholder="Please enter your text"
                    value={questName}
                    onChangeText={data => setQuestName(data)}
                  />
                  <Text>Quest detail</Text>
                  <TextInput style={styles.input}
                    placeholder="Please enter your text"
                    value={questDetail}
                    onChangeText={data => setqQuestDetail(data)}
                  />
                  <Text>Quest EXP</Text>
                  <TextInput style={styles.input}
                    placeholder="Please enter your text"
                    value={questExp}
                    keyboardType="numeric"
                    onChangeText={data => setQuestExp(data)}
                  />
                  <Text>Quest coin</Text>
                  <TextInput style={styles.input}
                    placeholder="Please enter your text"
                    value={questCoin}
                    keyboardType="numeric"
                    onChangeText={data => setQuestCoin(data)}
                  />
                  <Text>Quest Requirement</Text>
                  <TextInput style={styles.input}
                    placeholder="Please enter your text"
                    value={questRequirement}
                    keyboardType="numeric"
                    onChangeText={data => setQuestRequirement(data)}
                  />
                  <View style={styles.modalButton}>
                    <Button 
                        onPress={() => onSubmit()}
                        buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
                        title="Save"
                    />
                  </View>
                </View>
              </ScrollView>
    )
}

const styles = StyleSheet.create({
    closeIcon:
    {
        color: 'red',
        marginLeft: 345
    },
    modalButton: 
    {
      marginHorizontal: 80,
      marginTop: 15,
      marginBottom: 50,
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
    questBox: {
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    modal:
    {
      backgroundColor: '#dddddd',
        marginTop: 55,
        padding: 25
    },
  });