import React, { useEffect, useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { Context } from '../context/AuthContext'

const LoadingScreen = () => {
    const { tryLocalSignin } = useContext(Context)

    useEffect(() => {
        tryLocalSignin();
    }, [])

    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator />
            <ActivityIndicator size="large" color="#003224" />
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default LoadingScreen;