import axios from 'axios'

export default axios.create({
    baseURL: 'https://running-app-23158.herokuapp.com/api'
})