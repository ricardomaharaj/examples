import axios from 'axios'

const baseURL = 'http://localhost:3000/api'

export const api = axios.create({ baseURL })

export const fetcher = (path: string) => api.get(path).then((res) => res.data)
