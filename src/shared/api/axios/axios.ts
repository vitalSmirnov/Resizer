import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.miro.com/',
  headers: {
    Accept: 'application/json',
  },
})

instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')!
