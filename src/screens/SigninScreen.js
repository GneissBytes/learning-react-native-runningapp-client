import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation'

import { Context } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
    const { signin, clearAuthError, state: { errorMessage } } = useContext(Context)


    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearAuthError}/>
            <AuthForm
                title="Sign In to RunTracker"
                buttonTitle="Sign in"
                errorMessage={errorMessage}
                onSubmit={signin} />
            <NavLink
                target="Signup"
                label="Not registered? Click to sign up." />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        justifyContent: 'center',
    }
})


SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SigninScreen