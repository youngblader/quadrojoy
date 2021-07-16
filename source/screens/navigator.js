import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { HomeScreen, FavoritesScreen, SearchScreen, CartScreen, SelectedItemScreen } from '../screens';

const Navigator = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Favorites" component={FavoritesScreen}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
                <Stack.Screen name="SelectedItem" component={SelectedItemScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
    },
});

export default Navigator;