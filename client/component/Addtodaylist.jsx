import React , { useState } from 'react'
import { StyleSheet, Text, Modal, View,Button, PickerIOSItem ,TouchableOpacity} from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'

import RNPickerSelect from 'react-native-picker-select';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'



const Addtodaylist = () => {

    const dispatch = useDispatch()
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleConfirm = (time) => {
        console.log(moment(time).format('HH:mm'))
       
        setDatePickerVisibility(false)
      };

    return (
            
        
            <Formik
                initialValues={{ Event: '', start: '',end: '',catagory:'', detail: '', key: '',rank: ''}}  
                
                onSubmit={(values) => {
                    // addtoday(values)
                    values.key = Math.random().toString()
                    dispatch({type:'ADD_EVENT', payload: values})
                    
                }}
            >
                {(props) => (
                <View >
                    <View>
                    <RNPickerSelect 
                            placeholder={{ label: "ระดับความสำคัญ", value: null }}
                            onValueChange={props.handleChange('rank')}
                            style={styles.inputAndroid}
                            
                            items={[
                                { label: 'น้อย', value: '1' },
                                { label: 'กลาง', value: '2' },
                                { label: 'มาก', value: '3' },
                            ]}
                    />
                    
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Event'
                        onChangeText={props.handleChange('Event')}
                        value={props.values.Event}
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
                        <View  style={{width: 95, height: 50}}>
                            <Button title='submit' color='#90ee90' onPress={props.handleSubmit}></Button>
                        </View>
                        
                        <View style={{ width: 95, height: 50, value: null}}>
                        <Button title="Show Date Picker" onPress={()=> setDatePickerVisibility(true)} />
                            <DateTimePickerModal
                                
                                isVisible={isDatePickerVisible}
                                mode="time"
                                onConfirm={handleConfirm}
                                onCancel={()=> setDatePickerVisibility(false)}
                            />
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
        marginTop:20,
        
    },
    container:{
        flex:1,
        
    },
    inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
})
