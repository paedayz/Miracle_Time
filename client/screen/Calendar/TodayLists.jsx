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
  const [showData, setShowData] = useState()

  const allList = useSelector((state) => state.data.events)

  const todaylist = []
 

  useEffect(() => {
    allList.map(event => {
      if(event.date === date) {
        todaylist.push(event)
      }
    })
    setShowData(todaylist)
  },[])

  let sortRank = () => {
      let rankTime = showData.sort((a, b) => b.rank-a.rank)
      const updated = rankTime.map((item) => {
        return item;
      });
      setShowData(updated);
      
  }

  let sortTime = () => {
    let rankTime = showData.sort((a, b) => new Date(`${a.date}T${a.end}`) - new Date(`${b.date}T${b.end}`))
    const updated = rankTime.map((item) => {
      return item;
    });
    setShowData(updated);
    
}
  

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
              <Text style={{marginTop:15,marginHorizontal:8,fontSize:16}}>Sort</Text>
            <Icon 
                  name="history" 
                  size={30} 
                  color='gray'
                  style={{marginVertical: 10, marginRight:10}}
                  onPress={() => sortTime()}
              />
              <Icon 
                  name="heart" 
                  size={30} 
                  color='gray'
                  style={{marginVertical: 10, marginRight:200}}
                  onPress={() => sortRank()}
              />
              <Icon 
                  name="plus-square" 
                  size={30} 
                  color='gray'
                  style={{marginVertical: 10, marginLeft:10}}
                  onPress={() => setModalOpen()}
              />
              <Text style={{fontSize:18, marginTop: 13, marginHorizontal: 5}}>Add</Text>
            </View>
            
            <FlatList
                data={showData}
                renderItem={({ item,index}) => (
                  <View style={style.card}>
                    <View style={style.cardcon}>
                      <TouchableOpacity onPress={() => navigation.navigate('TodayListDetail', item )}>
                        

                        {item.rank === "1" &&
                            <View
                            style={{
                              flexDirection: "row",
                             
                              padding: 20,
                              borderLeftWidth:10,
                              borderLeftColor:'#ABFFA6',
                              borderBottomLeftRadius:10,
                              borderTopLeftRadius: 10
                            }}
                            >
                               <View style={{flexDirection: 'row'}}>
                                    <View style={{width:120}}>
                                      <Text key={index} style={style.fontSize}>{item.start} -- {item.end}</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                      <View style={{}}>
                                        <Text key={index} style={{fontSize: 17,width:190}}>{item.event}</Text>
                                      </View>
                                      {item.catagory === "งาน" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#ff3399'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                      {item.catagory === "ทั่วไป" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#009900'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                      {item.catagory === "นัดสำคัญ" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#993300'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                    </View>
                                    <View>
                                      {item.rank === "1" &&
                                        <View>
                                          <Icon 
                                            name="check-square" 
                                            size={30} 
                                            color='gray'
                                            style={{marginVertical: 10}}
                                          />
                                        </View>
                                      }
                                    </View>

                                </View>
                            
                            </View>
                        }
                        {item.rank === "2" &&
                            <View
                            style={{
                              flexDirection: "row",
                              
                              padding: 20,
                              borderLeftWidth:10,
                              borderLeftColor:'#FFC300',
                              borderBottomLeftRadius:10,
                              borderTopLeftRadius: 10
                            }}
                            >
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{width:120}}>
                                      <Text key={index} style={style.fontSize}>{item.start} -- {item.end}</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                      <View style={{}}>
                                        <Text key={index} style={{fontSize: 17,width:190}}>{item.event}</Text>
                                      </View>
                                      {item.catagory === "งาน" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#ff3399'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                      {item.catagory === "ทั่วไป" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#009900'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                      {item.catagory === "นัดสำคัญ" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#993300'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                    </View>
                                    
                                    <View>
                                      {item.rank === "2" &&
                                        <View>
                                        <Icon 
                                          name="check-square" 
                                          size={30} 
                                          color='gray'
                                          style={{marginVertical: 10}}
                                        />
                                      </View>
                                      }
                                    </View>

                                </View>
                            </View>
                
                        }
                        {item.rank === "3" &&
                            <View
                            style={{
                              flexDirection: "row",
                          
                              padding: 20,
                              borderLeftWidth:10,
                              borderLeftColor:'#FF5733',
                              borderBottomLeftRadius:10,
                              borderTopLeftRadius: 10
                            }}
                            >
                              <View style={{flexDirection: 'row'}}>
                                  <View style={{width:120}}>
                                    <Text key={index} style={style.fontSize}>{item.start} -- {item.end}</Text>
                                  </View>
                                  <View style={{flexDirection: 'column'}}>
                                      <View style={{}}>
                                        <Text key={index} style={{fontSize: 17,width:190}}>{item.event}</Text>
                                      </View>
                                      {item.catagory === "งาน" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#ff3399'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                      {item.catagory === "ทั่วไป" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#009900'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                      {item.catagory === "นัดสำคัญ" &&
                                      <View style={{marginTop:8}}>
                                          <Text style={{fontSize: 14,width:190,color:'#993300'}}>{item.catagory}</Text>
                                      </View>
                                      }
                                    </View>
                                  <View>
                                    {item.rank === "3" &&
                                      <View>
                                      <Icon 
                                        name="check-square" 
                                        size={30} 
                                        color='gray'
                                        style={{marginVertical: 10}}
                                      />
                                    </View>
                                    }
                                  </View>

                              </View>
                            </View>
                        }
                        {item.rank === "" &&
                            <View
                            style={{
                              flexDirection: "row",
                              height: 65,
                              padding: 20,
                              borderLeftWidth:10,
                              borderLeftColor:'#333'
                            }}
                            >
                              <Text key={index} style={style.fontSize}>No Event</Text>
                            </View>
                        }
                        
                        
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
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1 , height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 3,
    marginVertical: 6
  },
  cardcon: {
    // marginHorizontal: 18,
    // marginVertical: 10, 
  },
  fontSize:{
    fontSize: 17,
    width:190
  }, 
  modalToggle:{
    marginBottom: 5,
    borderColor: '#FFF',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 100,
    alignSelf: 'center',
},
  

})