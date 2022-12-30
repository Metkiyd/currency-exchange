import {fetchCurrencies, fetchNews, fetchValutes} from "../../api/api";

export const SET_ALLVALUTES = "SET_ALLVALUTES";

export const setAllValutes = (allValutes) => ({type: SET_ALLVALUTES, allValutes});

export const getAllValutes = () => {
  return async (dispatch) => {
    let response = await fetchCurrencies();
    const valutes = Object.values(response.Valute)
    const tranformed = valutes.map(
      (valute) => {
        const obj = {
          id: valute.ID,
          name: valute.CharCode,
          fullName: valute.Name,
          rate: +((valute.Value) / (valute.Nominal)).toFixed(4),
          change: +((valute.Value) - (valute.Previous)).toFixed(4),
          changePerc: +((valute.Value) / (valute.Previous) - 1).toFixed(4),
          nominal: valute.Nominal,
          price: valute.Value,
          prev: valute.Previous,
          increase: ((valute.Value) > (valute.Previous)),
        }
        return obj;
    })
    dispatch(setAllValutes(tranformed));
  };
};

