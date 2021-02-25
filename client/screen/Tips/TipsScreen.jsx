import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity,Image} from 'react-native';


export default function TipsScreen({navigation}) {
    return (
    <View style={styles.main}>
        <TouchableOpacity  onPress={() => navigation.navigate('Tip #1')}>
            <View style={styles.container}>
                <View style={styles.img_box}>
                    <Image  
                        style={{width: 60, height: 60 }}
                        source={{
                        uri: 'https://apollo.imgix.net/content/uploads/2016/05/3-1.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=1025&h=685',
                        }}
                    />
                </View >
                <View style={styles.text_box}>
                    <Text style={styles.headtext}>Tip #1 :</Text>
                    <Text style={styles.contenttext}>10 วิธีจัดการเวลา ให้คุณจัดการสิ่งต่างๆ ได้อย่างมีประสิทธิภาพ</Text>
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
      maxWidth: '95%',
      alignItems: 'center',
      padding: 12,
      marginVertical:'2%'
    },
    headtext: {
        fontSize: 20,
        fontWeight:'bold',           
    },
    contenttext: {
        fontSize: 18,
    },
    text_box:{
        maxWidth: '85%',
        marginLeft:'2%',
        marginRight:'1%',
    },
    img_box:{
        
    }
  });