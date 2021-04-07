
import React, {useState, useEffect}  from 'react'
import { StyleSheet,Button,Modal,FlatList,View, Text, TouchableOpacity,Image, ScrollView } from 'react-native'
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

  const daily = useSelector((state) => state.data.daily)
  const loading_daily = useSelector((state) => state.data.loading_daily)

  const mapDaily = daily.map((item) => {
    return (
      <View style={{marginTop:20, width:'100%'}} key={item.docId}>
              <TouchableOpacity onPress={() => navigation.navigate('DailyDetail', item)}>
                <View style={style.card}>
                    <View>
                      <Image style={style.mage} source={{uri: item.image}} />
                    </View>
                    <View>
                    <Text  style={{marginLeft:15, fontSize:20}}>
                      {item.name}
                    </Text>
                    <Text  style={{marginLeft:15}}>
                      {item.createdAt.split(',')[0]}
                    </Text>
                    </View>
                      
                      
                  </View>
              </TouchableOpacity>
            </View>
    )
  })

  if(loading_daily) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  } else {
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
          <View style={style.dailyContainer}>
            <ScrollView>
              {mapDaily}
            </ScrollView>
          </View>
        
        
      </View>
    )
  }

  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyContainer: {
    height: '90%',
    width: '100%',
    flexDirection: 'row'
  },
  card: {
    backgroundColor:"#ffdbdb",
    width:'90%',
    marginLeft:23,
    height:200,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
  marginVertical: 15, marginLeft:9, height:100,width:'95%',borderRadius:10
}
  

})
