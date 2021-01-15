import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation: { navigate } }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <Button
                title="Go to TrackDetails"
                onPress={() => navigate('TrackDetail')} />
        </>
    )
}

const style = StyleSheet.create({})

TrackListScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default TrackListScreen