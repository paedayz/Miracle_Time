import React, { useState } from 'react';
import { SafeAreaView, LogBox, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TextInput,
  TouchableRipple
} from 'react-native-paper';
import { Formik } from 'formik'
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Quest

export function Quest () {
      const [modalOpenEdit, setModalOpenEdit] = useState(false)
      const [modalOpenDelete, setModalOpenDelete] = useState(false)
    
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.questBoxWrapper}>
            <View style={styles.demo}>
              <Icon 
                name='trophy'
                size={50}/>
            </View>
            <View style={styles.questBox}>
              <Title style={styles.headerTitle}>Quest</Title>
              <Text>Quest detail</Text>
              <Text>Quest time</Text>
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
                    <Text>Quest time</Text>
                    <TextInput style={styles.input}
                      placeholder="Please enter your text"
                    />
                    <View style={styles.modalButton}>
                      <Button 
                          title="Save"
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

//Archeivement

export function Archeivement () {
  const [modalOpenEdit, setModalOpenEdit] = useState(false)
  const [modalOpenDelete, setModalOpenDelete] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questBoxWrapper}>
        <View style={styles.demo}>
          <Icon 
            name='trophy'
            size={50}/>
        </View>
        <View style={styles.questBox}>
          <Title style={styles.headerTitle}>Archeivement</Title>
          <Text>Archeivement detail</Text>
          <Text>Archeivement time</Text>
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
                <Title style={styles.headerTitle}>Edit Archeivement</Title>
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
                      title="Save"
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
                <View style={styles.questBox}>
                  <Title style={styles.headerTitle}>Are you sure to delete archeivement?</Title>
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

//Header & Add function

export default function admin () {
  const [mode, setMode] = useState(true)
  const [modalOpenAdd, setModalOpenAdd] = useState(false)
  const [isStartDatePickerVisible, setIsStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setIsEndDatePickerVisible] = useState(false);

  const [startTime , setStartTime] = useState('00:00')
  const [endTime , setEndTime] = useState('00:00')


  const starthandleConfirm = (time) => {
        // console.log(moment(time).format('HH:mm')) 
        // const startString = time.toLocaleTimeString()
        // const hour = startString.split(':')[0]
        // const minute = startString.split(':')[1]
        // const result = `${hour}:${minute}`
    const result = moment(time).format('HH:mm')
    setStartTime(result)
    console.log('-----start-----',result)
    setIsStartDatePickerVisible(false)
  };
  const endhandleConfirm = (time) => {
        // console.log(moment(time).format('HH:mm')) 
        // const startString = time.toLocaleTimeString()
        // const hour = startString.split(':')[0]
        // const minute = startString.split(':')[1]
        // const result = `${hour}:${minute}`
    const result = moment(time).format('HH:mm')
    setEndTime(result)
    console.log('-----end-----',result)
    setIsEndDatePickerVisible(false)
  };

  LogBox.ignoreAllLogs()

  const changeMode = () => {
      setMode(!mode)
  }

  


  if(mode) {
      return (
        
        <View>
          
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
         
          <View style={styles.addButton}>
            <Button
              icon={
                <Icon
                  name="plus"
                  size={20}
                  color='white'
                />
              }
              title='New Quest'
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
                    <View style={{flexDirection: 'row',height:20,marginTop:-20}}>
                            <View style={{width: 50, height: 30}}>
                                <Text >Start :</Text>
                               
                            </View>
                            <View style={{width: 50, height: 30,marginLeft:100}}>
                                <Text >End :</Text>
                               
                            </View>
                        </View>
                        <View style={{flexDirection: 'row',height:90}}>
                            <View style={{width: 100, height: 90}}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='start'
                                    defaultValue={startTime}
                                    >
                                </TextInput>
                            </View>
                            <Icon 
                                name="calendar" 
                                size={30} 
                                color='gray'
                                style={{marginTop:25,marginLeft:10}}
                                onPress={()=> setIsStartDatePickerVisible(true)}/>
                            <DateTimePickerModal
                                    
                                    isVisible={isStartDatePickerVisible}
                                    mode="time"
                                    onConfirm={starthandleConfirm}
                                    onCancel={()=> setIsStartDatePickerVisible(false)}/>

                            <View style={{width: 100, height: 90,marginLeft:6}}> 
                                <TextInput
                                    style={styles.input}
                                    placeholder='end'
                                    defaultValue={endTime}
                                    >
                                </TextInput>   
                            </View>     
                            <Icon 
                                name="calendar" 
                                size={30} 
                                color='gray'
                                style={{marginTop:25,marginLeft:10}}
                                onPress={()=> setIsEndDatePickerVisible(true)}/>     
                            <DateTimePickerModal
                                    
                                    isVisible={isEndDatePickerVisible}
                                    mode="time"
                                    onConfirm={endhandleConfirm}

                                    onCancel={()=> setIsEndDatePickerVisible(false)}/>
                        </View>
                    <View style={styles.modalButton}>
                      <Button 
                          title="Add"
                      />
                    </View>
                  </View>
                </View>
              </Modal>
          </View>
               
          <Quest/>
            
        </View>
       
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
              title='New Archeivement'
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
              </Modal>
          </View>
          <Archeivement />
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