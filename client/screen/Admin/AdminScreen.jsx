import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from 'react-native-paper'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function AdminScreen({navigation}) {
    
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
  demo: {
    justifyContent: 'center',
    margin: 5
  }
});