import {fetchCurrencies, fetchPosts, fetchValutes} from "../../api/api";

export const SET_ALLPOSTS = "SET_ALLPOSTS";

export const setAllPosts = (posts) => ({type: SET_ALLPOSTS, posts});

export const getAllPosts = () => {
  return async (dispatch) => {

    let posts = await fetchPosts();


    // let response = await fetchCurrencies();
    //
    // const valutes = Object.values(response.Valute)
    //
    // const tranformed = valutes.map(
    //   (valute) => {
    //     const obj = {
    //       id: valute.ID,
    //       name: valute.CharCode,
    //       fullName: valute.Name,
    //       rate: +((valute.Value) / (valute.Nominal)).toFixed(4),
    //       change: +((valute.Value) - (valute.Previous)).toFixed(4),
    //       changePerc: +((valute.Value) / (valute.Previous) - 1).toFixed(4),
    //       nominal: valute.Nominal,
    //       price: valute.Value,
    //       prev: valute.Previous,
    //       increase: ((valute.Value) > (valute.Previous)),
    //     }
    //     return obj;
    // })

    dispatch(setAllPosts(posts));
  };
};

