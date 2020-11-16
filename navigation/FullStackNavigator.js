import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import MainFeedScreen from '../screens/FeedStack/MainFeed'

export const FeedStackNavigator = createAppContainer(createStackNavigator({
    MainFeed: {
        screen: MainFeedScreen,
        navigationOptions: {
            headerShown: false 
        }
    }
}))