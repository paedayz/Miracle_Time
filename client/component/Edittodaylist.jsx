import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import { useRoute, useNavigation }  from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'


const Edittodaylist = () => {

    const route = useRoute() 
    const navigation = useNavigation()
    const { Event,detail,start,catagory,end,key } = route.params

    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{ Event: Event, start: start, end: end ,catagory: catagory, detail: detail, key: key}}  
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
            
            
            <View style={{flex: 1, flexDirection: 'row',justifyContent:'center',marginTop:50,}}>
              <View style={{width: 95, height: 50}}>
                    <Button title='submit' color='#90ee90' onPress={props.handleSubmit}></Button>
              </View>
              
            </View>
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
        borderRadius: 10
    },
    container:{
        flex:1,
        padding:50
    }
})
