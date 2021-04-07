
import React, {useState, useEffect}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute }  from '@react-navigation/native'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {getUserDaily} from '../../redux/action/dailyAction'

// Component
import Adddaily from './AddDaily'

export default function DailyScreen({navigation}) {
  const route = useRoute()
  const dispatch = useDispatch() 
  
  navigation.addListener('focus', () => {
    dispatch(getUserDaily())
  });

  const [modalOpen, setModalOpen] = useState(false)

  const allList = useSelector((state) => state.data.daily)
  console.log(allList)
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
        <FlatList
          data={allList}
          numColumns={2}
          renderItem={({item, index}) => (
            <View style={{marginTop:10}}>
              <TouchableOpacity onPress={() => navigation.navigate('DailyDetail', item)}>
                <View style={style.card}>
                  <View>
                      <Image  key={index} style={style.mage} source={{uri: item.image}} />
                      <Text  style={{marginLeft:15}}>
                      {item.name}
                      
                    </Text>
                    <Text  style={{marginLeft:15}}>
                      {item.createdAt.split(',')[0]}
                    </Text>
                  </View>
                    
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      
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
    backgroundColor:"#ffdbdb",width:170,marginLeft:23,height:200,borderRadius:20
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
