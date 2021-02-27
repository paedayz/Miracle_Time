import React, {useState, useRef} from "react";
import {
  SafeAreaView,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Animated,
  Image
} from "react-native";

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

// Component
import FriendList from './FriendLists'
import FriendRequest from './FriendRequest'

// Redux
import {addFriend} from '../../redux/action/friendAction'
import {useDispatch, useSelector} from "react-redux"

export default function FriendScreen({ navigation }) {
    const [isList, setIsList] = useState(true)
    const [username, setUsername] = useState()

    const suc = useSelector(state => state.friend.success)
    const err = useSelector(state => state.friend.error)
    const loading = useSelector(state => state.friend.loading)


    const dispatch = useDispatch()

    const showPage = () => {
        if(isList) {
            return <FriendList/>
        } else {
            return <FriendRequest setIsList={setIsList}/>
        }
    }

    const onClickAdd = () => {
        // fadeIn()
        dispatch(addFriend(username))
        setUsername(null)
    }

    
    
    console.log('ffffffffffffffffffffff',suc)
    if(suc) {
      Alert.alert(
          "Alert !!",
          suc,
          [
              { text: "OK", onPress: () => dispatch({type: 'CLEAR_SUCCESS'}) }
            ],
        );
  }
  if(err) {
    Alert.alert(
        "Alert !!",
        err,
        [
            { text: "OK", onPress: () => dispatch({type: 'CLEAR_FRIEND_ERROR'}) }
          ],
      );
}

  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // const fadeIn = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     useNativeDriver: true
  //   }).start();

  //   setTimeout(() => {
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       useNativeDriver: true
  //     }).start();
  //   }, 290);
  // };

  if(loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View>
            <TextInput
                onChangeText={data => setUsername(data)}
                placeholder="username"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={username}
                clearButtonMode="always"
            />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginTop:17, marginLeft:30,height:10,width:45}}>
                <Button onPress={() => onClickAdd()} title="ADD"/>
              </View>
              <View style={{borderRadius:100, 
                  width:28,
                  height:28,
                  marginLeft:-29,
                  marginTop:-17}}>
                    <Image 
                      style={{width: 100, height: 100,}} 
                      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Loader.gif'}} />
                  </View>  
              
            </View>
            
            
        </View>
      <View style={styles.headerBoxWrapper}>
        <TouchableOpacity
            onPress={() => setIsList(true)}
            style={[
                styles.headerBox,
                {
                borderRightColor: "#dddddd",
                borderRightWidth: 1,
                },
            ]}
        >
          <View>
            <Title>List</Title>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsList(false)} style={styles.headerBox}>
          <View>
            <Title>Request</Title>
          </View>
        </TouchableOpacity>
      </View>

      <View>
          {showPage()}
      </View>
    </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View>
            <TextInput
                onChangeText={data => setUsername(data)}
                placeholder="username"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={username}
                clearButtonMode="always"
            />
            </View>
            <View style={{marginTop:17, marginLeft:30}}>
            <Button onPress={() => onClickAdd()} title="ADD" color="#738FD9" buttonStyle = {{borderRadius: 10}}/>
            </View>
            
            
        </View>
      <View style={styles.headerBoxWrapper}>
        <TouchableOpacity
            onPress={() => setIsList(true)}
            style={[
                styles.headerBox,
                {
                borderRightColor: "#dddddd",
                borderRightWidth: 1,
                backgroundColor: '#738FD9'
                },
            ]}
        >
          <Title style={{color: 'white'}}>List</Title>
        </TouchableOpacity>
        :
        <TouchableOpacity
            onPress={() => setIsList(true)}
            style={[
                styles.headerBox,
                {
                borderRightColor: "#dddddd",
                borderRightWidth: 1,
                },
            ]}
        >
          <Title>List</Title>
        </TouchableOpacity>
      }
        {!isList 
          ?
        <TouchableOpacity 
          onPress={() => setIsList(false)} 
          style={[
            styles.headerBox,
            {
            backgroundColor: '#738FD9'
            },
          ]}
        >
          <View>
            <Title>List</Title>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsList(false)} style={styles.headerBox}>
          <View>
            <Title>Request</Title>
          </View>
        </TouchableOpacity>
      </View>

      <View>
          {showPage()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderColor: "#dddddd",
    borderWidth: 1,
    flexDirection: "row",
    height: 50,
  },
  headerBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -2,
    paddingLeft: 10,
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    maxWidth: 200,
    minWidth: 200
  },
});
