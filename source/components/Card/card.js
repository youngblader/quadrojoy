import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
import { actionTypes } from '../../actions/actionTypes';

import { useNavigation } from '@react-navigation/native';

const Card = (props) => {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const data = useSelector(state => state.data);
    const selectedItem = useSelector(state => state.selectedItem);

    const loadScreen = () => {
        navigation.navigate('SelectedItem');
    }

    const getSelectedItem = (id) => {
        const currentItem = data.filter(item => item.id === id);
        
        dispatch({
            type: actionTypes.SELECTED_ITEM,
            payload: [...currentItem]
        });

        if(selectedItem !== []) {
            loadScreen();
        }
    }

    return (
        <>
            <Pressable style={styles.card} onPress={() => getSelectedItem(props.id)}>
                <Image 
                    style={styles.card__image} 
                    source={{uri: `${props.picture}`}} 
                />
                <View style={styles.card__content}>
                    <View style={styles.content__name}>
                        <Text style={styles.name__text}>{props.name}</Text>
                    </View>
                    <View style={styles.card__footer}>
                        <Text style={styles.card__price}>{parseFloat(props.price).toFixed(2)} $</Text>
                        <View style={styles.card__star}>
                            <Image source={require('../../images/star.png')}/>
                            <Text style={styles.card__rate}>{props.rate}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        marginRight: 16,
        width: 204,
        height: 248,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        borderRadius: 12,
    },
    card__content: {
        padding: 16,
    },
    card__image: {
        width: 202,
        height: 168,
    },
    name__text: {
        fontFamily: 'Lato-Semibold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 17,
        fontSize: 14,
        color: '#1F1F1F',
    },
    card__price: {
        fontFamily: 'Lato-Semibold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#1F1F1F',
    },
    card__star: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    card__rate: {
        marginLeft: 5,
        fontFamily: 'Lato-Semibold',
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 17,
        fontSize: 14,
        color: '#1F1F1F',
    },
    card__footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
        width: 170,
        height: 22,
    }
});

export { Card };