import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, LogBox , Platform ,KeyboardAvoidingView} from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'

export default function EditDailyDetail() {
    return (
        <View style={styles.container}>
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'stretch',marginTop: 470}}>
                    
                    <View >
                        
                        <TextInput
                            style={{height:0,width:0}}
                            placeholder='Date'
                            
                            editable={false}
                            >
                        </TextInput>
                        
                    </View>
                    <View style={{width: 90, height: 17,marginTop:10}}>
                        <Text >Image URL :</Text>
                        
                    </View>
                    <View style={{width: 280, height: 90}}>
                        <TextInput
                            style={styles.input}
                            placeholder='Image URL'
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
                                >
                            </TextInput>
                        </KeyboardAvoidingView>           
                    </View> 
                   
                    
                    <View  style={{width: 95, height: 50,alignItems:'center',marginLeft: 93,marginTop:10}}>
                            <Button 
                            title='submit' 
                            color='#29AB87'
                            buttonStyle = {{borderRadius: 10}} ></Button>
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