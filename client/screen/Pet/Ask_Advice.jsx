import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

const Istoday_task_done = true;
const Next_Task = "do you next Task";
let num_foreach_event = "Nothing Here"; 

export default function Ask_Advice() {

    eventData.map( item => {
        countEvent(item.event)
        num_foreach_event.sort((a,b) => (a.NumberEvent < b.NumberEvent) ? 1 : ((b.NumberEvent < a.NumberEvent) ? -1 : 0))
    } )

    const Top_5_Event = num_foreach_event.slice(0,5)
    const randomEvent = Random(Top_5_Event)
    console.log("------------");
    console.log(Top_5_Event);

    const advice = Istoday_task_done ? randomEvent.Event_Name : Next_Task;

    return (
        <View>
           <Text>{advice}</Text> 
        </View>
    );
}

function Random (data) {
    const random = data[Math.floor(Math.random()*data.length)]
    return random
}

function countEvent (Event_Name) {
    if (num_foreach_event === "Nothing Here") {
        num_foreach_event = [{Event_Name :Event_Name, NumberEvent: 1}]
    }else{
        let IsPushEvent = false
        let count = num_foreach_event.length

        num_foreach_event.map(item => {
            count--;
            if(item.Event_Name == Event_Name){
                item.NumberEvent++;
                IsPushEvent = true;
            }else if( !IsPushEvent && count == 0 ){
                num_foreach_event.push({Event_Name : Event_Name, NumberEvent: 1})
            }
        })
    } 
}

const eventData = [
    { 
        date : "2021-01-19",
        detail : "with family",
        event : "Running",
        key : "1",
        rank : "2",
        start: "19.00",
        end: "20.00",
        catagory: "งาน"
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "Running",
        key : "2",
        rank : "2",
        start: "19.00",
        end: "20.00",
        catagory: "งาน"
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "Running",
        key : "3",
        rank : "4",
        start: "19.00",
        end: "20.00",
        catagory: "งาน"
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "sleep",
        key : "4",
        rank : "4",
        start: "19.00",
        end: "20.00",
        catagory: "งาน"
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "sleep",
        key : "5",
        rank : "4",
        start: "19.00",
        end: "20.00",
        catagory: "งาน"
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "sleep",
        key : "6",
        rank : "4",
        start: "19.00",
        end: "20.00",
        catagory: "งาน"
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "sleep",
        key : "3",
        rank : "4",
        start: "19.00",
        end: "20.00",
        catagory: "งาน"
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "fishing",
        key : "3",
        rank : "4",
        start: "19.00",
        end: "20.00",
        catagory: "งาน"
    }

]



