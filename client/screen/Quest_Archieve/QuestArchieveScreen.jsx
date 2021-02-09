import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from 'react-native-paper'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function QuestArchieveScreen({navigation}) {
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBoxWrapper}>
        <TouchableOpacity style={[styles.headerBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
          <View>
            <Title>Quest</Title>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBox}>
          <View>
            <Title>Archeivement</Title>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.questBoxWrapper}>
        <View style={styles.demo}>
          <Icon 
              name='trophy'
              size={50}/>
        </View>
        <View style={styles.questBox}>
          <Title style={styles.headerTitle}>Quest</Title>
          <Text>Quest detail</Text>
          <Text>Quest start - Quest end</Text>
        </View>
        <View style={styles.claimButton}>
          <Button
            buttonStyle = {{width: 70, height: 30}}
            title='Claim'/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 16,
    fontWeight: '500',
  },
  headerBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
  },
  headerBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questBoxWrapper: {
    margin: 5,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#dddddd'
  },
  questBox: {
    justifyContent: 'flex-start',
    marginVertical: 5,
    marginLeft: 10
  },
  claimButton: {
    justifyContent: 'center',
    position: 'absolute',
    top: 34,
    left: 300
  },
  demo: {
    justifyContent: 'center',
    margin: 5
  }
});