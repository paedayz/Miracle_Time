import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, LogBox , Platform ,KeyboardAvoidingView, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import * as ImagePicker from 'expo-image-picker';
import {Avatar} from 'react-native-paper'

// Redux
import { useDispatch } from 'react-redux'
import { addDaily } from '../../redux/action/dailyAction'

const Adddaily = ({setModalOpen}) => {

    const dispatch = useDispatch()
    const [AddMood, setAddMood] = useState('happy')
    const [image, setImage] = useState();
    const [imageBlob, setImageBlob] = useState()

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [8, 4],
          quality: 1,
        });
    
        let imageData = new FormData()
        const name = `picture.jpg`;
        if(result) {
          imageData.append("picture", {
            uri: result.uri,
            name,
            type: "image/jpg"
          });
    
          createBlob(result.uri)
        }
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      const createBlob = async (uri) =>{
        const response  = await fetch(uri);
        const blob = await response.blob();
        setImageBlob(blob)
        // uploadImage(blob)
      }

      LogBox.ignoreAllLogs()
    return (
        <ScrollView>
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
                    setModalOpen(false)
                    dispatch(addDaily(values, imageBlob))
                }}
            >
                {(props) => (
                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',marginTop: 400}}>
                    
                        {/* <View style={{width: 90, height: 17,marginTop:10}}>
                            <Text >Image URL :</Text>
                        </View> */}
                        {image
                        ?
                        <View style={{width: 90, height: 60,marginTop:0, marginBottom:170}}>
                        <TouchableOpacity >
                            <View
                            style={{
                                height: 300,
                                width: 100,
                            }}>
                                {image
                                ?
                                <View>
                                <Image 
                                    style={{width:280, height:200}}
                                    source={{uri: image}}
                                />
                                </View>
                                :
                                <Button title="add image" onPress={() => {pickImage()}} />
                                }
                                
                            </View>
                        </TouchableOpacity>
                        </View>
                        :
                        <View style={{width: 90, height: 60,marginTop:10}}>
                        <TouchableOpacity >
                            <View
                            style={{
                                height: 300,
                                width: 100,
                            }}>
                                
                                <Button title="add image" onPress={() => {pickImage()}} />
                                
                            </View>
                        </TouchableOpacity>
                        </View>
                        }
                        
                        {/* <View style={{width: 280, height: 90}}>
                            <TextInput
                                style={styles.input}
                                placeholder='Image URL'
                                onChangeText={props.handleChange('image')}
                                value={props.values.image}
                                >
                            </TextInput>
                        </View> */}
                        
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
            
                        <View style={{width: 50, height: 20 , marginTop: 20}}>
                            <Text >Detail :</Text>
                        </View>
                        
                        <View style={{width: 280, height: 400}}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={props.handleChange('detail')}
                                    value={props.values.detail}
                                    multiline
                                    numberOfLines={20}
                                    >
                                </TextInput>        
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
       </ScrollView> 
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
        marginTop:10,
        textAlignVertical: 'top'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        position:'relative',
        bottom: 390
    },
    textstyle : {
        backgroundColor:'#ffccff',
        borderRadius: 10,
        width:80,
        padding:2
    }
})