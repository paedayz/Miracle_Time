import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

export default function Ask_Volitation() {

    const [Volitat, setVolitat] = useState([
        {id: 1, words:"สู้ๆนะ"},
        {id: 2, words:"เธอทำได้"},
        {id: 3, words:"เธอเก่งมากๆเลย"},
        {id: 4, words:"เธอนี้โคตรเจ๋ง"}
    ])
    const [Point, setPoint] = useState()
    const [give_A_Point, setgive_A_Point] = useState(false)

    const GivePoint = () => {
        setgive_A_Point(!give_A_Point);
    }
    const Random = (data) => {
        const random = data[Math.floor(Math.random()*data.length)]
        return random
    }

    let randomed = Random(Volitat)

    return (
        <View>
            <Text>{randomed.words}</Text>
            
            { !give_A_Point ? 
                <TouchableOpacity style={styles.button}>
                    
                    <Button color="green" title='+3'  onPress={() => GivePoint()} />  
                    <Button color="blue"  title='+2'  onPress={() => GivePoint()} />
                    <Button color="red"   title='+1'  onPress={() => GivePoint()} />
                    
                </TouchableOpacity>
              :<View></View>
            }
            {/* <Text>{Point}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      borderRadius:100
      
    },
    button2: {
      marginTop: 10,
      marginLeft: 250
    }
});

