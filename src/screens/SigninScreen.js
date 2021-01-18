import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationEvents } from 'react-navigation'

import { Context } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
    const { signin, clearAuthError, state: { errorMessage } } = useContext(Context)


    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={styles.container}>
                <NavigationEvents onWillFocus={clearAuthError} />
                <AuthForm
                    title="Sign In to RunTracker"
                    buttonTitle="Sign in"
                    errorMessage={errorMessage}
                    onSubmit={signin} />
                <NavLink
                    target="Signup"
                    label="Not registered? Click to sign up." />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        justifyContent: 'center',
    }
})


SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SigninScreen