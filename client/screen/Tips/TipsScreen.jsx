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
                        source={require('../../assets/Tip_pic/test-logo.png')}
                    />
                </View >
                <View style={styles.text_box}>
                    <Text style={styles.headtext}>Tip #1 :</Text>
                    <Text style={styles.contenttext}>10 วิธีจัดการเวลา ให้คุณจัดการสิ่งต่างๆ ได้อย่างมีประสิทธิภาพ</Text>
                </View>                    
            </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigation.navigate('Tip #2')}>
            <View style={styles.container}>
                <View style={styles.img_box}>
                    <Image  
                        style={{width: 60, height: 60 }}
                        source={require('../../assets/Tip_pic/test-logo.png')}
                    />
                </View >
                <View style={styles.text_box}>
                    <Text style={styles.headtext}>Tip #2 :</Text>
                    <Text style={styles.contenttext}>7 วิธี ที่จะทำให้คุณเลิกเป็นคนฟุ้งซ่าน คิดมาก ขี้กังวล</Text>
                </View>                    
            </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigation.navigate('Tip #3')}>
            <View style={styles.container}>
                <View style={styles.img_box}>
                    <Image  
                        style={{width: 60, height: 60 }}
                        source={require('../../assets/Tip_pic/test-logo.png')}
                    />
                </View >
                <View style={styles.text_box}>
                    <Text style={styles.headtext}>Tip #3 :</Text>
                    <Text style={styles.contenttext}>ทำไม “ทัศนคติ” ถึงมีความสำคัญมากกว่า “ความฉลาดทางปัญญา(IQ)” ? </Text>
                </View>                    
            </View>
        </TouchableOpacity>
        {/* <Image  
            style={{width: 200, height: 200 ,resizeMode: 'stretch'}}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        /> */}
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