import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'

const fetchFonts = () => {
  return Font.loadAsync({
    'soft-regular': require('./constants/fonts/Gaegu-Regular.ttf'),
    'soft-light': require('./constants/fonts/Gaegu-Light.ttf'),
    'soft-heavy': require('./constants/fonts/Gaegu-Bold.ttf')
  })
}

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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontFamily: 'soft-heavy', fontSize: 27}}>Brigid hey, whats up babe! Nice titties!</Text>
    </View>
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
