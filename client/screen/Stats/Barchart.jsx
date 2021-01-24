import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View, Dimensions} from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryPie, VictoryLegend, VictoryAxis } from 'victory-native';

//chartgraphic
const graphicData = { 
  work: [
    {x: 'Week1', y: 40},
    //{x: 'Week2', y: 20},
    //{x: 'Week3', y: 35}
  ], 
  play: [
    {x: 'Week1', y: 20},
    //{x: 'Week2', y: 4}
  ],
  rest: [
    {x: 'Week1', y: 30},
    //{x: 'Week2', y: 4}
  ],
  other: [
    {x: 'Week1', y: 10},
    //{x: 'Week2', y: 4}
  ],
};
const graphicColor = ['#008891', '#41aea9', '#a8dda8', '#d2f5e3', '#2ec1ac', "#ade498" ];

export default function Barchart({navigation}) {
    
      return (
        <SafeAreaView style={styles.container}>
          
          <VictoryChart>
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
            <VictoryGroup offset={50}>
              <VictoryBar
                data={graphicData.work}
                style={{
                  data: {
                    fill: '#008891',
                  },
                }} 
              />
              <VictoryBar
                data={graphicData.play}
                style={{
                  data: {
                    fill: '#41aea9',
                  },
                }}  
              />
              <VictoryBar
                data={graphicData.rest}
                style={{
                  data: {
                    fill: '#a8dda8',
                  },
                }}  
              />
              <VictoryBar
                data={graphicData.other}
                style={{
                  data: {
                    fill: '#d2f5e3',
                  },
                }}  
              />
            </VictoryGroup>
            <VictoryLegend
              x={Dimensions.get('screen').width / 2 - 100}
              orientation="horizontal"
              data={[
                {
                  name: 'work',
                  symbol: {
                    fill: '#008891'
                  },
                },
                {
                  name: 'play',
                  symbol: {
                    fill: '#41aea9'
                  },
                },
                {
                  name: 'rest',
                  symbol: {
                    fill: '#a8dda8'
                  },
                },
                {
                  name: 'other',
                  symbol: {
                    fill: '#d2f5e3'
                  },
                },
              ]} 
            />       
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