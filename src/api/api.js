import axios from "axios";

export function fetchCurrencies() {
  return axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
    .then(response => response.data)
}


// export function fetchValutes() {
//   return axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
//     .then( ( {data} ) => {
//       const valutes = Object.values(data.Valute);
//       // console.log('===>apifetchValutes', valutes)
//         }
//   )
// }