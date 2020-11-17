import React, {useState, useEffect} from 'react';
import { StyleSheet} from 'react-native';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import {enableScreens} from 'react-native-screens'
// Data Store
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

import {FeedStackNavigator} from './navigation/FullStackNavigator'

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'soft-regular': require('./constants/fonts/Gaegu-Regular.ttf'),
    'soft-light': require('./constants/fonts/Gaegu-Light.ttf'),
    'soft-heavy': require('./constants/fonts/Gaegu-Bold.ttf')
  })
}

const store = createStore(rootReducer, composeWithDevTools())

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)
 
  if (!fontLoaded){
    return <AppLoading 
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={err => console.log(err)} 
    />
  }
  return (
    <Provider store={store}>
        <FeedStackNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
