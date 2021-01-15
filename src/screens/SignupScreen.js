import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation'

import { Context } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation: { navigate } }) => {
    const { signup, clearAuthError, tryLocalSignin, state: { errorMessage } } = useContext(Context)

    useEffect(()=> {
        tryLocalSignin()
    }, [])


    return (
        <View style={styles.container} >
            <NavigationEvents onWillFocus={clearAuthError} />
            <AuthForm
                title="Sign Up for RunTracker"
                buttonTitle="SignUp"
                errorMessage={errorMessage}
                onSubmit={signup} />
            <NavLink
                target="Signin"
                label="Already registered? Click to sign in." />
        </View >
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        justifyContent: 'center',
    }
})



export default SignupScreen