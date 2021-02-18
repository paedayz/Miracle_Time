import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
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

export default function AddQuestModal({setModalOpenAdd}) {
    return (
        <View style={styles.modal}>
                <Icon 
                        name="close"
                        size={20} 
                        style={styles.closeIcon}
                        onPress={() => setModalOpenAdd(false)}
                    />
                  <View style={styles.questBox}>
                    <Title style={styles.headerTitle}>Add Archeivement</Title>
                    <Text>Archeivement name</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Archeivement detail</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Archeivement EXP</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Archeivement coin</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Archeivement time</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <View style={styles.modalButton}>
                      <Button 
                          title="Add"
                      />
                    </View>
                  </View>
                </View>
    )
}

const styles = StyleSheet.create({
    closeIcon:
    {
        color: 'red',
        marginLeft: 265
    },
    modalButton: 
    {
      marginHorizontal: 80,
      marginVertical: 15,
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
        marginVertical: 5,
        marginLeft: 10
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
  });