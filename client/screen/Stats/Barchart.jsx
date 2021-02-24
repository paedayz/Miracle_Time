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
  const userStartDate = useSelector((state) => state.user.userData.createdAt.split(',')[0])
  const userEventData = useSelector(state => state.data.events)
  const [weekSelect , setWeekSelect] = useState(0)

  useEffect(() => {
    if(weekSelect !== 0) {
      makeWeek()
    } else {
      setShowData(visualizeData)
    }
  }, [weekSelect])

  const countBarData = (selectData) => {
    let eventTotal = []
    selectData.map((event, num) => {
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

    setShowData(eventTotal)
    
  }

  const makeWeek = () => {
    let weekArray = []
    let startDate = new Date(userStartDate)
    let weekLater = new Date(startDate.getTime() + 604800000)
    let data = userEventData

    weekArray.push(startDate)
    weekArray.push(weekLater)

    let flag = 0
    while(flag === 0) {
        weekLater = new Date(weekLater.getTime() + 604800000)
        if(weekLater - new Date() < 0) {
            weekArray.push(weekLater)
        } else {
            flag = 1
        }
        
    }

    const isInWeek = (firstWeek, secondWeek, focusDate) => {
        if(firstWeek <= focusDate && focusDate < secondWeek) return true
        else return false
    }

    let weekNum

    let newData = []

    data = data.sort((a, b) => new Date(a.date) - new Date(b.date))

    data.map((event) => {
        let eventWeekNum
        let eventDate = new Date(event.date)

        weekArray.map((week, index) => {
            let flag = false
            if(index !== 0) {
                flag = isInWeek(weekArray[index - 1], weekArray[index], eventDate)
            }

            if(flag) {
                eventWeekNum = index
                event.week = eventWeekNum
                newData.push(event)
            }
        })
    })

    let selectData = []

    newData.map((event) => {
        if(event.week === weekSelect) {
            selectData.push(event)
        }
    })

    countBarData(selectData)
  }

      return (
        <SafeAreaView style={styles.container}>
          <View>
          <Button title="week 1" onPress={() => {setWeekSelect(1)}}/>
          <Button title="week 2" onPress={() => {setWeekSelect(2)}}/>
          <Button title="week 0" onPress={() => {setWeekSelect(0)}}/>
          </View>
          
          
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
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});

