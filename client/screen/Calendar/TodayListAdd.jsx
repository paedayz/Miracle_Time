import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';


const Addtodaylist = (props) => {

    const dispatch = useDispatch()

    return (
        
            <Formik
                initialValues={{ Event: '', time: '', detail: '', key: '',rank: ''}}  
                onSubmit={(values) => {
                    // addtoday(values)
                    values.key = Math.random().toString()
                    dispatch({type:'ADD_EVENT', payload: values})
                    {console.log(values.rank)}
                    props.setModalOpen(false)
                }}
            >
                {(props) => (
                <View >
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
                        onChangeText={props.handleChange('Event')}
                        value={props.values.Event}
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