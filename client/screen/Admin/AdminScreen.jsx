import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal, StatusBar, ScrollView } from 'react-native';
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

// Component
import ArcheivementScreen from './Archieve/ArcheivementScreen'
import QuestScreen from './Quest/QuestScreen'

export default function admin () {
  const [mode, setMode] = useState(true)

  const changeMode = () => {
      setMode(!mode)
  }

  

  if(mode) {
      return (
        <SafeAreaView>
          <View style={styles.headerBoxWrapper}>
            <TouchableOpacity style={[styles.headerBox, {
                borderRightColor: '#dddddd',
                borderRightWidth: 1,
                backgroundColor: '#738FD9'
              }]}>
              <View>
                <Title style={{color: 'white'}}>Quest</Title>
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
          <QuestScreen/>
        </SafeAreaView>
      )
  } else {
      return (
        <SafeAreaView>
          <View style={styles.headerBoxWrapper}>
            <TouchableOpacity  onPress={() => changeMode()}
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
                <Title style={{color: 'white'}}>Archeivement</Title>
              </View>
            </TouchableOpacity>
          </View>
          <ArcheivementScreen/>
        </SafeAreaView>
      )
  }
}


const styles = StyleSheet.create({
  headerBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
  },
  headerBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});