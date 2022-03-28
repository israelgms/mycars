import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333',
    auth: {
        username: 'skinaxv',
        password: 'fevereiro98'
    }
})

export default api