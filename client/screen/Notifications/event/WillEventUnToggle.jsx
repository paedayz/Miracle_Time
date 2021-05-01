import React , { useState}from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, Alert, Modal ,Button  } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  Title,
} from 'react-native-paper'

// Redux
import {useDispatch} from 'react-redux'
import {toggleNotifications, deleteNotifications} from '../../../redux/action/dataAction'

export default function NowEvent({data, eventData, createdAt, docId}) {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    dayjs.extend(relativeTime);

    const [modalOpenDelete, setModalOpenDelete] = useState(false)

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
                    <View style={styles.responsiveBox}>
                      <Text style={styles.title}>คุณมี {data.eventData.event} ต้องทำในอีก {data.time}</Text>
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
      backgroundColor: '#cceeff',
      padding: 20,
      marginHorizontal: 16,
      flexDirection: 'row',
      width:410,
      marginLeft:-2
    },
    title: {
      fontSize: 17.5,
      fontWeight: 'bold'
    },
    text : {
      marginLeft: 15
    },
    imageTwo:{
      borderRadius:100, 
      width:30,
      height:30,
      backgroundColor:"blue" , 
      marginLeft:-20,
      marginTop:35
    },
    responsiveBox: {
      width: wp('65%'),
      flexDirection: 'column',
    },
    deleteBox: {
      justifyContent: 'center',
      marginVertical: 10,
      flexDirection: 'row'
    },
    headerBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    deleteButton: {
      justifyContent: 'center',
      position: 'absolute',
      top: 52,
      left: 300
    },
    deleteModal:
    {
      backgroundColor: '#dddddd',
      marginTop:250,
      marginVertical: 300,
      marginHorizontal: 10,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    });