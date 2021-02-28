import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, FlatList ,Button} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from 'react-native-paper'

// Component
import QuestBuff from './Quest/QuestBuff'
import AchieveBuff from './Achieve/AchieveBuff'

// Redux
import {getUserQuest} from '../../redux/action/dataAction'
import {useDispatch, useSelector} from 'react-redux'

export default function QuestArchieveScreen ({navigation}) {
  const [mode, setMode] = useState(true)
  const dispatch = useDispatch()

  navigation.addListener('focus', () => {
    dispatch(getUserQuest())
  });
  const changeMode = () => {
      setMode(!mode)
  }

  if(mode) {
      return (
      <View>
        <View>
          <View style={styles.headerBoxWrapper}>
            <TouchableOpacity style={[styles.headerBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
              backgroundColor: '#738FD9'
              }]}>
              <View>
                <Title style={{color:'white'}}>Quest</Title>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.headerBox}
              onPress={() => changeMode()}>
              <View>
              <Title>Archeivement</Title>
              </View>
            </TouchableOpacity>
          </View>
          <QuestBuff/>
        </View>
        </View>
      )
  } else {
      return (
        <View>
          <View style={styles.headerBoxWrapper}>
            <TouchableOpacity onPress={() => changeMode()}
              style={[styles.headerBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
              }]}>
              <View>
                <Title>Quest</Title>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.headerBox, {
              backgroundColor: '#738FD9'
              }]}>
              <View>
                <Title style={{color:'white'}}>Archeivement</Title>
              </View>
            </TouchableOpacity>
          </View>
          <AchieveBuff/>
        </View>
      )
  }
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
    backgroundColor: '#FFFFFF'
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
  }
});