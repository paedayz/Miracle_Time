import React, { useState } from 'react';
import { SafeAreaView, Modal, Text, View,FlatList, StyleSheet, TouchableOpacity,Image} from 'react-native';
import {Button} from 'react-native-elements'

// Theme
import {themes} from '../../utils/Theme'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {buyTheme} from '../../redux/action/dataAction'

export default function Shopscreen({navigation}) {
    const [Card, setCard] = useState('')
    const [ModalVi, setModalVi] = useState(false)

    const user_coin = useSelector((state) => state.data.coin)
    const setting_docId = useSelector((state) => state.user.setting.docId)
    const buy_theme = useSelector((state) => state.user.setting.buy_theme)
    const buy_loading = useSelector((state) => state.user.buy_loading)

    const dispatch = useDispatch()

    const Open = () => {
        setModalVi(true);  
    }

    const onclickBuyTheme = () => {
        let new_user_coin = user_coin - Card.COST
        dispatch(buyTheme(setting_docId, Card.index, new_user_coin))
        setModalVi(false); 
    }

    if(!buy_loading) {
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
                        renderItem={({ item, index}) => {
                            item.index = index
                            let flag = 0
                            buy_theme.map((theme) => {
                                if(index === theme) flag = 1
                            })
                            if(item.COST !== 0 && flag == 0) {
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
                                        
                                        
                                            
                                </View>
                                <View style={{backgroundColor:'white', width:100, marginTop: 60}}>
                                    {user_coin < Card.COST
                                    ?
                                    <Button disabled type="outline" title="COIN NOT ENOUGH" />
                                    :
                                    <Button onPress={() => onclickBuyTheme()} title="Buy" />
                                    }
                                            
                                        </View>
                            </View> 
                            
                        </View>
                       
                        <Button 
                            title="Cancel"
                            type="outline"
                            onPress={() => setModalVi(false)}>
                              
                        </Button>
                    </Modal>
            </View>
            );
    } else {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    }

    
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
      height:220,
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
        marginTop:'10%',
        marginBottom: '20%'
    }
  });