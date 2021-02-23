import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View, Dimensions} from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryPie, VictoryLegend, VictoryAxis } from 'victory-native';

// Redux
import {useSelector} from 'react-redux'

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
      total: 0,
      category: "rest"
    }
  ];

export default function Barchart({navigation, visualizeData}) {
  const [showData , setShowData] = useState(visualizeData)

      return (
        <SafeAreaView style={styles.container}>
          
          <VictoryChart domainPadding={{x: 70}}>
            
            <VictoryAxis label=""/>
            <VictoryAxis 
              dependentAxis 
              label="amount"
              style={{
                axisLabel: {
                padding: 35,
                },
              }}
            />
            <VictoryGroup offset={20}>
              <VictoryBar
                style={{ data: { fill: "#41aea9" } }}
                data={showData}
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

