import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

export default function Ask_Volitation() {

    const [volitat, setVolitat] = useState([
        {id: 1, words:"สู้ๆนะ"},
        {id: 2, words:"เธอทำได้"},
        {id: 3, words:"เธอเก่งมากๆเลย"},
        {id: 4, words:"เธอนี้โคตรเจ๋ง"}
    ])

    let randomword = volitat[Math.floor(Math.random()*volitat.length)].words

    return (
        <Text>{randomword}</Text>
    );
}

