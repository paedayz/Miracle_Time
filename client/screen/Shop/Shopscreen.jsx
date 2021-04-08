import React, { useState } from 'react';
import { SafeAreaView, Modal, Text, View, Button,FlatList, StyleSheet, TouchableOpacity,Image} from 'react-native';

// Theme
import {themes} from '../../utils/Theme'

// Redux
import {useSelector} from 'react-redux'

export default function Shopscreen({navigation}) {
    const [Card, setCard] = useState('')
    const [ModalVi, setModalVi] = useState(false)

    const user_coin = useSelector((state) => state.data.coin)

    let Open = () => {
        setModalVi(true);  
    }


    return (
    <View style={style.main}>
        <View style={style.your_coin}>
            <Text>
                Your coin : {user_coin}
            </Text>
        </View>
        <FlatList
                data={themes}
                keyExtractor={(item) => item.THEME_NAME}
                numColumns={3}
                renderItem={({ item}) => {
                    if(item.COST !== 0) {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => Open(setCard(item))}>
                                    <View style={style.card}>
                                        <View>
                                            <Image style={style.mage} source={{uri: item.THEME_THUMBNAIL}} />
                                        </View>
                                    </View>
                                    <View style={style.texts}>
                                        <Text style={{textAlign:'center'}}>
                                            {item.THEME_NAME}
                                        </Text>
                                        <Text style={{textAlign:'center'}}>
                                            {item.COST} Coin
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            
                        )
                    } else {
                        return (
                            <View></View>
                        )
                    }
                }}>
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
                                    <Image style={style.mageModal} source={{uri: Card.THEME_THUMBNAIL}} />
                                </View>
                                <View style={style.texts}>
                                        <Text style={{textAlign:'center',color:'#fff',fontSize:20}}>
                                            {Card.THEME_NAME}
                                        </Text>
                                </View>
                                    <View style={style.card2Modal}>
                                        <View style={{flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'}}>
                                                <Text style={{textAlign:'center',fontSize:20,}}>
                                                    ซื้อ Coin {Card.COST}
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
    your_coin: {
      marginTop: 20,
      marginBottom: 30
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
        marginVertical: 15, marginLeft:9, height:190,width:'85%',borderRadius:10
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
        marginTop:'30%',
        marginBottom: '20%'
    }
  });