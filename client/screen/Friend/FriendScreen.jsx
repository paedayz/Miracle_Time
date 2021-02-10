import React, {useState} from "react";
import {
  SafeAreaView,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
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

export default function FriendScreen({ navigation }) {
    const [isList, setIsList] = useState(true)

    const showPage = () => {
        if(isList) {
            return <FriendList/>
        } else {
            return <FriendRequest/>
        }
    }

  return (
    <SafeAreaView style={styles.container}>
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
  }
});
