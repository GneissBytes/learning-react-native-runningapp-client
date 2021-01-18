import React, { useContext, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements'
import { withNavigationFocus } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'


import { Context } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import Spacer from '../components/Spacer'

const TrackCreateScreen = ({ isFocused }) => {
    const { updateLocation, state: { recording } } = useContext(Context);

    const callback = useCallback(location => {
        updateLocation(location, recording);
    }, [recording])

    const { err } = useLocation(isFocused || recording, callback)

    const renderError = () => {
        if (err) {
            return (
                <TouchableOpacity onPress={() => requestPermission()}>
                    <Text h4 style={{ color: "red" }}>{err.message}</Text>
                </TouchableOpacity>
            )
        }
        return null
    }

    return (
        <View forceInset={{ top: 'always' }} style={style.container}>
            <Spacer>
                <Text style={{ marginBottom: 15 }} h3>Create new Track</Text>
            </Spacer>
            <Map />
            <Spacer >
                <TrackForm />
                {renderError()}
            </Spacer>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingTop: 25,
        flex: 1
    }
})

TrackCreateScreen.navigationOptions = {
    title: "New Track",
    tabBarIcon:  <FontAwesome name="plus" size={20} />
}

export default withNavigationFocus(TrackCreateScreen)