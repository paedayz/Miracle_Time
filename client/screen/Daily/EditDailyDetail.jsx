import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, LogBox , Platform ,TouchableOpacity, Image, ScrollView} from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'expo-image-picker';

//redux
import {useDispatch} from 'react-redux'
import {editDaily} from '../../redux/action/dailyAction'

export default function EditDailyDetail(props) {
    
    const dispatch = useDispatch()

    const { username,detail,mood,daily,image,date,createdAt,docId,name } = props.dailyData
    // console.log(name)
    const [Editname,setEditname] = useState(name)
    const [EditImgUrl,setEditImgUrl] = useState(image)
    const [EditMood,setEditMood] = useState(mood)
    const [EditDetail,setEditDetail] = useState(detail)
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
          setEditImgUrl(result.uri);
        }
      };

      const createBlob = async (uri) =>{
        const response  = await fetch(uri);
        const blob = await response.blob();
        setImageBlob(blob)
        // uploadImage(blob)
      }
    
    const onPressSubmit = () => {
        let editData = { image : EditImgUrl, name :Editname, detail:EditDetail ,mood:EditMood}
        dispatch(editDaily( editData,docId, imageBlob))
        props.closeModal()
        
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'stretch',marginTop: 470}}>

            <View style={{marginBottom:50, marginTop:130}}>
                <TouchableOpacity onPress={() => pickImage()}>
                                <Image 
                                    style={{width:280, height:200}}
                                    source={{uri: EditImgUrl}}
                                />
                                </TouchableOpacity>
                                </View>
                    
                    <View style={{width: 90, height: 15,marginTop:-15}}>
                        <Text >Daily Name :</Text>
                    </View>
                    <View style={{width: 280, height: 90}}>
                        <TextInput
                            style={styles.input}
                            placeholder='Dailyname'
                            value={Editname}
                            onChangeText={(data) => setEditname(data)}
                            >
                        </TextInput>
                    </View>

                    <View style={{width: 90, height: 15,marginTop:-15}}>
                            <Text >Your Mood :</Text>
                    </View>
                    <View style={{width: 280, height: 45, borderColor: '#ddd',marginTop:10, borderWidth: 1,borderRadius: 6,}} >
                        <RNPickerSelect 
                            placeholder={{}}
                            value={EditMood}
                            onValueChange={(data)=>{setEditMood(data)}}
                            items={[
                                { label: 'มีความสุข', value: 'happy' ,color: '#ff3399'},
                                { label: 'เฉยๆ', value: 'ok' ,color:'#F5C000' },
                                { label: 'เศร้า', value: 'sad' ,color:'#9ACEF0'},
                                { label: 'โกรธ', value: 'angry' ,color:'#E71D36'},
                            ]} />
                    </View>   
                    
                    <View style={{width: 50, height: 15 ,marginTop: 10}}>
                            <Text >Detail :</Text>
                    </View>
                    <View style={{width: 280, height: 280}}>
                            <TextInput
                                style={styles.input}
                                placeholder='detail'
                                value={EditDetail}
                                onChangeText={data => setEditDetail(data)}
                                multiline
                                numberOfLines={10}
                                >
                            </TextInput>       
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
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        fontSize: 14,
        borderRadius: 6,
        marginBottom:5,
        marginTop:10
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
        bottom:580
    },
    textstyle : {
        backgroundColor:'#ffccff',
        borderRadius: 10,
        width:80,
        padding:2
    },
    input_detail:{
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        fontSize: 14,
        borderRadius: 6,
        marginBottom:10,
        marginTop:10,
    }
})