import React, {useState} from 'react'
import { StyleSheet, Text, View,Button, LogBox } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import { useRoute, useNavigation }  from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {editEvent} from '../../redux/action/dataAction'

const Edittodaylist = () => {

    const route = useRoute() 
    const navigation = useNavigation()
    const { Event,detail,start,end,key } = route.params

    const dispatch = useDispatch()


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [startTime , setStartTime] = useState(start)
    const [endTime , setEndTime] = useState(end)
    const starthandleConfirm = (time) => {
        // console.log(moment(time).format('HH:mm')) 
        const startString = time.toLocaleTimeString()
        const hour = startString.split(':')[0]
        const minute = startString.split(':')[1]
        const result = `${hour}:${minute}`
        setStartTime(result)
        console.log(result)
        setDatePickerVisibility(false)
      };
    const endhandleConfirm = (time) => {
        // console.log(moment(time).format('HH:mm')) 
        const startString = time.toLocaleTimeString()
        const hour = startString.split(':')[0]
        const minute = startString.split(':')[1]
        const result = `${hour}:${minute}`
        setEndTime(result)
        console.log(result)
        setDatePickerVisibility(false)
      };

      LogBox.ignoreAllLogs()
    

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ Event: Event, start:start, end:end , detail: detail, key: key}}  
                onSubmit={(values) => {
                    // dispatch(editEvent(values))
                    // navigation.navigate('TodayList')
                }}
            >
            {(props) => (
        
    //---------------------------------------------------------------

                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'stretch',marginTop: 470}}>
                                    
                <View >
                    
                    
                </View>
                <View style={{width: 50, height: 30,marginTop:10}}>
                            <Text >Event :</Text>
                           
                </View>
                <View style={{width: 280, height: 90}}>
                    <TextInput
                        style={styles.input}
                        placeholder='Event'
                        onChangeText={props.handleChange('event')}
                        defaultValue={Event}
                        >
                    </TextInput>
                </View>
                <View style={{flexDirection: 'row',height:30,marginTop:-16}}>
                            <View style={{width: 50, height: 40}}>
                                <Text >Start :</Text>
                                
                            </View>
                            <View style={{width: 50, height: 40,marginLeft:100}}>
                                <Text >End :</Text>
                                
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
                <View style={{width: 50, height: 30 , marginTop: -15}}>
                                <Text >Detail :</Text>
                                
                </View>

                <View style={{width: 280, height: 90}}>
                    <TextInput
                        style={styles.input}
                        placeholder='detail'
                        onChangeText={props.handleChange('detail')}
                        defaultValue={detail}
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
         flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textstyle : {
        backgroundColor:'#ffccff',
        borderRadius: 10,
        width:80,
        padding:2
    }
})