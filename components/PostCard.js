import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
import Colors from '../constants/ColorSchema'
import CustomTextReg from '../constants/CustomTextReg';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

const PostCard = (props) => {
    return ( 
        <TouchableOpacity onPress={() => {}}>
                <View style={styles.post}>
                        <View style={styles.imageContainer}>
                            <Image source={{uri: props.image}} style={styles.image} />
                        </View>
                    <View style={styles.bottomRow}>
                            <View style={styles.userHolder}>
                                    <View style={styles.user}>
                                        <CustomTextReg style={{color: 'white', fontSize: 24}}>
                                            {props.user.username}
                                        </CustomTextReg>
                                    </View>
                                    <View style={styles.tag}>
                                        <CustomTextReg style={{margin: 5}}>
                                           $ <CustomTextReg style={{color: 'white', fontSize: 22}}>{props.tag}</CustomTextReg>
                                        </CustomTextReg>
                                    </View>
                                </View>
                            <View style={styles.actions}>
                                <View style={styles.likes}>
                                        <FontAwesome5 name="bong" size={24} color="white" style={{paddingHorizontal: 5}}/>
                                        <CustomTextReg style={{paddingHorizontal: 5}}>
                                            {props.likes}
                                        </CustomTextReg>
                                </View>
                                <View style={styles.likes}>
                                <FontAwesome5 name="car-crash" size={24} color="white" style={{paddingHorizontal: 5}}/>
                                <CustomTextReg style={{paddingHorizontal: 5}}>
                                    {props.dislikes}
                                </CustomTextReg>
                                </View>
                                </View>
                    </View>
                </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    post: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#888',
        height: 300,
        margin: 20
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: '25%',
        // paddingHorizontal: 20
    },
    details: {
    },
    imageContainer: {
        height: '80%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden'
    },
    bottomRow: {
        flexDirection: 'row',
        height: '20%',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginRight: 15
    },
    likes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    user: {

    }
})
 
export default PostCard;