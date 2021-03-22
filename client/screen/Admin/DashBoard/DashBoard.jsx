import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

// Component
export default function DashBord({navigation}) {
      return (
        <SafeAreaView styles={styles.container}>
          <Text>DashBoard</Text>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });