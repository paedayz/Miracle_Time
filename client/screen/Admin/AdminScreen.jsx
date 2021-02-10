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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function AdminScreen({navigation}) {
      const [modalOpenAdd, setModalOpenAdd] = useState(false)
      const [modalOpenEdit, setModalOpenEdit] = useState(false)
      const [modalOpenDelete, setModalOpenDelete] = useState(false)
    
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
              onPress={() => setModalOpenAdd(true)}/>
              <Modal transparent={true} visible={modalOpenAdd}>
                <View style={styles.modal}>
                <Icon 
                        name="close"
                        size={20} 
                        style={styles.closeIcon}
                        onPress={() => setModalOpenAdd(false)}
                    />
                  <View style={styles.questBox}>
                    <Title style={styles.headerTitle}>Add Quest</Title>
                    <Text>Quest name</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest detail</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest EXP</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest coin</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest start</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest end</Text>
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
              </Modal>
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
                buttonStyle = {{backgroundColor: 'green', width: 70, height: 30}}
                title='Edit'
                onPress={() => setModalOpenEdit(true)}/>
              <Modal transparent={true} visible={modalOpenEdit}>
                <View style={styles.modal}>
                <Icon 
                        name="close"
                        size={20} 
                        style={styles.closeIcon}
                        onPress={() => setModalOpenEdit(false)}
                    />
                  <View style={styles.questBox}>
                    <Title style={styles.headerTitle}>Edit Quest</Title>
                    <Text>Quest name</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest detail</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest EXP</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest coin</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest start</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <Text>Quest end</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <View style={styles.modalButton}>
                      <Button 
                          title="Edit"
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={styles.deleteButton}>
              <Button
                buttonStyle = {{backgroundColor: 'red', width: 70, height: 30}}
                title='Delete'
                onPress={() => setModalOpenDelete(true)}/>
                <Modal transparent={true} visible={modalOpenDelete}>
                  <View style={styles.deleteModal}>
                  <Icon 
                          name="close"
                          size={20} 
                          style={styles.closeIcon}
                          onPress={() => setModalOpenDelete(false)}
                      />
                    <View style={styles.questBox}>
                      <Title style={styles.headerTitle}>Are you sure to delete quest?</Title>
                      <View style={styles.deleteBox}>
                          <View style={{margin: 5, width: 70, height: 30}}>
                          <Button 
                              title="Yes"
                          />
                          </View>
                          <View style={{margin: 5, width: 70, height: 30}}>
                          <Button 
                              title="No"
                              onPress={() => setModalOpenDelete(false)}
                          />
                          </View>
                      </View>
                    </View>
                  </View>
                </Modal>
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
    backgroundColor: '#dddddd'
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
    marginVertical: 290,
    marginHorizontal: 25,
    padding: 30,
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