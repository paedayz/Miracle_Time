import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-elements';

// Redux
import {useDispatch, useSelector} from "react-redux"
import {login, register} from "../../redux/action/userAction"
import {doQuest} from "../../redux/action/dataAction"

export function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const onSignUp = () => {
        let userData = {
            email : email,
            password : password
        }
        dispatch(doQuest('login'))
        dispatch(login(userData))
    }

    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Miracle time</Text>
            <TextInput style={styles.input}
                placeholder=" Email"
                keyboardType="email-address"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput style={styles.input}
                placeholder=" Password"
                secureTextEntry={true}
                onChangeText={(password) =>setPassword(password)}
            />

            <View style={styles.button}>
                <Button
                    onPress={() => onSignUp()}
                    title="Log In"
                    buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
                />
            </View>
        </View>
    )
    
}

export function Register({setMode}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUsername] = useState('')
    const [nickname, setNickname] = useState('')

    const dispatch = useDispatch()
    const onSignUp = () => {
        let userData = {
            email : email,
            password : password,
            username : userName,
            nickname : nickname
        }
        
        dispatch(register(userData, setMode))
    }

    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Miracle time</Text>
            <TextInput  style={styles.input}
                placeholder=" Email"
                keyboardType="email-address"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput  style={styles.input}
                placeholder=" Password"
                secureTextEntry={true}
                onChangeText={(password) =>setPassword(password)}
            />
            <TextInput  style={styles.input}
                placeholder=" Username"
                onChangeText={(username) =>setUsername(username)}
            />
            <TextInput  style={styles.input}
                placeholder=" Nickname"
                onChangeText={(nickname) =>setNickname(nickname)}
            />

            <View style={styles.button}>
                <Button 
                    onPress={() => onSignUp()}
                    title="Register"
                    buttonStyle = {{backgroundColor: '#738FD9', borderRadius: 10}}
                />
            </View>
        </View>
    )
    
}

export default function auth() {
    const [mode, setMode] = useState(true)
    const error = useSelector(state => state.system.error)
    const dispatch = useDispatch()
    if(error) {
        Alert.alert(
            "Alert !!",
            error,
            [
                { text: "OK", onPress: () => dispatch({type: 'CLEAR_ERROR'}) }
              ],
          );
    }

    const changeMode = () => {
        setMode(!mode)
    }

    if(mode) {
        return (
            <View style={styles.footerView}>
                <Login/>
                <Text style={styles.text}>Don't have an account?</Text>
                <Text style={styles.footerText} 
                onPress={() => changeMode()}>Register</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.footerView}>
                <Register setMode={setMode}/>
                <Text style={styles.text}>Have an account?</Text>
                <Text style={styles.footerText} 
                onPress={() => changeMode()}>Log in</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#738FD9',
        marginBottom: 30,
    },
    headerView: {
        marginTop:150,
        justifyContent: 'center'
    },
    input: {
        marginHorizontal: 60,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#f2f2f2',
        padding: 5
    },
    button: {
        marginHorizontal: 120,
        marginVertical: 15,
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#738FD9',
    },
    footerView: {
        justifyContent: 'center'
    }
  });