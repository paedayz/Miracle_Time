import React, { useState, Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Badge, withBadge } from "react-native-elements";
import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

// Component
import Notifications from '../../component/Notifications'

// Screen
import CalendarScreen from "./CalendarScreen";
import TodayListsScreen from "./TodayLists";
import TodayListDetailScreen from "./TodayListDetail";

const CalendarStack = createStackNavigator();

const CalendarStackScreen = ({ navigation }) => {
  const [isNoti, setIsNoti] = useState(true);

  const renderNotification = (
    <Fragment>
      {isNoti ? (
        <View>
          <Icon.Button
            name="notifications"
            size={25}
            backgroundColor="#fff"
            color="black"
            onPress={() => {}}
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
          onPress={() => {}}
        />
      )}
    </Fragment>
  );

  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "Calendar",
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={20}
              backgroundColor="#fff"
              color="black"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => <Notifications/>,
        }}
      />
      <CalendarStack.Screen name="TodayList" component={TodayListsScreen} />
      <CalendarStack.Screen
        name="TodayListDetail"
        component={TodayListDetailScreen}
      />
    </CalendarStack.Navigator>
  );
};

export default CalendarStackScreen;
