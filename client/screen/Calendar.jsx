import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';

const testIDs = require('./testIDs');

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {}
    };
  }


  render() {
    // if(this.state.items['2021-01-16'] && this.state.items['2021-01-16'].length < 1) {
    //   let newItems = this.state.items

    //   newItems['2021-01-16'].push({
    //     name: 'Little ' + '2021-01-16' + ' #' + '1',
    //     height: Math.max(50, Math.floor(Math.random() * 150))
    //   })
      
    //   this.setState({
    //     items: newItems
    //   });
    // }
    
    return (
      <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
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
            for (let j = 1; j <= 1; j++) {
              if(this.state.items['2021-01-18']  && this.state.items['2021-01-18'].length < j){
                let newItems = this.state.items
                newItems['2021-01-18'].push({
                name: 'Item for ' + '2021-01-18' + ' #' + j,
                height: Math.max(80)
             });
              }
           }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
      
      console.log(this.state.items)
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: item.height}]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
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
    paddingTop: 30
  }
});