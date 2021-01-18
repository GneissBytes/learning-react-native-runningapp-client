import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons'


import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import LoadingScreen from './src/screens/LoadingScreen'

import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { setNavigator } from './src/navigationRef'


const TrackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
})

TrackListFlow.navigationOptions = {
    title: "My Tracks",
    tabBarIcon: <FontAwesome name="th-list" size={20} />
}

const switchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    loginFLow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: TrackListFlow,
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    })
}, {
    initialRouteName: 'LoadingScreen'
})

const App = createAppContainer(switchNavigator)


export default () => {
    return (
        <AuthProvider>
            <TrackProvider>
                <LocationProvider>
                    <App
                        ref={navigator => setNavigator(navigator)} />
                </LocationProvider>
            </TrackProvider>
        </AuthProvider>
    )
};
