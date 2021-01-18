import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const instance = axios.create({
    baseURL: 'https://running-app-23158.herokuapp.com/api'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('authtoken');
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance