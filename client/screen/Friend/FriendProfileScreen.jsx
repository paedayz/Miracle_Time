import React,{useState, useEffect} from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Button } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useRoute} from '@react-navigation/native'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getFriendEvent} from '../../redux/action/friendAction'

export default function FriendProfileScreen({navigation}) {
    const route = useRoute()

    const {username, nickname, email, userImage, level, exp, coin, bio, phone, website} = route.params

    const [searchDate, setSearchDate] = useState()

    const friendEvent = useSelector((state) => state.friend.friendEvent)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch({type:'CLEAR_FRIEND_EVENT'})
    },[])

    const onClickSearch = () => {
      dispatch(getFriendEvent(username, searchDate))
    }

  
    
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row', marginTop: 15}}>
              <Avatar.Image 
                source={{
                  uri: userImage
                }}
                size={80}
              />
              <View style={{marginLeft:15}}>
                <Title style={styles.title, {marginBottom:5}}>{nickname}</Title>
                <Caption style={styles.caption}>@{username}</Caption>
              </View>
            </View>
          </View>

          {phone &&
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft:20}}>{phone}</Text>
              </View>
            </View>
          }

          {website &&
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon name="web" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft:20}}>{website}</Text>
              </View>
            </View>
          }

          {bio &&
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon name="bio" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft:20, fontSize:20}}>{bio}</Text>
              </View>
            </View>
          }

          <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>{level}</Title>
              <Caption>Level</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>{coin}</Title>
              <Caption>Coins</Caption>
            </View>
          </View>

          <View style={styles.eventContainer}>
            <Text style={styles.eventHeader}>Friend Event</Text>

            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <View>
                <TextInput
                    onChangeText={data => setSearchDate(data)}
                    placeholder="Ex. 2021-04-06"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}
                    value={searchDate}
                    clearButtonMode="always"
                />
              </View>

              <View style={{marginTop:17, marginLeft:30,borderRadius: 10}}>
                <Button onPress={() => onClickSearch()} title="SEARCH" color="#738FD9" buttonStyle = {{borderRadius: 10}}/>
              </View>

            </View>
            <Text>{friendEvent.length}</Text>
          </View>

        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  eventHeader : {
    fontSize: 20
  },
  eventContainer : {
    marginLeft: 20,
    marginTop: 30
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -2,
    paddingLeft: 10,
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    maxWidth: 200,
    minWidth: 200
  },
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});