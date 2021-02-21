import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View} from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryPie } from 'victory-native';

// Navigation
import {useNavigation} from '@react-navigation/native'

//component
import Piechart from '../component/Piechart'
import Barchart from '../component/Barchart'

export default function App({navigation}) {

  const ChangetoPie = () => {
    navigation.navigate('OverallStats')
  } 
  
  const ChangetoBar = () => {
    navigation.navigate('WeeklyStats')
  } 

      return (
        <SafeAreaView style={styles.container}>
          <Piechart />          
          <View style={styles.button}>
          <Button
            color="#7eaedb"
            title="Overall stats"
            onPress={() => ChangetoPie()}
          />
          <View style={styles.space} />
          <Button
            color="#7eaedb"
            title="Weekly stats"
            onPress={() => ChangetoBar()}
          />
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  button: {
    flexDirection: "row" ,
    marginLeft: 10, 
    justifyContent: 'space-evenly'
  }
});