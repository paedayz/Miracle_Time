import React, {useState} from 'react'
import { StyleSheet, Text, View,Button, LogBox } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

// Redux
import { useDispatch } from 'react-redux'
import {addEvent} from '../../redux/action/dataAction'

const Addtodaylist = (props) => {

    const dispatch = useDispatch()
    
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [startTime , setStartTime] = useState('00:00')

    const [endTime , setEndTime] = useState('00:00')

    const starthandleConfirm = (time) => {
        // console.log(moment(time).format('HH:mm')) 
        // const startString = time.toLocaleTimeString()
        // const hour = startString.split(':')[0]
        // const minute = startString.split(':')[1]
        // const result = `${hour}:${minute}`
        const result = moment(time).format('HH:mm')
        setStartTime(result)
        console.log('-----start-----',result)
        setDatePickerVisibility(false)
      };
    const endhandleConfirm = (time) => {
        // console.log(moment(time).format('HH:mm')) 
        // const startString = time.toLocaleTimeString()
        // const hour = startString.split(':')[0]
        // const minute = startString.split(':')[1]
        // const result = `${hour}:${minute}`
        const result = moment(time).format('HH:mm')
        setEndTime(result)
        console.log('-----end-----',result)
        setDatePickerVisibility(false)
      };

      LogBox.ignoreAllLogs()


    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ event: '', start: '',end: '',catagory:'', detail: '', key: '',rank: '',date: props.date, success: false}}  
                onSubmit={(values) => {
                    values.key = Math.random().toString()
                    values.start = startTime
                    values.end = endTime
                    dispatch(addEvent(values))
                    props.setModalOpen(false)
                }}
            >
                {(props) => (
                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'stretch',marginTop: 470}}>
                    
                        <View >
                            <TextInput
                                style={{height:0,width:0}}
                                placeholder='Date'
                                onChangeText={props.handleChange('date')}
                                value={props.values.date}
                                editable={false}
                                >
                            </TextInput>
                        </View>
                        <View style={{width: 50, height: 30,marginTop:60}}>
                            <Text>Rank :</Text>
                        </View>
                        <View style={{width: 280, height: 50, borderColor: '#ddd', borderWidth: 1,}} >
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
                        </View>
                        <View style={{width: 70, height: 30,marginTop:5}}>
                            <Text>catagory :</Text>
                        </View>
                        <View style={{width: 280, height: 50, borderColor: '#ddd', borderWidth: 1,}} >
                            <RNPickerSelect 
                                    placeholder={{ label: "catagory", value: null }}
                                    onValueChange={props.handleChange('catagory')}
                                    style={styles.input}
                                    items={[
                                        { label: 'งาน', value: 'งาน' },
                                        { label: 'ทั่วไป', value: 'ทั่วไป' },
                                        { label: 'นัดสำคัญ', value: 'นัดสำคัญ' },
                                    ]}
                            />
                        </View>
                        <View style={{width: 50, height: 17,marginTop:10}}>
                            <Text>Event :</Text>
                        </View>
                        <View style={{width: 280, height: 90}}>
                            <TextInput
                                style={styles.input}
                                placeholder='Event'
                                onChangeText={props.handleChange('event')}
                                value={props.values.event}
                                >
                            </TextInput>
                        </View>
                        

                        <View style={{flexDirection: 'row',height:20,marginTop:-20}}>
                            <View style={{width: 50, height: 30}}>
                                <Text>Start :</Text>
                            </View>
                            <View style={{width: 50, height: 30,marginLeft:100}}>
                                <Text>End :</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row',height:90}}>
                            <View style={{width: 100, height: 90}}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='start'
                                    defaultValue={startTime}
                                    >
                                </TextInput>
                            </View>
                            <Icon 
                                name="calendar" 
                                size={30} 
                                color='gray'
                                style={{marginTop:25,marginLeft:10}}
                                onPress={()=> setDatePickerVisibility(true)}/>
                            <DateTimePickerModal
                                    
                                    isVisible={isDatePickerVisible}
                                    mode="time"
                                    onConfirm={props.handleChange('start'),starthandleConfirm}
                                    onCancel={()=> setDatePickerVisibility(false)}/>

                            <View style={{width: 100, height: 90,marginLeft:6}}> 
                                <TextInput
                                    style={styles.input}
                                    placeholder='end'
                                    defaultValue={endTime}
                                    >
                                </TextInput>   
                            </View>     
                            <Icon 
                                name="calendar" 
                                size={30} 
                                color='gray'
                                style={{marginTop:25,marginLeft:10}}
                                onPress={()=> setDatePickerVisibility(true)}/>     
                            <DateTimePickerModal
                                    
                                    isVisible={isDatePickerVisible}
                                    mode="time"
                                    onConfirm={props.handleChange('end'),endhandleConfirm}

                                    onCancel={()=> setDatePickerVisibility(false)}/>
                        </View>
                        <View style={{width: 50, height: 20 , marginTop: -20}}>
                                <Text>Detail :</Text>
                        </View>
                        <View style={{width: 280, height: 90}}>
                            <TextInput
                                style={styles.input}
                                placeholder='detail'
                                onChangeText={props.handleChange('detail')}
                                value={props.values.detail}
                                >
                            </TextInput>
                        </View>   
                        
                        <View  style={{width: 95, height: 50,alignItems:'center',marginLeft: 93,marginTop:10}}>
                                <Button title='submit' color='#90ee90' onPress={props.handleSubmit}></Button>
                        </View>
                       
                </View>
            )}
            </Formik>

       </View>      
    )
}

export default Addtodaylist

const styles = StyleSheet.create({
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        fontSize: 14,
        borderRadius: 6,
        marginBottom:10,
        marginTop:10
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})