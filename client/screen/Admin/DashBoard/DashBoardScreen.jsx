import React, {useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

// Component
import BrushLineGraph from './BrushLineGraph'
import EventDataTable from './EventDataTable'

// Redux
import {useDispatch, useSelector} from 'react-redux'
import {getAdminDashBoard} from '../../../redux/action/dataAction'

export default function App({navigation}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAdminDashBoard())
    },[])
      return (
        <SafeAreaView styles={styles.container}>
          <Text>Graph</Text>
          <BrushLineGraph/>
          <Text>Detail</Text>
          <EventDataTable/>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });