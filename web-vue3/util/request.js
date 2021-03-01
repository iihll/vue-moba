import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/web/api',
  timeout: 60 * 1000
})

instance.interceptors.request.use()

instance.interceptors.response.use()