import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";

// Redux
import {useDispatch} from 'react-redux'
import {toggleNotifications, deleteNotifications} from '../../../redux/action/dataAction'

export default function NowEvent({data, eventData, createdAt, docId}) {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    dayjs.extend(relativeTime);

    const onNotiClick = () => {
      dispatch(toggleNotifications(docId))
      navigation.navigate('TodayListDetail', eventData)
    }

    const onAlert = () => {
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          
          { 
            text: "YES", onPress: () => {dispatch(deleteNotifications(docId))} 
          },{},
          {
            text: "NO",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
        ],
    
      );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => { onNotiClick() }}>
            <View style={styles.unToggle}>   
              <Image 
                style={{width: 60, height: 60, borderRadius: 60/ 2}} 
                source={{
                  uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/OOjs_UI_icon_clock-destructive.svg/1024px-OOjs_UI_icon_clock-destructive.svg.png'
                }}
              />
              <View style={styles.imageTwo}>
                <Icon 
                          name="bell" 
                          size={18} 
                          style={{
                            padding: 6,
                            color: "#ffff00"
                          }}
                      />
              </View>
              <View style={styles.text}>
                <View style={{flexDirection:'column'}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{width:280}}>
                      <Text style={styles.title}> เหลือเวลาอีก {data.time} ในการทำ {data.eventData.event}</Text>
                    </View>
                    <Icon 
                        name="times" 
                        size={19} 
                        style={{
                          padding: 5,
                          marginTop: -24,
                          color: "#aaa"
                        }}
                        onPress={onAlert}
                    />
                  </View>  
                  <View style={{marginTop:5}}>
                    <Text style={styles.colorminute}>{dayjs(createdAt).fromNow()}</Text>
                  </View>
                </View>
                  
              </View>
            </View>
          </TouchableOpacity>
          
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    unToggle: {
      padding: 20,
      marginHorizontal: 16,
      flexDirection: 'row',
      width:410,
      marginLeft:0
    },
    title: {
      fontSize: 17.5
    },
    text : {
      marginLeft: 15
    },
    imageTwo:{
      borderRadius:100, 
      width:30,
      height:30,
      backgroundColor:"#ff471a" , 
      marginLeft:-20,
      marginTop:35
    }
  });