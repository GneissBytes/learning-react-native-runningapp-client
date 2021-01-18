import createDataContext from './createDataContext';
import runtrackApi from '../api/runtrack'
import AsyncStorage from '@react-native-community/async-storage'

import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case "AUTHENTICATE":
            return { errorMessage: '', token: action.payload }
        case "LOGOUT":
            return {};
        case "AUTH_API_FAILURE":
            return { ...state, errorMessage: action.payload }
        case "CLEAR_AUTH_ERROR":
            return { ...state, errorMessage: '' }
        default:
            return state
    }
}

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await runtrackApi.post('/signup', { email, password })
        await AsyncStorage.setItem('authtoken', response.data.token)
        dispatch({ type: "AUTHENTICATE", payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: "AUTH_API_FAILURE", payload: "Something went wrong. Are you online and not registered already?" })
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await runtrackApi.post('/signin', { email, password })
        await AsyncStorage.setItem('authtoken', response.data.token)
        dispatch({ type: "AUTHENTICATE", payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: "AUTH_API_FAILURE", payload: "Something went wrong. Check credentials if you're online." })
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('authtoken')
    if (token) {
        dispatch({ type: "AUTHENTICATE", payload: token })
        return navigate('TrackList')
    }
    navigate('loginFLow')
}

const logout = dispatch => async () => {
    await AsyncStorage.clear()
    dispatch({ type: 'LOGOUT' })
    navigate('LoadingScreen')
}

const clearAuthError = dispatch => () => dispatch({ type: "CLEAR_AUTH_ERROR" })


export const { Provider, Context } = createDataContext(authReducer, { signup, signin, tryLocalSignin, logout, clearAuthError }, { token: null, errorMessage: '' })