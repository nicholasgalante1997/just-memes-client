import React from 'react';
import {View, StyleSheet} from 'react-native'
import CustomTextReg from '../constants/CustomTextReg'
import Colors from '../constants/ColorSchema'
import {Ionicons} from '@expo/vector-icons'

const Header = (props) => {
    return (  
        <View style={styles.banner}>
            <Ionicons name='ios-menu' size={24} color='white' style={styles.headerItem} />
            <CustomTextReg style={styles.headerItem} >
                Just Memes
            </CustomTextReg>
            <Ionicons name="ios-create" size={24} color="white" style={styles.headerItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: Colors.sky.primitive,
        width: '90%',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 15
    },
    headerItem: {
        color: 'white',
        paddingHorizontal: 40
    }
})
 
export default Header;