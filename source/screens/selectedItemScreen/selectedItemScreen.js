import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Platform, Modal, StyleSheet, View, Text, Pressable, Image, SafeAreaView, TextInput } from 'react-native';

const SelectedItemScreen = () => {

    const navigation = useNavigation();

    const selectedItem = useSelector(state => state.selectedItem);

    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    return (
          <View style={styles.selected__container}>
              <View style={styles.selected__header}>
                  <Pressable onPress={() => navigation.goBack('Home')}>
                      <Image source={require('../../images/arrow.png')}/>
                  </Pressable>
              </View>
              <View style={styles.selected__item}>
                  {selectedItem.map((item) => {
                      return (
                          <View key={item.id}>
                              <Image style={styles.selected__image} source={{uri: `${item.picture}`}} />
                              <View style={styles.selected__content}>
                                  <Text style={styles.item__type}>{item.type}</Text>
                                  <Text style={styles.item__name}>{item.name}</Text>
                                  <Text style={styles.item__price}>{parseFloat(item.price).toFixed(2)} $</Text>
                                  <Text style={styles.item__description}>{item.description}</Text>
                              </View>
                          </View>
                      )
                  })}
              </View>
              <View style={styles.contact__info}>
                  <SafeAreaView>
                      <TextInput
                          style={styles.input}
                          onChangeText={setUserName}
                          value={userName}
                          placeholder="Name"
                      />
                      
                      <TextInput
                          style={styles.input}
                          onChangeText={setUserPhone}
                          value={userPhone}
                          placeholder="+375 (__)___-__-__"
                          keyboardType='phone-pad'
                      />
                  </SafeAreaView>
              </View>
              <Pressable onPress={() => setModalVisible(true)}>
                  <View style={styles.contact__btn}> 
                      <Text style={styles.contact__text}>To Order</Text>
                  </View>
              </Pressable>
              
              <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(!modalVisible)}>
                  <View style={styles.modal__wrapper}>
                      <View style={styles.modal}>
                          <Image style={styles.modal__image} source={require('../../images/car.png')}/>
                          <Text style={styles.modal__title}>Your order is accepted</Text>
                      
                          <Pressable onPress={() => setModalVisible(!modalVisible)}>    
                              <View style={styles.modal__btn}>
                                  <Text style={styles.modal__text}>Ok</Text>
                              </View>
                          </Pressable>
                      </View>
                  </View>
              </Modal>
          </View>
    );
}

const styles = StyleSheet.create({
    selected__container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    selected__header: {
        marginTop: (Platform.OS === 'ios') ? 40 : 40,
        width: 375,
        height: 52,
        marginLeft: 33,
        paddingTop: 17,
        paddingBottom: 17,
    },
    selected__item: {
        width: 345,
    },
    selected__content: {
        marginTop: 24,
        height: 170,
    },
    selected__image: {
        width: 343,
        height: (Platform.OS === 'ios') ? 281 : 251,
    },
    item__type: {
        fontFamily: 'Lato_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#1F1F1F'
    },
    item__name: {
        fontFamily: 'Lato-ExtraBold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 36,
        fontSize: 28,
        color: '#1F1F1F'
    },
    item__price: {
        marginTop: 8,
        fontFamily: 'Lato-Bold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 24,
        fontSize: 20,
        color: '#317AE8'
    },
    item__description: {
        marginTop: 12,
        width: 343,
        height: 66,
        fontFamily: 'Lato_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#939399'
    },
    contact__info: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 36,
        width: 343,
        height: 84,
    },
    contact__btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
        width: 343,
        height: 46,
        backgroundColor: '#317AE8',
        borderRadius: 8,
    },
    contact__text: {
        fontFamily: 'Lato_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#FFFFFF',
    },
    input: {
        marginBottom: 24,
        paddingBottom: 8,
        width: 343,
        height: 30,
        fontFamily: 'Lato_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        borderBottomColor: '#E7E7E7',
        borderBottomWidth: 1,
    },
    modal__wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)'
    },
    modal: {
        zIndex: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 345,
        height: 248,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
    },
    modal__image: {
        width: 78,
        height: 51,
    },
    modal__title: {
        marginTop: 10,
        fontFamily: 'Lato_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#939399'
    },
    modal__btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
        width: 146,
        height: 46,
        backgroundColor: '#317AE8',
        borderRadius: 8,
    },
    modal__text: {
        fontFamily: 'Lato_400Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        fontSize: 16,
        color: '#FFFFFF'
    }
});

export { SelectedItemScreen };