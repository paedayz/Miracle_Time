import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View} from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryPie } from 'victory-native';

//chartgraphic
const graphicData = [{ y: 40, x: 'work' }, { y: 20, x: 'play' }, { y: 30, x: 'rest' }, { y: 10, x: 'other' }];
const graphicColor = ['#008891', '#41aea9', '#a8dda8', '#d2f5e3', '#2ec1ac', "#ade498" ];



export default function App({navigation}) {
    
      return (
        <SafeAreaView style={styles.container}>
            <VictoryPie 
                data={graphicData} 
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
    flex: 2/4,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});