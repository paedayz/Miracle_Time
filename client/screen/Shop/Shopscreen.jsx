import React, { useState } from 'react';
import { SafeAreaView, Modal, Text, View, Button,FlatList, StyleSheet, TouchableOpacity,Image} from 'react-native';


export default function Shopscreen({navigation}) {

    const [Datu, setDatu] = useState(
        [{image:'https://i.pinimg.com/originals/49/5c/3a/495c3a7470c2bafb63ea7fa2e934a276.jpg',
         name:'1',
         coin:'--1'},
         {image:'https://www.gamemonday.com/wp-content/uploads/2019/01/Slime-2212019-2.jpg',
         name:'2',
         coin:'--2'},
         {image:'https://img.online-station.net/_content/2019/0227/gallery/1551237601.jpg',
         name:'3',
         coin:'--3'},
         {image:'https://f.ptcdn.info/379/053/000/ovl7cy7cd06ATBBvSxn-o.jpg',
         name:'4',
         coin:'--4'},
         {image:'https://cdn.novelupdates.com/images/2020/07/slime_softcover_1.jpg',
         name:'5',
         coin:'--5'}])
    const [Card, setCard] = useState('')
    const [ModalVi, setModalVi] = useState(false)

    console.log('-------',Card)

    let Open = () => {


        setModalVi(true);  
    }


    return (
    <View style={style.main}>
        <FlatList
                data={Datu}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={({ item}) => (
                <View>
                    
            <TouchableOpacity onPress={() => Open(setCard(item))}>
           
                  <View style={style.card}>
                    <View >
                            <View>
                                <Image style={style.mage} source={{uri: item.image}} />
                            </View>
                    </View>
                  </View>
                  <View style={style.texts}>
                        <Text style={{textAlign:'center'}}>
                            {item.name}
                        </Text>
                  </View>
            </TouchableOpacity>
                  <View style={style.card2}>
                     <TouchableOpacity >
                        <Text style={{textAlign:'center'}}>
                            ซื้อ Coin {item.coin}
                        </Text>
                     </TouchableOpacity >
                  </View>
                </View>
                
            )}>
            </FlatList>

            <Modal
                transparent={true}
                visible={ModalVi}
            >
                <View style={{backgroundColor: '#000000aa',flex:1}}>
                    <View style={{flex: 1,
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center'}}>
                        <View style={style.cardModal}>
                            
                                <View>
                                    <Image style={style.mageModal} source={{uri: Card.image}} />
                                </View>
                                <View style={style.texts}>
                                        <Text style={{textAlign:'center',color:'#fff',fontSize:20}}>
                                            {Card.name}
                                        </Text>
                                </View>
                                    <View style={style.card2Modal}>
                                        <View style={{flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'}}>
                                                <Text style={{textAlign:'center',fontSize:20,}}>
                                                    ซื้อ Coin {Card.coin}
                                                </Text>
                                        </View>
                                    </View>
                            
                        </View>
                    </View> 
                </View>
                <Button 
                    title="ยกเลิกการซื้อ"
                    onPress={() => setModalVi(false)}>
                      
                </Button>
            </Modal>

            
            
    </View>
    );
}
const style = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'center', 
      marginTop:5
    },
    card: {
      borderRadius: 10,
      backgroundColor: '#fff',
      height:180,
      width:120,
      marginLeft:10,
      marginTop:5
    },
    mage: {
        marginVertical: 15, marginLeft:9, height:150,width:'85%',borderRadius:10
      },
    mageModal: {
        marginVertical: 15, marginLeft:9, height:'91%',width:'90%',borderRadius:10
      },
    card2: {
      borderRadius: 10,
      backgroundColor: '#fff',
      height:23,
      width:120,
      marginTop:5,
      marginLeft:10
    },
    card2Modal: {
        borderRadius: 10,
        backgroundColor: '#fff',
        height:'12%',
        width:'90%',
        marginTop:5,
        marginLeft:10
      },
    cardModal: {
        borderRadius: 10,
        backgroundColor: '#fff',
        height:'50%',
        width:'50%',
        marginTop:-60
    },
    texts: {
    //   marginLeft:22
    }
  });