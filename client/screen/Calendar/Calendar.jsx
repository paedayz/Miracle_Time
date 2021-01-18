import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: {},
        todayDate : this.timeToString(new Date()),
        userEventdata: this.props.userEventdata,
        eventLength: this.props.userEventdata.length
      };

    this.props.userEventdata.map((item) => {
        if(!this.state.items[item.date]) {
            this.state.items[item.date] = []
        }
        this.state.items[item.date].push({
            height: 80,
            event: item.event,
            date: item.date,
            time: item.time,
            detail: item.detail,
            rank: item.rank,
            key: item.key
        })
    })
    
  }
  render() {
    if (this.state.eventLength < this.props.userEventdata.length){
      const newData = this.props.userEventdata[this.props.userEventdata.length - 1]
      const newDataDate = newData.date
      this.state.items[newDataDate].push({
        height: 80,
        event: newData.event,
        date: newData.date,
        time: newData.time,
        detail: newData.detail,
        rank: newData.rank,
        key: newData.key
      })
      this.setState({eventLength : this.state.eventLength+1})
    }
    
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={`${this.state.todayDate}`}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
    );
  }


  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, {height: item.height}]}
        onPress={() => this.props.navigation.navigate('TodayList', item)}
      >
        <Text>{item.time}</Text>
        <Text>{item.event}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate(item) {
    let date = this.timeToString(item)
    let data = {
      date: date
    }
    return (
      <TouchableOpacity
        style={[styles.item, {height: 20, backgroundColor: '#EBEBEB'}]}
        onPress={() => this.props.navigation.navigate('TodayList', data)}
      >
        <View style={styles.emptyDate}>
          <Text>This is empty date!</Text>
        </View>
      </TouchableOpacity>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.event !== r2.event;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
    color: 'green'
  }
});
