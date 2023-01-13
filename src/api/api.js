import axios from 'axios'

import axiosBack from './axiosBack'

export function fetchCurrencies() {
  return axios
    .get(`https://www.cbr-xml-daily.ru/daily_json.js`)
    .then((response) => response.data)
}

export function fetchPosts() {
  return axiosBack.get('/posts').then((response) => response.data)
}

export function fetchTransactions() {
  return axiosBack.get('/transactions').then((response) => response.data)
}

export function fetchAuth() {
  return axiosBack.get('/auth/me').then((response) => response.data)
}
