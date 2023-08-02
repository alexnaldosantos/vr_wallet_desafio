import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimatedPage from "../animated";
import { Home } from '../views/home';
import { NewCreditCard } from '../views/creditcard';

const Stack = createNativeStackNavigator();

export const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="new-credit-card" component={NewCreditCard} />
            <Stack.Screen name="animated" component={AnimatedPage} />
        </Stack.Navigator>
    );
};
