
import React, {useState, useEffect}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity,Image } from 'react-native'
import { useRoute }  from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';


import Adddaily from './Adddaily'

export default function SocialScreen() {

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
