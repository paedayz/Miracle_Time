import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet } from 'react-native';

// Component
import Piechart from './Piechart'
import Barchart from './Barchart'

// Redux
import {useSelector} from 'react-redux'

export default function StatsScreen({navigation}) {
  const [isPie , setIsPie] = useState(true)
  const [visualizeBarData , setVisualizeBarData] = useState()
  const userEventData = useSelector(state => state.data.events)

  useEffect(() => {
    countBarData()
  },[])

  const countBarData = () => {
    let eventTotal = []
    userEventData.map((event, num) => {
      if(eventTotal.length !== 0) {
        let flag = 0
        let position = 0
        let cat = ""
        let totalNow = 0
        eventTotal.map((data, index) => {
          if(data.category === event.catagory) {
            flag = 1
            position = index
            cat = data.category
            totalNow = data.total + 1
          }
        })

        if(flag==1) {
          eventTotal[position] = {category: cat, total: totalNow}
        } else {
          eventTotal.push({total: 1, category: event.catagory})
        }

      } else {
        eventTotal.push({total: 1, category: event.catagory})
      }
    })

    setVisualizeBarData(eventTotal)
    
  }

  const changeGraph = (data) => {
    setIsPie(data)
  }
    
  return (
    <SafeAreaView style={styles.container}>
      {isPie 
      ?
        <View>
          <Text style={styles.header}>Pie Chart</Text>
          <Piechart/>
        </View>
      :
        <View>
          <Text style={styles.header}>Bar Chart</Text>
          <Barchart visualizeData={visualizeBarData}/>
        </View>
      }
      <View style={styles.btnContainer}>
        <View style={styles.button}>
          <Button 
          title="Pie Chart" 
          color='#00D5E3' 
          onPress={() => changeGraph(true)}/>
        </View>

        <View style={styles.button}>
          <Button 
          title="Bar Chart" 
          color='#00D5E3' 
          onPress={() => changeGraph(false)}/>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10
  },
  button : {
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  btnContainer : {
    marginTop: 300
  }
});