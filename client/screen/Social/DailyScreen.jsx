
import React, {useState, useEffect}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute }  from '@react-navigation/native'

import Adddaily from './Adddaily'

export default function DailyScreen({navigation}) {
  const route = useRoute() 

  const [modalOpen, setModalOpen] = useState(false)

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
                      <Adddaily setModalOpen={setModalOpen} />
                </View>
        </Modal>
        <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setModalOpen()}>
                <Image  style={{marginVertical: 10, marginLeft:360, height:40,width:40}} source={require('../img/add.png')} />
              </TouchableOpacity>
        </View>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Dailydetail')}>
        <View style={style.card}>
           <View>
              <Image  style={style.mage} source={{uri: 'https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg'}} />
           <Text style={{marginLeft:15}}>
               Daily Name
            </Text>
            <Text style={{marginLeft:15}}>
               2/01/2564
            </Text>
           </View>
            
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dailydetail')}>
        <View style={style.card}>
           <View>
              <Image  style={style.mage} source={{uri: 'https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg'}} />
           <Text style={{marginLeft:15}}>
               Daily Name
            </Text>
            <Text style={{marginLeft:15}}>
               2/01/2564
            </Text>
           </View>
            
        </View>
      </TouchableOpacity>
      
      </View>
      
      <View style={{flexDirection: 'row',marginTop:15}}>
      <TouchableOpacity onPress={() => navigation.navigate('Dailydetail',)}>
        <View style={style.card}>
           <View>
              <Image  style={style.mage} source={{uri: 'https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg'}} />
           <Text style={{marginLeft:15}}>
               Daily Name
            </Text>
            <Text style={{marginLeft:15}}>
               2/01/2564
            </Text>
           </View>
            
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dailydetail')}>
        <View style={style.card}>
           <View>
              <Image  style={style.mage} source={{uri: 'https://i.pinimg.com/originals/7a/7d/cf/7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg'}} />
           <Text style={{marginLeft:15}}>
               Daily Name
            </Text>
            <Text style={{marginLeft:15}}>
               2/01/2564
            </Text>
           </View>
            
        </View>
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
    backgroundColor:"#ffdbdb",width:170,marginLeft:23,height:230,borderRadius:20
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
mage: {
  marginVertical: 20, marginLeft:20, height:100,width:130,borderRadius:10
}
  

})
