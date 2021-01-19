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
      if(event.date === date) {
        todaylist.push(event)
      }
    })
    setToday(todaylist)
  },[])
  

  return (
    <View style={style.container}>
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
            
            <View style={{flexDirection: 'row'}}>
              <Icon 
                  name="plus-square" 
                  size={30} 
                  color='gray'
                  style={{marginTop:10, marginBottom:10, marginLeft:280}}
                  onPress={() => setModalOpen()}
              />
              <Text style={{fontSize:18, marginTop: 13, marginLeft: 5}}>ADD</Text>
            </View>
            

            <FlatList
                data={today}
                renderItem={({ item,index}) => (
                  <View style={style.card}>
                    <View style={style.cardcon}>
                      <TouchableOpacity onPress={() => navigation.navigate('TodayListDetail', item )}>
                        <View
                          style={{
                            flexDirection: "row",
                            height: 65,
                            padding: 20
                          }}
                        >
                          {item.rank === "1" &&
                            <View style={{ backgroundColor: '#FF5733', width: 40, marginRight:20 }} />
                          }
                          {item.rank === "2" &&
                            <View style={{ backgroundColor: '#FFC300', width: 40, marginRight:20 }} />
                          }
                          {item.rank === "3" &&
                            <View style={{ backgroundColor: '#ABFFA6', width: 40, marginRight:20 }} />
                          }
                          
                          <Text key={index} style={style.fontSize}>{item.time}    {item.event}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
            )}>
             
            </FlatList>
            
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
    borderColor: '#FFF',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 15
},
  

})