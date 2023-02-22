import axios from 'axios'

export const baseURL = 'http://localhost:4000'

export const api = axios.create({ baseURL })

export const fetcher = (path: string) => api.get(path).then((res) => res.data)
