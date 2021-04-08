import React , {useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {setSelectMood} from '../../redux/action/userAction'

export default function SettingScreen({navigation}) {

    const setting = useSelector((state) => state.user.setting)
    const [Is_Enable_HowFeel, setIs_Enable_HowFeel] = useState(setting.select_mood)

    const dispatch = useDispatch()

    const SwitchMode = () => {
        setIs_Enable_HowFeel(!Is_Enable_HowFeel)
        dispatch(setSelectMood(setting.docId, !setting.select_mood))
    }

    
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
            <SafeAreaView style={styles.Theme_Img_box}>
                <TouchableOpacity style={styles.Theme} >
                    <Image  
                        style={{width: 120, height: 200}}
                        source={require('../../assets/Theme_pic/Theme_Selected.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Theme}>
                    <Image  
                        style={{width: 120, height: 200}}
                        source={require('../../assets/Theme_pic/Theme_Idle.png')}
                    ></Image>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
        
    </SafeAreaView>
    );
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