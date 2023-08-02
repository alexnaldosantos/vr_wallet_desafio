import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../views/home';
import { MyCards, NewCreditCard } from '../views/creditcard';
import { FinishCreditCard } from '../views/creditcard';

const Stack = createNativeStackNavigator();

export const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={Routes.home} component={Home} />
            <Stack.Screen name={Routes.cards} component={MyCards} />
            <Stack.Screen name={Routes.new} component={NewCreditCard} />
            <Stack.Screen name={Routes.finish} component={FinishCreditCard} />
        </Stack.Navigator>
    );
};

export const Routes = {
    home: 'home',
    cards: 'cards',
    new: 'new-credit-card',
    finish: 'finish-credit-card'
}
