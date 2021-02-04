import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, Button } from 'react-native';

export default function Ask_Volitation() {

    const [Volitats, setVolitats] = useState([
        {id: 1, usetime: 0, points: 0, words:"สู้ๆนะ"},
        {id: 2, usetime: 0, points: 0, words:"เธอทำได้"},
        {id: 3, usetime: 0, points: 0, words:"เธอเก่งมากๆเลย"},
        {id: 4, usetime: 0, points: 0, words:"เธอนี้โคตรเจ๋ง"}
    ])

    const [give_A_Point, setgive_A_Point] = useState(false)
    const [btName_1, setbtName_1] = useState("Good")
    const [btName_2, setbtName_2] = useState("Ok")
    const [btName_3, setbtName_3] = useState("Not Bad")

    
    const Random = (data) => {
        const random = data[Math.floor(Math.random()*data.length)]
        return random
    }
    
    const [Randomed, setRandomed] = useState(Random(Volitats))

    const GivePoint = (Point) => {
        setgive_A_Point(!give_A_Point);
        
        let temp = Volitats
        temp.map((volitat) => {
            if(volitat.id == Randomed.id){
                volitat.usetime = volitat.usetime+1;
                volitat.points = volitat.points+Point;
            }
        })

        setVolitats(temp)
        
    }
    
    
    return (
        <View>
            <Text>{Randomed.words}</Text>
            
            { !give_A_Point ? 
                <View style={styles.answerBox}>
                    <Text style={styles.answerText}> คุณรู้สึกอย่างไรบ้าง </Text>
                    
                    <View style={styles.answerButtom}>
                        <SafeAreaView style={styles.btn}>
                            <Button  title={btName_1}  onPress={() => GivePoint(3)} /> 
                        </SafeAreaView>
    
                        <SafeAreaView style={styles.btn}>
                            <Button  title={btName_2}  onPress={() => GivePoint(2)} /> 
                        </SafeAreaView>
    
                        <SafeAreaView style={styles.btn}>
                            <Button  title={btName_3}  onPress={() => GivePoint(1)} /> 
                        </SafeAreaView>
                    </View>
                    
                    
                        
                </View>
              :null
            }

        </View>
    );
}

const styles = StyleSheet.create({
    answerBox: {
        marginTop: 25,
        backgroundColor: "white",
        padding: 10,
        borderWidth : 3,
        borderRadius: 10,
        borderColor: 'green'
    },
    answerText: {
        textAlign: 'center',
    },
    answerButtom: {
        flexDirection:'row'
    },
    btn: {
        borderRadius:100,
        padding : 3
    }
   
});

