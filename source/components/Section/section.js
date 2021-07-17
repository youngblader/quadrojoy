import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Section = () => {

    return (
        <View style={styles.section__wrapper}>
            <View style={styles.section}>
                <View style={styles.section__content}>
                    <Text style={styles.section__title}>Need for Speed</Text>
                    <Text style={styles.section__name}>UdoDron 3 Pro</Text>
                    <Text style={styles.section__price}>1984 $</Text>
                </View>
                <Image 
                    style={styles.section__image} 
                    source={require('../../images/quadro-first.png')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section__wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    section: {
        justifyContent: 'center',
        padding: 20,
        width: 345,
        height: 164,
        backgroundColor: '#317AE8',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 15,
        shadowOffset:{
            width: 0,
            height: 5,
        },
        elevation: 2,
    },
    section__content: {
        zIndex: 5,
        width: 163,
        height: 73,
        marginTop: 71,
        marginBottom: 20,
    },
    section__title: {
        fontFamily: 'Lato-Semibold',
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 17,
        fontSize: 14,
        color: '#FFFFFF'
    },
    section__name: {
        fontFamily: 'Lato-ExtraBold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 32,
        fontSize: 24,
        color: '#FFFFFF'
    },
    section__price: {
        fontFamily: 'Lato-Semibold',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        fontSize: 20,
        color: '#FFFFFF',
    },
    section__image: {
        position: 'absolute',
        right: 0,
    },
});

export { Section };