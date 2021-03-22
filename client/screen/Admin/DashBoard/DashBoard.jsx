import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

// Component
import BrushLineGraph from './BrushLineGraph'

export default function App({navigation}) {
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