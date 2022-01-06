import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DataProvider } from './DataContext';
import TabScreen from './TabScreen';
import DetailsScreen from './DetailsScreen';
import AddScreen from './AddScreen';

export default function MainScreen() {
    const Stack = createStackNavigator();

    return (
        <DataProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='TabScreen'>
                    <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="AddScreen" component={AddScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </DataProvider>
    );
}