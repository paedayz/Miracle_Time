import React, {useState, Fragment} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';

// Redux
import {useSelector} from 'react-redux'

const CalendarsScreen = ({navigation}) => {
  const now = new Date()
  const userEvents = useSelector(state => state.data.events)
  let markedData = {
    '2021-01-25': {
      selected: true,
      dots: [
        {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
        {key: 'massage', color: 'red', selectedDotColor: 'white'},
      ]
    },
    '2021-01-27': {
      disabled: true,
      dots: [
        {key: 'vacation', color: 'green', selectedDotColor: 'red'},
        {key: 'massage', color: 'red', selectedDotColor: 'green'}
      ]
    }
  }
  
  markedData['2021-01-28'] = {
    selected: true,
      dots: [
        {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
        {key: 'massage', color: 'red', selectedDotColor: 'white'},
      ]
  }

  return (
    <Fragment>
      <Calendar
        style={styles.calendar}
        current={now}
        markingType={'multi-dot'}
        markedDates={markedData}
        onDayPress={(day) => {navigation.navigate('TodayList',{date:day.dateString}) }}
      />
    </Fragment>
  );

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
