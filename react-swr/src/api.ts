import axios from 'axios'

export const api = axios.create({ baseURL: 'http://localhost:3000' })

export const fetcher = (path: string) => api.get(path).then((res) => res.data)
