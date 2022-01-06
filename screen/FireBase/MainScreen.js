import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Dashboard';
import Centre from './Centre';
import Profile from './Profile';

export default function MainScreen() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Dashboard' component={Dashboard} />
                <Tab.Screen name='Centre' component={Centre} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
