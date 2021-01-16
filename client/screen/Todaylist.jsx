import React, {useState}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity } from 'react-native'
import Addtoday from '../component/Addtodaylist'
import { useSelector, useDispatch } from 'react-redux' //ดึงข้อมูล
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Todaylist({navigation}) {

  const [modalOpen, setModalOpen] = useState(false)

  const todaylist = useSelector((state) => state.data.events)
  

  

  return (
    <View>
            <Modal visible={modalOpen} animationType={'slide'}>
                <View>
                    <Icon 
                        name="close" 
                        size={24} 
                        style={style.modalToggle}
                        onPress={() => setModalOpen(false)}
                    />
                      <Addtoday />
                </View>
            </Modal>
            <Icon 
                name="plus" 
                size={20} 
                style={style.modalToggle}
                onPress={() => setModalOpen()}
            />

            

            <FlatList
                data={todaylist.sort((a, b) => { return b.rank - a.rank; })}
                renderItem={({ item,index}) => (
                  <View style={style.card}>
                    <View style={style.cardcon}>
                      <TouchableOpacity onPress={() => navigation.navigate('DetailToday', item )}>
                          <Text key={index} style={style.fontSize}>{item.Event}{item.time}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
            )}>
             
            </FlatList>
            
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
