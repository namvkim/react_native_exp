import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './DrawerContent';
import LoginScreen from '../LoginForm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen'>
                <Stack.Screen name='DrawerScreen' component={DrawerScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='LoginScreen' component={LoginScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const DrawerScreen = (props) => {
    const [data, setData] = useState(props.route.params);

    return (
        <Drawer.Navigator
            initialRouteName='TabScreen'
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen name='TabScreen' component={TabScreen} options={{
                headerShown: false,
            }}
            />
            <Drawer.Screen name='MyProfileScreen' component={MyProfileScreen} initialParams={{ data: data }}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>Home</Text>),
                tabBarIcon: ({ focused }) => (<Feather name="home" size={24} color={focused ? 'red' : 'grey'} />),
            }} />
            <Tab.Screen name="PlantScreen" component={PlantScreen} options={{
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>Plant</Text>),
                tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name="hammer-wrench" size={24} color={focused ? 'red' : 'grey'} />),
            }} />
            <Tab.Screen name="SiteEventScreen" component={SiteEventScreen} options={{
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>Site Event</Text>),
                tabBarIcon: ({ focused }) => (<FontAwesome name="calendar-plus-o" size={24} color={focused ? 'red' : 'grey'} />),
            }} />
            <Tab.Screen name="LinkScreen" component={LinkScreen} options={{
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>Link</Text>),
                tabBarIcon: ({ focused }) => (<Entypo name="link" size={24} color={focused ? 'red' : 'grey'} />),
            }} />
            <Tab.Screen name="ContactScreen" component={ContactScreen} options={{
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>Contact</Text>),
                tabBarIcon: ({ focused }) => (<Feather name="phone" size={24} color={focused ? 'red' : 'grey'} />),
            }} />
        </Tab.Navigator>
    )
}

const HomeScreen = () => (
    <View>
        <Text>Home Screen</Text>
    </View>
)

const MyProfileScreen = (props) => {
    const data = props.route.params.data;
    return (
        <View style={{ padding: 20 }}>
            <Text>{data.email}</Text>
            <Text>{data.password}</Text>
        </View>
    )
}

const PlantScreen = () => (
    <View>
        <Text>Plant Screen</Text>
    </View>
)

const SiteEventScreen = () => (
    <View>
        <Text>Site Event</Text>
    </View>
)
const LinkScreen = () => (
    <View>
        <Text>Link Screen</Text>
    </View>
)
const ContactScreen = () => (
    <View>
        <Text>Contact Screen</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {

    }
})