import axios from "axios";
import axiosBack from "./axiosBack";

export function fetchCurrencies() {
  return axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
    .then(response => response.data)
}

export function fetchPosts() {
  return axiosBack.get('/posts').then(response => response.data)
}

export function fetchUser(value) {
  console.log('=-=>value', value)
  const data  = axiosBack.post('/auth/login', value)
    // .then(response => response.data)
  console.log('===>data', data)
  return data;

};

// export function fetchValutes() {
//   return axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
//     .then( ( {data} ) => {
//       const valutes = Object.values(data.Valute);
//       // console.log('===>apifetchValutes', valutes)
//         }
//   )
// }