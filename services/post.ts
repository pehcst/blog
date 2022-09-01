import axios from 'axios'

export const blog = axios.create({
  baseURL: 'https://api.github.com/',
})
