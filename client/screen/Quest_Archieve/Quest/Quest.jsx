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

export default function Quest({questData}) {

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
    questType
    } = questData

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.questBoxWrapper}>
          <View style={styles.demo}>
            <Icon 
                name='trophy'
                size={50}/>
          </View>
          <View style={styles.questBox}>
            <Title style={styles.headerTitle}>{questName}</Title>
            <View style={{maxWidth:200}}>
                <Text>{questDetail}</Text>
            </View>
          </View>
          {questStatus === 'quest_success' 
            &&
          <View style={styles.claimButton}>
            <Button
                buttonStyle = {{width: 70, height: 30}}
                title='Claim'
            />
          </View>
          }

          {questStatus === 'in_progress'
            && 
            <View >
              <Text style={styles.questDone}>{questDone}/{questRequirement}</Text>
            </View>
          }

          {questStatus === 'quest_claim'
            && 
            <View >
              <Text style={styles.questClaim}>Already Claim</Text>
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
      backgroundColor: '#dddddd'
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
    questDone: {
        fontSize: 20,
        marginLeft: 55,
        marginTop: 30
    },
    questClaim: {
      fontSize: 15,
      marginLeft: 40,
      marginTop: 30,
      maxWidth: 80
    }
  });