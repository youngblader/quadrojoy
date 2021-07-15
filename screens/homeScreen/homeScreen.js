import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Header, NavBar, Products, Section, SortedPanel } from '../../components';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Header/>
      <Section/>
      <SortedPanel/>
      <Products/>
      <NavBar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
});

export { HomeScreen };