import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../../actions/actionTypes';
import { Card } from '../Card/card';

import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

import { products } from '../../data/products.json';

const Products = () => {
    
    const dispatch = useDispatch();

    const data = useSelector(state => state.data);
    const activeItem = useSelector(state => state.activeItem);

    useEffect(() => {
        dispatch({
            type: actionTypes.GET_PRODUCTS,
            payload: [...products],
        });
    }, [dispatch]);

    return (
        <View style={styles.products__wrapper}>
            <View style={styles.products__content}>
                <View style={styles.products__header}>
                    <Text style={styles.products__title}>{activeItem} Quadcopters</Text>
                </View>
                <ScrollView 
                    horizontal={data.length < 2 ? false : true} 
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={true} 
                    alwaysBounceVertical={false}
                    directionalLockEnabled={true}
                >
                    <View style={styles.products__list}>
                        {data.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    picture={item.picture}
                                    desc={item.description} 
                                    rate={item.rating}
                                    price={parseFloat(item.price).toFixed(2)}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    products__wrapper: {   
        marginTop: 28,
        marginLeft: (Platform.OS === 'ios') ? 0 : 10,
        width: 644,
        backgroundColor: '#FFF'
    },
    products__content: {
        alignItems: 'flex-start',
        flexDirection: "column",
        width: 345,
    },
    products__header: {
        justifyContent: 'flex-start',
        width: 345,
        height: 24,
    },
    products__title: {
        fontFamily: 'Lato-Bold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 24,
        fontSize: 20,
        color: '#1F1F1F',
        paddingLeft: 10,
    },
    products__list: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginTop: 21,
        paddingLeft: 10,
        width: 'auto',
    },
});

export { Products };
