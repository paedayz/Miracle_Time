import React, {useState}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity } from 'react-native'
import { useRoute }  from '@react-navigation/native'
import Edittodaylist from '../component/Edittodaylist'
import { useSelector } from 'react-redux'

export default function DetailToday() {
    
    const route = useRoute() 
    const { Event,detail,time } = route.params

    const [todaylist, setTodaylist] = useState([
        {
          Event:route.params.Event,
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
            <Text>{Event}</Text>
            <Text>{time}</Text>
            <Text>{detail}</Text>
            

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


        
        </View>
    )
}


