import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="Profile"
                    component={SignUp}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};