import React, {useState, Fragment} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';


const CalendarsScreen = () => {
  const [selected, setSelected] = useState('');

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  const priority1 = {key:'priority1', color: 'red'};
  const priority2 = {key:'priority2', color: '#ffcc00'};
  const priority3 = {key:'priority3', color: '#009933'};

  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <Calendar
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              dots: [priority1, priority2, priority3]
            },
          }}
          markingType={'multi-dot'}
        />
      </Fragment>
    );
  };

  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderCalendarWithSelectableDate()}
    </ScrollView>
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