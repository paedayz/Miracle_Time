import React, {useState}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity } from 'react-native'
import { useRoute }  from '@react-navigation/native'

// Component
import Edittodaylist from './TodayListEdit'

// Redux
import {useDispatch} from 'react-redux'
import {deleteEvent} from '../../redux/action/dataAction'

export default function DetailToday({navigation}) {
    
    const route = useRoute()
    const dispatch = useDispatch()
    
    const { event,detail,time,key } = route.params

    const [modalOpen, setModalOpen] = useState(false)
    

    return (
        <View style={style.container}>
            <View style={style.card}>
                <View style={style.cardcon}>
                    <Text style={{ fontSize: 25}}>{event}</Text>
                    <Text style={{fontSize:18,color: 'gray',marginBottom: 20}}>{time}</Text>
                    <Text style={style.fontSize}>{detail}</Text>
                </View>
            </View>

            <Modal visible={modalOpen} animationType={'slide'}>
                <View>
                    <Button
                      color="red"
                      title="Close"
                      onPress={() => {
                          setModalOpen(false)
                        }}
                      />
                      <Edittodaylist/>
                </View>
            </Modal>

            <View style={{marginBottom:10, marginTop: 10, flexDirection:'row'}}>
              <Button
                color="#7686CA"
                title="Edit"
                onPress={() => setModalOpen()}
              />
              <View style={{marginLeft: 20}}>
                <Button
                  color="#FB8888"
                  title="Delete"
                  // onPress={() => dispatch({type: 'DELETE_EVENT', payload: values}, navigation.navigate('Todaylist'))}
                  onPress={() => dispatch(deleteEvent(key))}
                />
              </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderRadius: 6,
      width: 320 ,
      height: 300,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1 , height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6
    },
    cardcon: {
      marginHorizontal: 18,
      marginVertical: 10, 
      
    },
    fontSize:{
      fontSize: 18
    }
  
  })