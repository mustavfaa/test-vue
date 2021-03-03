import axios from 'axios'

const gettAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    timeout: 1000,
})

export { gettAPI }