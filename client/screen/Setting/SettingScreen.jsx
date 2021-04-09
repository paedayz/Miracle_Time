import React , {useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity,Image, FlatList} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import Icon from "react-native-vector-icons/AntDesign";

// Theme
import {themes} from '../../utils/Theme'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {setSelectMood, selectTheme} from '../../redux/action/userAction'

export default function SettingScreen({navigation}) {

    const setting = useSelector((state) => state.user.setting)
    const buy_theme = useSelector((state) => state.user.setting.buy_theme)
    const loading_select_theme = useSelector((state) => state.user.loading_select_theme)
    let current_theme = useSelector((state) => state.user.setting.current_theme)
    const [Is_Enable_HowFeel, setIs_Enable_HowFeel] = useState(setting.select_mood)

    const dispatch = useDispatch()

    navigation.addListener('focus', () => {
        dispatch({type:'SELECT_THEME_LOADING'})
        setTimeout(() => {
            dispatch({type:'SELECT_THEME_LOADING_SUCCESS'})
        }, 1000)
    });

    const SwitchMode = () => {
        setIs_Enable_HowFeel(!Is_Enable_HowFeel)
        dispatch(setSelectMood(setting.docId, !setting.select_mood))
    }

    const onclickSelectTheme = (theme_id) => {
        dispatch(selectTheme(setting.docId, theme_id))
    }

    if(!loading_select_theme)
    {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bottom_box}>
                <ToggleSwitch
                    isOn={Is_Enable_HowFeel}
                    onColor='#6CC841'
                    offColor="#9299A0"
                    label="Enable Select Emotion"
                    labelStyle={ {padding :11,fontSize: 23,color: "black", fontWeight: "900" }}
                    size="large"
                    onToggle={() => SwitchMode()}
                />
            </View>
            <View style={styles.Theme_box}>
                <Text style={styles.Text}>Your Theme</Text>
                    <FlatList
                    data={themes}
                    keyExtractor={(item) => item.THEME_NAME}
                    numColumns={2}
                    renderItem={({ item, index}) => {
                        let flag = 0
    
                        if(buy_theme){
                            buy_theme.map((theme) => {
                                if(theme === index) flag = 1
                            })
                        }
                        
                        if(current_theme === index) {
                            return (
                                <View>
                                    
                                <View style={styles.Theme}>
                                    <Image  
                                        style={{width: 120, height: 200}}
                                        source={{uri:item.THEME_THUMBNAIL}}
                                    ></Image>
                                    <Text>
                                        {item.THEME_NAME}
                                    </Text>
                                    <View style={{backgroundColor: 'rgba(255, 255, 255, 0.70)',width: 120, height: 200, position:"absolute", flex:0}}></View>
                                    <View style={{position:'absolute', left:35, top:70}}>
                                        <Icon
                                            name="checkcircle"
                                            size={50}
                                            color="#36BB58"
                                        />
                                    </View>
                                    
                                </View>
                                
                                </View>
                            )
                        } else if(item.COST === 0 || flag === 1) {
                            return (
                                <View>
                                <TouchableOpacity onPress={() => onclickSelectTheme(index)}>
                                      
                                <View style={styles.Theme}>
                                    <Image  
                                        style={{width: 120, height: 200}}
                                        source={{uri:item.THEME_THUMBNAIL}}
                                    ></Image>
                                    <Text>
                                        {item.THEME_NAME}
                                    </Text>
                                    
                                </View>
                                </TouchableOpacity> 
                                </View>
                                
                            )
                        } else {
                            return (
                                <View></View>
                            )
                        }
                    }}/>
                
            </View>
            
        </SafeAreaView>
        );
    } else {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    }
    
    
    
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor: '#fff',
        width: '98%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    bottom_box:{
        padding:7,
        borderRadius: 30,
        borderBottomWidth: 3,
          shadowOffset: { width: 1 , height:10 },
          shadowColor: '#CED4DA',
    },
    Text:{
        fontSize:26,
    },
    Theme_box:{
        margin:10,
        marginTop:20,
    },
    Theme_Img_box:{
        flex: 1,
        flexDirection: 'row',
    },
    Theme: {
        margin: 10,
    }
});