import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import MyRecordScreen from './MyRecordScreen';

export default function TabScreen() {
    const Tab = createBottomTabNavigator();

    const Home = () => (
        <View>
            <Text>Home Screen</Text>
        </View>
    )

    const TimeSheet = () => (
        <View>
            <Text>TimeSheet Screen</Text>
        </View>
    )

    const MyProfile = () => (
        <View>
            <Text>MyProfile Screen</Text>
        </View>
    )

    return (
        <Tab.Navigator
            initialRouteName='Home'
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>Home</Text>),
                    tabBarIcon: ({ focused }) => (<Feather name="home" size={24} color={focused ? 'red' : 'grey'} />),
                }}
            />
            <Tab.Screen
                name="MyRecordScreen"
                component={MyRecordScreen}
                options={{
                    tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>My Records</Text>),
                    tabBarIcon: ({ focused }) => (<AntDesign name="filetext1" size={24} color={focused ? 'red' : 'grey'} />),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="TimeSheet"
                component={TimeSheet}
                options={{
                    tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>My Timesheet</Text>),
                    tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name="file-clock-outline" size={24} color={focused ? 'red' : 'grey'} />),
                }}
            />
            <Tab.Screen
                name="MyProfile"
                component={MyProfile}
                options={{
                    tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'black' : 'grey' }}>My Profile</Text>),
                    tabBarIcon: ({ focused }) => (<AntDesign name="user" size={24} color={focused ? 'red' : 'grey'} />),
                }}
            />
        </Tab.Navigator>
    )
}
