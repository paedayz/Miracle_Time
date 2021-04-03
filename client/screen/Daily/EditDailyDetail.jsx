import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, LogBox , Platform ,KeyboardAvoidingView} from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'

//redux
import {useDispatch} from 'react-redux'
import {editDaily} from '../../redux/action/dailyAction'

export default function EditDailyDetail(props) {
    
    const dispatch = useDispatch()

    const { username,detail,mood,daily,image,date,createdAt,docId,name } = props.dailyData
    // console.log(name)
    const [Editname,setEditname] = useState(name)
    const [EditImgUrl,setEditImgUrl] = useState(image)
    const [EditDetail,setEditDetail,] = useState(detail)

    
    
    const onPressSubmit = () => {
        let editData = { image : EditImgUrl, name :Editname, detail:EditDetail }
        dispatch(editDaily( editData,docId))
        props.closeModal()
        
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'stretch',marginTop: 470}}>
                    
                    <View style={{width: 90, height: 17,marginTop:10}}>
                        <Text >Image URL :</Text>
                        
                    </View>
                    <View style={{width: 280, height: 90}}>
                        <TextInput
                            style={styles.input}
                            placeholder='Image URL'
                            value={image}
                            onChangeText={data => setEditImgUrl(data)}
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
                            value={Editname}
                            onChangeText={data => setEditname(data)}
                            >
                        </TextInput>
                    </View>
                    
                    <View style={{width: 50, height: 20 , marginTop: -20}}>
                            <Text >Detail :</Text>
                    </View>
                    
                    <View style={{width: 280, height: 90}}>
                        <KeyboardAvoidingView behavior={'height'} style={{flex:1}}>
                            <TextInput
                                style={styles.input}
                                placeholder='detail'
                                value={EditDetail}
                                onChangeText={data => setEditDetail(data)}
                                >
                            </TextInput>
                        </KeyboardAvoidingView>           
                    </View> 
                   
                    
                    <View  style={{width: 95, height: 50,alignItems:'center',marginLeft: 93,marginTop:10}}>
                            <Button 
                            title='submit' 
                            color='#29AB87'
                            buttonStyle = {{borderRadius: 10}} 
                            onPress={() => onPressSubmit()}    
                            />
                    </View>
                   
            </View>
            </View> 
    )
}
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