import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

// Redux
import {useDispatch} from "react-redux"
import {login, register} from "../../redux/action/userAction"

export function Login  () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const onSignUp = () => {
        let userData = {
            email : email,
            password : password
        }
        
        dispatch(login(userData))
    }

    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Miracle time</Text>
            <TextInput style={styles.input}
                placeholder=" Email"
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
                />
            </View>
        </View>
    )
    
}

export function Register() {
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
        
        dispatch(register(userData))
    }

    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Miracle time</Text>
            <TextInput  style={styles.input}
                placeholder=" Email"
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
                />
            </View>
        </View>
    )
    
}

export default function auth() {
    const [mode, setMode] = useState(true)

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
                <Register/>
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
        color: '#2289DC',
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
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#2289DC',
        marginHorizontal: 165
    },
    footerView: {
        justifyContent: 'center'
    }
  });