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

export function fetchAuth() {
  return axiosBack.get('/auth/me').then((response) => response.data)
}

// export async function fetchUser(value) {
//   try {
//     const data = await axiosBack.post('/auth/login', value)
//     console.log('>data-api', data)
//     return data
//   } catch (e) {
//     alert('wrong')
//     return
//   }
// }

// export function fetchValutes() {
//   return axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
//     .then( ( {data} ) => {
//       const valutes = Object.values(data.Valute);
//       // console.log('===>apifetchValutes', valutes)
//         }
//   )
// }
