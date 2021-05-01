import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Redux
import {useDispatch} from 'react-redux'
import {acceptFriendRequest, deniedFriendRequest} from '../../redux/action/friendAction'

export default function RequestList({ data, setIsList }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const onClickAccept = () => {
    dispatch(acceptFriendRequest(data.docId, data.username, setIsList))
  }

  const onClickDenied = () => {
    dispatch(deniedFriendRequest(data.docId, data.username))
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FriendProfile", data);
        }}
      >
        <View style={styles.box}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                source={{
                  uri: `${data.userImage}`,
                }}
              />
            </View>
            <View style={styles.responsiveBox}>
            <View style={styles.text}>
              <View style={{ flexDirection: "column" }}>
                <View style={{flexDirection: "row" }}>
                  <Text style={styles.title}>{data.nickname}</Text>
                  <Text style={{ marginLeft: 5, marginTop: 3 }}>
                    Lv.{data.level}
                  </Text>
                  </View>
                </View>
                <View>
                  <Text>@{data.username}</Text>
                </View>
              </View>
            </View>

            <View style={{marginTop:10}}>
                <Button onPress={() => onClickAccept()} title="Accept"/>
            </View>

            <View style={{marginTop:10, marginLeft:10}}>
                <Button onPress={() => onClickDenied()} color='red' title="Denied"/>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 16,
    flexDirection: "row",
    width: 410,
    marginLeft: 0,
  },
  title: {
    fontSize: 17.5,
    fontWeight: "bold",
  },
  text: {
    marginLeft: 15,
  },
  responsiveBox: {
    width: wp('29%'),
    flexDirection: 'column',
  },
});
