import React, {useState} from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet } from 'react-native';

// Component
import Piechart from './Piechart'
import Barchart from './Barchart'

export default function StatsScreen({navigation}) {
  const [isPie , setIsPie] = useState(false)

  const changeGraph = (data) => {
    setIsPie(data)
  }
    
  return (
    <SafeAreaView style={styles.container}>
      {isPie 
      ?
        <View>
          <Text style={styles.header}>Pie Chart</Text>
          <Piechart/>
        </View>
      :
        <View>
          <Text style={styles.header}>Bar Chart</Text>
          <Barchart/>
        </View>
      }
      <View style={styles.btnContainer}>
        <View style={styles.button}>
          <Button 
          title="Pie Chart" 
          color='#00D5E3' 
          onPress={() => changeGraph(true)}/>
        </View>

        <View style={styles.button}>
          <Button 
          title="Bar Chart" 
          color='#00D5E3' 
          onPress={() => changeGraph(false)}/>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10
  },
  button : {
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  btnContainer : {
    marginTop: 300
  }
});