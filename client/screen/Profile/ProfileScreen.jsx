import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Redux
import {useSelector} from 'react-redux'

export default function ProfileScreen({navigation}) {

  const {username, nickname, email, userImage, exp, bio, phone, website} = useSelector(state => state.user.userData)
  const coin = useSelector(state => state.data.coin)
  const level = useSelector(state => state.data.level)
    
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

        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
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