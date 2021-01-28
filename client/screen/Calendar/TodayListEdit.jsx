import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import { useRoute, useNavigation }  from '@react-navigation/native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {editEvent} from '../../redux/action/dataAction'

const Edittodaylist = () => {

    const route = useRoute() 
    const navigation = useNavigation()
    const { Event,detail,start,end,key } = route.params

    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{ Event: Event, start:start, end:end , detail: detail, key: key}}  
            onSubmit={(values) => {
                // dispatch(editEvent(values))
                // navigation.navigate('TodayList')
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
                placeholder={start}
                onChangeText={props.handleChange('start')}
                defaultValue={start}
                >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder={end}
                onChangeText={props.handleChange('end')}
                defaultValue={end}
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