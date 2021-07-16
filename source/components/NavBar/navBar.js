import React from 'react';
import { Platform, StyleSheet, View, Pressable, Image } from 'react-native';
import { ROUTES } from '../../routes/navRoutes';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {

    const navigation = useNavigation(); 

    const loadScreen = (path) => {
        navigation.navigate(`${path}`);
    }

    return (
        <View style={styles.navBar__wrapper}>
            <View style={styles.navBar}>
                <View style={styles.navBar__list}>
                    {ROUTES.map((item) => {
                        return (
                            <View key={item.name}>
                                <Pressable onPress={() => loadScreen(`${item.name}`)}>
                                    <Image  style={styles.navBar__image} source={{uri: `${item.picture}`}}/>
                                </Pressable>
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navBar__wrapper: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        width: 'auto',
        height: (Platform.OS === 'ios') ? 96 : 58,
        shadowColor: "#000",
        shadowOpacity: 0.16,
        shadowRadius: 3,
        shadowOffset:{
            width: 0,
            height: -2,
          },
        elevation: 2,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: (Platform.OS === 'ios') ? '#FFFFFF' : 'none',
    },
    navBar: {
        justifyContent: 'center',
        alignItems: 'center',
        height: (Platform.OS === 'ios') ? 96 : 58,
    },
    navBar__list: {
        justifyContent: 'space-between',
        width: 298,
        height: 32,
        flexDirection: 'row',
    },
    navBar__image: {
        width: 32,
        height: 32,
    }
});

export { NavBar };