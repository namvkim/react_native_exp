import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

export const DrawerContent = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView>
                <View style={styles.logoBox}>
                    <Image source={require('../../assets/Logo-text.png')} ></Image>
                </View>
                <DrawerItem
                    icon={(focused) => (<Feather name="home" size={24} color={focused ? 'red' : 'black'} />)}
                    label={'Home'}
                    onPress={() => { props.navigation.navigate('HomeScreen') }}
                />
                <DrawerItem
                    icon={(focused) => (<Feather name="user" size={24} color={focused ? 'red' : 'black'} />)}
                    label={'My Profile'}
                    onPress={() => { props.navigation.navigate('MyProfileScreen') }}
                />
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoBox: {
        alignItems: 'center',
    }
})
