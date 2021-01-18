import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

// Component
import Calendar from './Calendar'

// Redux
import {useSelector, useDispatch} from "react-redux"
import {getAllEvents} from "../../redux/action/dataAction"

export default function CalendarScreen({navigation}) {
  const dispatch = useDispatch()
  const userEventdata = useSelector(state => state.data.events)
  
  useEffect(() => {
    if(userEventdata.length === 0){
      dispatch(getAllEvents())
    }
    
  }, [])
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Calendar userEventdata={userEventdata} navigation={navigation} />
        </SafeAreaView>
      );
}