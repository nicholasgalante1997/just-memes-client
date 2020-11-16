import React from 'react';
import {View, StyleSheet} from 'react-native' 
import Header from '../../components/Header'
import ColorSchema from '../../constants/ColorSchema'

const MainFeedScreen = (props) => {
    return ( 
        <View style={{flex: 1, alignItems: 'center', backgroundColor: ColorSchema.sky.sharp}}>
        <Header />
    </View>
     );
}
 
export default MainFeedScreen;