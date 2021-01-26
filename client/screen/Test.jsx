import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button, Alert,View} from 'react-native';

export default function App() {

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.button}>
          <Button
            color="orange"
            title="Test"
          />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  button: {
    marginTop: 50
  }
});