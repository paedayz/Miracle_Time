import React from 'react'
import {View, StyleSheet} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import {
    useTheme, 
    Avatar, 
    Title, 
    Caption, 
    Paragraph, 
    Drawer, 
    Text, 
    TouchableRipple, 
    Switch
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {signout} from '../redux/action/userAction'

export function DrawerContent(props){
    const userData = useSelector(state => state.user.userData)
    const {username, nickname, userImage, status} = userData
    const dispatch = useDispatch()

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: userImage
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{nickname}</Title>
                                <Caption style={styles.caption}>@{username}</Caption>
                            </View>
                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Calendar')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5 
                                name="user-friends" 
                                color={color}
                                size={17}
                                />
                            )}
                            label="Friend"
                            onPress={() => {props.navigation.navigate('Friend')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="crown-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Tips"
                            onPress={() => {props.navigation.navigate('Tips')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="cart" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Shop"
                            onPress={() => {props.navigation.navigate('Shop')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome 
                                name="gears" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            // onPress={() => {props.navigation.navigate('Calendar')}}
                        />
                        {status === "admin"
                        &&
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="crown-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Admin"
                            onPress={() => {props.navigation.navigate('Admin')}}
                        />
                        }
                        
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem 
                    icon={({color,size}) => (
                        <Icon 
                            name='exit-to-app'
                            color={color}
                            size={size}
                        />
                    )}
                    label='Sign Out'
                    onPress={() => {dispatch(signout())}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });