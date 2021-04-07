import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity,Image} from 'react-native';


export default function Shopscreen({navigation}) {
    return (
    <View style={styles.main}>
        
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
      maxWidth: '95%',
      alignItems: 'center',
      padding: 12,
      marginVertical:'2%'
    }
  });