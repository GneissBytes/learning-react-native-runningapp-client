import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Context } from '../context/AuthContext'
const AccountScreen = () => {
    const { logout } = useContext(Context)
    return (
        <>
            <Text style={{ fontSize: 48 }}>AccountScreen</Text>
            <Button title="Log out" onPress={() => logout()} />
        </>
    )
}

const style = StyleSheet.create({})

export default AccountScreen