import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SortedPanel = () => {

    const [activeItem, setActiveItem] = useState(0);

    const SelectedItem = (index) => {
        setActiveItem(index);
    }

    const data = [
        {
            id: 0,
            title: "All",
        },
        {
            id: 1,
            title: "Cheap",
        },
        {
            id: 2,
            title: "Best",
        },
        {
            id: 3,
            title: "Fast",
        },
    ];

    return (
      <View style={styles.sortedPanel__wrapper}>
        <View style={styles.sortedPanel}>
          <View style={styles.sortedPanel__list}>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => SelectedItem(index)}>
                            <View key={item.id} style={activeItem === index ? styles.list__itemActive : styles.list__item}>
                                <Text style={activeItem === index ? styles.item__textActive : styles.item__text}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    sortedPanel__wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 132,
    },
    sortedPanel: {
        width: 345,
        height: 46,
    },
    sortedPanel__list: {
        flexDirection: "row",
        flexWrap: "wrap",
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
        fontFamily: 'Lato-Semibold',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#1F1F1F'
    },
    item__textActive: {
        fontFamily: 'Lato-Semibold',
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
    }
});

export { SortedPanel };