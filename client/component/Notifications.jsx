import React, { useState, Fragment } from "react";
import { Avatar, Badge, withBadge } from "react-native-elements";
import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const Notifications = () => {
  const [isNoti, setIsNoti] = useState(true);
  console.log('notifications')

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
            value={3}
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

export default Notifications;
