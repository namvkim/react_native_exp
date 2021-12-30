import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeScreen = () => (
    <View>
        <Text>home</Text>
    </View>
)

const MyProfile = () => (
    <View>
        <Text>MyProfile</Text>
    </View>
)

export default function componentName() {
    // const Drawer = createDrawerNavigator();

    return (
        // <NavigationContainer initialRouteName={Home}>
        //     {/* <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
        //     <Drawer.Screen name='MyProfile' component={MyProfile}></Drawer.Screen> */}
        //     <Text>â</Text>

        // </NavigationContainer>
        <Text>aa</Text>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})