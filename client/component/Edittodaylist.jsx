import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import { useRoute, useNavigation }  from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const Edittodaylist = () => {

    const route = useRoute() 
    const navigation = useNavigation()
    const { Event,detail,time,key } = route.params

    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{ Event: Event, time: time , detail: detail, key: key}}  
            onSubmit={(values) => {
                dispatch({type: 'SET_DATA', payload: values})
                navigation.navigate('Todaylist')
            }}
        >
        {(props) => (
        <View >
            <TextInput
                style={styles.input}
                placeholder='Event'
                onChangeText={props.handleChange('Event')}
                defaultValue={Event}
                >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder={time}
                onChangeText={props.handleChange('time')}
                defaultValue={time}
                >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder='detail'
                onChangeText={props.handleChange('detail')}
                defaultValue={detail}
                >
            </TextInput>
            
            <Button title='submit' color='maroon' onPress={props.handleSubmit}></Button>
        </View>
    )}
    </Formik>
    )
}

export default Edittodaylist

const styles = StyleSheet.create({
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 20,
        fontSize: 18,
        borderRadius: 6
    },
    container:{
        flex:1,
        padding:50
    }
})
