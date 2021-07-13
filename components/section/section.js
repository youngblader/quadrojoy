import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Section = () => {

  let [fontsLoaded] = useFonts({
    'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    'Lato-Semibold': require('../../assets/fonts/Lato-Semibold.ttf'),
    'Lato-ExtraBold': require('../../assets/fonts/Lato-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
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
}

const styles = StyleSheet.create({
  section__wrapper: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 126,
  },
  section: {
    justifyContent: 'center',
    padding: 20,
    width: 343,
    height: 164,
    backgroundColor: '#317AE8',
    borderRadius: 20,
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
    fontWeight: `700`,
    fontStyle: 'normal',
    lineHeight: 17,
    fontSize: 14,
    color: '#FFFFFF'
  },
  section__name: {
    fontFamily: 'Lato-ExtraBold',
    fontWeight: `bold`,
    fontStyle: 'normal',
    lineHeight: 32,
    fontSize: 24,
    color: '#FFFFFF'
  },
  section__price: {
    fontFamily: 'Lato-Bold',
    fontWeight: 'bold',
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