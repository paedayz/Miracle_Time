import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
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
        <ScrollView style={styles.modal}>
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
                        buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
                        title="Add"
                        onPress={() => onSubmit()}
                      />
                      
                    </View>
                  </View>
                  </KeyboardAvoidingView>  
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
      marginLeft: 10,
    },
    modal:
    {
      backgroundColor: '#dddddd',
      marginTop: 55,
      padding: 25
    },
  });