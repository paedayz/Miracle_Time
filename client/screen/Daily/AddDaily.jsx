import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, LogBox , Platform ,KeyboardAvoidingView} from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

// Redux
import { useDispatch } from 'react-redux'
import { addDaily } from '../../redux/action/dailyAction'

const Adddaily = (props) => {

    const dispatch = useDispatch()
    const [AddMood, setAddMood] = useState()

      LogBox.ignoreAllLogs()
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{mood:'',detail:'',name:'',image:''}}  
                onSubmit={(values) => {
                    // values.key = Math.random().toString()
                    // values.start = startTime
                    // values.end = endTime
                    // dispatch(addEvent(values))
                    // dispatch(doQuest('createEvent'))
                    // props.setModalOpen(false)

                    values.mood = AddMood

                    dispatch(addDaily(values))
                }}
            >
                {(props) => (
                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',marginTop: 400}}>
                    
                        <View style={{width: 90, height: 17,marginTop:10}}>
                            <Text >Image URL :</Text>
                        </View>
                        <View style={{width: 280, height: 90}}>
                            <TextInput
                                style={styles.input}
                                placeholder='Image URL'
                                onChangeText={props.handleChange('image')}
                                value={props.values.image}
                                >
                            </TextInput>
                        </View>
                        
                        <View style={{width: 90, height: 17,marginTop:-15}}>
                            <Text >Daily Name :</Text>
                        </View>
                        <View style={{width: 280, height: 90}}>
                            <TextInput
                                style={styles.input}
                                placeholder='Dailyname'
                                onChangeText={props.handleChange('name')}
                                value={props.values.name}
                                >
                            </TextInput>
                        </View>

                        <View style={{width: 90, height: 17,marginTop:-10}}>
                            <Text >Your Mood :</Text>
                        </View>
                        <View style={{width: 280, height: 50, borderColor: '#ddd', borderWidth: 1,}} >
                            <RNPickerSelect 
                                placeholder={{}}
                                value={AddMood}
                                onValueChange={(data)=>{setAddMood(data)}}
                                items={[
                                    { label: 'มีความสุข', value: 'happy' ,color: '#ff3399'},
                                    { label: 'เฉยๆ', value: 'ok' ,color:'#F5C000' },
                                    { label: 'เศร้า', value: 'sad' ,color:'#9ACEF0'},
                                    { label: 'โกรธ', value: 'angry' ,color:'#E71D36'},
                                ]} />
                        </View>          
            
                        <View style={{width: 50, height: 20 , marginTop: -7}}>
                            <Text >Detail :</Text>
                        </View>
                        
                        <View style={{width: 280, height: 90}}>
                            <KeyboardAvoidingView behavior={'height'} style={{flex:1}}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='detail'
                                    onChangeText={props.handleChange('detail')}
                                    value={props.values.detail}
                                    >
                                </TextInput>
                            </KeyboardAvoidingView>           
                        </View> 
                       
                        
                        <View  style={{width: 95, height: 50,alignItems:'center',marginLeft: 93,marginTop:10}}>
                                <Button 
                                title='submit' 
                                color='#29AB87'
                                buttonStyle = {{borderRadius: 10}} 
                                onPress={props.handleSubmit}></Button>
                        </View>
                       
                </View>
            )}
            </Formik>

       </View>      
    )
}
export default Adddaily

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
    },
    textstyle : {
        backgroundColor:'#ffccff',
        borderRadius: 10,
        width:80,
        padding:2
    }
})