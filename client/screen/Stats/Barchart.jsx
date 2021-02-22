import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View, Dimensions} from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryPie, VictoryLegend, VictoryAxis } from 'victory-native';

//chartdata
const eventData = [
    {
      date : "2021-01-19",
      detail : "with family",
      event : "Running",
      key : "0.9971451494954678",
      rank : "1",
      start: "10.00",
      end: "12.00",
      total: 2,
      category: "rest"
    },
    {
      date : "2021-01-19",
      detail : "with family",
      event : "Running",
      key : "0.9971451494954678",
      rank : "1",
      start: "15.00",
      end: "18.00",
      total: 3,
      category: "work"
    },
    {
      date : "2021-01-20",
      detail : "LOL",
      event : "game",
      key : "0.9971451494954678",
      rank : "1",
      start: "00.00",
      end: "04.00",
      total: 4,
      category: "play"
    },
    {
      date : "2021-01-19",
      detail : "with family",
      event : "Running",
      key : "0.9971451494954678",
      rank : "1",
      start: "19.00",
      end: "20.00",
      total: 1,
      category: "other"
    },
    {
      date : "2021-01-21",
      detail : "1234",
      event : "running",
      key : "0.9971451494954678",
      rank : "1",
      start: "08.00",
      end: "09.00",
      total: 1,
      category: "exercire"
      },
  ];

  
  

export default function Barchart({navigation}) {
    
      return (
        <SafeAreaView style={styles.container}>
          
          <VictoryChart domainPadding={{x: 70}}>
            
            <VictoryAxis label=""/>
            <VictoryAxis 
              dependentAxis 
              label="Hours"
              style={{
                axisLabel: {
                padding: 35,
                },
              }}
            />
            <VictoryGroup offset={20}>
              <VictoryBar
                style={{ data: { fill: "#41aea9" } }}
                data={eventData}
                x="category"
                y="total"
              />
            </VictoryGroup>
          </VictoryChart>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 2/4,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});

