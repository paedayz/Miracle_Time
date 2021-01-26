import React, {useState, Fragment, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {Calendar} from 'react-native-calendars';

// Redux
import {useSelector} from 'react-redux'

const CalendarsScreen = ({navigation}) => {
  const now = new Date()
  const userEvents = useSelector(state => state.data.events)
  const [isData, setIsdata] = useState(true)
  const [data, setData] = useState({})
  console.log(userEvents)
  // let markedData = {
  //   '2021-01-25': {
  //     selected: true,
  //     dots: [
  //       {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
  //       {key: 'massage', color: 'red', selectedDotColor: 'white'},
  //     ]
  //   },
  //   '2021-01-27': {
  //     disabled: true,
  //     dots: [
  //       {key: 'vacation', color: 'green', selectedDotColor: 'red'},
  //       {key: 'massage', color: 'red', selectedDotColor: 'green'}
  //     ]
  //   }
  // }

  useEffect(() => {
    let markedData = {}
    userEvents.map((event) => {
      let day = event.date.toString()
        if(event.success) {
          markedData[day] = {
            selected: false,
            dots: [
              {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
            ]
          }
        } else {
          markedData[day] = {
            selected: false,
            dots: [
              {key: 'vacation', color: 'red', selectedDotColor: 'red'},
            ]
          }
        }
      if(Object.keys(markedData).length !== 0) {
        setIsdata(true)
        setData(markedData)
      } else {
        setIsdata(true)
      }
    })
  },[])

  if(isData) {
    return (
      <Fragment>
        <Calendar
          style={styles.calendar}
          current={now}
          markingType={'multi-dot'}
          markedDates={data}
          onDayPress={(day) => {navigation.navigate('TodayList',{date:day.dateString}) }}
        />
      </Fragment>
    );
  } else {
    return (
      <SafeAreaView>
        <Text>Loading</Text>
      </SafeAreaView>
    )
  }

  

};

export default CalendarsScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  }
});
