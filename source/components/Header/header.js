import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.header__title}>Quadrojoy</Text>
        <Image style={styles.header__menu} source={require('../../images/menu.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        zIndex: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: (Platform.OS === 'ios') ? 42 : 32,
        width: 375,
        height: 42,
    },
        header__title: {
        marginLeft: (Platform.OS === 'ios') ? 25 : 25,
        fontFamily: 'Lato-ExtraBold',
        fontWeight: '800',
        fontStyle: 'normal',
        lineHeight: 32,
        fontSize: 24,
        color: "#1F1F1F",
    },
    header__menu: {
        marginRight: (Platform.OS === 'ios') ? 15 : 20,
        width: 28,
        height: 28,
    }
});

export { Header };