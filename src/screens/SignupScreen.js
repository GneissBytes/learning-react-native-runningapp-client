import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationEvents } from 'react-navigation'

import { Context } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
    const { signup, clearAuthError, state: { errorMessage } } = useContext(Context)


    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
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
        </SafeAreaView>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        justifyContent: 'center',
    }
})



export default SignupScreen