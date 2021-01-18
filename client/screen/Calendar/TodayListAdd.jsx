import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';

// Redux
import { useDispatch } from 'react-redux'
import {addEvent} from '../../redux/action/dataAction'

const Addtodaylist = (props) => {

    const dispatch = useDispatch()

    return (
        
            <Formik
                initialValues={{ event: '', time: '', detail: '', key: '',rank: '',date: props.date}}  
                onSubmit={(values) => {
                    values.key = Math.random().toString()
                    dispatch(addEvent(values))
                    props.setModalOpen(false)
                }}
            >
                {(props) => (
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder='Date'
                        onChangeText={props.handleChange('date')}
                        value={props.values.date}
                        editable={false}
                        >
                    </TextInput>

                    <RNPickerSelect 
                            onValueChange={props.handleChange('rank')}
                            style={styles.input}
                            items={[
                                { label: 'น้อย', value: '1' },
                                { label: 'กลาง', value: '2' },
                                { label: 'มาก', value: '3' },
                            ]}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Event'
                        onChangeText={props.handleChange('event')}
                        value={props.values.event}
                        >
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder='time'
                        onChangeText={props.handleChange('time')}
                        value={props.values.time}
                        >
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder='detail'
                        onChangeText={props.handleChange('detail')}
                        value={props.values.detail}
                        >
                    </TextInput>
                   
    
                    <Button title='submit' color='maroon' onPress={props.handleSubmit}></Button>
                </View>
            )}
            </Formik>
             
    )
}

export default Addtodaylist

const styles = StyleSheet.create({
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 20,
        fontSize: 18,
        borderRadius: 6,
        marginBottom:10,
        marginTop:10
    },
    container:{
        flex:1,
        padding:50
    }
})