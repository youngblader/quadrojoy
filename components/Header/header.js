import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {

  return (
    <View style={styles.header}>
      <Text style={styles.header__title}>Quadrojoy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 52,
    width: 375,
    height: 52,
    paddingTop: 10,
    paddingLeft: 16,
    paddingBottom: 10,
  },
  header__title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#1F1F1F",
  }
});

export { Header };