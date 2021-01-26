import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

export default function Ask_Advice() {

    const [Advice, setAdvice] = useState([
        {id: 1, words:"อ่านหนังสือกันเถอะ"},
        {id: 2, words:"ทำการบ้านกันไหม"},
        {id: 3, words:"พักบ้างนะมานู้นน"},
        {id: 4, words:"ทำภารกิจกันไหม"}
    ])

    let randomword = Advice[Math.floor(Math.random()*Advice.length)].words

    return (
        <Text>{randomword}</Text>
    );
}

