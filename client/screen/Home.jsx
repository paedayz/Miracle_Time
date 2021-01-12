import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View} from 'react-native';

// Redux
import {useDispatch, useSelector} from 'react-redux'
import {getData} from '../redux/action/dataAction'

// Navigation
import {useNavigation} from '@react-navigation/native'


export default function App() {
  const dispatch = useDispatch()

  const navigation = useNavigation()

  const data = useSelector(state => state.data.data)

  const getDataFromServer = () => {
    console.log(data)
    console.log(data)
    dispatch(getData())
    
  }

  const GotoDetailClick = () => {
    navigation.navigate('Details')
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.button}>
          <Button
            color="orange"
            title="Get data from server"
            onPress={() => getDataFromServer()}
          />
        </View>

        <View style={styles.button}>
          <Button
            color="red"
            title="Go to Detail"
            onPress={() => GotoDetailClick()}
          />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  button: {
    marginTop: 50
  }
});
