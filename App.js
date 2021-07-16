import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Navigator from './source/screens/navigator';
import reducer from './source/reducers/reducer';

import { 
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic 
} from '@expo-google-fonts/lato';

const App = () => {
   
    let [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_300Light,
        Lato_300Light_Italic,
        Lato_400Regular,
        Lato_400Regular_Italic,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_900Black,
        Lato_900Black_Italic,
        'Lato-Bold':require('./assets/fonts/Lato-Bold.ttf'),
        'Lato-Semibold':require('./assets/fonts/Lato-Semibold.ttf'),
        'Lato-ExtraBold':require('./assets/fonts/Lato-ExtraBold.ttf'),
    });

    if(!fontsLoaded) {
        return <AppLoading/>
    }

    const store = createStore(reducer);

    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    )
}

export default App;