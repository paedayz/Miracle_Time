import React, {useState, useEffect}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

// Redux
import { useSelector, useDispatch } from 'react-redux' //ดึงข้อมูล

// Component
import Addtoday from './TodayListAdd'


export default function Todaylist({route, navigation}) {
  const {date} = route.params

  const [modalOpen, setModalOpen] = useState(false)
  const [today, setToday] = useState()

  const allList = useSelector((state) => state.data.events)

  const todaylist = []

  useEffect(() => {
    allList.map(event => {
      console.log(event.date)
      console.log(date)
      if(event.date === date) {
        todaylist.push(event)
      }
    })
    setToday(todaylist)
    console.log(todaylist)
    console.log(allList)
  },[])
  

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
                      <Addtoday setModalOpen={setModalOpen} date={date} />
                </View>
            </Modal>
            <Icon 
                name="plus" 
                size={20} 
                style={style.modalToggle}
                onPress={() => setModalOpen()}
            />

            

            <FlatList
                data={today}
                renderItem={({ item,index}) => (
                  <View style={style.card}>
                    <View style={style.cardcon}>
                      <TouchableOpacity onPress={() => navigation.navigate('TodayListDetail', item )}>
                          <Text key={index} style={style.fontSize}>{item.event}{item.time}</Text>
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