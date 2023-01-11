import axios, { AxiosRequestConfig } from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const fetcher = (args: AxiosRequestConfig) =>
  api(args).then((x) => x.data)
