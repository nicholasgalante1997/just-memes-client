import React from 'react'
import {Text, StyleSheet} from 'react-native'

const CustomTextReg = (props) => {
    return ( 
        <Text style={{...styles.text, ...props.style}}>
            {props.children}
        </Text>
     );
}
 
const styles = StyleSheet.create({
    text: {
        fontFamily: 'soft-regular',
        color: 'black',
        fontSize: 16
    }
})
export default CustomTextReg;
