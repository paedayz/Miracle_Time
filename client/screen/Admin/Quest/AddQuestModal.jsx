import React, { useState } from 'react';

import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal, ScrollView ,KeyboardAvoidingView} from 'react-native';

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
import { useDispatch } from 'react-redux'
import {addQuest} from '../../../redux/action/adminAction'

export default function AddQuestModal({setModalOpenAdd}) {
  const [questName, setQuestName] = useState(null)
  const [questDetail, setqQuestDetail] = useState(null)
  const [questType, setQuestType] = useState(null)
  const [questAction, setQuestAction] = useState(null)
  const [questRequirement, setQuestRequirement] = useState(null)
  const [questCoin, setQuestCoin] = useState(null)
  const [questExp, setQuestExp] = useState(null)

  const dispatch = useDispatch()

  const onSubmit = () => {
    if(questName !=null&& questDetail !=null&& questType !=null&& questAction !=null&& questRequirement !=null&& questCoin !=null&& questExp){
      let questData = {
        questName : questName,
        questDetail : questDetail,
        questType : questType,
        questAction : questAction,
        questRequirement : parseInt(questRequirement, 10),
        questCoin : parseInt(questCoin, 10),
        questExp : parseInt(questExp, 10)
      }
  
      dispatch(addQuest(questData))
      setModalOpenAdd(false)
    }
  }

    return (
        <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView style={styles.modal}>
                <Icon 
                        name="close"
                        size={20} 
                        style={styles.closeIcon}
                        onPress={() => setModalOpenAdd(false)}
                    />
                  
                  <View style={styles.questBox}>
                    <Title style={styles.headerTitle}>Add Quest</Title>
                    <Text>Quest name</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      onChangeText={(data) => setQuestName(data)}
                    />
                    <Text>Quest detail</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      onChangeText={(data) => setqQuestDetail(data)}
                    />

                    <Text>Quest type</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      onChangeText={(data) => setQuestType(data)}
                    />

                    <Text>Quest Action</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      onChangeText={(data) => setQuestAction(data)}
                    />

                    <Text>Quest request amount</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      keyboardType="numeric"
                      onChangeText={(data) => setQuestRequirement(data)}
                    />

                    <Text>Quest EXP</Text>
                    <TextInput keyboardType="numeric" style={styles.input}
                      placeholder="Please enter your text"
                      onChangeText={(data) => setQuestExp(data)}
                    />
                    <Text>Quest coin</Text>
                    <TextInput style={styles.input}
                      keyboardType="numeric"
                      placeholder="Please enter your text"
                      onChangeText={(data) => setQuestCoin(data)}
                    />

                    <View style={styles.modalButton}>
                      <Button 
                        onPress={() => onSubmit()}
                        buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
                        title="Add"
                      />
                    </View>
                  </View>
                </ScrollView>
                </KeyboardAvoidingView> 
    )
}

const styles = StyleSheet.create({
    closeIcon:
    {
        color: 'red',
        marginLeft: '95%'
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