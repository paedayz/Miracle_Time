import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button,FlatList, StyleSheet, TouchableOpacity,Image} from 'react-native';


export default function Shopscreen({navigation}) {

    const [Datu, setDatu] = useState(
        [{image:'https://i.pinimg.com/originals/49/5c/3a/495c3a7470c2bafb63ea7fa2e934a276.jpg',
         name:'1',
         coin:'--1'},
         {image:'https://i.pinimg.com/originals/49/5c/3a/495c3a7470c2bafb63ea7fa2e934a276.jpg',
         name:'2',
         coin:'--2'},
         {image:'https://i.pinimg.com/originals/49/5c/3a/495c3a7470c2bafb63ea7fa2e934a276.jpg',
         name:'3',
         coin:'--3'},
         {image:'https://i.pinimg.com/originals/49/5c/3a/495c3a7470c2bafb63ea7fa2e934a276.jpg',
         name:'4',
         coin:'--4'},
         {image:'https://i.pinimg.com/originals/49/5c/3a/495c3a7470c2bafb63ea7fa2e934a276.jpg',
         name:'5',
         coin:'--5'}])

    return (
    <View style={style.main}>
        <FlatList
                data={Datu}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={({ item}) => (
                <View>
                  <View style={style.card}>
                    <View >
                        <TouchableOpacity >
                            <View>
                                <Image style={style.mage} source={{uri: item.image}} />
                            </View>
                        </TouchableOpacity> 
                    </View>
                  </View>
                  <View style={style.texts}>
                        <Text style={{textAlign:'center'}}>
                            {item.name}
                        </Text>
                  </View>
                  <View style={style.card2}>
                        <Text style={{textAlign:'center'}}>
                            ซื้อ Coin {item.coin}
                        </Text>
                  </View>
                </View>
            )}>
             
            </FlatList>
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
    card2: {
      borderRadius: 10,
      backgroundColor: '#fff',
      height:23,
      width:120,
      marginTop:5,
      marginLeft:10
    },
    texts: {
    //   marginLeft:22
    }
  });