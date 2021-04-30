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

export default function Achievement({achievementData}) {

  const dispatch = useDispatch()

  const {
    docId, 
    achievementAction, 
    achievementCoin, 
    achievementDetail, 
    achievementDone, 
    achievementExp, 
    achievementName, 
    achievementRequirement, 
    achievementStatus, 
    achievementType,
    achievementId
    } = achievementData

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.achievementBoxWrapper}>
          <View style={styles.demo}>
            <Icon 
                name='medal-outline'
                size={50}
                color='gold'/>
          </View>
          <View style={styles.achievementBox}>
            <Title style={styles.headerTitle}>{achievementName}</Title>
            <View style={{maxWidth:150, minWidth: 150, marginRight:"20%"}}>
                <Text>{achievementDetail}</Text>
                <View>
                  <Text>{achievementExp}</Text>
                  <Text>{achievementCoin}</Text>
                </View>
            </View>
          </View>
          {achievementStatus === 'achievement_success' 
            &&
          <View style={styles.claimButton}>
            <Icon size={50} name="bookmark-check-outline"/>
          </View>
          }

          {achievementStatus === 'in_progress'
            && 
            <View style={styles.achievementDone}>
              <Text  style={{fontSize: 20}}>{achievementDone}/{achievementRequirement}</Text>
            </View>
          }

          {achievementStatus === 'achievement_claim'
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
      fontWeight: 'bold'
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
    achievementBoxWrapper: {
      margin: 5,
      borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      height: 100,
    },
    achievementBox: {
      justifyContent: 'flex-start',
      marginLeft: 10
    },
    claimButton: {
      justifyContent: 'center',
      position: 'absolute',
      top: "25%",
      left: "80%"
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
    achievementDone: {
      marginTop: 35,
    },
    achievementClaim: {
      fontSize: 15,
      marginLeft: 40,
      marginTop: 30,
      maxWidth: 80
    }
  });