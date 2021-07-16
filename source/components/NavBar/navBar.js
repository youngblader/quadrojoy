import React from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import { ROUTES } from '../../routes/navRoutes';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {

    const navigation = useNavigation(); 

    const loadScreen = (path) => {
        navigation.navigate(`${path}`);
    }

    return (
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
    );
}

const styles = StyleSheet.create({
    navBar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
        width: 395,
        height: 96, 
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 6,
        },
        shadowOpacity: 1.0, 
        elevation: 2,
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