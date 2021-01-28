import React, {useState} from 'react'
import { StyleSheet, Text, View,Button, LogBox } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

// Redux
import { useDispatch } from 'react-redux'
import {addEvent} from '../../redux/action/dataAction'

const Addtodaylist = (props) => {

    const dispatch = useDispatch()
    
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [startTime , setStartTime] = useState('')

    const handleConfirm = (time) => {
        // console.log(moment(time).format('HH:mm')) 
        const startString = time.toLocaleTimeString()
        const hour = startString.split(':')[0]
        const minute = startString.split(':')[1]
        const result = `${hour}:${minute}`
        setStartTime(result)
        setDatePickerVisibility(false)
      };

      LogBox.ignoreAllLogs()


    return (
        
            <Formik
                initialValues={{ event: '', start: '',end: '',catagory:'', detail: '', key: '',rank: '',date: props.date, success: false}}  
                onSubmit={(values) => {
                    values.key = Math.random().toString()
                    values.start = startTime
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
                            placeholder={{ label: "ระดับความสำคัญ", value: null }}
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
                        placeholder='start'
                        onChangeText={props.handleChange('start')}
                        value={props.values.start}
                        >
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder='end'
                        onChangeText={props.handleChange('end')}
                        value={props.values.end}
                        >
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder='detail'
                        onChangeText={props.handleChange('detail')}
                        value={props.values.detail}
                        >
                    </TextInput>
                   
    
                    <View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
                        
                        
                        <View style={{ width: 95, height: 50, value: null}}>
                        <Button title="Show Date Picker" onPress={()=> setDatePickerVisibility(true)} />
                            <DateTimePickerModal
                                
                                isVisible={isDatePickerVisible}
                                mode="time"
                                onConfirm={props.handleChange('start'),handleConfirm}

                                onCancel={()=> setDatePickerVisibility(false)}
                            />
                        </View>
                        <View  style={{width: 95, height: 50}}>
                            <Button title='submit' color='#90ee90' onPress={props.handleSubmit}></Button>
                        </View>
                    </View>    
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