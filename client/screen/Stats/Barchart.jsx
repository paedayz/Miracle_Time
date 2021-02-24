import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View, Dimensions} from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryPie, VictoryLegend, VictoryAxis } from 'victory-native';
import RNPickerSelect from 'react-native-picker-select';

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

export default function Barchart({navigation, visualizeData, testPickerLabel}) {
  const [showData , setShowData] = useState(visualizeData)
  const userStartDate = useSelector((state) => state.user.userData.createdAt.split(',')[0])
  const userEventData = useSelector(state => state.data.events)
  const [pickerLabel, setPickerLabel] = useState(testPickerLabel)
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
    weekLater = new Date(weekLater.getTime() + 604800000)
    weekArray.push(weekLater)

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
    console.log(newData)

    countBarData(selectData)
  }

  
      return (
        <SafeAreaView style={styles.container}>
          <View style={{width: 280, height: 50, borderColor: '#ddd', borderWidth: 1,}}>
            <RNPickerSelect 
              value={weekSelect}
              defaultValue={weekSelect}
              onValueChange={(value) => setWeekSelect(value)}
              items={pickerLabel} />
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

