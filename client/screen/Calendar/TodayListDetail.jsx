import React, {useState}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity } from 'react-native'
import { useRoute }  from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

// Component
import Edittodaylist from './TodayListEdit'

export default function DetailToday({navigation}) {
    
    const route = useRoute() 
    const { Event,detail,time,key } = route.params
    const dispatch = useDispatch()
    const values = { Event,detail,time,key }

    const [todaylist, setTodaylist] = useState([
        {
          Event:route.params.event,
          time:route.params.time, 
          detail:route.params.detail, 
          key:route.params.key
        }
    ])

    // console.log('listtoday')
    // console.log(todaylist)

    const [modalOpen, setModalOpen] = useState(false)
    

    return (
        <View>
            <View style={style.card}>
                <View style={style.cardcon}>
                    <Text style={style.fontSize}>{Event}</Text>
                    <Text style={style.fontSize}>{time}</Text>
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


            <Button
            color="yellow"
            title="Edit"
            onPress={() => setModalOpen()}
            />
            <Button
            color="blue"
            title="Delete"
            onPress={() => dispatch({type: 'DELETE_EVENT', payload: values}, navigation.navigate('Todaylist'))}
            />


        
        </View>
    )
}

const style = StyleSheet.create({
    card: {
      borderRadius: 6,
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