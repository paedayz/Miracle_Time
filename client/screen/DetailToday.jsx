import React, {useState}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity } from 'react-native'
import { useRoute }  from '@react-navigation/native'
import Edittodaylist from '../component/Edittodaylist'
import { useDispatch, useSelector } from 'react-redux'
import Todaylist from '../screen/Todaylist'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailToday({navigation}) {
    
    const route = useRoute() 
    const { Event,detail,start,end,key } = route.params
    const dispatch = useDispatch()
    const values = { Event,detail,start,end,key }

    const [todaylist, setTodaylist] = useState([
        {
          Event:route.params.Event,
          start:route.params.start, 
          end:route.params.end,
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
                    <Text style={style.fontSize}>{start}:{end}</Text>
                    <Text style={style.fontSize}>{detail}</Text>
                </View>
            </View>

            <Modal visible={modalOpen} animationType={'slide'}>
                <View>
                      <Icon 
                        name="close" 
                        size={24} 
                        style={style.modalToggle}
                        onPress={() => setModalOpen(false)}
                      />
                      <Edittodaylist/>
                </View>
            </Modal>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: 95, height: 50}}></View>
              <View style={{width: 95, height: 50}}>
                <Button
                color="#90ee90"
                title="Edit"
                onPress={() => setModalOpen()}
                />
              </View>
              <View style={{width: 95, height: 50}}>
                <Button
                color="#ff4500"
                title="Delete"
                onPress={() => dispatch({type: 'DELETE_EVENT', payload: values}, navigation.navigate('Todaylist'))}
                />
              </View>
            </View>


        
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
    },
    modalToggle:{
      marginBottom: 5,
      borderWidth: 1,
      borderColor: '#FFF',
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 100,
      alignSelf: 'center',
      marginTop: 15
  },
  
  })
  
