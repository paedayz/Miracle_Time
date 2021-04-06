import React, {useState}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { useRoute }  from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

// Redux
import {useDispatch} from 'react-redux'
import { deleteDaily } from '../../redux/action/dailyAction'


import EditDailyDetail from './EditDailyDetail'

export default function DailyDetail({navigation}) {
  const route = useRoute() 
  const { username,detail,mood,daily,image,date,createdAt,docId } = route.params
  const dispatch = useDispatch() 
 
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal =()=>{
    setModalOpen(false)
  }

    return (
        <View >
          <View>
            <Image  style={style.mage} source={{uri: image }} />
          </View>
          <Modal visible={modalOpen} animationType={'slide'}>
                <View>
                    <Icon 
                        name="close" 
                        size={24} 
                        style={{marginBottom: 5,
                          borderColor: '#FFF',
                          backgroundColor: '#fff',
                          padding: 12,
                          borderRadius: 100,
                          alignSelf: 'center',
                          marginTop: 15}}
                        onPress={() => setModalOpen(false)}
                    />
                      <EditDailyDetail dailyData={route.params} closeModal={closeModal}/>
                </View>
            </Modal>
          <View>
            
              <View>
                  <Text style={{fontSize:18,marginTop:9}}> 
                    {daily}
                  </Text>
              </View>
              <View>
                  <Text>
                    {date}
                  </Text>
              </View>
              <View>
                  <Text style={style.fontSize}>
                    {detail}
                  </Text>
              </View>
          </View>
          <View style={{marginBottom:10, marginTop: 20, flexDirection:'row',marginLeft:130}}>
              <View style={{width:70,height:10}}>
                <Button
                  color="#FC7C7C"
                  title="Delete"
                  buttonStyle = {{borderRadius: 10}}
                  onPress={() => {dispatch(deleteDaily(docId))} }
                />
              </View>

              <View style={{width:70,height:10,marginLeft: 20}}>
                <Button
                  color="#8C92AC"
                  title="Edit"
                  buttonStyle = {{borderRadius: 10}}
                  onPress={() => setModalOpen()}
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
      fontSize: 18,
      width: 350,
      marginLeft:25,
      marginTop:15
    },
mage: {
    width:420,height:90,
}
  
  })