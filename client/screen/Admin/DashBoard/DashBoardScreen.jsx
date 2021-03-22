import React, {useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

// Component
import BrushLineGraph from './BrushLineGraph'

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
          <Text>DashBoard</Text>
          <BrushLineGraph/>
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