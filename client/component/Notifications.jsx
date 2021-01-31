import React, { useState, Fragment, useEffect } from "react";
import { Avatar, Badge, withBadge } from "react-native-elements";
import { Text, View, Button } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

// redux
import {useSelector, useDispatch} from 'react-redux'

export default function Notifications({navigation}) {
  const [isNoti, setIsNoti] = useState(true);
  const [test, setTest] = useState(true);
  const userNoti = useSelector(state => state.data.notifications)
  
  const [num, setNum] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setNum(userNoti.length)
  },[test])

  const addNoti = () => {
      dispatch({type:"ADD_NOTIFICATIONS"})
      setTest(!test)
  }


  return (
    <Fragment>
      {isNoti ? (
        <View>
          <Icon.Button
            name="notifications"
            size={25}
            backgroundColor="#fff"
            color="black"
            onPress={() => setIsNoti(!isNoti)}
          />

          <Badge
            value={num}
            containerStyle={{ position: "absolute", right: 9 }}
          />
        </View>
      ) : (
        <Icon.Button
          name="ios-notifications-outline"
          size={25}
          backgroundColor="#fff"
          color="black"
          onPress={() => setIsNoti(!isNoti)}
        />
      )}
    </Fragment>
  );
};
