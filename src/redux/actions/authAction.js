import {fetchCurrencies, fetchPosts, fetchUser, fetchValutes} from "../../api/api";

export const SET_USER = "SET_USER";

export const setUser = (user) => ({type: SET_USER, user});

export const getUser = (form) => {
  console.log('--=>form', form)
  return async (dispatch) => {
    // console.log('=>form', form)
    let user = await fetchUser(form);
    console.log('==>user', user)
    //zdes post rabotaet iz za arg form


    dispatch(setUser(user.data));
  };
};

