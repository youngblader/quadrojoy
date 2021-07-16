import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../../actions/actionTypes';

import { products } from '../../data/products.json';

const SortedPanel = () => {

    const dispatch = useDispatch();
    const activeItem = useSelector(state => state.activeItem);
    
    const sortedItems = (active) => {
        switch (active) {
            case 'All': {
                dispatch({
                    type: actionTypes.GET_PRODUCTS,
                    payload: [...products],
                });
                dispatch({
                    type: actionTypes.CHANGE_TITLE,
                    payload: active,
                });
                break;
            }
            case 'Cheap': {
                const cheapItem = products.reduce((prev, cur) => cur.price < prev.price ? cur : prev);     
                dispatch({
                    type: actionTypes.GET_PRODUCTS,
                    payload: [{...cheapItem}],
                });
                dispatch({
                    type: actionTypes.CHANGE_TITLE,
                    payload: active,
                });
                break;
            }
            case 'Best': {
                const highRatedItems = products.filter(item => item.rating > 4);
            
                dispatch({
                    type: actionTypes.GET_PRODUCTS,
                    payload: [...highRatedItems],
                });
                dispatch({
                    type: actionTypes.CHANGE_TITLE,
                    payload: active,
                });
                break;
            }
            case 'Fast': {
                const speedItem = products.reduce((prev, cur) => cur.speed > prev.speed ? cur : prev);
                dispatch({
                    type: actionTypes.GET_PRODUCTS,
                    payload: [{...speedItem}],
                });
                dispatch({
                    type: actionTypes.CHANGE_TITLE,
                    payload: active,
                });
                break;
            }
        } 
    }

    return (
      <View style={styles.sortedPanel__wrapper}>
        <View style={styles.sortedPanel}>
          <View style={styles.sortedPanel__list}>
            <Pressable style={activeItem === 'All' ? styles.list__itemActive : styles.button} onPress={() => sortedItems('All')}>
                <Text style={activeItem === 'All' ? styles.item__textActive : styles.item__text}>All</Text>
            </Pressable>
            <Pressable style={activeItem === 'Cheap' ? styles.list__itemActive : styles.button} onPress={() => sortedItems('Cheap')}>
                <Text style={activeItem === 'Cheap' ? styles.item__textActive : styles.item__text}>Cheap</Text>
            </Pressable>
            <Pressable style={activeItem === 'Best' ? styles.list__itemActive : styles.button} onPress={() => sortedItems('Best')}>
                <Text style={activeItem === 'Best' ? styles.item__textActive : styles.item__text}>Best</Text>
            </Pressable>
            <Pressable style={activeItem === 'Fast' ? styles.list__itemActive : styles.button} onPress={() => sortedItems('Fast')}>
                <Text style={activeItem === 'Fast' ? styles.item__textActive : styles.item__text}>Fast</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    sortedPanel__wrapper: {
        marginTop: 32,
        alignItems: 'center',
    },
    sortedPanel: {
        width: 345,
        height: 46,
    },
    sortedPanel__list: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    sortedPanel__btn: {
        width: 78,
        height: 46, 
    },
    list__item: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 78,
        height: 46,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#E7E7E7",
    },
    item__text: {
        fontFamily: 'Lato_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#1F1F1F'
    },
    item__textActive: {
        fontFamily: 'Lato_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#FFFFFF',
    },
    list__itemActive: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 78,
        height: 46,
        borderRadius: 12,
        backgroundColor: "#317AE8",
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 78,
        height: 46,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#E7E7E7",
    },
});

export { SortedPanel };