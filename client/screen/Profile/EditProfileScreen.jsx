import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';

import {Avatar, useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import * as ImagePicker from 'expo-image-picker';

import UploadImage from './TestUploadImage'

// Redux
import {useSelector} from 'react-redux'
import {uploadImage} from '../../redux/action/userAction'

export default function EditProfileScreen (){

  const {username, nickname, email, userImage, level, exp, coin, phone, bio} = useSelector(state => state.user.userData)

  const [image, setImage] = useState(userImage);
  const [imageBlob, setImageBlob] = useState()

  const [userNickname, setUserNickname] = useState(nickname)
  const [userPhone, setUserPhone] = useState(phone)
  const [userEmail, setUserEmail] = useState(email)
  const [userBio, setUserBio] = useState(bio)

  const {colors} = useTheme();

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
      aspect: [4, 3],
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

  const onSubmit = () => {
    console.log('submit')
    let userNewData = {
      nickname : userNickname,
      phone : userPhone,
      email : userEmail,
      bio : userBio
    }
   console.log(userNewData)
  }

  return (
    <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {pickImage()}}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Avatar.Image 
                    source={{uri: image}}
                    size={100}
                  />
                  <Feather name='edit' size={25} style={{position:'absolute', left:80, top:70}} />
                </View>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            @{username}
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            onChangeText={nickname => setUserNickname(nickname)}
            defaultValue={userNickname}
            placeholder="Nickname"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>

        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            onChangeText={phone => setUserPhone(phone)}
            defaultValue={userPhone}
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
          
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            onChangeText={email => setUserEmail(email)}
            defaultValue={userEmail}
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>

        <View style={styles.action}>
          <Icon name="bio" color={colors.text} size={20} />
          <TextInput
            onChangeText={bio => setUserBio(bio)}
            defaultValue={userBio}
            placeholder="Bio"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        
        <TouchableOpacity style={styles.commandButton} onPress={() => onSubmit()}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -2,
    paddingLeft: 10,
    color: '#05375a',
  },
});