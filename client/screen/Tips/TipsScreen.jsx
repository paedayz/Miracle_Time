import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function TipsScreen({navigation}) {
    return (
    <View style={styles.main}>
        <TouchableOpacity  onPress={() => navigation.navigate('Tip #1')}>
            <View style={styles.container}>
                <View><Text>IMG</Text></View>
                <View >
                    <Text style={styles.headtext}>Tip #1 :</Text>
                    <Text style={styles.contenttext}>Test</Text>
                </View>                    
            </View>
        </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'center', 
    },
    container: {
      backgroundColor: 'red',
      flexDirection: 'row',
      backgroundColor: '#fff',
      shadowOffset: { width: 1 , height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 8,
      
    },
    headtext: {
        fontSize: 28,
        fontWeight:'bold',           
    },
    contenttext: {
        fontSize: 26,
    }
  });