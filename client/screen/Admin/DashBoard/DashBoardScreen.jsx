import React, {useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Styled from 'styled-components'

// Component
import BrushLineGraph from './BrushLineGraph'
import EventDataTable from './EventDataTable'

// Redux
import {useDispatch, useSelector} from 'react-redux'
import {getAdminDashBoard} from '../../../redux/action/dataAction'


export default function App({navigation}) {
    const dispatch = useDispatch()
    
    navigation.addListener('focus', () => {
      dispatch(getAdminDashBoard())
        
  });
      return (
        <SafeAreaView styles={styles.container}>
          <GraphHeader>Graph</GraphHeader>
          <BrushLineGraph/>
          <Text style={styles.headDetail}>Detail</Text>
          <EventDataTable/>
        </SafeAreaView>
      );
}

const GraphHeader = Styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headGraph: {
      fontSize: 25,
      marginLeft: 15,
      marginTop: 10
    },
    headDetail: {
      fontSize: 25,
      marginLeft: 15,
      marginTop: 30
    }
  });