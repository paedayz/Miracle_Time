import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from 'react-native-paper'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Redux
import {useDispatch} from 'react-redux'
import {claimQuest} from '../../../redux/action/dataAction'

export default function Quest({questData}) {

  const dispatch = useDispatch()

  const {
    docId, 
    questAction, 
    questCoin, 
    questDetail, 
    questDone, 
    questExp, 
    questName, 
    questRequirement, 
    questStatus, 
    questType,
    questId
    } = questData


    const cliamClick = () => {
      dispatch(claimQuest(docId, questId))
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.questBoxWrapper}>
          <View style={styles.demo}>
            <Icon 
                name='trophy'
                size={50}
                color='gold'/>
          </View>
          <View style={styles.questBox}>
            <Title style={styles.headerTitle}>{questName}</Title>
            <View style={{maxWidth:200, minWidth: 180}}>
                <Text>{questDetail}</Text>
            </View>
          </View>
          {questStatus === 'quest_success' 
            &&
          <View style={styles.claimButton}>
<<<<<<< HEAD
            <Button
                buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10, width: 70, height: 30}}
                title='Claim'
                onPress={() => cliamClick()}
            />
=======
             <Button
            buttonStyle = {{width: 70, height: 30, backgroundColor: '#738FD9', borderRadius: 10}}
            title='Claim'
            onPress={() => cliamClick()}/>
>>>>>>> 95842098703a1bf8e93159ccfedd70b913d99874
          </View>
          }

          {questStatus === 'in_progress'
            && 
            <View style={styles.questDone}>
              <Text style={{fontSize: 20}}>{questDone}/{questRequirement}</Text>
            </View>
          }

          {questStatus === 'quest_claim'
            && 
            <View style={styles.check}>
            <Icon 
                name='check'
                size={30}
                color='green'/>
          </View>
          }
          
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 16,
      fontWeight: '500',
    },
    headerBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderColor: '#dddddd',
      borderWidth: 1,
      flexDirection: 'row',
      height: 50,
      marginBottom: 5
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
    claimButton: {
      justifyContent: 'center',
      position: 'absolute',
      top: 34,
      left: 300
    },
    demo: {
      justifyContent: 'center',
      margin: 5
    },
    check: {
      justifyContent: 'center',
      position: 'absolute',
      top: 35,
      left: 320
    },
    questDone: {
      position: 'absolute',
      marginTop: 35,
      marginLeft: 320
    },
    questClaim: {
      fontSize: 15,
      marginLeft: 40,
      marginTop: 30,
      maxWidth: 80
    }
  });