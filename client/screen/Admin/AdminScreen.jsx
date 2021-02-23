import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal, StatusBar, ScrollView } from 'react-native';
import {
  Title,
} from 'react-native-paper'

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
        <SafeAreaView style={styles.container}>
          <View style={styles.headerBoxWrapper}>
            <TouchableOpacity style={[styles.headerBox, {
                borderRightColor: '#dddddd',
                borderRightWidth: 1
              }]}>
              <View>
                <Title>Quest</Title>
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
        <View>
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
            <TouchableOpacity style={styles.headerBox}>
              <View>
                <Title>Archeivement</Title>
              </View>
            </TouchableOpacity>

        </View>

          <View style={styles.addButton}>
            <Button
              icon={
                <Icon
                  name="plus"
                  size={20}
                  color='white'
                />
              }
              title='Add Quest'
              buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
              />
          </View>
          
          <View style={styles.questBoxWrapper}>
            <View style={styles.demo}>
              <Icon 
                name='trophy'
                size={50}/>
            </View>
            <View style={styles.questBox}>
              <Title style={styles.headerTitle}>Quest</Title>
              <Text>Quest detail</Text>
              <Text>Quest start - Quest end</Text>
            </View>
            <View style={styles.editButton}>
              <Button
                buttonStyle = {{backgroundColor: '#8C92AC', width: 70, height: 30, borderRadius: 10,}}
                title='Edit'/>
            </View>
            <View style={styles.deleteButton}>
              <Button
                buttonStyle = {{backgroundColor: '#FC7C7C', width: 70, height: 30, borderRadius: 10,}}
                title='Delete'/>
            </View>

          </View>
          <ArcheivementScreen/>
        </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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
  deleteBox: {
    justifyContent: 'center',
    marginVertical: 10,
    flexDirection: 'row'
  },
  addButton: {
    margin: 15,
    color: 'white'
  },
  editButton: {
    justifyContent: 'center',
    position: 'absolute',
    top: 18,
    left: 300
  },
  deleteButton: {
    justifyContent: 'center',
    position: 'absolute',
    top: 52,
    left: 300
  },
  modalButton: 
  {
    marginHorizontal: 80,
    marginVertical: 15,
    justifyContent: 'center'
  },
  demo: {
    justifyContent: 'center',
    padding: 5,
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
  deleteModal:
  {
    backgroundColor: '#dddddd',
    marginVertical: 300,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon:
  {
    color: 'red',
    marginLeft: 265
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
});