import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'

import { Context } from '../context/AuthContext'
import Spacer from '../components/Spacer'

const AccountScreen = () => {
    const { logout } = useContext(Context)
    return (
        <SafeAreaView style={style.container} forceInset={{ top: 'always' }}>
            <Spacer>
                <Spacer>
                    <Text style={{ fontSize: 48 }} h4>Account Settings</Text>
                </Spacer>
                <Button title="Log out" onPress={() => logout()} />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: "My Account",
    tabBarIcon: <FontAwesome name="gear" size={20} />
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AccountScreen