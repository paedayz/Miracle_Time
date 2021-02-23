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
                size={50}/>
          </View>
          <View style={styles.achievementBox}>
            <Title style={styles.headerTitle}>{achievementName}</Title>
            <View style={{maxWidth:200, minWidth: 180}}>
                <Text>{achievementDetail}</Text>
            </View>
          </View>
          {achievementStatus === 'achievement_success' 
            &&
          <View style={styles.claimButton}>
            <Button
                buttonStyle = {{width: 70, height: 30}}
                title='Success'
            />
          </View>
          }

          {achievementStatus === 'in_progress'
            && 
            <View >
              <Text style={styles.achievementDone}>{achievementDone}/{achievementRequirement}</Text>
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
    achievementBoxWrapper: {
      margin: 5,
      borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      height: 100,
      backgroundColor: '#dddddd'
    },
    achievementBox: {
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
    achievementDone: {
        fontSize: 20,
        marginLeft: 55,
        marginTop: 30
    },
    achievementClaim: {
      fontSize: 15,
      marginLeft: 40,
      marginTop: 30,
      maxWidth: 80
    }
  });