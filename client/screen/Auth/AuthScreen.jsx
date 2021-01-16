import React, { useState } from 'react'
import { View, Button, TextInput, Text } from 'react-native'

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
        <View style={{marginTop:30}}>
            <TextInput
                placeholder="email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) =>setPassword(password)}
            />

            <Button
                onPress={() => onSignUp()}
                title="Sign In"
            />
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
        <View style={{marginTop:30}}>
            <TextInput
                placeholder="email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) =>setPassword(password)}
            />
            <TextInput
                placeholder="username"
                onChangeText={(username) =>setUsername(username)}
            />
            <TextInput
                placeholder="nickname"
                onChangeText={(nickname) =>setNickname(nickname)}
            />

            <Button
                onPress={() => onSignUp()}
                title="Sign up"
            />
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
            <View>
                <Login/>
                <Button onPress={() => changeMode()} title="Mode" />
            </View>
        )
    } else {
        return (
            <View>
                <Register/>
                <Button onPress={() => changeMode()} title="Mode" />
            </View>
        )
    }
}