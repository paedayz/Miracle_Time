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
            <View style={{maxWidth:200, minWidth: 200, marginRight: 10}}>
                <Text>{questDetail}</Text>
                <View style={styles.textCoinAndExp}>
                  <Text>Exp: {questExp}  </Text>
                  <Text>  Coin: {questCoin}</Text>
                </View>
            </View>
          </View>
          {questStatus === 'quest_success' 
            &&
          <View style={styles.claimButton}>
            <Button
              buttonStyle = {{width: 70, height: 30, backgroundColor: '#738FD9', borderRadius: 10}}
              title='Claim'
              onPress={() => cliamClick()}/>
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
      marginLeft: 10
    },
    textCoinAndExp: {
      flexDirection: 'row',
      position: 'absolute',
      top: 40
    },
    claimButton: {
      justifyContent: 'center',
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
      marginTop: 35,
      width: "20%"
    },
    questClaim: {
      fontSize: 15,
      marginLeft: 40,
      marginTop: 30,
      maxWidth: 80
    }
  });