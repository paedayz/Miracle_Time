import React from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FriendEventBox ({item}) {
    return (
        <View style={style.card}>
                    <View style={style.cardcon}>
                      <TouchableOpacity>
                        

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
                                      <Text key={item.key} style={style.fontSize}>{item.start} -- {item.end}</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                      <View style={{}}>
                                        <Text key={item.key} style={{fontSize: 17,width:190}}>{item.event}</Text>
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
                                      <Text key={item.key} style={style.fontSize}>{item.start} -- {item.end}</Text>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                      <View style={{}}>
                                        <Text key={item.key} style={{fontSize: 17,width:190}}>{item.event}</Text>
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
                                    <Text key={item.key} style={style.fontSize}>{item.start} -- {item.end}</Text>
                                  </View>
                                  <View style={{flexDirection: 'column'}}>
                                      <View style={{}}>
                                        <Text key={item.key} style={{fontSize: 17,width:190}}>{item.event}</Text>
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
                              <Text key={item.key} style={style.fontSize}>No Event</Text>
                            </View>
                        }
                        
                        
                      </TouchableOpacity>
                      
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
      borderRadius: 10,
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