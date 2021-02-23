import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View} from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryPie } from 'victory-native';

// Redux
import {useSelector} from 'react-redux'

//chartgraphic
const graphicData = [{ y: 40, x: 'loading' }];
const graphicColor = ['#008891', '#41aea9', '#a8dda8', '#d2f5e3', '#2ec1ac', "#ade498" ];

export default function Piechart({navigation}) {
  const [visualizeData , setVisualizeData] = useState(graphicData)
  const userEventData = useSelector(state => state.data.events)

  useEffect(() => {
    countData()
  },[])

  const countData = () => {
    let eventTotal = []
    userEventData.map((event, num) => {
      if(eventTotal.length !== 0) {
        let flag = 0
        let position = 0
        let cat = ""
        let totalNow = 0
        eventTotal.map((data, index) => {
          if(data.x === event.catagory) {
            flag = 1
            position = index
            cat = data.x
            totalNow = data.y + 1
          }
        })

        if(flag==1) {
          eventTotal[position] = {x: cat, y: totalNow}
        } else {
          eventTotal.push({y: 1, x: event.catagory})
        }

      } else {
        eventTotal.push({y: 1, x: event.catagory})
      }
    })

    setVisualizeData(eventTotal)
    
  }
      return (
        <SafeAreaView style={styles.container}>
            <VictoryPie 
                data={visualizeData} 
                width={330} 
                height={330} 
                colorScale={graphicColor} 
                innerRadius={85} 
                labels={({ datum }) => `${datum.x}`}
            />
        </SafeAreaView>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 30
  },
});