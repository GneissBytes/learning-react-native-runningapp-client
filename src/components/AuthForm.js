import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './Spacer'

const AuthForm = ({ title, buttonTitle, errorMessage, onSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Spacer>
                <Text
                    style={{ marginTop: 35 }}
                    h3>{title}</Text>
            </Spacer >
            <Spacer>
                <Input
                    label="email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <Spacer />
                <Input
                    label="password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry />
            </Spacer>
            <Spacer>
                <View style={styles.errorContainer}>
                    {errorMessage ? <Text h5 style={styles.errorMessage}>{errorMessage}</Text> : <></>}
                </View>
                <Button
                    android_ripple={false}
                    title={buttonTitle}
                    type="outline"
                    containerStyle={{ marginHorizontal: 50 }}
                    onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
    },
    errorMessage: {
        color: 'red',
    },
    errorContainer: {
        alignSelf: 'center',
        height: 30,
        marginBottom: 15
    }
})

export default AuthForm