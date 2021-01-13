import React, {useState}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity } from 'react-native'
import Addtoday from '../component/Addtodaylist'
import { useSelector, useDispatch } from 'react-redux' //ดึงข้อมูล


export default function Todaylist({navigation}) {

  const [modalOpen, setModalOpen] = useState(false)

  const todaylist = useSelector((state) => state.data.events)
  
  return (
    <View>
            <Modal visible={modalOpen} animationType={'slide'}>
                <View>
                    <Button
                      color="red"
                      title="Close"
                      onPress={() => setModalOpen(false)}
                      />
                      <Addtoday />
                </View>
            </Modal>


            <Button
            color="red"
            title="Add"
            onPress={() => setModalOpen()}
            />
            

            <FlatList
                data={todaylist}
                renderItem={({ item,index}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('DetailToday', item )}>
                        <Text key={index}>{item.Event}{item.time}</Text>
                    </TouchableOpacity>
            )}>
             
            </FlatList>
            
        </View>
  )
}

const style = StyleSheet.create({


})
