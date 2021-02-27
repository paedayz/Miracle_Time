import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal, KeyboardAvoidingView } from 'react-native';
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
import {addAchievement} from '../../../redux/action/adminAction'

export default function AddQuestModal({setModalOpenAdd}) {
  const [achievementName, setAchievementName] = useState()
  const [achievementDetail, setAchievementDetail] = useState()
  const [achievementAction, setAchievementAction] = useState()
  const [achievementRequirement, setAchievementRequirement] = useState()

  const dispatch = useDispatch()

  const onSubmit = () => {
    let achievementData = {
      achievementName : achievementName,
      achievementDetail : achievementDetail,
      achievementAction : achievementAction,
      achievementRequirement : achievementRequirement,
    }

    dispatch(addAchievement(achievementData))
    setModalOpenAdd(false)
  }

    return (
        <View style={styles.modal}>
                <Icon 
                        name="close"
                        size={20} 
                        style={styles.closeIcon}
                        onPress={() => setModalOpenAdd(false)}
                    />
                  <KeyboardAvoidingView behavior={'height'} style={{flex:1}}>
                  <View style={styles.questBox}>
                    <Title style={styles.headerTitle}>Add Archeivement</Title>

                    <Text>Archeivement name</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      onChangeText={(data) => setAchievementName(data)}
                    />

                    <Text>Archeivement detail</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      onChangeText={(data) => setAchievementDetail(data)}
                    />

                    <Text>Archeivement action</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      onChangeText={(data) => setAchievementAction(data)}
                    />

                    <Text>Archeivement requirement</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                      keyboardType="numeric"
                      onChangeText={(data) => setAchievementRequirement(data)}
                    />

                    <View style={styles.modalButton}>
                      <Button 
                          title="Add"
                          onPress={() => onSubmit()}
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
      marginVertical: 15,
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